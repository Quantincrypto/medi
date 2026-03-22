import React from 'react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';
import { ShieldCheck, Clock, Award, CheckCircle } from 'lucide-react';

export const RequestPricingPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Request Verified Medical Equipment Pricing | Data Room Access | 48-Hour Response"
        description="Request verified pricing and Data Room access for refurbished CT scanners, MRI machines and ultrasound systems. Tube logs, burn-in reports and regulatory documentation included. 48-hour response."
        canonical="/request-verified-pricing-medical-equipment"
        schema={[
          { "@context": "https://schema.org", "@type": "ContactPage", "name": "Request Verified Medical Equipment Pricing", "description": "Request Data Room access and verified pricing for refurbished medical equipment in Africa", "url": "https://medicalequipment.africa/request-verified-pricing-medical-equipment" },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" }, { "@type": "ListItem", "position": 2, "name": "Request Pricing", "item": "https://medicalequipment.africa/request-verified-pricing-medical-equipment" }] }
        ]}
      />

      <div className="bg-clinical py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Clock className="w-4 h-4" />
                48-Hour Response Guarantee
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tight text-navy leading-tight">
                Request Your Verified <span className="text-teal">Data Room</span> & Pricing
              </h1>
              <p className="text-lg text-navy/60 mb-12">
                Get access to detailed refurbishment reports, technical specifications, service history, and final B2B pricing for your selected equipment.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Verified Documentation</h3>
                    <p className="text-sm text-navy/50">Full access to ISO 13485 certificates and OEM refurbishment logs.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Direct Supplier Pricing</h3>
                    <p className="text-sm text-navy/50">Transparent B2B pricing directly from certified global suppliers.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Compliance Guidance</h3>
                    <p className="text-sm text-navy/50">Expert advice on local import regulations (PPB, NAFDAC, SAHPRA).</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-navy text-white rounded-2xl">
                <p className="text-sm font-medium italic opacity-70">
                  "The data room provided by MedicalEquipment.Africa was instrumental in our board's decision to procure a refurbished 1.5T MRI. The transparency was world-class."
                </p>
                <div className="mt-4 font-bold text-teal">— Dr. K. Omari, Nairobi Diagnostic Centre</div>
              </div>
            </div>

            <div id="pricing-form">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
