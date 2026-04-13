import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, Clock, TrendingUp, MapPin, ShieldCheck } from 'lucide-react';

export const TanzaniaTMDAGuide: React.FC = () => (
  <div className="space-y-12">

    {/* Intro */}
    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        Tanzania does not get the attention it deserves. Ask a medical equipment sales director to rank their African priorities and you will typically hear South Africa, Nigeria, Kenya — and then a pause. Tanzania sits in that pause, consistently underestimated by suppliers who have not looked closely at the numbers. A country of 63 million people, the fifth largest economy in Sub-Saharan Africa, the most stable political environment in East Africa, and a geographic position that makes it not just a market but a gateway to some of the most landlocked and supply-constrained healthcare systems on the continent.
      </p>
      <p className="text-navy/70 leading-relaxed mb-4">
        This guide covers TMDA registration in full, customs clearance at Dar es Salaam Port and Julius Nyerere International Airport, the documentation requirements, fees in TZS and USD, and the regional distribution logic that makes Tanzania strategically valuable beyond its own domestic market.
      </p>
    </section>

    {/* Internal link */}
    <section>
      <div className="bg-teal/5 border border-teal/15 rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Related Resource</div>
        <p className="text-sm text-navy/70 mb-3">Sourcing refurbished equipment for Tanzanian hospitals? Browse ISO 13485-certified suppliers with TMDA-compatible documentation.</p>
        <Link to="/verified-medical-equipment-suppliers" className="text-teal font-bold text-sm hover:underline">Browse Verified Medical Equipment Suppliers →</Link>
      </div>
    </section>

    {/* Why Tanzania */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Why Tanzania Is the Underrated East African Medical Equipment Market</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          {
            icon: <TrendingUp size={20} className="text-teal" />,
            title: 'HSSP-Driven Demand',
            body: 'Tanzania\'s Health Sector Strategic Plan has committed to upgrading district hospital diagnostic capacity and expanding regional referral hospital capabilities. World Bank, USAID, and Aga Khan Development Network financing is flowing into this infrastructure upgrade.',
          },
          {
            icon: <CheckCircle2 size={20} className="text-teal" />,
            title: 'Stable Operating Environment',
            body: 'Tanzania is the most politically stable environment in East Africa. A functioning regulatory system, consistent democratic governance, and a professional civil service that international suppliers consistently underestimate.',
          },
          {
            icon: <MapPin size={20} className="text-teal" />,
            title: 'Regional Distribution Hub',
            body: 'Tanzania borders eight countries. Dar es Salaam Port is the primary import gateway for landlocked Rwanda, Burundi, eastern DRC, and Zambia. A Tanzanian distribution base serves a regional catchment of over 200 million people.',
          },
        ].map((card, i) => (
          <div key={i} className="bg-clinical rounded-2xl p-5">
            <div className="mb-3">{card.icon}</div>
            <div className="font-black text-navy text-sm uppercase tracking-tight mb-2">{card.title}</div>
            <p className="text-xs text-navy/60 leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
      <p className="text-navy/70 text-sm leading-relaxed">
        Tanzania's 63 million population is served by healthcare infrastructure that, outside Dar es Salaam, Arusha, and regional cities, operates with equipment significantly below international standards. Diagnostic imaging outside major cities is limited. Laboratory automation is rare in district hospitals. This is a description of unmet need that represents sustained procurement demand for the right suppliers.
      </p>
    </section>

    {/* TMDA Overview */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">TMDA: Tanzania's Medical Device Regulator</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        The <strong className="text-navy">Tanzania Medicines and Medical Devices Authority (TMDA)</strong> is the statutory body responsible for regulating the quality, safety, and efficacy of medicines and medical devices in Tanzania. Established in 2019 under the Tanzania Medicines and Medical Devices Act (Cap. 219), TMDA replaced the Tanzania Food and Drugs Authority (TFDA) and brought a significantly strengthened focus on medical device regulation.
      </p>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        TMDA aligns its classification and technical dossier requirements with WHO and GHTF international standards. It accepts CE certification, US FDA clearance/approval, and TGA (Australia) registration as reference authorisations — reducing the additional documentation burden for manufacturers already certified in major markets. TMDA's online submission portal has improved substantially and its interaction with international manufacturers is increasingly professional and predictable.
      </p>
      <div className="bg-teal/5 border border-teal/15 rounded-2xl p-5">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">TMDA Reference Authorisations Accepted</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['CE Certificate (EU)', 'US FDA Clearance', 'TGA (Australia)', 'WHO Prequalification'].map((auth, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-teal shrink-0" />
              <span className="text-xs text-navy/70">{auth}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Classification */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Medical Device Classification Under TMDA</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            cls: 'Class A',
            label: 'Minimal Risk',
            colour: 'bg-green-50 border-green-200',
            badge: 'bg-green-100 text-green-800',
            examples: 'Hospital furniture, non-sterile examination gloves, rulers, tongue depressors.',
            timeline: '2–3 months',
          },
          {
            cls: 'Class B',
            label: 'Low Risk',
            colour: 'bg-blue-50 border-blue-200',
            badge: 'bg-blue-100 text-blue-800',
            examples: 'Hypodermic needles, non-sterile wound dressings, suction equipment, basic diagnostic instruments.',
            timeline: '3–5 months',
          },
          {
            cls: 'Class C',
            label: 'Moderate Risk',
            colour: 'bg-amber-50 border-amber-200',
            badge: 'bg-amber-100 text-amber-800',
            examples: 'Infusion pumps, patient monitors, diagnostic ultrasound, X-ray, lung ventilators, haematology analysers. Most capital equipment.',
            timeline: '5–8 months',
          },
          {
            cls: 'Class D',
            label: 'High Risk',
            colour: 'bg-red-50 border-red-200',
            badge: 'bg-red-100 text-red-800',
            examples: 'Implantable cardiac devices, HIV diagnostic test kits, blood glucose systems, sterile invasive single-use devices.',
            timeline: '8–12 months',
          },
        ].map((c, i) => (
          <div key={i} className={`border rounded-2xl p-5 ${c.colour}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${c.badge}`}>{c.cls}</span>
              <span className="font-black text-navy text-sm">{c.label}</span>
            </div>
            <p className="text-xs text-navy/70 mb-2">{c.examples}</p>
            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-navy/50">
              <Clock size={10} /> {c.timeline}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Registration steps */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step-by-Step TMDA Registration Process</h2>
      <div className="space-y-4">
        {[
          {
            n: '01',
            title: 'Appoint a Licensed Tanzanian Importer',
            body: 'Foreign manufacturers cannot apply to TMDA directly. You must appoint a TMDA-licensed importer who holds a valid Medical Device Importer Licence. This entity submits the registration application, holds import permits, and takes regulatory responsibility for the product. The quality of your importer partner directly determines your registration timeline.',
          },
          {
            n: '02',
            title: 'Confirm Device Classification',
            body: 'Submit a pre-classification query to TMDA or work with your importer to confirm the correct device class before preparing your dossier. Misclassification — particularly underclassifying a Class C device as Class B — is a common cause of rejection and restarts the process.',
          },
          {
            n: '03',
            title: 'Prepare the Technical Dossier',
            body: 'Compile: TMDA application form, manufacturer authorisation letter, Certificate of Free Sale (apostilled), CE/FDA/TGA certificate, ISO 13485 certificate, Instructions for Use, technical specifications, labelling samples, clinical/performance data, post-market surveillance data (Class C and D), and list of countries where the device is marketed.',
          },
          {
            n: '04',
            title: 'Submit via TMDA Portal',
            body: 'Applications are submitted by the licensed importer through TMDA\'s online portal. Supporting documents are uploaded in PDF format. TMDA assigns an application tracking number and sends acknowledgement of receipt.',
          },
          {
            n: '05',
            title: 'Administrative Screening',
            body: 'TMDA conducts an initial review to confirm the dossier is complete. Incomplete applications are rejected with a query list. The screening stage typically takes 2–4 weeks. A complete, well-organised dossier on first submission is the most efficient path.',
          },
          {
            n: '06',
            title: 'Technical Evaluation',
            body: 'TMDA\'s medical device assessment team evaluates the technical dossier. Class C devices may trigger requests for additional clarification or performance data. Class D devices may go to expert panel review.',
          },
          {
            n: '07',
            title: 'Registration Certificate Issuance',
            body: 'TMDA issues a Medical Device Registration Certificate upon approval — product-specific and importer-specific, valid for five years, required for all import permits. Initiate renewal before expiry.',
          },
        ].map((step, i) => (
          <div key={i} className="flex gap-5 bg-clinical rounded-2xl p-5">
            <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm shrink-0">{step.n}</div>
            <div>
              <div className="font-black text-navy uppercase tracking-tight text-sm mb-2">{step.title}</div>
              <p className="text-xs text-navy/60 leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Documentation */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Complete Documentation Checklist</h2>
      <div className="bg-clinical rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-navy/50 mb-4">Confirm before submission — incomplete dossiers restart the clock</div>
        <div className="space-y-3">
          {[
            'TMDA application form — completed by licensed importer, signed and dated',
            'Manufacturer authorisation letter — original, notarised, appointing Tanzanian importer',
            'Certificate of Free Sale — apostilled from country of manufacture',
            'CE certificate, US FDA clearance, or TGA equivalent — current, not expired',
            'ISO 13485 quality management certificate — valid',
            'Instructions for Use — English language (Swahili for Class D)',
            'Technical specifications — include power requirements (Tanzania: 230V/50Hz)',
            'Labelling samples — all language versions for Tanzanian market',
            'Clinical evaluation or performance data summary',
            'List of countries of current commercial sale',
            'Post-market surveillance report — Class C and D',
            'Importer\'s valid TMDA Medical Device Importer Licence',
            'Importer\'s business registration certificate (Tanzania Revenue Authority TIN)',
            'Application fee payment receipt',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
              <span className="text-sm text-navy/70">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Fees */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-2">TMDA Fee Schedule (2025)</h2>
      <p className="text-xs text-navy/50 mb-6">Indicative fees. Confirm current rates with your licensed importer. TZS/USD conversion at approx. 2,500 TZS/USD.</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left p-3 font-bold uppercase tracking-widest text-xs">Service</th>
              <th className="text-right p-3 font-bold uppercase tracking-widest text-xs">TZS</th>
              <th className="text-right p-3 font-bold uppercase tracking-widest text-xs">USD (approx.)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Product registration — Class A', 'TZS 150,000', '~$60'],
              ['Product registration — Class B', 'TZS 300,000', '~$120'],
              ['Product registration — Class C', 'TZS 600,000', '~$240'],
              ['Product registration — Class D', 'TZS 900,000', '~$360'],
              ['Import permit (per shipment)', 'TZS 100,000–250,000', '~$40–$100'],
              ['Medical Device Importer Licence (annual)', 'TZS 1,000,000–2,000,000', '~$400–$800'],
              ['Registration certificate renewal', '50–60% of initial fee', '—'],
            ].map(([service, tzs, usd], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-clinical' : 'bg-white'}>
                <td className="p-3 text-navy/80">{service}</td>
                <td className="p-3 text-right font-bold text-navy">{tzs}</td>
                <td className="p-3 text-right text-navy/60">{usd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Customs */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Customs Clearance: Dar es Salaam Port and JNIA</h2>
      <div className="bg-navy text-white rounded-2xl p-6 mb-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Primary Entry Point</div>
        <div className="font-black text-lg uppercase tracking-tight mb-2">Dar es Salaam Port</div>
        <p className="text-sm text-white/70 leading-relaxed">Dar es Salaam Port is the dominant entry point for Tanzania and the primary maritime gateway for landlocked Rwanda, Burundi, eastern DRC, and Zambia. The Tanzania Ports Authority (TPA) manages operations; TRA customs officials process clearances through the TANCIS system, which supports pre-arrival documentation submission.</p>
      </div>
      <div className="space-y-3 mb-6">
        {[
          'Shipping agent notifies importer of vessel arrival and cargo availability',
          'Pre-arrival documentation submitted via TANCIS: Bill of Lading, commercial invoice, packing list, TMDA import permit, registration certificate copy',
          'Customs classification under HS Chapter 90 — confirm correct code before shipment',
          'TRA inspection — typically administrative/documentary for medical equipment with full documentation',
          'Duty assessment — many medical equipment categories attract 0% base import duty under EAC CET. VAT (18%) and port levies apply',
          'Clearance — well-documented shipments typically release within 5–10 working days of vessel arrival',
        ].map((step, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-6 h-6 bg-teal/15 text-teal rounded-full flex items-center justify-center text-[10px] font-black shrink-0">{i + 1}</div>
            <p className="text-sm text-navy/70">{step}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-clinical rounded-2xl p-5">
          <div className="font-black text-navy text-sm uppercase tracking-tight mb-2">Julius Nyerere International Airport</div>
          <p className="text-xs text-navy/60 leading-relaxed">Handles air freight for time-sensitive or high-value consignments. Same TANCIS clearance process. Typically 2–5 days clearance for compliant shipments — faster than sea freight but significantly more expensive per kilogram.</p>
        </div>
        <div className="bg-clinical rounded-2xl p-5">
          <div className="font-black text-navy text-sm uppercase tracking-tight mb-2">Northern Corridor Alternative</div>
          <p className="text-xs text-navy/60 leading-relaxed">For northern Tanzania, Uganda, Rwanda, and Burundi — surface freight via Mombasa Port (Kenya) and the A109 highway to Arusha is an alternative. Coordinate with your freight forwarder based on destination and timeline.</p>
        </div>
      </div>
    </section>

    {/* Regional hub */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Tanzania as a Regional Distribution Hub</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-6">
        This is the dimension of the Tanzanian market that most first-time entrants underestimate. A supplier who establishes a TMDA-registered Tanzanian distribution partner is not only serving Tanzania's 63 million people — they are creating logistics infrastructure that serves the broader Great Lakes and Southern African corridor.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { country: 'Rwanda', note: '100% landlocked — Dar es Salaam is the nearest deep-water port via the TANZAM corridor' },
          { country: 'Burundi', note: 'Primary port access via Dar es Salaam and Kigoma (Lake Tanganyika ferry)' },
          { country: 'Eastern DRC', note: 'Served via lake and road connections through Kigoma and Uvira' },
          { country: 'Zambia', note: 'TANZAM corridor (road + TAZARA railway) connects Dar es Salaam directly to Zambia' },
        ].map((item, i) => (
          <div key={i} className="bg-clinical rounded-2xl p-5">
            <div className="font-black text-navy text-sm uppercase tracking-tight mb-1">{item.country}</div>
            <p className="text-xs text-navy/60">{item.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/ultrasound-machine-price-kenya" className="text-teal font-bold text-sm hover:underline">Compare medical equipment pricing across East Africa →</Link>
      </div>
    </section>

    {/* Practical challenges */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Practical Challenges Unique to Tanzania</h2>
      <div className="space-y-4">
        {[
          {
            title: 'Port Congestion at Dar es Salaam',
            icon: <AlertTriangle size={16} className="text-amber-600" />,
            bg: 'bg-amber-50 border-amber-200',
            body: 'Dar es Salaam Port is one of the busiest in East Africa. During peak periods, vessel waiting times and container dwell times increase. Plan consignments with buffer time and use TANCIS pre-arrival clearance mechanisms — importers who use pre-arrival clearance consistently achieve significantly faster port release times.',
          },
          {
            title: 'Swahili Language Requirements',
            icon: <ShieldCheck size={16} className="text-navy/60" />,
            bg: 'bg-clinical border-navy/10',
            body: 'While English is widely used in business and government, Swahili is increasingly required in consumer-facing labelling and patient-directed Instructions for Use for certain device categories. Confirm labelling requirements with your importer before producing final packaging.',
          },
          {
            title: 'Infrastructure Outside Major Cities',
            icon: <MapPin size={16} className="text-navy/60" />,
            bg: 'bg-clinical border-navy/10',
            body: 'Tanzania\'s road network has improved but remains variable in rural areas. Equipment destined for the Lake Zone (Mwanza), Southern Highlands (Mbeya), or the interior requires careful logistics planning. Include installation and service logistics in your market entry plan.',
          },
          {
            title: 'Zanzibar Regulatory Consideration',
            icon: <AlertTriangle size={16} className="text-amber-600" />,
            bg: 'bg-amber-50 border-amber-200',
            body: 'Zanzibar — the semi-autonomous island region — has its own administrative framework. Medical equipment imports destined for Zanzibar hospitals may require additional coordination with Zanzibar-specific health authorities. Confirm whether your target buyers are on the mainland or Zanzibar before finalising your import pathway.',
          },
        ].map((c, i) => (
          <div key={i} className={`border rounded-2xl p-5 ${c.bg}`}>
            <div className="flex items-center gap-2 mb-2">
              {c.icon}
              <span className="font-black text-navy text-sm uppercase tracking-tight">{c.title}</span>
            </div>
            <p className="text-xs text-navy/70 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* FAQs */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          {
            q: 'How long does TMDA medical device registration take?',
            a: 'Typical timelines: Class A, 2–3 months. Class B, 3–5 months. Class C, 5–8 months. Class D, 8–12 months. These assume a complete, professionally prepared dossier submitted by an experienced licensed importer. Incomplete submissions trigger a query process that adds months. Budget conservatively for Class C capital equipment.',
          },
          {
            q: 'Do I need a local Tanzanian agent to register with TMDA?',
            a: 'Yes. Foreign manufacturers cannot submit TMDA registration applications directly. A TMDA-licensed importer must act as authorised representative, submit the application, hold import permits, and maintain regulatory accountability. The choice of importer is the most consequential decision in your Tanzanian market entry process.',
          },
          {
            q: 'What import duties apply to medical equipment in Tanzania?',
            a: 'Tanzania applies the EAC Common External Tariff. Many medical equipment categories classified under HS Chapter 90 attract 0% base import duty under the EAC CET framework. However, VAT (currently 18%), port levies, and other charges apply. Confirm applicable rates for your specific HS codes with a TRA-experienced freight forwarder before your first shipment.',
          },
          {
            q: 'How does Tanzania\'s registration compare to Kenya\'s PPB process?',
            a: 'Both TMDA and Kenya\'s PPB require local importer representation and a similar technical dossier. TMDA registration timelines are broadly comparable to PPB. The key practical difference is that Kenya\'s PPB framework has a longer institutional track record. For suppliers evaluating East Africa, registering in both Tanzania and Kenya is advisable — together they cover the two largest EAC markets.',
          },
          {
            q: 'Can I use Tanzania as a distribution hub for Rwanda, Burundi, and Zambia?',
            a: 'Yes — this is one of Tanzania\'s most compelling strategic advantages. Dar es Salaam Port is the primary maritime gateway for Rwanda, Burundi, eastern DRC, and Zambia. Note that TMDA registration does not grant automatic market access in these countries — each requires separate regulatory compliance — but a Tanzanian distribution base meaningfully supports the broader regional logistics.',
          },
          {
            q: 'What medical equipment is in highest demand in Tanzania?',
            a: 'Current demand is concentrated in: diagnostic imaging (ultrasound, X-ray — district hospital expansion is the primary driver); laboratory equipment (haematology analysers, biochemistry platforms — national laboratory network targets); patient monitoring (surgical wards, ICU expansion); dialysis equipment; maternal and neonatal health equipment (delivery suites, neonatal incubators); and dental equipment (private clinic sector growing rapidly in Dar es Salaam and Arusha).',
          },
        ].map((faq, i) => (
          <div key={i} className="bg-clinical rounded-2xl p-6">
            <div className="font-black text-navy text-sm uppercase tracking-tight mb-3">{faq.q}</div>
            <p className="text-sm text-navy/70 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section>
      <div className="bg-navy rounded-2xl p-8 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Ready to Enter the Tanzanian Market?</div>
        <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Get Verified Supplier Pricing for Tanzania</h3>
        <p className="text-white/60 text-sm mb-6 max-w-lg mx-auto">Connect with ISO 13485-certified suppliers who have experience with TMDA registration documentation. Request verified pricing for your specific equipment requirements.</p>
        <Link
          to="/request-verified-pricing-medical-equipment"
          className="inline-block bg-teal text-white font-black uppercase tracking-tight px-8 py-4 rounded-xl hover:bg-teal/90 transition-colors"
        >
          Request Verified Pricing →
        </Link>
      </div>
    </section>

    <p className="text-xs text-navy/40 text-center italic">Guide accurate as of Q2 2025. TMDA registration fees and procedures are subject to revision. Confirm current requirements with a TMDA-licensed importer or directly with the Tanzania Medicines and Medical Devices Authority before submitting an application.</p>

  </div>
);
