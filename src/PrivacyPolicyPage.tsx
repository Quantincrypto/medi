import React from 'react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | MedicalEquipment.Africa"
        description="How MedicalEquipment.Africa collects, uses and protects your personal data when you use our B2B medical equipment marketplace."
        canonical="/privacy-policy"
      />

      <div className="bg-clinical min-h-screen py-20">
        <div className="max-w-3xl mx-auto px-4">

          {/* Header */}
          <div className="mb-12">
            <p className="text-teal font-bold text-xs uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">Privacy Policy</h1>
            <p className="text-navy/50 text-sm">Last updated: 24 March 2026</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl border border-navy/5 p-8 md:p-12 space-y-10 text-navy/80 leading-relaxed">

            <section>
              <h2 className="text-xl font-black text-navy mb-3">1. Who We Are</h2>
              <p>
                MedicalEquipment.Africa ("we", "us", "our") is a B2B online directory and marketplace connecting
                hospital procurement professionals and healthcare facilities across Africa with verified suppliers
                of ISO 13485 certified refurbished medical equipment. Our website is located at{' '}
                <span className="text-teal font-semibold">medicalequipment.africa</span>.
              </p>
              <p className="mt-3">
                We are committed to protecting your personal information and being transparent about how we use it.
                This Privacy Policy explains what data we collect, why we collect it, and your rights in relation to it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">2. What Data We Collect</h2>
              <p className="mb-4">When you submit an enquiry or request pricing through our platform, we collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">Full name</span>, to address you correctly</li>
                <li><span className="font-semibold">Hospital or diagnostic centre name</span>, to understand your organisation</li>
                <li><span className="font-semibold">Country</span>, to match you with compliant suppliers for your jurisdiction</li>
                <li><span className="font-semibold">Equipment type of interest</span>, to route your enquiry to the correct supplier</li>
                <li><span className="font-semibold">WhatsApp number</span>, to contact you with pricing and supplier information</li>
              </ul>
              <p className="mt-4">
                We also collect standard web analytics data (pages visited, browser type, referring URL) through
                server logs and analytics tools to improve our service. This data is not linked to your identity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">3. How We Use Your Data</h2>
              <p className="mb-4">We use the information you provide to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your pricing and equipment enquiries within 48 hours</li>
                <li>Connect you with verified suppliers whose certifications match your country's regulatory requirements</li>
                <li>Send you relevant market updates, guides, and equipment availability notices (only where you have opted in)</li>
                <li>Improve our directory, content, and user experience</li>
              </ul>
              <p className="mt-4">
                We do <span className="font-semibold">not</span> use your data for automated decision-making or profiling.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">4. Sharing Your Data</h2>
              <p className="mb-4">
                Your enquiry data is shared only with the verified suppliers on our platform who are relevant to
                your specific request. Suppliers are contractually bound to use your information solely to respond
                to your enquiry and not for independent marketing purposes.
              </p>
              <p>
                We do not sell, rent, or trade your personal data to any third party. We do not share your data
                with advertisers. We may share anonymised, aggregated data (e.g., "30% of enquiries are from Kenya")
                for business reporting purposes, and this cannot be used to identify you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">5. How Long We Keep Your Data</h2>
              <p>
                We retain your enquiry data for up to <span className="font-semibold">24 months</span> from the
                date of submission, or until you request deletion, whichever comes sooner. This allows us to
                follow up on multi-stage procurement processes which can take several months in the medical sector.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">6. Data Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect your data from unauthorised
                access, loss, or disclosure. Our website is served over HTTPS. Enquiry data is stored in access-controlled
                systems. No method of electronic transmission or storage is 100% secure, however, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">7. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">Access</span> the personal data we hold about you</li>
                <li><span className="font-semibold">Correct</span> any inaccurate data</li>
                <li><span className="font-semibold">Delete</span> your data ("right to be forgotten")</li>
                <li><span className="font-semibold">Withdraw consent</span> to marketing communications at any time</li>
                <li><span className="font-semibold">Object</span> to processing of your data in certain circumstances</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us via WhatsApp at{' '}
                <span className="text-teal font-semibold">+44 7777 100397</span> or use the contact form on our website.
                We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">8. Cookies</h2>
              <p>
                Our website may use essential cookies to ensure basic functionality. We do not currently use
                advertising or tracking cookies. If this changes, we will update this policy and request your
                consent where required.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">9. Third-Party Links</h2>
              <p>
                Our website contains links to external sites (supplier websites, regulatory body pages, hospital
                websites). We are not responsible for the privacy practices of those sites and encourage you to
                review their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The "Last updated" date at the top of this
                page will reflect any changes. Continued use of our platform after changes are posted constitutes
                acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">11. Contact Us</h2>
              <p>
                For any privacy-related queries or to exercise your rights, please contact us:
              </p>
              <div className="mt-4 p-4 bg-clinical rounded-xl border border-navy/5">
                <p className="font-bold text-navy">MedicalEquipment.Africa</p>
                <p className="text-navy/60 text-sm mt-1">WhatsApp: +44 7777 100397</p>
                <p className="text-navy/60 text-sm">Website: medicalequipment.africa</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
};
