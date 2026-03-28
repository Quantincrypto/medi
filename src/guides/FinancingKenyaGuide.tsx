import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export const FinancingKenyaGuide: React.FC = () => (
  <div className="space-y-12">

    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        The upfront cost of diagnostic equipment is the single biggest barrier for Kenyan private hospitals and clinics. A refurbished CT scanner costs $80,000–$200,000. An MRI system costs $150,000–$400,000. Even a mid-range ultrasound is $12,000–$25,000 — significant for a facility with limited capital reserves.
      </p>
      <p className="text-navy/70 leading-relaxed">
        The good news: multiple financing and leasing routes exist specifically for Kenyan healthcare providers. This guide covers your options, from commercial bank loans to development finance and equipment leasing structures.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Option 1 — Equipment Leasing</h2>
      <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm mb-4">
        <p className="text-navy/70 text-sm leading-relaxed mb-4">
          Equipment leasing lets your facility use the equipment without the full upfront capital cost. You pay monthly or quarterly instalments over 3–5 years. At the end of the lease, you typically have the option to purchase the equipment at residual value.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-3">Advantages</div>
            <ul className="space-y-2">
              {[
                'Preserves working capital',
                'Equipment is off your balance sheet',
                'Upgrade at end of lease term',
                'Lease payments are tax-deductible in Kenya',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                  <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-3">Watch out for</div>
            <ul className="space-y-2">
              {[
                'Total cost over lease term exceeds purchase price',
                'Early termination penalties',
                'Maintenance responsibility (clarify in contract)',
                'Residual value disputes at end of term',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                  <AlertTriangle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-3">Leasing providers active in Kenya</div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { name: 'NCBA Leasing', note: 'Strong on medical equipment, competitive rates' },
          { name: 'Stanbic Kenya', note: 'Asset finance division, good for capital equipment' },
          { name: 'Absa Bank Kenya', note: 'Equipment finance with flexible structures' },
        ].map(p => (
          <div key={p.name} className="bg-clinical rounded-xl p-4 border border-navy/5">
            <div className="font-bold text-navy text-sm">{p.name}</div>
            <div className="text-xs text-navy/50 mt-1">{p.note}</div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Option 2 — Commercial Bank Loans</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-6">
        Term loans for medical equipment in Kenya typically run 3–7 years at 13–17% per annum. Most banks require a 20–30% deposit, PPB Type Approval documentation for the equipment, and a proven revenue history of 2+ years.
      </p>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Bank</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Product</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['KCB Bank Kenya', 'SME Asset Finance', 'Good for clinics with existing KCB banking relationship'],
              ['Equity Bank', 'Business Asset Finance', 'Covers up to KES 50M for established facilities'],
              ['NCBA Bank', 'Equipment Finance', 'Specialist in medical and professional equipment'],
              ['Stanbic Kenya', 'Asset Finance', 'Competitive rates for Tier 2 hospitals'],
              ['I&M Bank', 'Healthcare Sector Loan', 'Dedicated healthcare division with clinical understanding'],
            ].map(([bank, product, notes]) => (
              <tr key={bank} className="hover:bg-clinical/30">
                <td className="p-4 font-medium text-navy">{bank}</td>
                <td className="p-4 text-navy/60">{product}</td>
                <td className="p-4 text-navy/50 text-xs">{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Option 3 — Development Finance (IFC, AFDB, DEG)</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        For larger facilities (50+ beds) or expansion projects, development finance institutions offer concessional rates well below commercial bank rates — typically 7–10% per annum.
      </p>
      <div className="space-y-4">
        {[
          {
            name: 'IFC (International Finance Corporation)',
            rate: '7–9% p.a.',
            min: '$1M+',
            desc: 'World Bank Group. Targets private healthcare expansion projects in Kenya. Requires strong governance and audited accounts.',
          },
          {
            name: 'DEG (German Development Finance)',
            rate: '8–10% p.a.',
            min: '$500K+',
            desc: 'German DFI with active healthcare portfolio in East Africa. More accessible than IFC for mid-size facilities.',
          },
          {
            name: 'Proparco (French DFI)',
            rate: '8–11% p.a.',
            min: '$500K+',
            desc: 'Active in Kenya. Funds healthcare infrastructure including equipment capex.',
          },
        ].map(dfi => (
          <div key={dfi.name} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div className="font-black text-navy">{dfi.name}</div>
              <div className="flex gap-2">
                <span className="text-xs font-bold text-teal bg-teal/10 px-2 py-0.5 rounded-full">{dfi.rate}</span>
                <span className="text-xs font-bold text-navy/40 bg-navy/5 px-2 py-0.5 rounded-full">Min: {dfi.min}</span>
              </div>
            </div>
            <p className="text-sm text-navy/60">{dfi.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Option 4 — Revenue-Share / Pay-Per-Scan Models</h2>
      <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
        <p className="text-navy/70 text-sm leading-relaxed mb-4">
          Some international refurbishers and distributors offer revenue-share models for African facilities — particularly for high-volume modalities like CT and MRI. Under this structure, you pay per scan rather than a capital sum. The supplier owns the equipment and is responsible for maintenance.
        </p>
        <div className="bg-teal/5 border border-teal/20 rounded-lg px-4 py-3 text-sm text-navy/70">
          <span className="font-bold">Typical terms: </span>$30–$80 per CT scan, $80–$150 per MRI scan. Minimum scan volume guarantees usually required. Best suited for facilities with strong referral volumes but limited capital.
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-4">Which Option Is Right for You?</h2>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Your situation</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Best option</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['New clinic, limited credit history', 'Leasing (lower barrier than loan)'],
              ['Established facility, good banking relationship', 'Commercial bank loan (lower total cost)'],
              ['Large hospital expansion ($1M+ project)', 'Development finance (IFC/DEG/Proparco)'],
              ['High scan volumes, limited capital', 'Revenue-share / pay-per-scan'],
              ['Strong balance sheet, prefer ownership', 'Direct purchase through verified supplier'],
            ].map(([situation, option]) => (
              <tr key={situation} className="hover:bg-clinical/30">
                <td className="p-4 text-navy/70">{situation}</td>
                <td className="p-4 font-medium text-navy">{option}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <p className="text-sm text-navy/60 mb-4">Our verified suppliers can provide financing-ready documentation packages (PPB Type Approval, ISO 13485, technical specs) to support your bank application.</p>
      <Link
        to="/refurbished-medical-equipment-kenya-nairobi"
        className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-bold hover:bg-teal/90 transition-colors text-sm"
      >
        Get Financing-Ready Supplier Quotes →
      </Link>
    </section>

  </div>
);
