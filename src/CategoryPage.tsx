import React from 'react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { ListingCard } from './components/ListingCard';
import { LeadForm } from './components/LeadForm';
import { useListings } from './data';
import { Link } from 'react-router-dom';

interface CategoryPageProps {
  type: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  seoCanonical: string;
  specTable?: React.ReactNode;
  internalLinks: { name: string; path: string }[];
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  type, title, seoTitle, seoDescription, seoCanonical, specTable, internalLinks
}) => {
  const { listings } = useListings();
  const filtered = listings.filter(l => l.type === type || (type === 'X-Ray' && l.type === 'C-Arm'));
  
  const countries = [
    { name: 'Kenya', path: '/refurbished-medical-equipment-kenya-nairobi' },
    { name: 'Nigeria', path: '/used-medical-equipment-nigeria-lagos-abuja' },
    { name: 'South Africa', path: '/refurbished-medical-equipment-south-africa' },
    { name: 'Ghana', path: '/used-medical-equipment-ghana-accra' },
    { name: 'Uganda', path: '/refurbished-medical-equipment-uganda-kampala' },
    { name: 'Rwanda', path: '/used-medical-equipment-rwanda-kigali' },
  ];

  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={seoCanonical}
        schema={[
          { "@context": "https://schema.org", "@type": "CollectionPage", "name": title, "description": seoDescription, "url": `https://medicalequipment.africa${seoCanonical}` },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" }, { "@type": "ListItem", "position": 2, "name": title, "item": `https://medicalequipment.africa${seoCanonical}` }] },
          { "@context": "https://schema.org", "@type": "ItemList", "name": title, "itemListElement": filtered.map((l, i) => ({ "@type": "ListItem", "position": i + 1, "item": { "@type": "Product", "name": `${l.brand} ${l.model}`, "description": l.specs, "brand": { "@type": "Brand", "name": l.brand }, "url": `https://medicalequipment.africa/equipment/${l.slug}` } })) }
        ]}
      />

      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">{title}</h1>
          <p className="text-white/60 max-w-2xl">Verified refurbished {type.toLowerCase()} systems from global certified suppliers. ISO 13485 compliant refurbishment standards.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {specTable && (
              <div className="mb-12 bg-white rounded-xl shadow-sm border border-navy/5 overflow-hidden">
                <div className="bg-clinical p-4 font-bold border-b border-navy/5">Technical Comparison & Specifications</div>
                {specTable}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {filtered.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-2 py-20 text-center bg-white rounded-xl border border-dashed border-navy/20">
                  <p className="text-navy/40 font-bold">New listings arriving soon. Request a custom quote.</p>
                </div>
              )}
            </div>

            <div className="mt-16 p-8 bg-clinical rounded-2xl border border-navy/5">
              <h3 className="font-bold mb-4 uppercase tracking-widest text-xs text-navy/40">Related Categories</h3>
              <div className="flex flex-wrap gap-4">
                {internalLinks.map(link => (
                  <Link key={link.path} to={link.path} className="bg-white px-4 py-2 rounded-lg text-sm font-bold border border-navy/5 hover:border-teal transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 p-8 bg-clinical rounded-2xl border border-navy/5">
              <h3 className="font-bold mb-4 uppercase tracking-widest text-xs text-navy/40">Browse By Country</h3>
              <div className="flex flex-wrap gap-4">
                {countries.map(link => (
                  <Link key={link.path} to={link.path} className="bg-white px-4 py-2 rounded-lg text-sm font-bold border border-navy/5 hover:border-teal transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <LeadForm />
            <div className="bg-navy text-white p-8 rounded-2xl">
              <h4 className="font-bold mb-4">Why Buy Refurbished?</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-teal font-bold">✓</span>
                  Up to 60% cost savings vs new
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">✓</span>
                  OEM certified parts & software
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">✓</span>
                  Full clinical warranty included
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">✓</span>
                  Immediate availability & shipping
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
