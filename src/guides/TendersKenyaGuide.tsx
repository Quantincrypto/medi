import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

export const TendersKenyaGuide: React.FC = () => (
  <div className="space-y-12">

    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        Government and NGO medical equipment tenders in Kenya represent some of the highest-value procurement contracts available to suppliers and distributors. County hospital tenders, KEMSA framework agreements, and donor-funded NGO procurement can each run to tens of millions of shillings per award.
      </p>
      <p className="text-navy/70 leading-relaxed">
        This guide is for medical equipment suppliers, distributors, and importers looking to access Kenya's public procurement market. We cover where tenders are advertised, what documentation you need, and the most common reasons bids are disqualified.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Where Kenya Medical Equipment Tenders Are Advertised</h2>
      <div className="space-y-4">
        {[
          {
            name: 'PPRA eTenders Portal (tenders.go.ke)',
            desc: 'The Public Procurement Regulatory Authority portal is the primary source for all government tenders above KES 3M. All county and national government hospitals are required to advertise here.',
            frequency: 'Daily updates',
            tip: 'Set up keyword alerts for "medical equipment", "imaging equipment", "laboratory equipment" to catch new tenders immediately.',
          },
          {
            name: 'KEMSA (Kenya Medical Supplies Authority)',
            desc: 'KEMSA runs framework agreements for bulk medical supplies to public health facilities. Being on a KEMSA framework means automatic access to county hospital procurement without competing in individual tenders.',
            frequency: 'Framework renewals every 2–3 years',
            tip: 'Apply to be a KEMSA approved supplier during their open registration periods. Once listed, orders come to you.',
          },
          {
            name: 'Kenya Gazette',
            desc: 'Legal requirement for tenders above KES 5M. Published every Friday. Slower than eTenders but legally authoritative.',
            frequency: 'Weekly',
            tip: null,
          },
          {
            name: 'Individual Ministry / County Websites',
            desc: 'Ministry of Health and county health departments sometimes advertise tenders on their own websites before they appear on eTenders. Worth monitoring directly.',
            frequency: 'Irregular',
            tip: null,
          },
          {
            name: 'NGO Procurement Portals',
            desc: 'MSF, Amref, USAID/PEPFAR implementing partners, and Red Cross publish tenders on their own websites and on platforms like DevelopmentAid and TenderBoard. These often have less competition than government tenders.',
            frequency: 'Varies by organisation',
            tip: 'NGO tenders often require UN or donor-specific certifications (e.g. IAPSO pre-qualification). Apply proactively before a specific tender appears.',
          },
        ].map(source => (
          <div key={source.name} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div className="font-black text-navy">{source.name}</div>
              <div className="flex items-center gap-1 text-xs font-bold text-navy/40">
                <Clock className="w-3 h-3" />{source.frequency}
              </div>
            </div>
            <p className="text-sm text-navy/60 mb-3">{source.desc}</p>
            {source.tip && (
              <div className="bg-teal/5 border border-teal/20 rounded-lg px-4 py-2 text-xs text-navy/70">
                <span className="font-bold text-teal">Tip: </span>{source.tip}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Mandatory Documentation for Kenya Government Tenders</h2>
      <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
        <p className="text-sm text-navy/60 mb-4">Missing any of these from your bid results in automatic disqualification — no exceptions under PPRA regulations.</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Valid Business Registration Certificate',
            'KRA PIN Certificate',
            'Tax Compliance Certificate (current)',
            'PPB Medical Device Registration (for each product)',
            'ISO 13485 Certificate (manufacturer/refurbisher)',
            'CE Marking Declaration of Conformity',
            'Audited Financial Statements (last 3 years)',
            'Bank Reference Letter',
            'Certificate of Incorporation (if limited company)',
            'CR12 (directors listing, within 3 months)',
            'Public Liability Insurance Certificate',
            'Signed tender form (mandatory)',
          ].map(doc => (
            <div key={doc} className="flex items-center gap-2 text-sm text-navy/70">
              <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
              {doc}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Top Reasons Bids Are Disqualified</h2>
      <div className="space-y-3">
        {[
          { reason: 'Expired tax compliance certificate', fix: 'KRA certificates expire every 12 months. Set a calendar reminder 3 weeks before expiry to renew.' },
          { reason: 'PPB registration missing for tendered items', fix: 'PPB registration is per product — ensure every item in your bid has its own registration certificate attached.' },
          { reason: 'Late bid submission', fix: 'PPRA regulations are strict — bids submitted even 1 minute late are rejected. Submit at least 48 hours early.' },
          { reason: 'Technical spec deviation >10%', fix: 'Read the technical specifications carefully. Any deviation must be flagged and explained. Unexplained deviations cause disqualification.' },
          { reason: 'Missing co-signed forms', fix: 'Many tender forms require both the company director and authorised signatory signatures. Print every form and check signature requirements.' },
          { reason: 'Incorrect bid bond amount or expiry', fix: 'Bid bonds must be for the exact percentage stated and must not expire before the tender validity period ends.' },
        ].map(item => (
          <div key={item.reason} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm">
            <div className="flex gap-3">
              <AlertTriangle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-navy text-sm mb-1">{item.reason}</div>
                <p className="text-xs text-navy/60">{item.fix}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Typical Tender Timeline</h2>
      <div className="space-y-3">
        {[
          { phase: 'Tender advertised', duration: 'Day 0' },
          { phase: 'Mandatory pre-bid site visit (if required)', duration: 'Day 7–14' },
          { phase: 'Bid submission deadline', duration: 'Day 21–30' },
          { phase: 'Public bid opening', duration: 'Same day as deadline' },
          { phase: 'Technical evaluation', duration: '2–6 weeks' },
          { phase: 'Award notification', duration: '2–4 weeks after evaluation' },
          { phase: 'LPO / contract issued', duration: '1–2 weeks after award' },
          { phase: 'Delivery & acceptance testing', duration: '4–12 weeks after LPO' },
          { phase: 'Payment (30–90 days)', duration: 'After acceptance certificate' },
        ].map((step, i) => (
          <div key={step.phase} className="flex items-center gap-4 bg-white border border-navy/5 rounded-xl px-5 py-3">
            <div className="text-sm font-black text-teal/40 w-6 flex-shrink-0">{String(i + 1).padStart(2, '0')}</div>
            <div className="flex-1 text-sm text-navy">{step.phase}</div>
            <div className="text-xs font-bold text-navy/40">{step.duration}</div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <p className="text-sm text-navy/60 mb-4">
        Verified suppliers on MedicalEquipment.Africa can provide full tender documentation packages including ISO 13485 certificates, technical datasheets, and PPB pre-clearance letters for rapid bid preparation.
      </p>
      <Link
        to="/refurbished-medical-equipment-kenya-nairobi"
        className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-bold hover:bg-teal/90 transition-colors text-sm"
      >
        Find Tender-Ready Kenya Suppliers →
      </Link>
    </section>

  </div>
);
