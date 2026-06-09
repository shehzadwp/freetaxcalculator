# Quick Start Guide

Get the FreeTaxCalculator.us website up and running in 5 minutes.

## 🚀 5-Minute Setup

### Step 1: Install Dependencies (1 min)
```bash
cd "calculator webiste"
npm install
```

### Step 2: Configure Environment (1 min)
Create/update `.env.local`:
```
NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://freetaxcalculator.us
```

### Step 3: Start Development Server (1 min)
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Step 4: Test Calculators (1 min)
- Click "Salary Calculator"
- Enter an amount
- Verify calculations
- Test dark mode toggle

### Step 5: Build for Production (1 min)
```bash
npm run build
npm start
```

## 📁 Project Structure at a Glance

```
calculator webiste/
├── app/                      # Next.js pages
│   ├── layout.tsx           # Main layout
│   ├── page.tsx             # Homepage
│   └── [route]/page.tsx     # Other pages
├── components/              # React components
│   ├── layout/              # Header, Footer
│   ├── calculators/         # Calculator logic
│   ├── ui/                  # UI components
│   └── providers/           # Context providers
├── lib/                     # Utilities & data
│   ├── config/              # Configuration
│   ├── taxData/             # Tax rates & brackets
│   └── utils/               # Helper functions
├── public/                  # Static files
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.js       # Tailwind config
└── .env.local              # Environment variables
```

## 🔧 Common Tasks

### Add a New Page
```bash
# Create directory
mkdir -p app/my-calculator

# Create page file
touch app/my-calculator/page.tsx
```

### Add AdSense Slots
1. Get ad slot ID from AdSense dashboard
2. Update component:
```tsx
<AdSlot slot="YOUR_SLOT_ID" format="auto" responsive={true} />
```

### Update Tax Data
Edit `lib/taxData/`:
- `federal2024.ts` - Federal tax brackets
- `stateTax.ts` - State tax rates

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#your-color',
  accent: '#your-color',
}
```

## 📊 Key Features

✅ **Two Main Calculators**
- Salary Calculator
- After-FreeTaxCalculator.us

✅ **Professional Design**
- Responsive layout
- Dark mode
- Smooth animations

✅ **SEO Optimized**
- Meta tags
- Sitemap ready
- Open Graph

✅ **AdSense Ready**
- Ad slots placed
- Compliant design
- High-performing layout

✅ **TypeScript**
- Type-safe code
- Better IDE support
- Fewer runtime errors

## 🌐 Deployment Options

### Fastest: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Options:
- AWS Amplify
- DigitalOcean
- Netlify
- Docker containers

[See DEPLOYMENT.md for detailed instructions]

## 📖 Documentation

- **README.md** - Project overview
- **SETUP.md** - Complete setup guide
- **DEPLOYMENT.md** - Deployment instructions
- **VERIFICATION.md** - Launch checklist

## 🆘 Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### TypeScript errors?
```bash
npm run build  # Full check
```

### Dependencies issues?
```bash
rm -rf node_modules package-lock.json
npm install
```

## 💡 Tips

1. **Dark Mode**: Works automatically based on system preference
2. **Mobile Responsive**: Test with Chrome DevTools (F12 → Mobile)
3. **Performance**: Run `npm run build` to check production build
4. **Security**: Keep `.env.local` in `.gitignore`

## 📞 Need Help?

- Check documentation files
- Review component code comments
- Check browser console for errors
- Contact support@freetaxcalculator.us

## ✨ What's Included

✓ 2 Fully-functional tax calculators
✓ 8+ Page templates
✓ Professional styling with Tailwind CSS
✓ Dark mode support
✓ Mobile responsive
✓ SEO metadata
✓ AdSense integration
✓ Newsletter signup
✓ Contact form
✓ Complete documentation

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Update `.env.local`
3. ✅ Run `npm run dev`
4. ✅ Customize branding
5. ✅ Get AdSense ID
6. ✅ Deploy to production

---

**You're all set! Happy coding! 🚀**
