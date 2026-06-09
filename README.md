# FreeTaxCalculator.us Website

A professional, SEO-optimized, and AdSense-compliant USA tax calculator website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **FreeTaxCalculator.us**
  - Salary Calculator
  - After-Tax Income Calculator
  - Tax Brackets by State
  - Payroll Calculator
  - And more!

- **Professional Design**
  - Clean, modern UI with blue/white color scheme
  - Fully responsive (mobile, tablet, desktop)
  - Dark mode support
  - Smooth animations and transitions
  - Sticky header with scroll effects

- **SEO Optimized**
  - Meta tags and structured data
  - Dynamic sitemaps
  - Open Graph support
  - Twitter Card integration
  - Mobile-friendly design
  - Fast loading times

- **AdSense Compliant**
  - Proper ad placements
  - No intrusive ads or pop-ups
  - Clean content hierarchy
  - AdSense-friendly layout

- **Performance**
  - Optimized for Core Web Vitals
  - Image optimization
  - Code splitting
  - CSS optimization
  - Fast server response times

## 📋 Project Structure

```
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles
│   ├── salary-calculator/page.tsx
│   ├── after-tax/page.tsx
│   ├── tools/page.tsx
│   ├── blog/page.tsx
│   ├── contact-us/page.tsx
│   ├── widgets/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   ├── calculators/
│   │   ├── SalaryCalculator.tsx
│   │   └── AfterFreeTaxCalculator.us.tsx
│   ├── ui/
│   │   ├── AdSlot.tsx
│   │   ├── HeroSection.tsx
│   │   ├── CalculatorCard.tsx
│   │   └── NewsletterSignup.tsx
│   └── providers/
│       └── ThemeProvider.tsx
├── lib/
│   ├── taxData/
│   │   ├── federal2024.ts
│   │   └── stateTax.ts
│   └── utils/
│       └── calculators.ts
├── public/
│   ├── favicon.ico
│   └── og-image.png
└── configuration files
    ├── package.json
    ├── tsconfig.json
    ├── next.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    └── .env.local
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Lucide Icons
- **Dark Mode**: next-themes
- **SEO**: Next.js built-in with next-sitemap
- **Monetization**: Google AdSense

## ⚡ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   ```bash
   # Copy .env.local and update with your values
   NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-xxxxxxxxxxxxxxxx
   NEXT_PUBLIC_SITE_URL=https://freetaxcalculator.us
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📱 Pages

- **/** - Homepage with calculator overview
- **/salary-calculator** - Salary to take-home calculator
- **/after-tax** - After-tax income breakdown
- **/tools** - All calculators catalog
- **/blog** - Tax tips and articles
- **/contact-us** - Contact form and support
- **/widgets** - Embeddable calculator widgets
- **/privacy** - Privacy policy
- **/terms** - Terms of service

## 🎨 Design System

### Colors
- **Primary**: #1e3a8a (Deep Blue)
- **Accent**: #3b82f6 (Bright Blue)
- **Background**: #ffffff (Light) / #0f172a (Dark)

### Typography
- **Font**: System sans-serif stack
- **Headlines**: Bold, 24-60px
- **Body**: Regular, 14-18px

### Components
All components are responsive and include:
- Light/Dark mode support
- Accessibility features (ARIA labels)
- Smooth interactions
- Mobile-optimized

## 💰 Monetization

### Google AdSense
- Ad slots placed throughout the site
- Following AdSense policies:
  - No pop-ups or interstitials
  - Clear content hierarchy
  - Proper spacing between ads and content
  - Mobile-responsive ads

### Ad Slot IDs
Update these with your actual AdSense slot IDs:
- Homepage: `1234567890`
- Tools page: `1234567897`
- Blog page: `1234567899`
- Contact page: `1234567901`
- And more...

## 🔍 SEO Optimization

- ✅ Meta tags and descriptions
- ✅ Open Graph images
- ✅ Structured data
- ✅ Sitemap generation
- ✅ Mobile responsive
- ✅ Fast loading (Core Web Vitals optimized)
- ✅ Internal linking strategy
- ✅ Schema markup ready

## 📊 Tax Data

All tax data is based on 2024 IRS guidelines:

- Federal tax brackets
- Standard deductions
- FICA rates (Social Security & Medicare)
- State tax rates (all 50 states + DC)
- Tax-free states

Update tax data in:
- `lib/taxData/federal2024.ts`
- `lib/taxData/stateTax.ts`

## 🎯 Performance

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- First Paint: < 1.5s

Optimizations:
- Code splitting
- Image optimization
- CSS optimization
- Lazy loading
- Minification

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, email support@freetaxcalculator.us or visit the contact page.

## 🔐 Disclaimer

This website provides tax estimates for informational purposes only. It is not professional tax advice. Users should consult with a qualified tax professional for accurate tax planning and preparation.

---

**Built with ❤️ for accurate tax calculations**
