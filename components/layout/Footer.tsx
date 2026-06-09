import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Calculators: [
      { label: 'Salary Calculator', href: '/tools/salary-calculator' },
      { label: 'After-Tax Calculator', href: '/tools/after-tax' },
      { label: 'All Calculators', href: '/tools' },
    ],
    Resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'State Taxes', href: '/state-taxes' },
      { label: 'Resources', href: '/resources' },
      { label: 'Widgets', href: '/widgets' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    {
      label: 'Twitter',
      href: 'https://twitter.com/freetaxcalculator',
      icon: Twitter,
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/freetaxcalculator',
      icon: Facebook,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/freetaxcalculator',
      icon: Linkedin,
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com/freetaxcalculator',
      icon: Youtube,
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
      {/* Main Footer Content */}
      <div className="container-max container-px py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">
              FreeTaxCalculator.us
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Accurate, fast, and free tax calculators for all Americans.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} FreeTaxCalculator.us. All rights reserved. | Made with{' '}
            <span className="text-primary">❤️</span> in the USA
          </p>
        </div>
      </div>
    </footer>
  );
}
