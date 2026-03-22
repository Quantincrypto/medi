import React from 'react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';
import { suppliers } from './data';
import { Link } from 'react-router-dom';
import { Globe, ShieldCheck, Award } from 'lucide-react';

export const SuppliersPage: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Verified Refurbished Medical Equipment Suppliers Africa | ISO 13485 Certified"
        description="Connect with verified refurbished medical equipment suppliers from USA, EU, and Türkiye. All suppliers are ISO 13485 certified and vetted."
      />

      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">Verified Suppliers</h1>
          <p className="text-white/60 max-w-2xl">We only partner with suppliers who meet strict international refurbishment and quality standards.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {suppliers.map(supplier => (
              <div key={supplier.id} className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img src={supplier.image} alt={supplier.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{supplier.name}</h3>
                    <div className="bg-clinical px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      {supplier.origin}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-navy/40 tracking-widest block mb-2">Certifications</span>
                      <div className="flex flex-wrap gap-2">
                        {supplier.certifications.map(cert => (
                          <span key={cert} className="bg-gold/10 text-gold px-2 py-1 rounded text-xs font-bold border border-gold/20">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-navy/40 tracking-widest block mb-2">Equipment Specialties</span>
                      <div className="flex flex-wrap gap-2">
                        {supplier.equipmentTypes.map(type => (
                          <span key={type} className="bg-teal/10 text-teal px-2 py-1 rounded text-xs font-bold">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    to="/request-verified-pricing-medical-equipment"
                    className="inline-block bg-navy text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-navy/90 transition-colors"
                  >
                    Contact Supplier via Directory
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <div className="bg-clinical p-8 rounded-2xl border border-navy/5">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal" />
                Vetting Process
              </h4>
              <p className="text-sm text-navy/70 leading-relaxed">
                Every supplier on our platform undergoes a rigorous 5-step verification process:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-navy/70">
                <li className="flex gap-2">
                  <span className="text-teal font-bold">1.</span>
                  ISO 13485 Certification Audit
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">2.</span>
                  On-site Facility Inspection
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">3.</span>
                  Reference Check (African Hospitals)
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">4.</span>
                  Financial Stability Review
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">5.</span>
                  Technical Support Capability Test
                </li>
              </ul>
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};
