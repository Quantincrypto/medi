import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';
import { ShieldCheck, Clock, Award, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

export interface PriceRange {
  brand: string;
  entry: string;
  mid: string;
  premium: string;
  note: string;
}

export interface PricingFAQ {
  q: string;
  a: string;
}

interface EquipmentPricingPageProps {
  equipmentType: string;
  seoTitle: string;
  seoDescription: string;
  seoCanonical: string;
  priceRanges: PriceRange[];
  faqs: PricingFAQ[];
  categoryLink: { name: string; path: string };
  refurbishedDiscount: string;
}

function FAQItem({ q, a }: PricingFAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-navy/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-5 text-left font-bold text-navy hover:bg-clinical transition-colors"
      >
        <span>{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-teal flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-navy/40 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-navy/70 text-sm leading-relaxed border-t border-navy/5">
          {a}
        </div>
      )}
    </div>
  );
}

export const EquipmentPricingPage: React.FC<EquipmentPricingPageProps> = ({
  equipmentType, seoTitle, seoDescription, seoCanonical,
  priceRanges, faqs, categoryLink, refurbishedDiscount
}) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" },
      { "@type": "ListItem", "position": 2, "name": "Kenya", "item": "https://medicalequipment.africa/refurbished-medical-equipment-kenya-nairobi" },
      { "@type": "ListItem", "position": 3, "name": `${equipmentType} Prices Kenya`, "item": `https://medicalequipment.africa${seoCanonical}` }
    ]
  };

  const factors = [
    { icon: <ShieldCheck className="w-6 h-6 text-teal" />, label: 'Condition & Grade', desc: 'A/B/C grade certification affects price by up to 30%' },
    { icon: <Clock className="w-6 h-6 text-teal" />, label: 'Warranty Length', desc: '12-month vs 24-month warranty adds 8–15% to cost' },
    { icon: <Award className="w-6 h-6 text-teal" />, label: 'Brand & Model', desc: 'GE and Siemens carry a 15–25% premium over Mindray' },
    { icon: <Wrench className="w-6 h-6 text-teal" />, label: 'Machine Age & Hours', desc: 'Systems under 8 years with <20,000 hours command higher prices' },
  ];

  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={seoCanonical}
        schema={[faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-teal/20 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Prices updated March 2026
          </div>
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">
            {equipmentType} Prices in Kenya 2026
          </h1>
          <p className="text-white/60 max-w-2xl">
            Refurbished and new price ranges from verified suppliers. All prices in USD. Delivery to Kenya included.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">

            {/* Price range table */}
            <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden">
              <div className="bg-clinical px-6 py-4 border-b border-navy/5">
                <h2 className="font-bold uppercase tracking-widest text-xs text-navy/50">
                  {equipmentType} Price Ranges — Refurbished (Kenya, 2026)
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-clinical/50">
                    <tr>
                      <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Brand</th>
                      <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Entry-level</th>
                      <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Mid-range</th>
                      <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Premium</th>
                      <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy/5">
                    {priceRanges.map(row => (
                      <tr key={row.brand} className="hover:bg-clinical/30 transition-colors">
                        <td className="p-4 font-bold text-navy">{row.brand}</td>
                        <td className="p-4 text-navy/70">{row.entry}</td>
                        <td className="p-4 text-navy/70">{row.mid}</td>
                        <td className="p-4 text-navy/70">{row.premium}</td>
                        <td className="p-4 text-navy/50 text-xs">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* New vs Refurbished */}
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">
                New vs Refurbished Cost Comparison
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-navy/10 rounded-2xl p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">New Equipment</div>
                  <div className="text-3xl font-black text-navy mb-2">Full Price</div>
                  <p className="text-sm text-navy/60">Factory new. Longest warranty. Highest upfront cost. Typical lead time 12–24 weeks.</p>
                </div>
                <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-teal mb-2">Certified Refurbished</div>
                  <div className="text-3xl font-black text-navy mb-2">{refurbishedDiscount}</div>
                  <p className="text-sm text-navy/60">ISO 13485 certified. 12–24 month warranty. Same clinical performance. 4–8 week delivery.</p>
                </div>
              </div>
            </div>

            {/* Factors */}
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">
                Factors That Affect Price
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {factors.map(f => (
                  <div key={f.label} className="flex gap-4 bg-white border border-navy/5 rounded-xl p-5 shadow-sm">
                    <div className="flex-shrink-0">{f.icon}</div>
                    <div>
                      <div className="font-bold text-navy mb-1">{f.label}</div>
                      <div className="text-sm text-navy/60">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map(faq => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>

            {/* Browse suppliers link */}
            <div className="bg-clinical rounded-2xl p-6 border border-navy/5">
              <p className="text-sm text-navy/60 mb-3">Ready to browse verified suppliers?</p>
              <Link to={categoryLink.path} className="text-teal font-bold hover:underline">
                Browse verified {categoryLink.name} in Africa →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <LeadForm equipmentType={equipmentType} />
            <div className="bg-navy text-white p-8 rounded-2xl">
              <h4 className="font-bold mb-4">Why Buy Refurbished?</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex gap-2"><span className="text-teal font-bold">✓</span>Up to 65% cost savings vs new</li>
                <li className="flex gap-2"><span className="text-teal font-bold">✓</span>PPB compliant documentation</li>
                <li className="flex gap-2"><span className="text-teal font-bold">✓</span>12–24 month warranty included</li>
                <li className="flex gap-2"><span className="text-teal font-bold">✓</span>Nairobi installation & training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
            Get Exact Pricing for Your Requirements
          </h2>
          <p className="text-white/60 mb-8">Our verified suppliers respond within 48 hours with a full data room and pricing.</p>
          <Link
            to="/request-verified-pricing-medical-equipment"
            className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-bold hover:bg-teal/90 transition-colors"
          >
            Request Verified Pricing →
          </Link>
        </div>
      </div>
    </Layout>
  );
};
