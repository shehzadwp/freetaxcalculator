import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { getPageMetadata } from '@/lib/seo/pages';
import { breadcrumbSchema } from '@/lib/seo/schema';

export const metadata = getPageMetadata('privacy');

const breadcrumbs = [{ name: 'Privacy Policy', path: '/privacy' }];

export default function PrivacyPage() {
  return (
    <div className="safe-area">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <HeroSection
        subtitle="PRIVACY"
        title="Privacy Policy"
        description="Learn how we protect your information and respect your privacy."
      />

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="prose dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold prose-a:text-accent hover:prose-a:underline max-w-none">
            <p className="lead text-lg">Last Updated: June 2026</p>

            <h2>1. Introduction</h2>
            <p>
              FreeTaxCalculator.us (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or
              &quot;Company&quot;) respects the privacy of our users (&quot;user&quot; or
              &quot;you&quot;). This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website at
              freetaxcalculator.us.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Information You Provide Directly</h3>
            <ul>
              <li>Contact form submissions (name, email, subject, message)</li>
              <li>Newsletter signup information (email address)</li>
              <li>Any information you voluntarily provide through our website</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <ul>
              <li>IP address and browser type</li>
              <li>Pages visited, time spent on site, and referral source</li>
              <li>Device information and operating system</li>
              <li>Cookies, web beacons, and similar tracking technologies</li>
              <li>Approximate geographic location derived from IP address</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use collected information for:</p>
            <ul>
              <li>Providing, maintaining, and improving our tax calculator services</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Sending newsletters (only with your explicit consent)</li>
              <li>Website analytics and performance optimization</li>
              <li>Detecting and preventing fraud or abuse</li>
              <li>Legal compliance and enforcement of our terms</li>
            </ul>

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience and
              analyze site traffic. Types of cookies we use include:
            </p>
            <ul>
              <li>
                <strong>Essential cookies:</strong> Required for basic site functionality
                and cookie consent preferences.
              </li>
              <li>
                <strong>Analytics cookies:</strong> Google Analytics cookies that help us
                understand how visitors use our site.
              </li>
            </ul>
            <p>
              You can control cookie settings through our cookie consent banner or your
              browser settings. Declining analytics cookies will limit tracking but will
              not affect calculator functionality.
            </p>

            <h2>5. Advertising and Analytics</h2>
            <p>
              FreeTaxCalculator.us does not display paid advertisements. We use Google
              Analytics to measure site performance and understand how visitors use our
              calculators. No advertising cookies are required to use the core calculator
              tools.
            </p>

            <h2>6. Google Analytics</h2>
            <p>
              We use Google Analytics to analyze website traffic and user behavior.
              Google Analytics collects information such as how often users visit our site,
              what pages they visit, and what other sites they used prior to coming to our
              site. We use this information to improve our website. Google Analytics
              collects only the IP address assigned to you on the date you visit our site,
              not your name or other identifying information. We do not combine information
              collected through Google Analytics with personally identifiable information.
            </p>
            <p>
              You can opt out of Google Analytics by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>

            <h2>7. California Privacy Rights (CCPA/CPRA)</h2>
            <p>
              If you are a California resident, you have the following rights under the
              California Consumer Privacy Act (CCPA) and California Privacy Rights Act
              (CPRA):
            </p>
            <ul>
              <li>
                <strong>Right to Know:</strong> Request disclosure of the categories and
                specific pieces of personal information we have collected about you
              </li>
              <li>
                <strong>Right to Delete:</strong> Request deletion of personal information
                we have collected from you
              </li>
              <li>
                <strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of your
                personal information for cross-context behavioral advertising
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We will not discriminate
                against you for exercising your privacy rights
              </li>
            </ul>
            <p>
              To exercise these rights, click &quot;Do Not Sell My Info&quot; on our cookie
              consent banner or email privacy@freetaxcalculator.us. We will respond within
              45 days as required by law.
            </p>

            <h2>8. Your Calculator Data</h2>
            <p>
              <strong>Important:</strong> All tax calculations are performed locally in
              your browser. We do not store, transmit, or collect any of the financial
              information you enter into our calculators. Your salary, income, and tax
              data never leaves your device.
            </p>

            <h2>9. Data Security</h2>
            <p>
              We implement industry-standard security measures including HTTPS encryption,
              secure headers, and access controls to protect your information. However, no
              method of transmission over the internet is 100% secure.
            </p>

            <h2>10. Children&apos;s Privacy</h2>
            <p>
              Our site is not intended for children under 13. We do not knowingly collect
              information from children under 13. If you believe we have collected
              information from a child, contact us immediately.
            </p>

            <h2>11. Third-Party Links</h2>
            <p>
              Our site may contain links to third-party websites. We are not responsible
              for their privacy practices. Please review their privacy policies before
              providing information.
            </p>

            <h2>12. International Users</h2>
            <p>
              Our website is intended for users in the United States. If you access our
              site from outside the US, your information may be transferred to and
              processed in the United States.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              For privacy concerns, data requests, or questions about this policy:
              <br />
              Email: privacy@freetaxcalculator.us
              <br />
              General support: support@freetaxcalculator.us
              <br />
              Address: New York, NY, United States
            </p>

            <h2>14. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. We will post the updated policy on
              this page with a revised &quot;Last Updated&quot; date. Continued use of the
              site after changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
