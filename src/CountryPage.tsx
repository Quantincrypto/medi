import React from 'react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { ListingCard } from './components/ListingCard';
import { LeadForm } from './components/LeadForm';
import { listings } from './data';
import { Link } from 'react-router-dom';

interface CountryPageProps {
  country: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  complianceNote: string;
}

export const CountryPage: React.FC<CountryPageProps> = ({ 
  country, title, seoTitle, seoDescription, complianceNote 
}) => {
  const filtered = listings.filter(l => l.country === country);
  
  const categories = [
    { name: 'CT Scanners', path: '/refurbished-ct-scanners-africa' },
    { name: 'MRI Machines', path: '/used-mri-machines-africa' },
    { name: 'Ultrasound', path: '/refurbished-ultrasound-machines-africa' },
    { name: 'X-Ray Systems', path: '/used-digital-x-ray-systems-africa' },
    { name: 'Lab Equipment', path: '/used-laboratory-equipment-africa' },
  ];

  return (
    <Layout>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": title,
          "itemListElement": filtered.map((l, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Product",
              "name": `${l.brand} ${l.model}`,
              "description": l.specs,
              "brand": { "@type": "Brand", "name": l.brand }
            }
          }))
        }}
      />

      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-teal/20 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Regional Hub: {country}
          </div>
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">{title}</h1>
          <p className="text-white/60 max-w-2xl">Verified refurbished medical equipment available for import and local delivery in {country}. {complianceNote}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-gold/10 border border-gold/20 p-6 rounded-xl mb-12 flex items-start gap-4">
              <div className="bg-gold text-white p-2 rounded-lg font-bold text-xs uppercase">Compliance</div>
              <p className="text-sm font-medium text-navy/80">{complianceNote} Our verified suppliers handle all necessary regulatory documentation for seamless customs clearance.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filtered.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-2 py-20 text-center bg-white rounded-xl border border-dashed border-navy/20">
                  <p className="text-navy/40 font-bold">No active listings in {country} right now. We can source equipment for you.</p>
                </div>
              )}
            </div>

            <div className="mt-16 p-8 bg-clinical rounded-2xl border border-navy/5">
              <h3 className="font-bold mb-4 uppercase tracking-widest text-xs text-navy/40">Browse By Category</h3>
              <div className="flex flex-wrap gap-4">
                {categories.map(link => (
                  <Link key={link.path} to={link.path} className="bg-white px-4 py-2 rounded-lg text-sm font-bold border border-navy/5 hover:border-teal transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <LeadForm />
            <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
              <h4 className="font-bold mb-4 text-navy">Import Support</h4>
              <p className="text-sm text-navy/60 mb-6">We provide end-to-end support for {country} healthcare providers:</p>
              <ul className="space-y-3 text-sm text-navy/70">
                <li className="flex gap-2">
                  <span className="text-teal font-bold">✓</span>
                  Regulatory body registration assistance
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">✓</span>
                  Pre-shipment inspection (PVoC/SONCAP)
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">✓</span>
                  Local installation & training
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">✓</span>
                  Duty & tax exemption guidance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
