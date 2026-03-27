import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  MapPin, 
  Star, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Info,
  FileText,
  Truck
} from 'lucide-react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { useListings } from './data';
import { LeadForm } from './components/LeadForm';

export const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { listings, loading } = useListings();
  const product = listings.find(l => l.slug === slug);
  const [showForm, setShowForm] = React.useState(false);

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center text-navy/50 font-bold uppercase tracking-widest text-sm">
          Loading…
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Link to="/refurbished-medical-equipment-catalogue-africa" className="text-teal font-bold hover:underline">
            Back to Catalogue
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = listings
    .filter(l => l.type === product.type && l.id !== product.id)
    .slice(0, 3);

  const typeSlug = product.type.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
  const countrySlug = product.country.toLowerCase().replace(/ /g, '-');

  return (
    <Layout>
      <SEO
        title={product.metaTitle}
        description={product.metaDescription}
        canonical={`/equipment/${product.slug}`}
        ogType="website"
        ogImage={product.image}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `${product.brand} ${product.model}`,
            "description": product.specs,
            "image": product.image,
            "brand": { "@type": "Brand", "name": product.brand },
            "url": `https://medicalequipment.africa/equipment/${product.slug}`,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": product.rating,
              "bestRating": 5,
              "worstRating": 1,
              "ratingCount": 1
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" },
              { "@type": "ListItem", "position": 2, "name": "Catalogue", "item": "https://medicalequipment.africa/refurbished-medical-equipment-catalogue-africa" },
              { "@type": "ListItem", "position": 3, "name": `${product.brand} ${product.model}`, "item": `https://medicalequipment.africa/equipment/${product.slug}` }
            ]
          }
        ]}
      />

      {/* Breadcrumbs */}
      <div className="bg-clinical py-4 border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-navy/40">
          <Link to="/" className="hover:text-teal">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/refurbished-medical-equipment-catalogue-africa" className="hover:text-teal">Catalogue</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy/80">{product.brand} {product.model}</span>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Image & Quick Info */}
            <div>
              <div className="rounded-3xl overflow-hidden border border-navy/5 shadow-2xl mb-8">
                <img 
                  src={product.image} 
                  alt={`${product.brand} ${product.model}`} 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Data Snapshot Table */}
              <div className="bg-navy text-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-teal" />
                  <h3 className="text-sm font-bold uppercase tracking-widest">Data Snapshot</h3>
                </div>
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  <div className="text-white/70">Brand / Model</div>
                  <div className="font-bold text-right">{product.brand} {product.model}</div>
                  
                  <div className="text-white/70">Refurbishment</div>
                  <div className="font-bold text-right text-teal">{product.refurbishedStandard}</div>
                  
                  <div className="text-white/70">Warranty</div>
                  <div className="font-bold text-right">{product.warranty}</div>
                  
                  <div className="text-white/70">Location</div>
                  <div className="font-bold text-right flex items-center justify-end gap-1">
                    <MapPin className="w-3 h-3" /> {product.city}, {product.country}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Specs & CTA */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-teal/10 text-teal text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                  {product.type}
                </span>
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                  ))}
                  <span className="text-xs font-bold text-navy ml-1">{product.rating}</span>
                </div>
              </div>

              <h1 className="text-4xl font-black mb-4 uppercase tracking-tight leading-none">
                {product.brand} <span className="text-teal">{product.model}</span>
              </h1>
              
              <p className="text-lg text-navy/60 mb-8 leading-relaxed">
                {product.specs}
              </p>

              {/* Review Quote */}
              <div className="bg-clinical p-6 rounded-2xl border-l-4 border-teal mb-8 italic text-navy/70 relative">
                <MessageSquare className="absolute -top-3 -left-3 w-8 h-8 text-teal/20" />
                "{product.reviewQuote}"
              </div>

              {/* Full Specs Display */}
              <div className="space-y-6 mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-navy/40 flex items-center gap-2">
                  <Info className="w-4 h-4" /> Technical Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase text-navy/40 mb-1">Compliance</div>
                      <div className="flex flex-wrap gap-2">
                        {product.compliance.map(c => (
                          <span key={c} className="bg-navy/5 text-navy/70 text-[10px] font-bold px-2 py-1 rounded border border-navy/10 uppercase">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-navy/40 mb-1">Coordinates</div>
                      <div className="text-sm font-bold text-navy/80">{product.coordinates}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase text-navy/40 mb-1">Standard</div>
                      <div className="text-sm font-bold text-navy/80">{product.refurbishedStandard}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-navy/40 mb-1">Support</div>
                      <div className="text-sm font-bold text-navy/80">Local Installation & Training Included</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mb-8">
                {!showForm && (
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal/90 transition-all shadow-xl shadow-teal/20"
                  >
                    Request Verified Data Room & Pricing →
                  </button>
                )}

                {showForm && (
                  <div className="border-2 border-teal rounded-2xl overflow-hidden">
                    <div className="bg-navy px-6 py-3 flex items-center justify-between">
                      <span className="text-white font-bold text-sm">
                        Request Pricing: {product.brand} {product.model}
                      </span>
                      <span className="text-teal text-xs font-bold uppercase tracking-widest">48h Response</span>
                    </div>
                    <div className="p-4">
                      <LeadForm equipmentType={product.type} />
                    </div>
                  </div>
                )}

                <div className="mt-3 text-center">
                  <a
                    href={product.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy/50 hover:text-[#25D366] transition-colors font-medium"
                  >
                    or contact us on WhatsApp instead
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 bg-clinical rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-teal" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-navy/40">Verified Supplier</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 bg-clinical rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-teal" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-navy/40">ISO 13485</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 bg-clinical rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-teal" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-navy/40">Africa Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Links & Related Products */}
      <section className="py-20 bg-clinical border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Related Products */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">Related {product.type}s</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProducts.map(item => (
                  <Link 
                    key={item.id} 
                    to={`/equipment/${item.slug}`}
                    className="bg-white rounded-2xl overflow-hidden border border-navy/5 shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.model} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-sm mb-1">{item.brand} {item.model}</h4>
                      <div className="text-[10px] font-bold text-teal uppercase tracking-widest">{item.country}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Hub Links */}
            <div>
              <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">Quick Navigation</h2>
              <div className="space-y-4">
                <Link 
                  to={`/refurbished-${typeSlug}-africa`}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-navy/5 hover:border-teal transition-colors group"
                >
                  <span className="font-bold text-sm uppercase tracking-widest">All {product.type}s</span>
                  <ArrowRight className="w-4 h-4 text-teal group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to={`/refurbished-medical-equipment-${countrySlug}`}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-navy/5 hover:border-teal transition-colors group"
                >
                  <span className="font-bold text-sm uppercase tracking-widest">Equipment in {product.country}</span>
                  <ArrowRight className="w-4 h-4 text-teal group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/refurbished-medical-equipment-catalogue-africa"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-navy/5 hover:border-teal transition-colors group"
                >
                  <span className="font-bold text-sm uppercase tracking-widest">Full Catalogue</span>
                  <ArrowRight className="w-4 h-4 text-teal group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
