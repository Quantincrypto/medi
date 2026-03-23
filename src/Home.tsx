import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Search, ArrowRight, Award, Zap, Users } from 'lucide-react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { ListingCard } from './components/ListingCard';
import { LeadForm } from './components/LeadForm';
import { useListings, suppliers } from './data';

export const Home: React.FC = () => {
  const categories = [
    { name: 'CT Scanner', path: '/refurbished-ct-scanners-africa', icon: 'CT' },
    { name: 'MRI', path: '/used-mri-machines-africa', icon: 'MRI' },
    { name: 'Ultrasound', path: '/refurbished-ultrasound-machines-africa', icon: 'US' },
    { name: 'X-Ray', path: '/used-digital-x-ray-systems-africa', icon: 'XR' },
    { name: 'C-Arm', path: '/used-digital-x-ray-systems-africa', icon: 'CA' },
    { name: 'Lab Equipment', path: '/used-laboratory-equipment-africa', icon: 'LB' },
  ];

  const countries = [
    { name: 'Kenya', path: '/refurbished-medical-equipment-kenya-nairobi' },
    { name: 'Nigeria', path: '/used-medical-equipment-nigeria-lagos-abuja' },
    { name: 'South Africa', path: '/refurbished-medical-equipment-south-africa' },
    { name: 'Ghana', path: '/used-medical-equipment-ghana-accra' },
    { name: 'Uganda', path: '/refurbished-medical-equipment-uganda-kampala' },
    { name: 'Rwanda', path: '/used-medical-equipment-rwanda-kigali' },
  ];

  const { listings } = useListings();
  const featured = listings.filter(l => l.featured);

  return (
    <Layout>
      <SEO
        title="Refurbished Medical Equipment Africa | Verified ISO 13485 Certified Suppliers"
        description="Africa's verified B2B directory for refurbished CT scanners, MRI machines, ultrasound and lab equipment. ISO 13485 certified suppliers delivering to Kenya, Nigeria, South Africa and 20+ African markets."
        canonical="/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://medicalequipment.africa/#website",
            "url": "https://medicalequipment.africa",
            "name": "MedicalEquipment.Africa",
            "description": "Africa's verified B2B directory for ISO 13485 certified refurbished medical equipment"
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://medicalequipment.africa/#organization",
            "name": "MedicalEquipment.Africa",
            "url": "https://medicalequipment.africa",
            "logo": "https://medicalequipment.africa/logo.png",
            "description": "Africa's verified B2B directory for ISO 13485 certified refurbished medical equipment",
            "areaServed": "Africa",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+447777100397",
              "contactType": "sales",
              "areaServed": "Africa",
              "availableLanguage": "English"
            },
            "knowsAbout": ["Refurbished CT Scanners","Refurbished MRI Machines","Medical Equipment Africa","ISO 13485"]
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-navy text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal/20 text-teal px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <ShieldCheck className="w-4 h-4" />
                Verified B2B Directory
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Africa's #1 Verified Directory for <span className="text-teal">Refurbished</span> Medical Equipment
              </h1>
              <p className="text-lg text-white/85 mb-8 max-w-xl">
                Connecting African hospitals and diagnostic centres with certified refurbished equipment from the USA, EU, and Türkiye. ISO 13485 & CE Mark compliant.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/request-verified-pricing-medical-equipment" className="bg-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal/90 transition-all shadow-xl shadow-teal/20">
                  Request Verified Pricing →
                </Link>
                <Link to="/refurbished-medical-equipment-catalogue-africa" className="text-white/60 font-semibold text-base hover:text-white underline underline-offset-4 transition-colors">
                  Browse Listings
                </Link>
              </div>
            </div>
            <div className="hidden lg:block max-w-lg ml-auto w-full">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge Bar */}
      <div className="bg-clinical border-y border-navy/5 py-8">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex justify-between items-center gap-8 min-w-max">
            {['ISO 13485', 'CE Mark', 'FDA', 'PPB Kenya', 'NAFDAC Nigeria', 'SAHPRA SA'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-navy/40 font-bold text-sm grayscale hover:grayscale-0 transition-all">
                <Award className="w-5 h-5" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-16 text-center uppercase tracking-tight">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Browse & Select</h3>
              <p className="text-white/60">Find the exact model and specification needed for your facility from our verified directory.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Request Data Room</h3>
              <p className="text-white/60">Get detailed refurbishment reports, service history, and verified pricing within 48 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Secure Procurement</h3>
              <p className="text-white/60">Connect directly with certified suppliers for logistics, installation, and local compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-16 bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: '48h', label: 'Response Guarantee' },
              { value: 'ISO', label: '13485 Certified' },
              { value: '20+', label: 'African Markets' },
              { value: '100%', label: 'Verified Suppliers' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-6 bg-clinical rounded-2xl border border-navy/5">
                <div className="text-3xl font-black text-navy mb-1">{value}</div>
                <div className="text-xs font-bold text-navy/40 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-8 mb-10 max-w-3xl mx-auto">
            <p className="text-navy/80 italic text-base leading-relaxed mb-4">
              "[Placeholder] We procured a Siemens CT scanner through MedicalEquipment.Africa and had it installed within 6 weeks. The compliance documentation saved us months of regulatory back-and-forth."
            </p>
            <p className="text-blue-600 font-bold text-sm">— Chief Radiologist, [Hospital Name], Kenya</p>
          </div>

          {/* Logo strip */}
          <div className="text-center">
            <p className="text-[10px] font-bold text-navy/30 uppercase tracking-widest mb-6">Trusted by hospitals across Africa</p>
            <div className="flex justify-center gap-6 flex-wrap">
              {['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4'].map((logo) => (
                <div key={logo} className="w-24 h-10 bg-clinical rounded-lg border border-navy/5 flex items-center justify-center text-[10px] font-bold text-navy/30 uppercase tracking-widest">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-clinical">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">Browse by Category</h2>
              <p className="text-navy/50">High-end diagnostic imaging and laboratory systems</p>
            </div>
            <Link to="/refurbished-medical-equipment-catalogue-africa" className="text-teal font-bold flex items-center gap-2 hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link 
                key={cat.name} 
                to={cat.path}
                className="bg-white p-6 rounded-2xl border border-navy/5 text-center hover:border-teal hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-clinical rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal/10 transition-colors">
                  <span className="font-black text-teal">{cat.icon}</span>
                </div>
                <h3 className="font-bold text-sm">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tight">Featured Equipment</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsored Suppliers */}
      <section className="py-20 bg-white border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Sponsored Suppliers</h2>
            <span className="bg-gold/10 text-gold text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Premium Partners</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {suppliers.slice(0, 4).map((supplier) => (
              <Link 
                key={supplier.id} 
                to="/verified-medical-equipment-suppliers-africa"
                className="group block bg-clinical rounded-2xl overflow-hidden border border-navy/5 hover:border-teal transition-all"
              >
                <div className="h-32 overflow-hidden">
                  <img 
                    src={supplier.image} 
                    alt={supplier.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1 truncate">{supplier.name}</h3>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-navy/40 uppercase tracking-wider">
                    <Globe className="w-3 h-3" />
                    {supplier.origin}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Country */}
      <section className="py-20 bg-clinical">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tight">Browse by Country</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map((country) => (
              <Link 
                key={country.name} 
                to={country.path}
                className="bg-white p-6 rounded-2xl border border-navy/5 flex items-center justify-between hover:border-teal hover:shadow-lg transition-all"
              >
                <span className="font-bold">{country.name}</span>
                <ArrowRight className="w-4 h-4 text-teal" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};
