import React from 'react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';

export const TermsOfServicePage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Terms of Service | MedicalEquipment.Africa"
        description="Terms governing your use of MedicalEquipment.Africa, the B2B directory and marketplace for verified refurbished medical equipment in Africa."
        canonical="/terms-of-service"
      />

      <div className="bg-clinical min-h-screen py-20">
        <div className="max-w-3xl mx-auto px-4">

          {/* Header */}
          <div className="mb-12">
            <p className="text-teal font-bold text-xs uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">Terms of Service</h1>
            <p className="text-navy/50 text-sm">Last updated: 24 March 2026</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl border border-navy/5 p-8 md:p-12 space-y-10 text-navy/80 leading-relaxed">

            <section>
              <h2 className="text-xl font-black text-navy mb-3">1. About These Terms</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of the MedicalEquipment.Africa
                website and platform ("Platform"). By accessing or using our Platform, you agree to be bound by
                these Terms. If you do not agree, please do not use our Platform.
              </p>
              <p className="mt-3">
                MedicalEquipment.Africa is a B2B directory and introduction service. We connect hospital
                procurement professionals and healthcare facilities with verified suppliers of refurbished
                medical equipment. We are <span className="font-semibold">not</span> a seller, distributor,
                or manufacturer of medical equipment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">2. Eligibility</h2>
              <p>
                Our Platform is intended for use by healthcare professionals, hospital administrators, procurement
                officers, and authorised representatives of medical facilities. By submitting an enquiry, you
                confirm that you are acting in a professional capacity on behalf of a registered healthcare
                organisation, and that you are authorised to make or initiate procurement decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">3. Nature of Our Service</h2>
              <p className="mb-4">MedicalEquipment.Africa operates as a <span className="font-semibold">directory and introduction platform</span>. Specifically:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We list verified suppliers of refurbished medical equipment for informational purposes</li>
                <li>We facilitate introductions between buyers (healthcare facilities) and suppliers</li>
                <li>We provide educational content, guides, and compliance information to assist procurement decisions</li>
                <li>We do not hold inventory, take title to equipment, process payments, or act as an agent for any transaction</li>
              </ul>
              <p className="mt-4">
                Any contract for the sale or supply of medical equipment is entered into directly between
                the buyer and the supplier. MedicalEquipment.Africa is not a party to any such contract.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">4. Supplier Listings & Verification</h2>
              <p>
                We apply a verification process to suppliers listed on our Platform, including review of
                certifications (ISO 13485, CE Mark, FDA registration), facility inspections, and reference checks.
                However, we make <span className="font-semibold">no warranty or guarantee</span> that any supplier
                listing is complete, accurate, or up to date at all times.
              </p>
              <p className="mt-3">
                Certifications and accreditations can lapse or change. You are responsible for conducting your
                own due diligence on any supplier before entering into a procurement agreement, including verifying
                current certification status with the relevant regulatory body.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">5. Regulatory Compliance</h2>
              <p>
                The compliance information, country guides, and regulatory summaries published on our Platform
                are provided for <span className="font-semibold">general informational purposes only</span> and
                do not constitute legal or regulatory advice. Regulations governing the import and use of medical
                equipment vary by country and change over time.
              </p>
              <p className="mt-3">
                You are solely responsible for ensuring that any equipment you procure complies with all
                applicable laws, regulations, and standards in your country, including but not limited to
                PPB (Kenya), NAFDAC (Nigeria), SAHPRA (South Africa), Ghana FDA, NDA (Uganda), and Rwanda FDA requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">6. User Obligations</h2>
              <p className="mb-4">When using our Platform, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information when submitting enquiries</li>
                <li>Use the Platform only for lawful B2B procurement purposes</li>
                <li>Not submit false, misleading, or fraudulent enquiries</li>
                <li>Not attempt to scrape, copy, or reproduce our supplier database or content without written permission</li>
                <li>Not use the Platform in any way that could damage our reputation or disrupt our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">7. Intellectual Property</h2>
              <p>
                All content on this Platform, including text, graphics, logos, icons, SVG illustrations,
                blog articles, guides, and compiled data, is the property of MedicalEquipment.Africa or its
                content suppliers and is protected by applicable intellectual property laws.
              </p>
              <p className="mt-3">
                You may access and print content from this Platform for your own internal procurement use only.
                You may not reproduce, redistribute, republish, or commercially exploit any content without
                our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">8. Disclaimers & Limitation of Liability</h2>
              <p className="mb-3">
                The Platform and all content are provided <span className="font-semibold">"as is"</span> without
                warranties of any kind, express or implied. We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Platform will be uninterrupted, error-free, or free from viruses</li>
                <li>Any information on the Platform is complete, accurate, or current</li>
                <li>Any supplier will fulfil their obligations to you</li>
              </ul>
              <p className="mt-4">
                To the fullest extent permitted by law, MedicalEquipment.Africa shall not be liable for any
                direct, indirect, incidental, consequential, or punitive damages arising from your use of the
                Platform or any transaction entered into based on introductions made through it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">9. Third-Party Links</h2>
              <p>
                Our Platform contains links to third-party websites including supplier sites, regulatory bodies,
                and hospital pages. These links are provided for convenience only. We have no control over
                third-party content and accept no responsibility for it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">10. Changes to the Platform & Terms</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of the Platform at any time
                without notice. We may also update these Terms from time to time. The "Last updated" date above
                reflects the most recent revision. Your continued use of the Platform after any changes
                constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">11. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of England and Wales.
                Any disputes arising from these Terms or your use of the Platform shall be subject to the
                exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-navy mb-3">12. Contact</h2>
              <p>For any questions regarding these Terms, please contact us:</p>
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
