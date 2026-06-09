# Setup & Configuration Guide

Complete setup instructions for the FreeTaxCalculator.us website.

## 🎯 Pre-Launch Checklist

### 1. Environment Setup

#### Create `.env.local` file:
```bash
# Google AdSense (Required for monetization)
NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-xxxxxxxxxxxxxxxx

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://freetaxcalculator.us
NEXT_PUBLIC_SITE_NAME=FreeTaxCalculator.us

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (Optional - for newsletter)
MAILCHIMP_API_KEY=your-mailchimp-api-key
MAILCHIMP_LIST_ID=your-mailchimp-list-id
```

### 2. AdSense Setup

1. **Sign Up for Google AdSense**
   - Visit [Google AdSense](https://www.google.com/adsense/)
   - Sign in with Google account
   - Add your website
   - Wait for approval (typically 24-48 hours)

2. **Add Publisher ID**
   - Copy your Publisher ID (e.g., `ca-pub-1234567890`)
   - Add to `.env.local` as `NEXT_PUBLIC_GOOGLE_ADSENSE_ID`
   - Update ad slot IDs in components:
     - `components/ui/AdSlot.tsx`
     - Replace `1234567890` with your actual ad slot IDs

3. **Optimize Ad Placement**
   - Review AdSense guidelines
   - Monitor earnings dashboard
   - Track which placements perform best
   - Adjust placement over time

### 3. SEO Configuration

#### Update Domain
- Edit `lib/config/siteConfig.ts`
- Update `domain` to your actual domain
- Update social media links

#### Update Analytics
- Get Google Analytics ID from Google Analytics console
- Add `NEXT_PUBLIC_GA_ID` to `.env.local`

#### Submit Sitemap
1. Generate sitemap: `npm run build` (Next.js will generate)
2. Go to [Google Search Console](https://search.google.com/search-console)
3. Submit sitemap: `https://yourdomain.com/sitemap.xml`
4. Verify domain ownership

### 4. Email Service Setup

#### For Newsletter (Optional)

**Option A: Mailchimp**
1. Sign up at [Mailchimp](https://mailchimp.com)
2. Create audience list
3. Get API key and List ID
4. Add to `.env.local`
5. Update `app/api/newsletter/route.ts` with Mailchimp logic

**Option B: SendGrid**
1. Sign up at [SendGrid](https://sendgrid.com)
2. Create API key
3. Update newsletter API endpoint

### 5. Domain Configuration

#### DNS Setup
1. Purchase domain from registrar
2. Update nameservers to your hosting provider
3. Add DNS records if required
4. Wait for DNS propagation (up to 48 hours)

#### SSL Certificate
- Most hosting providers provide free SSL
- Ensure HTTPS is enabled
- Check certificate in browser

### 6. Social Media Integration

#### Update Social Links
- Edit `components/layout/Footer.tsx`
- Update social media URLs:
  - Twitter/X
  - Facebook
  - LinkedIn
  - YouTube
  - Pinterest
  - Reddit

#### Create Social Media Profiles
- Set up business accounts on each platform
- Add profile pictures and descriptions
- Link back to your site

### 7. Tax Data Updates

#### Annual Maintenance
- Update tax brackets in `lib/taxData/federal2024.ts`
- Update state tax rates in `lib/taxData/stateTax.ts`
- Update standard deductions
- Update FICA rates

#### Quarterly Review
- Check IRS announcements
- Review state tax changes
- Update if necessary

### 8. Performance Optimization

#### Core Web Vitals
- Use [PageSpeed Insights](https://pagespeed.web.dev)
- Monitor Core Web Vitals
- Optimize images
- Enable compression

#### Testing Checklist
- [ ] Homepage loads < 2.5s (LCP)
- [ ] Interactive in < 100ms (FID)
- [ ] Layout shift < 0.1 (CLS)
- [ ] Mobile-friendly
- [ ] Dark mode works
- [ ] AdSense loads properly

### 9. Security Setup

#### HTTPS
- Verify HTTPS is enabled
- Redirect HTTP to HTTPS
- Check certificate validity

#### Headers
- Content-Security-Policy
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

#### Environment Variables
- Never commit `.env.local`
- Use `.env.local` for secrets
- Use `.env.example` for template

### 10. Content & Legal

#### Required Pages
- [ ] Privacy Policy - Complete and accurate
- [ ] Terms of Service - Review and update
- [ ] Contact page - Working form

#### Disclaimers
- Add tax disclaimer on calculator pages
- Add disclaimer in terms of service
- Make clear calculations are estimates only

## 🚀 Launch Steps

### Pre-Launch Week
1. Final testing of all calculators
2. Test on mobile devices
3. Test dark mode
4. Test AdSense loading
5. Run SEO audit

### Launch Day
1. Deploy to production
2. Monitor uptime
3. Check Analytics
4. Monitor error rates
5. Test AdSense

### Post-Launch
1. Submit sitemap to Search Engines
2. Announce on social media
3. Monitor performance
4. Fix any reported issues
5. Start content marketing

## 📊 Monitoring

### Daily
- Check site uptime
- Monitor error logs
- Review analytics traffic

### Weekly
- Check AdSense earnings
- Review user feedback
- Monitor page speed
- Check for security alerts

### Monthly
- Comprehensive performance review
- Tax data accuracy check
- Content review and updates
- Backlink analysis
- Competitive analysis

## 💡 Growth Strategies

### Content Marketing
- Write weekly blog posts
- Create YouTube tutorials
- Share on social media
- Guest posting on tax blogs

### SEO Optimization
- Optimize existing content
- Build internal links
- Create cornerstone content
- Monitor keyword rankings

### User Engagement
- Improve UI/UX
- Add more calculators
- Expand state coverage
- Add educational content

### Monetization
- Optimize ad placement
- A/B test ad sizes
- Consider affiliate programs
- Add premium features

## 🔧 Maintenance Schedule

### Monthly
- [ ] Update tax data if needed
- [ ] Review and respond to support emails
- [ ] Check for broken links
- [ ] Update blog content

### Quarterly
- [ ] Run security audit
- [ ] Update dependencies
- [ ] Review analytics
- [ ] Update content

### Annually
- [ ] Major tax law updates
- [ ] Major feature releases
- [ ] Complete site audit
- [ ] Plan for next year

## 📞 Troubleshooting

### Common Issues

**AdSense not showing**
- Verify ad slot IDs
- Check AdSense account approval
- Clear browser cache
- Check JavaScript is enabled

**Slow performance**
- Check Core Web Vitals
- Review database queries
- Enable caching
- Use CDN

**High bounce rate**
- Improve content
- Speed up site
- Better call-to-action
- Test different layouts

**Low ad earnings**
- Increase traffic
- Improve ad placement
- A/B test ad sizes
- Consider multiple ad networks

---

**Need help? Contact support@freetaxcalculator.us**
