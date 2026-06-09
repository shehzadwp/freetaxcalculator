import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { getPageMetadata } from '@/lib/seo/pages';
import { breadcrumbSchema } from '@/lib/seo/schema';

export const metadata = getPageMetadata('terms');

const breadcrumbs = [{ name: 'Terms of Service', path: '/terms' }];

export default function TermsPage() {
  return (
    <div className="safe-area">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <HeroSection
        subtitle="LEGAL"
        title="Terms of Service"
        description="Please read these terms carefully before using our service."
      />

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="prose dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold prose-a:text-accent hover:prose-a:underline max-w-none">
            <p className="lead text-lg">Last Updated: June 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using FreeTaxCalculator.us, you accept and agree to be bound
              by the terms and provisions of this agreement.
            </p>

            <h2>2. Disclaimer</h2>
            <p>
              <strong>Important:</strong> The calculations provided by our website are
              estimates for educational and informational purposes only. They are not
              professional tax advice. FreeTaxCalculator.us makes no representations or
              warranties regarding the accuracy or completeness of calculations.
            </p>
            <p>
              Your actual tax liability may vary based on your specific circumstances,
              deductions, credits, and other factors. You should consult with a qualified
              tax professional or CPA for accurate tax planning and advice.
            </p>

            <h2>3. Limitations of Liability</h2>
            <p>
              FreeTaxCalculator.us shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your use of or
              inability to use the website or calculators.
            </p>

            <h2>4. Accuracy of Information</h2>
            <p>
              While we strive to provide accurate information, we make no guarantees
              regarding the accuracy of tax rates, tax brackets, or other information on
              our site. Tax laws change frequently, and our information may not always
              reflect the latest changes.
            </p>

            <h2>5. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on
              FreeTaxCalculator.us for personal, non-commercial transitory viewing only.
            </p>

            <h2>6. Prohibited Conduct</h2>
            <ul>
              <li>For any unlawful purpose or illegal activity</li>
              <li>To harass, abuse, threaten, or intimidate</li>
              <li>To upload viruses or malicious code</li>
              <li>To engage in any form of automated data collection</li>
              <li>To circumvent security measures</li>
              <li>To interfere with the website&apos;s operation</li>
            </ul>

            <h2>7. Intellectual Property Rights</h2>
            <p>
              The materials on FreeTaxCalculator.us are the property of FreeTaxCalculator.us
              or its content suppliers and are protected by copyright laws.
            </p>

            <h2>8. Third-Party Content and Analytics</h2>
            <p>
              We may use third-party analytics services and provide links to third-party
              websites. We are not responsible for the content, accuracy, or practices of
              these third parties.
            </p>

            <h2>9. Modifications to Service</h2>
            <p>
              FreeTaxCalculator.us may modify or discontinue the service at any time, with
              or without notice.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These terms are governed by the laws of the United States and the State of
              New York.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              Questions about these terms: legal@freetaxcalculator.us
              <br />
              Address: New York, NY, United States
            </p>
            <p>
              For questions related to cookie consent, privacy policy compliance, or
              analytics, please reach out to support@freetaxcalculator.us. We are
              committed to protecting visitor privacy and data security.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-lg border-l-4 border-yellow-500 mt-8">
              <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mb-2">
                Tax Professional Consultation Required
              </h3>
              <p className="text-yellow-800 dark:text-yellow-200">
                These calculators should not be relied upon for actual tax filing, tax
                planning, or any critical financial decisions. Always consult with a
                licensed tax professional or CPA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
