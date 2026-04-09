import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, Clock, TrendingUp, MapPin } from 'lucide-react';

export const GhanaFDAGuide: React.FC = () => (
  <div className="space-y-12">

    {/* Intro */}
    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        Ghana is having a moment. While other West African markets have been grappling with economic turbulence, security concerns, or regulatory opacity, Ghana has quietly built a reputation as the region's most business-friendly destination for international medical equipment suppliers. For companies evaluating their West African market entry strategy, importing medical equipment into Ghana is increasingly the answer to a question that used to point somewhere else.
      </p>
      <p className="text-navy/70 leading-relaxed mb-4">
        This guide is not a compliance checklist. It is a market entry brief — written for business development managers, export directors, and distribution strategists who want to understand not just how to register a product with the Food and Drugs Authority (FDA Ghana), but why Ghana is worth the effort and how to use it as a foundation for broader regional reach.
      </p>
    </section>

    {/* Internal link */}
    <section>
      <div className="bg-teal/5 border border-teal/15 rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Related Resource</div>
        <p className="text-sm text-navy/70 mb-3">Sourcing refurbished equipment for Ghanaian hospitals? Browse verified, ISO 13485-certified suppliers ready for FDA Ghana registration.</p>
        <Link to="/used-medical-equipment-ghana-accra" className="text-teal font-bold text-sm hover:underline">Used Medical Equipment — Ghana (Accra) →</Link>
      </div>
    </section>

    {/* Why Ghana */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Why Ghana Is Becoming West Africa's Preferred Medical Equipment Market</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        Ghana's appeal is not about market size — with a population of 34 million, it is substantially smaller than its neighbours. The appeal is about the operating environment. Ghana has been a stable, functioning democracy since 1992 with an independent judiciary, a professional civil service, and a business registration system that works. It consistently ranks among the top West African performers on the World Bank's Ease of Doing Business index — and it is the only major West African market that conducts government business primarily in English.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          {
            icon: <TrendingUp size={20} className="text-teal" />,
            title: 'Healthcare Investment Gap',
            body: 'Radiological services available in fewer than 30% of district hospitals. Laboratory automation limited outside teaching hospitals. Dialysis capacity critically short. These are active procurement problems Ministry of Health officials are trying to solve.',
          },
          {
            icon: <CheckCircle2 size={20} className="text-teal" />,
            title: 'Stable Operating Environment',
            body: 'English-language commerce, functioning banking system, transparent regulatory processes, and consistent democratic governance since 1992. The operating environment international suppliers consistently underestimate.',
          },
          {
            icon: <MapPin size={20} className="text-teal" />,
            title: 'Regional Distribution Platform',
            body: 'Accra is 3 hours from Abidjan, 6 hours from Lomé. The best port infrastructure in West Africa. A gateway to 350 million people across ECOWAS — with a regulatory head-start over every Francophone neighbour.',
          },
        ].map(({ icon, title, body }) => (
          <div key={title} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm">
            <div className="mb-3">{icon}</div>
            <div className="font-black text-navy text-sm mb-2">{title}</div>
            <p className="text-xs text-navy/60 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <div className="bg-teal/5 border border-teal/15 rounded-xl px-5 py-4 text-sm text-navy/70">
        <span className="font-bold text-navy">Why now: </span>
        The convergence of NHIA-funded procurement, private hospital growth, and development financing (World Bank, African Development Bank health infrastructure loans) means 2025–2035 is likely Ghana's most significant period of healthcare capital investment. Companies that establish regulatory standing now are positioned to capture this demand. Companies that wait will find the market more competitive and more expensive to enter.
      </div>
    </section>

    {/* FDA Ghana vs other regulators */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">FDA Ghana vs Other West African Regulators</h2>
      <p className="text-navy/70 text-sm mb-6">
        The Food and Drugs Authority of Ghana — FDA Ghana — was established under the Food and Drugs Act, 2012 (Act 851). For suppliers with experience in other West African markets, FDA Ghana will feel meaningfully different to work with: predictable, transparent, and English-language throughout.
      </p>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden mb-4">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Regulator</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Country</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Model</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Timeline</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">English</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['FDA Ghana', 'Ghana', 'Product Registration + CFS', '4–8 months', 'Yes', true],
              ['NAFDAC', 'Nigeria', 'Full Registration + Pre-shipment', '9–18 months', 'Yes', false],
              ['DPM', 'Côte d\'Ivoire', 'Authorisation de mise sur le marché', '6–12 months', 'No (French)', false],
              ['ANRP', 'Senegal', 'Enregistrement', '6–14 months', 'No (French)', false],
              ['DGPML', 'Burkina Faso', 'Product registration', '8–16 months', 'No (French)', false],
            ].map(([reg, country, model, timeline, english, highlight]) => (
              <tr key={reg} className={`hover:bg-clinical/30 ${highlight ? 'bg-teal/5' : ''}`}>
                <td className="p-4 font-black text-navy">{reg}</td>
                <td className="p-4 text-navy/60">{country}</td>
                <td className="p-4 text-navy/60 text-xs">{model}</td>
                <td className={`p-4 font-bold text-xs ${highlight ? 'text-teal' : 'text-navy/40'}`}>{timeline}</td>
                <td className="p-4 text-xs text-navy/60">{english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-navy/40">FDA Ghana is predictable in a way that matters to exporters. Submission requirements are published and consistently applied. Timelines, while not as fast as Kenya's PPB, are substantially more reliable than most alternatives in the sub-region.</p>
    </section>

    {/* Classification */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Ghana's Medical Device Classification System</h2>
      <p className="text-navy/70 text-sm mb-6">FDA Ghana classifies medical devices under a four-tier risk framework aligned with GHTF guidance. Classification determines your dossier requirements, applicable fees, and review timeline.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            cls: 'Class A',
            risk: 'Low Risk',
            examples: 'Non-sterile examination gloves, hospital furniture, basic bandaging materials, tongue depressors, non-measuring patient aids',
            pathway: 'Lightest regulatory scrutiny — registration still required before sale in Ghana',
            color: 'border-l-4 border-teal',
          },
          {
            cls: 'Class B',
            risk: 'Low to Medium Risk',
            examples: 'Blood pressure monitors (non-invasive), basic patient monitoring, manual wheelchairs, examination lights, non-critical diagnostic reagents',
            pathway: 'Standard registration dossier and review',
            color: 'border-l-4 border-teal/60',
          },
          {
            cls: 'Class C',
            risk: 'Medium to High Risk',
            examples: 'Digital X-ray, ultrasound imaging, haemodialysis machines, infusion pumps, clinical laboratory analysers, ventilators, surgical lasers',
            pathway: 'Detailed technical review — most capital equipment imported by Ghanaian hospitals sits here',
            color: 'border-l-4 border-gold',
          },
          {
            cls: 'Class D',
            risk: 'High Risk',
            examples: 'Implantable cardiac devices, HIV rapid test kits (blood transfusion services), implantable drug delivery systems',
            pathway: 'Clinical evidence review, highest fees, longest timelines',
            color: 'border-l-4 border-red-400',
          },
        ].map(({ cls, risk, examples, pathway, color }) => (
          <div key={cls} className={`bg-white rounded-2xl p-5 shadow-sm border border-navy/5 ${color}`}>
            <div className="font-black text-navy text-lg mb-1">{cls}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">{risk}</div>
            <p className="text-xs text-navy/60 mb-3"><span className="font-bold text-navy/70">Examples: </span>{examples}</p>
            <p className="text-xs text-navy/70"><span className="font-bold">Pathway: </span>{pathway}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Step by step */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step-by-Step FDA Ghana Registration Process</h2>
      <div className="space-y-4">
        {[
          {
            n: '01',
            title: 'Appoint a Ghanaian Product Registrant',
            timeline: '4–8 weeks to establish',
            desc: 'FDA Ghana requires that the entity applying for product registration be a Ghanaian company or individual. You must appoint a Ghanaian local representative — referred to as the Product Registrant — who holds the registration and acts as the regulatory point of contact in Ghana. This may be your Ghanaian distributor, a dedicated regulatory affairs firm, or a Ghanaian subsidiary.',
            tip: 'The Product Registrant owns the registration legally. If your relationship ends, the registration stays with them. Address this in your contracts before registration begins — include conditions for registration transfer and obligations on both parties.',
          },
          {
            n: '02',
            title: 'Determine Your Product\'s Classification',
            timeline: '1–2 weeks',
            desc: 'Confirm your device\'s FDA Ghana risk classification before assembling any documents. Do not assume that classification from another market translates directly. If there is any ambiguity, seek written classification guidance from FDA Ghana before proceeding — a misclassified submission gets returned, not corrected in review.',
            tip: 'For capital equipment (ultrasound, X-ray, haemodialysis, ventilators), plan on Class C. Budget your timeline and fees accordingly.',
          },
          {
            n: '03',
            title: 'Register on FDA Ghana\'s Online Portal',
            timeline: '1–2 weeks',
            desc: 'FDA Ghana accepts applications through its online product registration portal. Submissions are initiated through the portal, which generates reference numbers and tracks application status. Your Product Registrant should register on the portal and review current submission guidance before dossier assembly begins.',
            tip: 'Formatting and document upload requirements are specific. Spending time on this before building your dossier prevents reformatting delays at submission.',
          },
          {
            n: '04',
            title: 'Assemble the Technical Dossier',
            timeline: '6–14 weeks',
            desc: 'Dossier preparation is where the most time investment sits. The most consistent bottleneck is obtaining correctly authenticated documents from overseas manufacturers — Certificate of Free Sale (apostilled), ISO 13485 certificates, and manufacturer authorisation letters each require coordination with origin country authorities.',
            tip: 'Start the Certificate of Free Sale process as soon as you commit to a Ghana registration — not when the rest of your dossier is ready. This document alone can take 4–8 weeks to obtain and authenticate.',
          },
          {
            n: '05',
            title: 'Submit Application and Pay Fees',
            timeline: 'Day of submission',
            desc: 'Applications are submitted through the online portal with supporting documents uploaded in specified formats. Payment of application fees is required at submission. FDA Ghana then conducts an administrative completeness check before the file moves to technical review. An incomplete submission is returned — resetting the clock entirely.',
            tip: 'Verify against the published checklist before submitting. Passing the administrative check on first submission saves 2–4 weeks minimum.',
          },
          {
            n: '06',
            title: 'Technical Review and Query Response',
            timeline: '2–5 months',
            desc: 'FDA Ghana technical reviewers assess the dossier against class-specific requirements. Queries are possible at this stage, particularly for Class C and D devices. Query responses must be submitted within FDA Ghana\'s specified timeframe — typically 60–90 days. A missed query deadline results in the application being lapsed, not paused.',
            tip: 'Establish a query response protocol with your manufacturer before submitting. Many queries require technical input that can take weeks to obtain from overseas teams.',
          },
          {
            n: '07',
            title: 'Certificate Issuance',
            timeline: '1–3 weeks after approval',
            desc: 'Upon approval, FDA Ghana issues a Product Registration Certificate authorising commercial importation and distribution of the registered device in Ghana. Certificates are typically valid for 3–5 years, after which renewal is required.',
            tip: 'Diarise your renewal date immediately and begin the renewal process at least 3 months before expiry. A lapsed registration means you cannot legally import or distribute until renewed.',
          },
        ].map(({ n, title, timeline, desc, tip }) => (
          <div key={n} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm flex gap-5">
            <div className="text-3xl font-black text-navy/10 shrink-0 w-12 text-right">{n}</div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="font-black text-navy">{title}</span>
                <span className="flex items-center gap-1 text-xs text-navy/40 font-medium">
                  <Clock size={11} /> {timeline}
                </span>
              </div>
              <p className="text-sm text-navy/60 leading-relaxed mb-3">{desc}</p>
              <div className="flex items-start gap-2 bg-teal/5 rounded-lg px-3 py-2">
                <AlertTriangle size={13} className="text-teal mt-0.5 shrink-0" />
                <p className="text-xs text-navy/60">{tip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Realistic Total Timelines by Class</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { cls: 'Class A', time: '1–3 months' },
            { cls: 'Class B', time: '3–5 months' },
            { cls: 'Class C', time: '5–9 months' },
            { cls: 'Class D', time: '8–14 months' },
          ].map(({ cls, time }) => (
            <div key={cls} className="text-center">
              <div className="font-black text-navy text-sm mb-1">{cls}</div>
              <div className="text-teal font-bold text-xs">{time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Document checklist */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Complete Documentation Checklist</h2>
      <p className="text-navy/70 text-sm mb-6">Applies to Class B and Class C device registrations. Class D requires additional clinical performance data.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">From the Manufacturer (Country of Origin)</div>
          <div className="space-y-3">
            {[
              'Certificate of Free Sale (CFS) — apostilled where required',
              'ISO 13485 QMS certificate — current, from accredited body',
              'CE Mark certificate or FDA 510(k)/513(f) clearance, or equivalent',
              'Declaration of Conformity or equivalent manufacturer\'s conformity declaration',
              "Manufacturer's Authorisation Letter appointing Ghanaian Product Registrant",
              'Full product technical specifications and intended use statement',
              'Instructions for Use (IFU) / User Manual — in English',
              'Risk management summary — aligned to ISO 14971 (Class C/D)',
              'Clinical or performance evidence summary (Class C/D)',
              'Biocompatibility data (for patient-contacting devices)',
              'Sterilisation validation report (for sterile devices)',
              'Shelf life / stability data (where applicable)',
              'List of countries where product is registered or marketed',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">From the Ghanaian Product Registrant</div>
          <div className="space-y-3">
            {[
              'Completed FDA Ghana application form (via online portal)',
              'Company registration documents — Registrar General\'s Department (Ghana)',
              'Evidence of good standing / current business registration',
              'Storage facility documentation (where required by device class)',
              'Signed distributor or product registrant agreement with manufacturer',
              'Payment confirmation of applicable registration fees',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Fee schedule */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Fee Schedule in GHS and USD</h2>
      <p className="text-navy/70 text-sm mb-6">
        FDA Ghana fees are set by regulation and subject to periodic revision. Verify current fees directly with FDA Ghana before submission. Exchange rate approximation: GHS 15.00/USD — note the Ghanaian Cedi has experienced significant depreciation; build a 20–30% FX buffer into any USD-denominated budget.
      </p>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden mb-4">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Fee Category</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">GHS</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">USD (approx.)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['Application — Class A', 'GHS 500–1,200', '~$35–$80'],
              ['Application — Class B', 'GHS 1,500–3,000', '~$100–$200'],
              ['Application — Class C', 'GHS 4,000–8,000', '~$267–$533'],
              ['Application — Class D', 'GHS 8,000–15,000', '~$533–$1,000'],
              ['Annual renewal — Class A', 'GHS 300–600', '~$20–$40'],
              ['Annual renewal — Class B', 'GHS 750–1,500', '~$50–$100'],
              ['Annual renewal — Class C', 'GHS 1,500–3,500', '~$100–$233'],
              ['Annual renewal — Class D', 'GHS 3,000–6,000', '~$200–$400'],
            ].map(([cat, ghs, usd]) => (
              <tr key={cat} className="hover:bg-clinical/30">
                <td className="p-4 text-navy/70">{cat}</td>
                <td className="p-4 font-bold text-navy">{ghs}</td>
                <td className="p-4 text-navy/60">{usd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: 'Product Registrant fees (annual)', value: 'GHS 5,000–20,000' },
          { label: 'Regulatory consultancy (per submission)', value: 'GHS 3,000–15,000' },
          { label: 'Total Class C budget (all-in)', value: 'GHS 15,000–50,000' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-clinical rounded-xl p-4">
            <div className="text-xs text-navy/50 mb-1">{label}</div>
            <div className="font-black text-navy text-sm">{value}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Fast-track */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Ghana's Fast-Track Registration Process for Essential Medical Devices</h2>
      <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6 mb-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">One of West Africa's Most Useful Regulatory Mechanisms</div>
        <p className="text-sm text-navy/70 leading-relaxed">
          FDA Ghana operates an expedited review pathway for medical devices classified as essential — equipment addressing critical public health gaps identified by the Ministry of Health. This mechanism remains underutilised by international suppliers who are not aware it exists.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">What Qualifies</div>
          <div className="space-y-3">
            {[
              'Devices on Ghana\'s Essential Health Services package',
              'WHO Priority Medical Devices list equipment',
              'Diagnostic imaging equipment (CT, X-ray, ultrasound)',
              'Laboratory automation systems',
              'Dialysis equipment',
              'Ventilators and emergency care equipment',
              'Equipment addressing identified national shortage areas',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">How It Works</div>
          <p className="text-sm text-navy/60 leading-relaxed mb-4">
            At the time of submission, your Product Registrant submits a covering request identifying the device's essential healthcare category and relevant national health priority. FDA Ghana's technical committee reviews the fast-track request — if approved, the application is elevated in the review queue.
          </p>
          <div className="space-y-3">
            {[
              { cls: 'Class B fast-track', time: '6–10 weeks' },
              { cls: 'Class C fast-track', time: '3–5 months' },
            ].map(({ cls, time }) => (
              <div key={cls} className="flex justify-between items-center bg-clinical rounded-lg px-4 py-3">
                <span className="text-xs font-bold text-navy">{cls}</span>
                <span className="text-xs text-teal font-bold">{time}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2 bg-gold/10 rounded-lg px-3 py-2">
            <AlertTriangle size={13} className="text-gold mt-0.5 shrink-0" />
            <p className="text-xs text-navy/60">Fast-track is a queue prioritisation mechanism, not a reduced documentation requirement. An incomplete fast-track application is returned just as quickly as a standard one.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Tema Port */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Customs Clearance at Tema Port: A Practical Guide</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-6">
        The Port of Tema, 25 kilometres east of Accra, is Ghana's primary commercial seaport and the main entry point for medical equipment imports. Understanding how Tema works is as important as understanding FDA Ghana registration — a registered product held at port is not generating revenue.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Required Documents for Clearance</div>
          <div className="space-y-3">
            {[
              'Commercial Invoice — must show HS Code, FOB value, country of origin',
              'Packing List',
              'Bill of Lading (sea) or Airway Bill (Kotoka International Airport)',
              'Certificate of Origin — important for ECOWAS preferential tariff treatment',
              'FDA Ghana Product Registration Certificate (valid, matching consignment)',
              'Insurance Certificate',
              'Conformity Assessment Certificate (where required for the HS Code)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Import Levies and Duties</div>
          <p className="text-xs text-navy/60 mb-4">Ghana applies the ECOWAS Common External Tariff (CET). Most medical equipment attracts <span className="font-bold text-navy">0% CET base import duty</span> — a significant advantage. However, additional levies apply:</p>
          <div className="space-y-2 mb-4">
            {[
              { item: 'ECOWAS Community Levy', rate: '0.5% of CIF' },
              { item: 'EDIF Levy', rate: '0.5% of CIF' },
              { item: 'Ghana VAT', rate: '12.5%' },
              { item: 'National Health Insurance Levy', rate: '2.5%' },
              { item: 'GETFund Levy', rate: '2.5%' },
            ].map(({ item, rate }) => (
              <div key={item} className="flex justify-between items-center text-xs">
                <span className="text-navy/60">{item}</span>
                <span className="font-bold text-navy">{rate}</span>
              </div>
            ))}
          </div>
          <div className="bg-gold/10 border border-gold/20 rounded-lg px-4 py-3">
            <div className="text-xs font-bold text-navy mb-1">Effective total: ~18–20% on CIF value</div>
            <p className="text-xs text-navy/60">Some categories of medical equipment may qualify for VAT exemption — verify your HS Code treatment with a licensed Ghanaian customs broker before shipment.</p>
          </div>
        </div>
      </div>

      <div className="bg-navy/5 rounded-2xl p-5">
        <div className="text-xs font-bold uppercase tracking-widest text-navy/50 mb-3">ECOWAS Membership Advantage</div>
        <p className="text-sm text-navy/60 leading-relaxed">Under the ECOWAS Trade Liberalisation Scheme (ETLS), goods meeting ECOWAS rules of origin requirements can move between member states without additional import duties. For a supplier with a Ghanaian distribution base, onward shipment into Côte d'Ivoire, Burkina Faso, Togo, or other ECOWAS members is materially facilitated by this framework — making Ghana's 0% base duty even more strategically valuable for regional distribution.</p>
      </div>
    </section>

    {/* Distribution hub */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Ghana as a Distribution Hub for West African Markets</h2>
      <div className="bg-navy rounded-2xl p-8 text-white mb-6">
        <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">The Strategic Angle Most Importers Miss</div>
        <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Ghana Is Not Just a 34-Million-Person Market</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Accra is 3 hours by road from Abidjan (Côte d'Ivoire), 6 hours from Lomé (Togo), and roughly 12 hours from Ouagadougou (Burkina Faso). Ghana's road network is the best maintained in the sub-region. Its port infrastructure handles the largest volumes. Its banking system processes international transactions with relatively low friction. And it conducts commerce in English.
        </p>
        <p className="text-white/60 text-sm leading-relaxed">
          Several UK and European medical equipment companies already operate Accra-based distribution serving Ghana as a primary market and Côte d'Ivoire, Togo, and Burkina Faso as secondary markets through Ghanaian distribution partners. This is not a theoretical strategy — it is a working model.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        {[
          { country: 'Côte d\'Ivoire', pop: '27 million', note: 'Abidjan — West Africa\'s commercial finance capital. Private healthcare growing at 8–10% annually. 3 hours from Accra.' },
          { country: 'Burkina Faso', pop: '22 million', note: 'Underpenetrated healthcare market with significant public health investment from development partners. Accra logistics advantage.' },
          { country: 'Togo', pop: '9 million', note: 'Lomé is a regional transshipment hub. Ghanaian distributors with Togolese networks offer efficient last-mile reach.' },
        ].map(({ country, pop, note }) => (
          <div key={country} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm">
            <div className="font-black text-navy text-sm mb-1">{country}</div>
            <div className="text-xs font-bold text-teal mb-3">{pop}</div>
            <p className="text-xs text-navy/60 leading-relaxed">{note}</p>
          </div>
        ))}
      </div>

      <div className="bg-teal/5 border border-teal/15 rounded-xl px-5 py-4 text-sm text-navy/70">
        <span className="font-bold text-navy">How to structure for regional distribution: </span>
        Register with FDA Ghana and establish Ghanaian stock → Appoint sub-distributors in target Francophone markets with local regulatory expertise → Use the ECOWAS ETLS framework for duty-free cross-border movement → Ensure your FDA Ghana documentation package is formatted so it can be reused as supporting evidence for Francophone market registrations.
      </div>

      <div className="mt-4">
        <Link to="/used-medical-equipment-ghana-accra" className="text-teal font-bold text-sm hover:underline">Browse medical equipment available for Ghana distribution →</Link>
      </div>
    </section>

    {/* Key challenges */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Key Challenges to Anticipate</h2>
      <div className="space-y-4">
        {[
          {
            challenge: 'Foreign exchange availability and Cedi depreciation',
            detail: 'The Ghanaian Cedi has lost significant value against major currencies in recent years. For a supplier invoicing in USD or GBP and collecting in GHS, this creates pricing and margin pressure. Ghanaian hospital procurement budgets are often denominated in GHS, but equipment is priced in hard currency. Consider USD-denominated or USD-indexed pricing where contracts allow, and prioritise buyers with access to foreign exchange through development finance or donor funding.',
          },
          {
            challenge: 'After-sales service infrastructure',
            detail: 'Ghana has a limited pool of qualified biomedical engineers relative to the installed base. When complex capital equipment breaks down, response time from the nearest qualified engineer can be days, not hours. Either establish a Ghanaian service partner with genuine biomedical engineering capability, or build extended warranty and remote support into your commercial model. Buyers are increasingly sophisticated about total cost of ownership — service capability is a procurement differentiator.',
          },
          {
            challenge: 'Infrastructure reliability',
            detail: 'Power supply has improved significantly since the "dumsor" load shedding crisis of 2014–2016, but voltage instability remains a consideration for sensitive medical equipment. Most hospital installations require UPS or voltage regulation investment. Build this into your technical site surveys and commercial proposals — it prevents blame disputes and warranty issues later.',
          },
          {
            challenge: 'Import financing',
            detail: 'Many Ghanaian hospital buyers — particularly in the private sector — require financing support. Equipment priced at $80,000–$300,000 is beyond the immediate cash position of most private clinics. Suppliers who can offer or facilitate financing — through export credit agencies, development finance institutions, or equipment leasing structures — have a material commercial advantage over those who require cash payment.',
          },
        ].map(({ challenge, detail }) => (
          <div key={challenge} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle size={16} className="text-gold mt-0.5 shrink-0" />
              <span className="font-black text-navy text-sm">{challenge}</span>
            </div>
            <p className="text-sm text-navy/60 leading-relaxed pl-7">{detail}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Practical tips */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Practical Tips for First-Time Ghanaian Market Entrants</h2>
      <div className="space-y-4">
        {[
          {
            title: 'Attend the Ghana Health Summit and Medlab West Africa',
            body: 'These are the primary in-person forums where hospital procurement decision-makers, Ministry of Health officials, and FDA Ghana representatives gather. Face-to-face relationships matter in Ghanaian business culture in a way that email-only engagement does not replicate.',
          },
          {
            title: 'Start with Accra, then Kumasi',
            body: 'These two cities account for the majority of private hospital activity and a large share of Ministry of Health capital procurement. A distributor with genuine reach into both — rather than just an Accra-focused operation — gives you materially better national coverage.',
          },
          {
            title: 'Verify your Product Registrant\'s FDA Ghana standing before signing',
            body: 'FDA Ghana maintains records of product registrants. Before appointing a Product Registrant, verify their standing with FDA Ghana directly and ask for references from other international manufacturers they have registered. Experience with your specific device category is more valuable than general regulatory experience.',
          },
          {
            title: 'Understand the procurement cycle',
            body: 'Ghanaian government hospital procurement runs on annual budget cycles aligned to the Ministry of Finance\'s fiscal year. Capital equipment procurement decisions are often made in Q4 of the preceding year for the following year\'s delivery. Aligning your market development activity to this cycle makes your commercial effort substantially more efficient.',
          },
          {
            title: 'Factor in the Certificate of Free Sale timeline early',
            body: 'This document — obtained from the regulatory authority in your country of manufacture — is consistently the bottleneck in FDA Ghana dossier preparation. It requires official issuance, possible apostille, and courier time. Start this process as soon as you commit to a Ghana registration, not when the rest of your dossier is ready.',
          },
        ].map(({ title, body }) => (
          <div key={title} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm">
            <div className="font-black text-navy text-sm mb-2">{title}</div>
            <p className="text-sm text-navy/60 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          {
            q: 'How does FDA Ghana registration compare to NAFDAC in Nigeria?',
            a: 'Both require local representation, full product registration, and a technical dossier including ISO 13485 and Certificate of Free Sale. The meaningful practical differences are in predictability and timeline. FDA Ghana operates a more transparent and consistently applied process. Submissions are less likely to encounter opaque administrative delays, queries tend to be specific and answerable, and timelines are more reliably within published ranges. For Class C capital equipment, the realistic registration timeline with FDA Ghana is 5–9 months; comparable submissions elsewhere in West Africa can run considerably longer. For a first-time West African market entrant, FDA Ghana is a more forgiving environment to learn the regulatory process.',
          },
          {
            q: 'Can Ghana be used as a distribution hub for other West African countries?',
            a: 'Yes — and this is increasingly how sophisticated international suppliers are approaching the sub-region. Ghana\'s advantages as a distribution hub include its position within the ECOWAS free trade area (which facilitates cross-border movement under the ETLS), its English-language commercial environment, the Port of Tema\'s logistics infrastructure, and its road connectivity to Côte d\'Ivoire, Togo, and Burkina Faso. Several UK and European medical equipment companies currently operate Accra-based distribution with sub-distributor networks serving Francophone West Africa. Note that individual country registrations are still required in each market — ECOWAS membership facilitates logistics and duties, not regulatory approvals.',
          },
          {
            q: 'What is the fast-track registration process for essential medical devices in Ghana?',
            a: 'FDA Ghana\'s fast-track pathway is available for devices addressing identified public health priorities — including diagnostic imaging, laboratory automation, dialysis, ventilators, and other items on Ghana\'s Essential Health Services package or the WHO Priority Medical Devices list. The mechanism is a queue prioritisation tool, not a reduced documentation requirement. Your Product Registrant submits a covering request at the time of application, identifying the device\'s essential healthcare category and the relevant national health priority. If approved, the application is elevated in the review queue — reducing Class C timelines from 5–9 months to approximately 3–5 months. The application must still be complete and technically sound.',
          },
          {
            q: 'Do I need a local Ghanaian representative to register with FDA Ghana?',
            a: 'Yes. FDA Ghana requires that the product registration be held by a Ghanaian entity. Foreign manufacturers cannot apply directly. The local representative — called the Product Registrant — holds the registration certificate and is the regulatory point of contact for FDA Ghana. This means that if your relationship with the Product Registrant ends, the registration stays with them. Structure your contracts before registration begins: address ownership of registration data, conditions for transfer, and obligations on both parties if the representation relationship terminates.',
          },
          {
            q: 'What are import duties on medical equipment in Ghana?',
            a: 'Ghana applies the ECOWAS Common External Tariff (CET). Most medical equipment attracts 0% CET base import duty. However, the effective total cost of importation includes additional levies: ECOWAS Community Levy (0.5%), EDIF Levy (0.5%), Ghana VAT (12.5%), National Health Insurance Levy (2.5%), and GETFund Levy (2.5%). In total, most medical equipment importers budget 18–20% on CIF value. Some categories of medical equipment may be eligible for VAT exemption under Ghanaian law — verify the applicable HS Code treatment with a licensed Ghanaian customs broker before committing to a commercial price.',
          },
          {
            q: 'How long is a Ghana FDA product registration valid, and how does renewal work?',
            a: 'FDA Ghana product registration certificates are typically valid for 3–5 years from the date of issue. Submit renewal applications at least 3 months before the certificate\'s expiry date. The renewal process is generally lighter than the initial registration — it requires updated documentation (current ISO 13485, updated Certificate of Free Sale, updated annual fees) and confirmation that no material changes have been made to the device or its manufacturing process since original registration. If material changes have occurred, a variation application may be required rather than a standard renewal. A lapsed registration means you cannot legally import or distribute the device until the renewed certificate is issued.',
          },
        ].map(({ q, a }) => (
          <details key={q} className="bg-white border border-navy/5 rounded-2xl shadow-sm group">
            <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-navy text-sm">
              {q}
              <span className="text-teal text-lg group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-sm text-navy/60 leading-relaxed border-t border-navy/5">{a}</div>
          </details>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-navy rounded-2xl p-8 text-white">
      <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Start Your Ghana Market Entry</div>
      <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Suppliers with FDA Ghana-Ready Documentation</h3>
      <p className="text-white/60 text-sm mb-6 leading-relaxed">
        Ghana rewards preparation. Working with a supplier who can provide a complete technical file, current ISO 13485, and Certificate of Free Sale from day one reduces your registration timeline and your market entry risk. Browse verified suppliers and request pricing tailored to Ghanaian procurement.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link to="/used-medical-equipment-ghana-accra" className="bg-teal text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-teal/90 transition-colors">Browse Ghana Listings →</Link>
        <Link to="/request-verified-pricing-medical-equipment" className="border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white/10 transition-colors">Request Verified Pricing</Link>
      </div>
    </section>

  </div>
);
