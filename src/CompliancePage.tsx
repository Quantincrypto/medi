import React from 'react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';
import { Link } from 'react-router-dom';
import { FileText, Shield, Clock } from 'lucide-react';

export const CompliancePage: React.FC = () => {
  const regulations = [
    { country: 'Kenya', body: 'PPB (Pharmacy & Poisons Board)', requirements: 'ISO 13485, CE Mark, PVoC Inspection', timeline: '4-6 Weeks', path: '/refurbished-medical-equipment-kenya-nairobi' },
    { country: 'Nigeria', body: 'NAFDAC', requirements: 'SONCAP Certification, Manufacturer Authorization', timeline: '8-12 Weeks', path: '/used-medical-equipment-nigeria-lagos-abuja' },
    { country: 'South Africa', body: 'SAHPRA', requirements: 'Medical Device License, ISO 13485', timeline: '6-8 Weeks', path: '/refurbished-medical-equipment-south-africa' },
    { country: 'Ghana', body: 'FDA Ghana', requirements: 'Product Registration, Certificate of Free Sale', timeline: '4-8 Weeks', path: '/used-medical-equipment-ghana-accra' },
    { country: 'Uganda', body: 'NDA Uganda', requirements: 'Import Permit, GMP Evidence', timeline: '4-6 Weeks', path: '/refurbished-medical-equipment-uganda-kampala' },
    { country: 'Rwanda', body: 'Rwanda FDA', requirements: 'Market Authorization, ISO 13485', timeline: '4-6 Weeks', path: '/used-medical-equipment-rwanda-kigali' },
  ];

  return (
    <Layout>
      <SEO 
        title="Medical Equipment Import Regulations Africa | PPB, NAFDAC, SAHPRA, Ghana FDA Guide"
        description="Complete guide to importing medical equipment into Africa. Country-by-country breakdown of PPB Kenya, NAFDAC Nigeria, SAHPRA South Africa, Ghana FDA, NDA Uganda and Rwanda FDA requirements."
        canonical="/medical-equipment-import-regulations-africa"
        schema={[
          { "@context": "https://schema.org", "@type": "Article", "headline": "Medical Equipment Import Regulations Africa: PPB, NAFDAC, SAHPRA Guide", "description": "Country-by-country breakdown of medical equipment import regulations across Africa including PPB Kenya, NAFDAC Nigeria, SAHPRA South Africa, Ghana FDA, NDA Uganda and Rwanda FDA.", "author": { "@type": "Organization", "name": "MedicalEquipment.Africa" }, "publisher": { "@type": "Organization", "name": "MedicalEquipment.Africa", "url": "https://medicalequipment.africa" } },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" }, { "@type": "ListItem", "position": 2, "name": "Import Regulations", "item": "https://medicalequipment.africa/medical-equipment-import-regulations-africa" }] }
        ]}
      />

      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">Compliance & Regulations</h1>
          <p className="text-white/60 max-w-2xl">Navigating the regulatory landscape for medical equipment imports in Africa.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-clinical border-b border-navy/5">
                    <tr>
                      <th className="p-4 font-bold text-xs uppercase tracking-widest text-navy/40">Country</th>
                      <th className="p-4 font-bold text-xs uppercase tracking-widest text-navy/40">Regulatory Body</th>
                      <th className="p-4 font-bold text-xs uppercase tracking-widest text-navy/40">Requirements</th>
                      <th className="p-4 font-bold text-xs uppercase tracking-widest text-navy/40">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy/5">
                    {regulations.map((reg) => (
                      <tr key={reg.country} className="hover:bg-clinical/50 transition-colors">
                        <td className="p-4 font-bold">
                          <Link to={reg.path} className="text-teal hover:underline">{reg.country}</Link>
                        </td>
                        <td className="p-4 text-sm font-medium">{reg.body}</td>
                        <td className="p-4 text-sm text-navy/70">{reg.requirements}</td>
                        <td className="p-4 text-sm font-bold text-navy/50">{reg.timeline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="prose prose-navy max-w-none">
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Standard Certification Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-clinical p-6 rounded-xl border border-navy/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-teal" />
                    <h3 className="font-bold">ISO 13485</h3>
                  </div>
                  <p className="text-sm text-navy/70">The international standard for medical device quality management systems. Mandatory for most African regulatory approvals.</p>
                </div>
                <div className="bg-clinical p-6 rounded-xl border border-navy/5">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-teal" />
                    <h3 className="font-bold">CE Mark / FDA</h3>
                  </div>
                  <p className="text-sm text-navy/70">Evidence of safety and performance from major global markets (EU/USA) significantly accelerates local registration.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-navy text-white p-8 rounded-2xl">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal" />
                Need Expert Advice?
              </h4>
              <p className="text-sm text-white/60 mb-6">Our compliance team can help you navigate specific import requirements for your facility.</p>
              <Link to="/request-verified-pricing-medical-equipment" className="block w-full bg-teal text-white text-center py-3 rounded-lg font-bold hover:bg-teal/90 transition-colors">
                Consult Compliance Team
              </Link>
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};
