import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';
import { CheckCircle, Users, Tag, Globe } from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Sell Used Medical Equipment South Africa",
  "description": "List your used or second-hand medical equipment with Africa's verified B2B buyer network.",
  "provider": { "@type": "Organization", "name": "MedicalEquipment.Africa", "url": "https://medicalequipment.africa" },
  "areaServed": "South Africa",
  "serviceType": "Used Medical Equipment Marketplace"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" },
    { "@type": "ListItem", "position": 2, "name": "South Africa", "item": "https://medicalequipment.africa/refurbished-medical-equipment-south-africa" },
    { "@type": "ListItem", "position": 3, "name": "Sell Medical Equipment South Africa", "item": "https://medicalequipment.africa/sell-medical-equipment-south-africa" }
  ]
};

const accepted = [
  'Imaging equipment (CT, MRI, X-ray, Ultrasound)',
  'Laboratory & diagnostic analysers',
  'Hospital beds & patient furniture',
  'Surgical & theatre equipment',
  'ICU & critical care monitors',
  'Physiotherapy & rehabilitation equipment',
];

const steps = [
  { n: '01', title: 'Submit Details', desc: 'Tell us the equipment type, brand, model, year, condition, and your location in South Africa.' },
  { n: '02', title: 'We Verify & Value', desc: 'Our team verifies the equipment details and provides a fair market valuation within 48 hours.' },
  { n: '03', title: 'Listed to 500+ Buyers', desc: 'Your equipment is listed to our verified network of hospital procurement teams across Africa.' },
];

const trustPoints = [
  { icon: <Users className="w-6 h-6 text-teal" />, title: 'Verified Buyer Network', desc: 'Access to 500+ vetted hospital and clinic procurement managers across Africa.' },
  { icon: <Tag className="w-6 h-6 text-teal" />, title: 'No Upfront Fees', desc: 'Listing is free. We charge a small success fee only when your equipment sells.' },
  { icon: <Globe className="w-6 h-6 text-teal" />, title: 'Pan-Africa Reach', desc: 'Buyers from Kenya, Nigeria, Ghana, Tanzania, and 20+ other African markets.' },
];

export const SellEquipmentSAPage: React.FC = () => (
  <Layout>
    <SEO
      title="Sell Used Medical Equipment South Africa | SAHPRA Compliant | MedicalEquipment.Africa"
      description="Sell your second-hand medical equipment in South Africa. Access 500+ verified buyers across Africa. Free listing, SAHPRA compliant, no upfront fees."
      canonical="/sell-medical-equipment-south-africa"
      schema={[serviceSchema, breadcrumbSchema]}
    />

    {/* Hero */}
    <div className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="inline-block bg-teal/20 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          South Africa — Sell Equipment
        </div>
        <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">
          Sell Your Used Medical Equipment in South Africa
        </h1>
        <p className="text-white/60 max-w-2xl">
          We connect South African sellers with verified buyers across Africa. Free listing. No upfront fees.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">

          {/* What we accept */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">What Equipment We Accept</h2>
            <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
              <ul className="space-y-3">
                {accepted.map(item => (
                  <li key={item} className="flex items-center gap-3 text-navy/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-navy/5 text-xs text-navy/50">
                Minimum condition: functional with documented service history. SAHPRA-registered equipment preferred.
              </div>
            </div>
          </div>

          {/* How to list */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">How to List Your Equipment</h2>
            <div className="space-y-4">
              {steps.map(s => (
                <div key={s.n} className="flex gap-6 bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl font-black text-teal/30 flex-shrink-0">{s.n}</div>
                  <div>
                    <div className="font-bold text-navy mb-1">{s.title}</div>
                    <p className="text-sm text-navy/60">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why list with us */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">Why List With Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {trustPoints.map(tp => (
                <div key={tp.title} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
                  <div className="mb-3">{tp.icon}</div>
                  <div className="font-bold text-navy mb-2">{tp.title}</div>
                  <p className="text-sm text-navy/60">{tp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buy side link */}
          <div className="bg-clinical rounded-2xl p-6 border border-navy/5">
            <p className="text-sm text-navy/60 mb-2">Looking to buy instead?</p>
            <Link to="/refurbished-medical-equipment-south-africa" className="text-sm font-bold text-teal hover:underline">
              Browse medical equipment for sale in South Africa →
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-navy/5">
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-3">Submit Your Equipment</div>
            <p className="text-sm text-navy/60 mb-4">Fill in the form and our team will respond within 48 hours with a valuation and next steps.</p>
          </div>
          <LeadForm />
        </div>
      </div>
    </div>
  </Layout>
);
