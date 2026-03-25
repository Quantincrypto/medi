import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { ListingCard } from './components/ListingCard';
import { LeadForm } from './components/LeadForm';
import { useListings } from './data';
import { Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CataloguePage: React.FC = () => {
  const [filterType, setFilterType] = useState('All');
  const [filterCountry, setFilterCountry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const { listings } = useListings();
  const types = ['All', ...Array.from(new Set(listings.map(l => l.type))).sort()];
  const countries = ['All', ...Array.from(new Set(listings.map(l => l.country))).sort()];
  const filtered = listings.filter(l => {
    const matchesType = filterType === 'All' || l.type === filterType;
    const matchesCountry = filterCountry === 'All' || l.country === filterCountry;
    const matchesSearch = searchQuery === '' || 
      l.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
      l.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesCountry && matchesSearch;
  });

  return (
    <Layout>
      <SEO
        title="Refurbished Medical Equipment Catalogue Africa | CT Scanners, MRI, Ultrasound | Verified Listings"
        description="Browse verified refurbished CT scanners, MRI machines, ultrasound systems and laboratory equipment for sale across Africa. ISO 13485 certified. Filter by country and equipment type."
        canonical="/refurbished-medical-equipment-catalogue-africa"
        schema={[
          { "@context": "https://schema.org", "@type": "CollectionPage", "name": "Refurbished Medical Equipment Catalogue Africa", "description": "Verified refurbished medical equipment for sale across Africa", "url": "https://medicalequipment.africa/refurbished-medical-equipment-catalogue-africa" },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" }, { "@type": "ListItem", "position": 2, "name": "Catalogue", "item": "https://medicalequipment.africa/refurbished-medical-equipment-catalogue-africa" }] }
        ]}
      />

      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">Product Catalogue</h1>
          <p className="text-white/60 max-w-2xl">Browse our full inventory of verified refurbished medical systems from certified global suppliers.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-navy/5 mb-12 flex flex-col sm:flex-row flex-wrap gap-4 items-end">
          <div className="w-full sm:flex-1">
            <label className="block text-[10px] font-bold uppercase text-navy/40 tracking-widest mb-2">Search Equipment</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Brand, model or type..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[10px] font-bold uppercase text-navy/40 tracking-widest mb-2">Equipment Type</label>
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full p-2 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors bg-white"
            >
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase text-navy/40 tracking-widest mb-2">Country</label>
            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
              className="w-full p-2 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors bg-white"
            >
              {countries.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <button 
            onClick={() => { setFilterType('All'); setFilterCountry('All'); setSearchQuery(''); }}
            className="text-xs font-bold text-navy/40 hover:text-alert transition-colors pb-3"
          >
            Reset Filters
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {filtered.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-2 py-20 text-center bg-white rounded-xl border border-dashed border-navy/20">
                  <p className="text-navy/40 font-bold">No matching listings found. Try adjusting your filters or request a custom quote.</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gold/5 border border-gold/20 p-8 rounded-2xl">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5 text-gold" />
                Custom Sourcing
              </h4>
              <p className="text-sm text-navy/70 mb-6 leading-relaxed">
                Can't find the specific model or configuration you need? Our global network of certified suppliers can source equipment to your exact clinical requirements.
              </p>
              <Link to="/request-verified-pricing-medical-equipment" className="block w-full bg-navy text-white text-center py-3 rounded-lg font-bold hover:bg-navy/90 transition-colors">
                Request Custom Sourcing
              </Link>
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};
