import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';
import { Building2, Landmark, Heart, Package, Stethoscope, Activity, Microscope, Bed } from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wholesale Medical Supplies Kenya",
  "description": "Wholesale and bulk medical equipment supply for hospitals, government facilities and NGOs in Kenya.",
  "provider": { "@type": "Organization", "name": "MedicalEquipment.Africa", "url": "https://medicalequipment.africa" },
  "areaServed": "Kenya",
  "serviceType": "Wholesale Medical Equipment Supply"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" },
    { "@type": "ListItem", "position": 2, "name": "Kenya", "item": "https://medicalequipment.africa/refurbished-medical-equipment-kenya-nairobi" },
    { "@type": "ListItem", "position": 3, "name": "Wholesale Medical Supplies Kenya", "item": "https://medicalequipment.africa/wholesale-medical-supplies-kenya" }
  ]
};

const audiences = [
  { icon: <Building2 className="w-7 h-7 text-teal" />, title: 'Private Hospitals', desc: 'Multi-site procurement teams sourcing equipment across Kenya.' },
  { icon: <Landmark className="w-7 h-7 text-teal" />, title: 'Government Facilities', desc: 'County and national government hospitals and health centres.' },
  { icon: <Heart className="w-7 h-7 text-teal" />, title: 'NGOs & Aid Organisations', desc: 'MSF, IMC, and other health NGOs procuring for field facilities.' },
];

const steps = [
  { n: '01', title: 'Submit Requirements', desc: 'Tell us what equipment you need, quantities, and delivery timeline.' },
  { n: '02', title: 'Receive Verified Quotes', desc: 'We match your requirements with 3+ verified suppliers and send a data room within 48 hours.' },
  { n: '03', title: 'Confirm and Ship', desc: 'Approve your preferred quote. Suppliers handle PPB documentation, KNRA clearance, and Nairobi delivery.' },
];

const categories = [
  { icon: <Activity className="w-5 h-5" />, name: 'Imaging Equipment' },
  { icon: <Microscope className="w-5 h-5" />, name: 'Laboratory Equipment' },
  { icon: <Bed className="w-5 h-5" />, name: 'Hospital Beds & Furniture' },
  { icon: <Stethoscope className="w-5 h-5" />, name: 'Diagnostic Devices' },
  { icon: <Package className="w-5 h-5" />, name: 'Surgical Equipment' },
  { icon: <Heart className="w-5 h-5" />, name: 'ICU & Critical Care' },
];

export const WholesaleKenyaPage: React.FC = () => (
  <Layout>
    <SEO
      title="Wholesale Medical Supplies Kenya | Bulk Orders for Hospitals & NGOs | MedicalEquipment.Africa"
      description="Wholesale medical equipment supply for hospitals, government facilities and NGOs in Kenya. Volume pricing on imaging, laboratory and surgical equipment. PPB compliant."
      canonical="/wholesale-medical-supplies-kenya"
      schema={[serviceSchema, breadcrumbSchema]}
    />

    {/* Hero */}
    <div className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="inline-block bg-teal/20 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          Wholesale & Bulk Orders
        </div>
        <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">
          Wholesale Medical Supplies in Kenya
        </h1>
        <p className="text-white/60 max-w-2xl">
          Volume pricing for hospitals, government health facilities, and NGOs. PPB compliant sourcing with verified suppliers and full import documentation.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">

          {/* Who this is for */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">Who This Is For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {audiences.map(a => (
                <div key={a.title} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
                  <div className="mb-3">{a.icon}</div>
                  <div className="font-bold text-navy mb-2">{a.title}</div>
                  <p className="text-sm text-navy/60">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">How It Works</h2>
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

          {/* Categories */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">Equipment Categories Available</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map(c => (
                <div key={c.name} className="flex items-center gap-3 bg-white border border-navy/5 rounded-xl p-4 shadow-sm">
                  <span className="text-teal">{c.icon}</span>
                  <span className="text-sm font-bold text-navy">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MOQ callout */}
          <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6">
            <div className="font-bold text-navy mb-1">Minimum Order Information</div>
            <p className="text-sm text-navy/70">
              No minimum order for individual units. Volume pricing available for 5+ units of the same type. Contact us to discuss framework agreements for ongoing supply.
            </p>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-4">
            <Link to="/refurbished-medical-equipment-kenya-nairobi" className="text-sm font-bold text-teal hover:underline">
              ← Medical equipment suppliers in Kenya
            </Link>
            <Link to="/refurbished-medical-equipment-catalogue-africa" className="text-sm font-bold text-teal hover:underline">
              Browse full catalogue →
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <LeadForm />
        </div>
      </div>
    </div>
  </Layout>
);
