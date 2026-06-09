import HeroSection from '@/components/ui/HeroSection';
import ContactForm from '@/components/ui/ContactForm';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { getPageMetadata } from '@/lib/seo/pages';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = getPageMetadata('contact');

const breadcrumbs = [{ name: 'Contact Us', path: '/contact-us' }];

export default function ContactPage() {
  return (
    <div className="safe-area">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <HeroSection
        subtitle="GET IN TOUCH"
        title="Contact Our Support Team"
        description="Have questions? We'd love to hear from you. Contact us and we'll respond as soon as possible."
      />

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <Breadcrumbs items={breadcrumbs} />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'support@freetaxcalculator.us',
                description: 'We reply within 24 hours',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+1 (555) 123-4567',
                description: 'Mon-Fri, 9AM-5PM EST',
              },
              {
                icon: MapPin,
                title: 'Office',
                content: 'New York, NY',
                description: 'United States',
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-slate-800 rounded-lg text-center"
                >
                  <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-accent font-semibold mb-1">{contact.content}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {contact.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Use this form to ask about calculator accuracy, feature requests,
                advertising inquiries, or privacy and CCPA questions. Our support team
                reviews messages daily and responds within one business day.
              </p>
              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container-max container-px max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            About Our Support
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              FreeTaxCalculator.us is committed to providing free, accurate tax
              calculation tools for all Americans. Our support team handles questions
              about calculator accuracy, feature requests, bug reports, advertising
              inquiries, and privacy concerns. We aim to respond to every message
              within one business day.
            </p>
            <p>
              We want every user to feel confident using our calculators. If you have
              feedback about how the tools work, need help interpreting your results,
              or want to suggest a new feature, contact us and we will follow up
              promptly.
            </p>
            <p>
              For privacy-related requests from California residents exercising CCPA
              rights, please email privacy@freetaxcalculator.us with your request.
              For legal matters, contact legal@freetaxcalculator.us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
