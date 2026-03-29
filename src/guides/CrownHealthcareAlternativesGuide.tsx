import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export const CrownHealthcareAlternativesGuide: React.FC = () => (
  <div className="space-y-12">

    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        Crown Healthcare Kenya is one of the most searched medical equipment suppliers in Kenya — with over 320 searches per month from hospital procurement managers, clinic owners, and healthcare administrators. If you are evaluating Crown Healthcare or looking for verified alternatives with stronger capital equipment coverage, transparent pricing, or pan-Africa delivery, this guide is for you.
      </p>
      <p className="text-navy/70 leading-relaxed">
        Below we break down what Crown Healthcare Kenya offers, where the gaps are, and how a verified ISO 13485 certified supplier network compares for capital equipment procurement.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">What Crown Healthcare Kenya Offers</h2>
      <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm mb-6">
        <p className="text-navy/70 leading-relaxed mb-4">
          Crown Healthcare Kenya is a Nairobi-based distributor covering hospital furniture, basic diagnostics, consumables, and selected capital equipment lines. They are well-established in the Kenyan private health sector and serve a mix of hospitals, clinics, and healthcare NGOs.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-3">What they do well</div>
            <ul className="space-y-2">
              {[
                'Established Nairobi presence and local reputation',
                'Strong hospital furniture and bed catalogue',
                'Good for consumables and basic diagnostics',
                'PPB-registered with local after-sales contacts',
                'Known brand — easy internal approval for procurement teams',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                  <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-3">Known limitations</div>
            <ul className="space-y-2">
              {[
                'Limited certified refurbished imaging equipment (CT, MRI, Ultrasound)',
                'Pricing not publicly listed — catalogue on request only',
                'No pan-Africa delivery network',
                'ISO 13485 certification status not publicly confirmed for refurbished lines',
                'Limited brand choice on capital equipment — tied to specific distributors',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Comparison: Crown Healthcare Kenya vs Verified B2B Suppliers</h2>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-clinical border-b border-navy/5">
              <tr>
                <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Criteria</th>
                <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Crown Healthcare Kenya</th>
                <th className="text-left p-4 font-bold text-teal uppercase tracking-widest text-xs">MedicalEquipment.Africa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy/5">
              {[
                ['Equipment types', 'Furniture, consumables, basic diagnostics', 'Imaging, Lab, ICU, Surgical, Beds'],
                ['Certified refurbished imaging', 'Limited availability', 'ISO 13485 certified, full range'],
                ['Price transparency', 'Catalogue on request', 'Price ranges published per brand'],
                ['ISO 13485 certification', 'Not publicly confirmed', 'Required for all listed suppliers'],
                ['Warranty on capital equipment', 'Varies', '12–24 months standard'],
                ['Delivery coverage', 'Kenya (Nairobi focus)', 'Kenya, Nigeria, SA, Ghana, Uganda'],
                ['Regulatory documentation', 'PPB', 'PPB, NAFDAC, SAHPRA, Ghana FDA'],
                ['Brand choice', 'Limited to distributor agreements', 'GE, Siemens, Philips, Mindray, Samsung'],
                ['Installation and training', 'Selected products', 'Included for all capital equipment'],
                ['Ultrasound machine prices', 'Not listed online', 'From $4,000 — published price ranges'],
                ['X-ray machine prices', 'Not listed online', 'From $5,000 — published price ranges'],
                ['MRI machine prices', 'Not listed online', 'From $80,000 — published price ranges'],
              ].map(([criteria, crown, mea]) => (
                <tr key={criteria} className="hover:bg-clinical/30">
                  <td className="p-4 font-medium text-navy">{criteria}</td>
                  <td className="p-4 text-navy/60">{crown}</td>
                  <td className="p-4 text-navy font-medium">{mea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Crown Healthcare Kenya Catalogue — What to Expect</h2>
      <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
        <p className="text-navy/70 leading-relaxed mb-5">
          Crown Healthcare Kenya does not publish a public price catalogue online. If you have been searching for a "Crown Healthcare Kenya catalogue" or "Crown Healthcare Kenya price list", you will need to contact them directly for a quote. This is common among Kenyan distributors — but it adds friction for procurement teams working to multiple supplier quotes.
        </p>
        <p className="text-navy/70 leading-relaxed mb-5">
          For capital equipment comparison, MedicalEquipment.Africa publishes verified price ranges for all major equipment categories so you can benchmark any Crown Healthcare quote before committing:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Ultrasound machine price in Kenya', range: '$4,000 – $45,000', href: '/ultrasound-machine-price-kenya' },
            { label: 'X-ray machine price in Kenya', range: '$5,000 – $50,000', href: '/x-ray-machine-price-kenya' },
            { label: 'MRI machine price in Kenya', range: '$80,000 – $450,000', href: '/mri-machine-price-kenya' },
          ].map(item => (
            <Link key={item.href} to={item.href} className="block bg-clinical rounded-xl p-5 hover:bg-teal/10 transition-colors group">
              <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">{item.label}</div>
              <div className="text-lg font-black text-navy mb-3">{item.range}</div>
              <div className="text-teal text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                View full price guide <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Other Verified Alternatives in Kenya</h2>
      <div className="space-y-4">
        {[
          {
            name: 'Pioneer Medical Supplies Kenya',
            desc: 'Another well-known Nairobi distributor. Strong on consumables and smaller diagnostics. Limited certified refurbished capital equipment coverage.',
            fit: 'Good for: consumables, small diagnostic equipment',
            href: '/guides/pioneer-medical-supplies-kenya-alternatives',
          },
          {
            name: 'Philips Healthcare East Africa',
            desc: 'Direct OEM presence in Kenya for new Philips equipment. Pricing is significantly higher than certified refurbished alternatives — typically 2 to 3 times the refurbished price.',
            fit: 'Good for: new Philips equipment with full OEM support',
            href: null,
          },
          {
            name: 'MedicalEquipment.Africa Verified Network',
            desc: 'B2B directory connecting Kenyan hospitals directly with ISO 13485 certified refurbishers in Europe and the US. Best option for capital equipment (CT, MRI, Ultrasound, Lab) at 40 to 65% below new prices with full PPB documentation.',
            fit: 'Good for: capital equipment, volume procurement, multi-country delivery',
            href: '/refurbished-medical-equipment-kenya-nairobi',
          },
        ].map(alt => (
          <div key={alt.name} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="font-black text-navy mb-1">{alt.name}</div>
            <p className="text-sm text-navy/60 mb-2">{alt.desc}</p>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="text-xs font-bold text-teal">{alt.fit}</div>
              {alt.href && (
                <Link to={alt.href} className="text-xs text-navy/50 hover:text-teal transition-colors font-medium flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6 flex gap-4">
        <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
        <div>
          <div className="font-bold text-navy mb-1">Procurement note for capital equipment</div>
          <p className="text-sm text-navy/70">
            For any medical device valued over $10,000, verify that your supplier holds a current ISO 13485 Quality Management Certificate and can provide PPB Type Approval documentation for Kenya. Local distributors including Crown Healthcare may not carry these for refurbished imaging equipment — which can cause delays at Kenya Ports Authority customs clearance or PPB inspection. Always request the full documentation package before placing a purchase order.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-4">Bottom Line</h2>
      <p className="text-navy/70 leading-relaxed mb-4">
        Crown Healthcare Kenya is a solid, well-regarded supplier for hospital furniture, consumables, and basic diagnostics in Nairobi. For capital equipment — CT scanners, MRI systems, ultrasound machines, and laboratory analysers — you will get better pricing, stronger documentation, and broader brand choice through a verified ISO 13485 certified supplier network.
      </p>
      <p className="text-navy/70 leading-relaxed mb-6">
        The best approach is to use Crown Healthcare for what they do well (furniture, beds, consumables) and use a verified B2B network for capital equipment — combining local presence with international procurement standards.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          to="/refurbished-medical-equipment-kenya-nairobi"
          className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-bold hover:bg-teal/90 transition-colors text-sm"
        >
          Browse Verified Kenya Suppliers →
        </Link>
        <Link
          to="/request-verified-pricing-medical-equipment"
          className="inline-block bg-white border border-navy/20 text-navy px-6 py-3 rounded-xl font-bold hover:border-teal hover:text-teal transition-colors text-sm"
        >
          Request a Verified Price Comparison
        </Link>
      </div>
    </section>

  </div>
);
