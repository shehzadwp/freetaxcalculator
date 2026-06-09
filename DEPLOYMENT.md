# Deployment Guide

This guide covers deploying the FreeTaxCalculator.us website to various platforms.

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel is the creator of Next.js and provides the best experience for Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/usa-tax-calculator.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select "Next.js" as the framework
   - Click "Deploy"

3. **Add Environment Variables**
   - In Vercel dashboard, go to Settings > Environment Variables
   - Add your variables:
     ```
     NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-xxxxxxxxxxxxxxxx
     NEXT_PUBLIC_SITE_URL=https://yourdomain.com
     ```
   - Redeploy

4. **Add Custom Domain**
   - Go to Settings > Domains
   - Add your domain
   - Update DNS records as instructed

### 2. AWS Amplify

#### Steps:

1. **Connect to Git**
   - Go to AWS Amplify Console
   - Click "New App" > "Host Web App"
   - Connect your GitHub repository

2. **Configure Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Set Environment Variables**
   - In Amplify Console: App Settings > Environment Variables
   - Add your variables

### 3. DigitalOcean App Platform

#### Steps:

1. **Create App from GitHub**
   - Connect your GitHub account
   - Select the repository
   - Choose "Node.js" runtime

2. **Configure Environment**
   ```yaml
   envs:
     - key: NEXT_PUBLIC_GOOGLE_ADSENSE_ID
       value: ca-pub-xxxxxxxxxxxxxxxx
   ```

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

### 4. Docker (Any Cloud Provider)

#### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000
CMD ["npm", "start"]
```

#### Deploy to Docker Hub

```bash
docker build -t yourusername/usa-tax-calculator .
docker push yourusername/usa-tax-calculator
```

## 📊 Post-Deployment

### 1. SEO Setup

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify domain ownership
- [ ] Set up site monitoring

### 2. Google AdSense

- [ ] Sign up for Google AdSense
- [ ] Add your site domain
- [ ] Get your Publisher ID
- [ ] Update `NEXT_PUBLIC_GOOGLE_ADSENSE_ID` in environment variables
- [ ] Add AdSense script to site
- [ ] Wait for approval (typically 24-48 hours)

### 3. Analytics

Add Google Analytics ID to your environment:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Update the tracking ID in `app/layout.tsx`.

### 4. Performance Monitoring

- Set up Vercel Web Analytics (included with Vercel)
- Monitor Core Web Vitals
- Set up alerts for performance degradation

### 5. Uptime Monitoring

- Use Uptime Robot or similar service
- Monitor critical pages
- Set up alerts

## 🔒 Security Checklist

- [ ] Enable HTTPS (automatic with most platforms)
- [ ] Set security headers
- [ ] Configure CORS properly
- [ ] Rate limit API endpoints
- [ ] Sanitize user inputs
- [ ] Keep dependencies updated
- [ ] Set up automated security scanning

## 📈 Scaling

### As Traffic Grows:

1. **Enable Caching**
   - Vercel: Automatic CDN caching
   - CloudFlare: Add CDN layer

2. **Database (if needed)**
   - Use managed services (MongoDB Atlas, Supabase, etc.)
   - Set up proper indexing
   - Monitor query performance

3. **Email Service**
   - Upgrade to production email service
   - Implement rate limiting
   - Set up bounce handling

4. **Ad Network**
   - Monitor AdSense performance
   - Consider adding additional ad networks
   - Optimize ad placement

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear build cache and rebuild
npm run build
```

### Environment Variables Not Working
- Check variable names (must start with `NEXT_PUBLIC_` for client-side)
- Redeploy after adding variables
- Check environment variable values are set correctly

### Slow Performance
- Check Core Web Vitals in PageSpeed Insights
- Enable image optimization
- Review bundle size
- Check for database bottlenecks

### AdSense Not Showing
- Verify AdSense script is loaded
- Check ad slot IDs are correct
- Wait for AdSense approval
- Check browser console for errors

## 📞 Support

For deployment issues:
1. Check framework documentation
2. Review platform-specific docs
3. Contact support team

---

**Happy deploying! 🚀**
