import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Search, ArrowRight, Zap, Users } from 'lucide-react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { ListingCard } from './components/ListingCard';
import { LeadForm } from './components/LeadForm';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { useListings, suppliers } from './data';

export const Home: React.FC = () => {
  const categories = [
    { name: 'CT Scanner',     path: '/refurbished-ct-scanners-africa',              icon: '/icons/ct-scanner.svg',    bg: 'bg-teal-50',   ring: 'group-hover:bg-teal-100' },
    { name: 'MRI',            path: '/used-mri-machines-africa',                    icon: '/icons/mri.svg',           bg: 'bg-blue-50',   ring: 'group-hover:bg-blue-100' },
    { name: 'Ultrasound',     path: '/refurbished-ultrasound-machines-africa',      icon: '/icons/ultrasound.svg',    bg: 'bg-cyan-50',   ring: 'group-hover:bg-cyan-100' },
    { name: 'X-Ray',          path: '/used-digital-x-ray-systems-africa',           icon: '/icons/x-ray.svg',         bg: 'bg-indigo-50', ring: 'group-hover:bg-indigo-100' },
    { name: 'C-Arm',          path: '/used-digital-x-ray-systems-africa',           icon: '/icons/c-arm.svg',         bg: 'bg-violet-50', ring: 'group-hover:bg-violet-100' },
    { name: 'Lab Equipment',  path: '/used-laboratory-equipment-africa',            icon: '/icons/lab-equipment.svg', bg: 'bg-emerald-50',ring: 'group-hover:bg-emerald-100' },
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
              <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-6 leading-tight">
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full">
            {[
              { label: 'ISO 13485', src: '/logos/iso-13485.svg', href: 'https://www.iso.org/standard/59752.html' },
              { label: 'CE Mark', src: '/logos/ce-mark.svg', href: 'https://ec.europa.eu/growth/single-market/ce-marking_en' },
              { label: 'FDA', src: '/logos/fda.svg', href: 'https://www.fda.gov/' },
              { label: 'PPB Kenya', src: '/logos/ppb-kenya.png', href: 'https://www.pharmacyboardkenya.org/' },
              { label: 'NAFDAC Nigeria', src: '/logos/nafdac-nigeria.png', href: 'https://www.nafdac.gov.ng/' },
              { label: 'SAHPRA SA', src: '/logos/sahpra-sa.png', href: 'https://www.sahpra.org.za/' },
            ].map(({ label, src, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <img src={src} alt={label} className="h-12 w-auto object-contain max-w-[110px]" />
                <span className="text-navy/50 text-[11px] font-semibold tracking-wide uppercase">{label}</span>
              </a>
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

          <TestimonialCarousel />

          <div className="text-center mt-10">
            <p className="text-[10px] font-bold text-navy/30 uppercase tracking-widest mb-6">Trusted by hospitals across Africa</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {[
                { name: 'Aga Khan University Hospital', src: '/hospitals/aku-nairobi.png',   href: 'https://hospitals.aku.edu/nairobi/Pages/default.aspx' },
                { name: 'Lagos University Teaching Hospital', src: '/hospitals/luth-nigeria.png',  href: 'https://luth.gov.ng/' },
                { name: 'Groote Schuur Hospital',       src: '/hospitals/groote-schuur.svg', href: 'https://www.westerncape.gov.za/health-wellness/facility/groote-schuur-hospital' },
                { name: 'Korle Bu Teaching Hospital',   src: '/hospitals/korle-bu.png',      href: 'https://kbth.gov.gh/' },
              ].map(({ name, src, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl border border-navy/5 px-6 py-3 flex items-center justify-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:shadow-md transition-all duration-300"
                  title={name}
                >
                  <img src={src} alt={name} className="h-10 w-auto max-w-[120px] object-contain" />
                </a>
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
                className="bg-white p-6 rounded-2xl border border-navy/5 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${cat.bg} ${cat.ring} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300`}>
                  <img src={cat.icon} alt={cat.name} className="w-10 h-10 object-contain" />
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
