import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export const UltrasoundBuyingGuide: React.FC = () => (
  <div className="space-y-12">

    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        Buying a refurbished ultrasound machine for your hospital or clinic is one of the highest-impact procurement decisions you'll make. The right system improves diagnostic capability for years. The wrong one — bought without proper certification checks — can fail within months and leave you without recourse.
      </p>
      <p className="text-navy/70 leading-relaxed">
        This guide covers everything African hospital procurement teams need to know: system types, key specifications, what to look for in a refurbished unit, and how to verify supplier credentials before signing a purchase order.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step 1 — Choose the Right System Type</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            type: 'Portable / Point-of-Care',
            priceRange: '$4,000–$12,000',
            bestFor: 'Emergency departments, rural clinics, outreach programmes',
            specs: 'Battery-powered, tablet-based or laptop-based. Limited transducer options. Good for basic OB, FAST exams.',
            brands: 'Mindray M-Turbo, GE Vscan Extend, Philips Lumify',
          },
          {
            type: 'Mid-Range Console',
            priceRange: '$10,000–$25,000',
            bestFor: 'General radiology, OB/GYN, cardiology departments',
            specs: 'Multiple transducer ports, full imaging modes (B-mode, Doppler, 3D/4D). Requires trolley.',
            brands: 'Mindray DC-70, GE LOGIQ E9, Samsung WS80A',
          },
          {
            type: 'Premium Console',
            priceRange: '$25,000–$50,000',
            bestFor: 'Teaching hospitals, tertiary care, complex cardiology',
            specs: 'Advanced imaging (strain, elastography, advanced Doppler). High-end processing. Full probe library.',
            brands: 'Philips EPIQ 7, GE LOGIQ E10, Siemens Acuson Sequoia',
          },
        ].map(sys => (
          <div key={sys.type} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-teal mb-2">{sys.priceRange}</div>
            <div className="font-black text-navy mb-2">{sys.type}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-1">Best for</div>
            <p className="text-sm text-navy/60 mb-3">{sys.bestFor}</p>
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-1">Specs</div>
            <p className="text-sm text-navy/60 mb-3">{sys.specs}</p>
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-1">Common brands</div>
            <p className="text-sm text-navy/60">{sys.brands}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step 2 — Understand What "Refurbished" Actually Means</h2>
      <p className="text-navy/70 leading-relaxed mb-6">
        The word "refurbished" ranges from a cleaned machine with new paint to a fully rebuilt system with replaced transducers, new PCBs, and updated software. Only the latter is clinically safe for diagnostic use. Here's what to look for:
      </p>
      <div className="bg-white border border-navy/5 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Grade</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">What it means</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Suitable for?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['Grade A (ISO 13485 Certified)', 'Full OEM-standard refurbishment. New probes, software update, full QA report. 12–24 month warranty.', 'All clinical settings'],
              ['Grade B (Tested & Working)', 'Functional tested, cosmetic repairs. Limited probe replacement. 6–12 month warranty.', 'Low-volume clinics with in-house biomedical team'],
              ['As-Is / Cosmetic Refurb', 'Cleaned and repackaged only. No component testing. No warranty.', 'Not recommended for clinical use'],
            ].map(([grade, meaning, suitable]) => (
              <tr key={grade} className="hover:bg-clinical/30">
                <td className="p-4 font-medium text-navy">{grade}</td>
                <td className="p-4 text-navy/60">{meaning}</td>
                <td className="p-4 text-navy/70 font-medium">{suitable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step 3 — Specifications to Request Before Buying</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { spec: 'Year of manufacture', why: 'Systems over 10 years old carry higher parts-unavailability risk' },
          { spec: 'Transducer/probe condition report', why: 'Probes are the most expensive single component to replace ($2,000–$8,000 each)' },
          { spec: 'Software version & update eligibility', why: 'Older software may not support current clinical protocols' },
          { spec: 'Hours of use / scan count', why: 'High-use systems (>50,000 scans) show higher failure rates' },
          { spec: 'ISO 13485 refurbishment certificate', why: 'Confirms the refurbisher meets medical device quality management standards' },
          { spec: 'CE marking or FDA clearance', why: 'Required for PPB Type Approval in Kenya and SAHPRA in South Africa' },
          { spec: 'Warranty terms (parts and labour)', why: 'Labour-only warranties leave you exposed to high parts costs' },
          { spec: 'Training and installation included?', why: 'Sonographer training is critical for accurate diagnostic output' },
        ].map(({ spec, why }) => (
          <div key={spec} className="flex gap-3 bg-white border border-navy/5 rounded-xl p-4 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-navy text-sm">{spec}</div>
              <div className="text-xs text-navy/50 mt-0.5">{why}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step 4 — Verify Regulatory Compliance for Your Country</h2>
      <div className="space-y-4">
        {[
          { country: '🇰🇪 Kenya', body: 'PPB (Pharmacy & Poisons Board)', req: 'Type Approval Certificate required. KNRA radiation clearance if system has Doppler/fluoroscopy modes.' },
          { country: '🇳🇬 Nigeria', body: 'NAFDAC', req: 'Product registration required before import. SONCAP pre-shipment inspection certificate needed at Lagos port.' },
          { country: '🇿🇦 South Africa', body: 'SAHPRA', req: 'Section 21 authorisation for unregistered devices. CE or FDA marking required.' },
          { country: '🇬🇭 Ghana', body: 'Ghana FDA', req: 'Medical device registration required. ISO 13485 supplier certification strongly preferred.' },
        ].map(({ country, body, req }) => (
          <div key={country} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-black text-navy">{country}</span>
              <span className="text-xs font-bold text-teal bg-teal/10 px-2 py-0.5 rounded-full">{body}</span>
            </div>
            <p className="text-sm text-navy/60">{req}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6 flex gap-4">
        <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
        <div>
          <div className="font-bold text-navy mb-1">Common mistake: buying from non-specialist traders</div>
          <p className="text-sm text-navy/70">
            Platforms like Alibaba and Jiji list ultrasound machines at attractive prices, but rarely provide ISO 13485 certificates, PPB-compatible documentation, or any real warranty. Equipment bought through these channels frequently fails customs or arrives without calibration. Always buy from a verified medical device refurbisher.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-4">Price Ranges for Refurbished Ultrasound in Africa (2026)</h2>
      <p className="text-navy/70 text-sm mb-4">For detailed brand-by-brand pricing for Kenya, see our dedicated pricing page.</p>
      <Link
        to="/ultrasound-machine-price-kenya"
        className="inline-block border border-teal text-teal px-6 py-3 rounded-xl font-bold hover:bg-teal hover:text-white transition-colors text-sm mr-4"
      >
        Ultrasound Machine Prices Kenya →
      </Link>
      <Link
        to="/refurbished-ultrasound-machines-africa"
        className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-bold hover:bg-teal/90 transition-colors text-sm"
      >
        Browse Verified Ultrasound Suppliers →
      </Link>
    </section>

  </div>
);
