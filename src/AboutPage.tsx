import React from 'react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';
import { ShieldCheck, Award, Globe, CheckCircle } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="About MedicalEquipment.Africa | UK-Based Verified B2B Directory | ISO 13485 Vetted"
        description="MedicalEquipment.Africa is a UK-based verified B2B directory connecting African hospitals with ISO 13485 certified refurbished medical equipment suppliers. Learn about our vetting process."
        canonical="/about-medicalequipment-africa"
        schema={[
          { "@context": "https://schema.org", "@type": "AboutPage", "name": "About MedicalEquipment.Africa", "description": "UK-based verified B2B directory for ISO 13485 certified refurbished medical equipment in Africa", "url": "https://medicalequipment.africa/about-medicalequipment-africa", "publisher": { "@type": "Organization", "@id": "https://medicalequipment.africa/#organization", "name": "MedicalEquipment.Africa", "url": "https://medicalequipment.africa" } },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" }, { "@type": "ListItem", "position": 2, "name": "About", "item": "https://medicalequipment.africa/about-medicalequipment-africa" }] }
        ]}
      />

      <div className="bg-navy text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-6xl font-black mb-6 uppercase tracking-tight">Our Mission</h1>
          <p className="text-xl text-teal font-bold max-w-3xl mx-auto leading-relaxed">
            To bridge the diagnostic gap in Africa by providing a transparent, verified, and secure platform for procuring world-class refurbished medical equipment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight text-navy">The Problem We're Solving</h2>
            <div className="space-y-6 text-navy/70 leading-relaxed">
              <p>
                Across Africa, hospitals and diagnostic centres face a massive challenge: the high cost of new medical equipment often makes life-saving diagnostics inaccessible to the majority of the population.
              </p>
              <p>
                While refurbished equipment offers a viable solution, the market is often fragmented, opaque, and risky. Healthcare providers struggle to find reliable suppliers, verify refurbishment standards, and navigate complex import regulations.
              </p>
              <p className="font-bold text-navy">
                MedicalEquipment.Africa was built to solve this. We are the trust layer between African healthcare and global certified suppliers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-clinical p-8 rounded-2xl border border-navy/5 text-center">
              <div className="text-4xl font-black text-teal mb-2">100%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-navy/40">Verified Suppliers</div>
            </div>
            <div className="bg-clinical p-8 rounded-2xl border border-navy/5 text-center">
              <div className="text-4xl font-black text-teal mb-2">ISO</div>
              <div className="text-xs font-bold uppercase tracking-widest text-navy/40">13485 Standards</div>
            </div>
            <div className="bg-clinical p-8 rounded-2xl border border-navy/5 text-center">
              <div className="text-4xl font-black text-teal mb-2">48h</div>
              <div className="text-xs font-bold uppercase tracking-widest text-navy/40">Response Time</div>
            </div>
            <div className="bg-clinical p-8 rounded-2xl border border-navy/5 text-center">
              <div className="text-4xl font-black text-teal mb-2">6</div>
              <div className="text-xs font-bold uppercase tracking-widest text-navy/40">Core Markets</div>
            </div>
          </div>
        </div>

        <div className="bg-navy text-white rounded-3xl p-12 lg:p-20 mb-32">
          <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tight">Our Verification Standards</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-teal" />
                <h3 className="text-xl font-bold">Refurbishment Quality</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                We only list equipment that has been refurbished to OEM specifications. This includes full disassembly, replacement of wear-parts, and clinical calibration.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-8 h-8 text-teal" />
                <h3 className="text-xl font-bold">Supplier Vetting</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Suppliers must hold ISO 13485 certification and have a proven track record of successful installations and technical support within the African continent.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-teal" />
                <h3 className="text-xl font-bold">Compliance Support</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                We verify that all equipment comes with the necessary documentation for local regulatory bodies (NAFDAC, PPB, SAHPRA, etc.) to ensure smooth import.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <LeadForm />
        </div>
      </div>
    </Layout>
  );
};
