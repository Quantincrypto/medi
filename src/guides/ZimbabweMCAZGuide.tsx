import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, Clock, TrendingUp, MapPin, ShieldCheck, Zap } from 'lucide-react';

export const ZimbabweMCAZGuide: React.FC = () => (
  <div className="space-y-12">

    {/* Intro */}
    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        Zimbabwe presents a market opportunity that reads differently from every other guide in this series. This is not a frontier market where the regulatory framework is still maturing, nor a high-volume market where competition is intense. Zimbabwe is something more specific: a healthcare system in active reconstruction, with an acute equipment deficit accumulated over two decades of economic stress, a USD-denominated economy that resolves many of the payment challenges that afflict other African markets, and a government that has identified healthcare infrastructure as a national rebuilding priority.
      </p>
      <p className="text-navy/70 leading-relaxed mb-4">
        Importing medical equipment into Zimbabwe requires navigating the Medicines Control Authority of Zimbabwe (MCAZ), but the registration process — while not the fastest on the continent — is navigable, the market's equipment needs are significant and largely unmet, and the shift to USD commerce has addressed the foreign exchange problem that historically made trading with Zimbabwe extremely difficult.
      </p>
    </section>

    {/* Internal link */}
    <section>
      <div className="bg-teal/5 border border-teal/15 rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Related Resource</div>
        <p className="text-sm text-navy/70 mb-3">Sourcing refurbished equipment for Zimbabwean hospitals? Browse ISO 13485-certified suppliers with MCAZ-compatible documentation.</p>
        <Link to="/verified-medical-equipment-suppliers" className="text-teal font-bold text-sm hover:underline">Browse Verified Medical Equipment Suppliers →</Link>
      </div>
    </section>

    {/* Why Zimbabwe */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Why Zimbabwe Is a Rebuilding Market Worth Considering Now</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        Zimbabwe's healthcare system was, in the 1980s and early 1990s, among the best in Sub-Saharan Africa. The University of Zimbabwe College of Health Sciences trained physicians who were sought across the region. The collapse that followed was driven by hyperinflation and capital flight. What is less documented is the recovery trajectory.
      </p>
      <p className="text-navy/70 text-sm leading-relaxed mb-6">
        Zimbabwe's formal dollarisation — the country operates a USD-dominated economy, with the Zimbabwe Gold (ZiG) currency introduced in 2024 — resolved the most acute payment mechanism problem for international suppliers. Equipment procurement can now be contracted and paid in USD with a reliability that did not exist during the hyperinflation era.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          {
            icon: <TrendingUp size={20} className="text-teal" />,
            title: 'Acute Equipment Deficit',
            body: 'Two decades of constrained capital investment have left Zimbabwe\'s hospital network operating with significantly life-expired equipment. The National Referral Hospital Revitalisation Programme is procuring diagnostic imaging, ICU equipment, and laboratory infrastructure at scale.',
          },
          {
            icon: <CheckCircle2 size={20} className="text-teal" />,
            title: 'USD Economy',
            body: 'Zimbabwe\'s dollarisation resolves the foreign exchange problem that historically made trading here extremely difficult. Equipment procurement is contracted and paid in USD with reliability that now compares favourably to many African markets.',
          },
          {
            icon: <MapPin size={20} className="text-teal" />,
            title: 'Diaspora-Driven Demand',
            body: 'Approximately 3–4 million Zimbabweans live abroad. Diaspora remittances drive healthcare spending, and diaspora-invested private clinics and diagnostic centres are a growing procurement segment with hard currency access and knowledge of international equipment standards.',
          },
        ].map((card, i) => (
          <div key={i} className="bg-clinical rounded-2xl p-5">
            <div className="mb-3">{card.icon}</div>
            <div className="font-black text-navy text-sm uppercase tracking-tight mb-2">{card.title}</div>
            <p className="text-xs text-navy/60 leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* MCAZ Overview */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">MCAZ: Zimbabwe's Medical Device Regulator</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        The <strong className="text-navy">Medicines Control Authority of Zimbabwe (MCAZ)</strong> is the statutory body responsible for regulating medicines and medical devices in Zimbabwe. MCAZ was established under the Medicines and Allied Substances Control Act (Chapter 15:03) and operates under the Ministry of Health and Child Care. It is an established institution — operational for over two decades — with a coherent and documented framework that has been progressively modernised.
      </p>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        MCAZ accepts CE certification, US FDA clearance/approval, and WHO Prequalification as primary reference authorisations. Its classification framework follows WHO/GHTF guidance. Manufacturers already certified in major international markets will find their existing documentation portfolio largely meets MCAZ's technical requirements.
      </p>
      <div className="bg-teal/5 border border-teal/15 rounded-2xl p-5">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">MCAZ Reference Authorisations Accepted</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['CE Certificate (EU)', 'US FDA Clearance / Approval', 'WHO Prequalification'].map((auth, i) => (
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
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Medical Device Classification Under MCAZ</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            cls: 'Class I',
            label: 'Low Risk',
            colour: 'bg-green-50 border-green-200',
            badge: 'bg-green-100 text-green-800',
            examples: 'Hospital furniture, non-sterile examination gloves, stethoscopes (non-electronic), basic bandages.',
            timeline: '2–4 months',
          },
          {
            cls: 'Class II',
            label: 'Low–Medium Risk',
            colour: 'bg-blue-50 border-blue-200',
            badge: 'bg-blue-100 text-blue-800',
            examples: 'Non-implantable accessories, basic diagnostic instruments, non-sterile wound dressings.',
            timeline: '3–5 months',
          },
          {
            cls: 'Class III',
            label: 'Medium–High Risk',
            colour: 'bg-amber-50 border-amber-200',
            badge: 'bg-amber-100 text-amber-800',
            examples: 'Diagnostic ultrasound, X-ray systems, patient monitors, infusion pumps, anaesthesia machines, lab analysers. Most capital equipment.',
            timeline: '5–9 months',
          },
          {
            cls: 'Class IV',
            label: 'Highest Risk',
            colour: 'bg-red-50 border-red-200',
            badge: 'bg-red-100 text-red-800',
            examples: 'Implantable cardiac devices, HIV diagnostic test kits, blood transfusion screening IVDs, sterile invasive single-use devices.',
            timeline: '9–14 months',
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
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step-by-Step MCAZ Registration Process</h2>
      <div className="space-y-4">
        {[
          {
            n: '01',
            title: 'Appoint a Licensed Zimbabwean Agent',
            body: 'MCAZ requires that foreign manufacturers appoint a Zimbabwe-registered authorised agent. This agent submits the registration application, maintains MCAZ correspondence, holds import authorisations, and is accountable for the product\'s compliance in Zimbabwe. An agent with established MCAZ relationships and experience in your device category is the most important enabler of a smooth registration.',
          },
          {
            n: '02',
            title: 'Confirm Product Classification',
            body: 'Confirm the correct MCAZ classification with your agent before preparing the dossier. Where classification is ambiguous, MCAZ will accept pre-submission classification queries. Getting classification right on first submission is essential — reclassification after rejection adds significant time.',
          },
          {
            n: '03',
            title: 'Compile the Technical Dossier',
            body: 'Required documentation: MCAZ application form, manufacturer\'s authorisation letter (notarised), Certificate of Free Sale, CE/FDA/WHO Prequalification certificate, ISO 13485 certificate, Instructions for Use (English), technical specifications, labelling samples, clinical/performance data summary, post-market surveillance data (Class III and IV), list of countries of current registration.',
          },
          {
            n: '04',
            title: 'Submit Application to MCAZ',
            body: 'Applications are submitted to MCAZ\'s medical devices division in Harare. MCAZ has been developing digital submission capabilities — confirm with your agent whether current submissions are online, in person, or hybrid. MCAZ assigns an application reference number upon receipt.',
          },
          {
            n: '05',
            title: 'Administrative and Technical Review',
            body: 'MCAZ conducts an initial administrative review for completeness, followed by technical evaluation. Class I and II devices with complete dossiers typically pass screening efficiently. Class III and IV devices receive more detailed assessment and may trigger requests for additional data.',
          },
          {
            n: '06',
            title: 'Registration Certificate Issuance',
            body: 'MCAZ issues a Medical Device Registration Certificate upon approval — product-specific and agent-specific, listed on the MCAZ register, and required for import permit applications. Registration is valid for five years. Initiate renewal before expiry.',
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
            'MCAZ application form — completed by Zimbabwean authorised agent',
            'Manufacturer\'s authorisation letter — notarised, appointing the Zimbabwean agent',
            'Certificate of Free Sale — from country of manufacture',
            'CE certificate, US FDA clearance, or WHO Prequalification — current and valid',
            'ISO 13485 certificate — valid, issued by accredited body',
            'Instructions for Use — English language',
            'Technical specifications — include power supply (Zimbabwe: 220V/50Hz)',
            'Labelling samples — all versions intended for Zimbabwean market',
            'Clinical performance or safety data summary',
            'List of countries of current registration',
            'Post-market surveillance report — Class III and IV',
            'Agent\'s MCAZ authorised agent registration',
            'Agent\'s Zimbabwean company registration documentation',
            'Application fee payment confirmation',
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
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-2">MCAZ Fee Schedule (2025)</h2>
      <p className="text-xs text-navy/50 mb-4">MCAZ fees are denominated in USD — a notable advantage over regulators whose fees are subject to local currency volatility. Confirm current rates with your Zimbabwean agent before submission.</p>
      <div className="bg-teal/5 border border-teal/15 rounded-xl p-4 mb-4 flex gap-3">
        <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
        <p className="text-xs text-navy/70">All MCAZ fees are payable in USD — no currency conversion risk for international manufacturers.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left p-3 font-bold uppercase tracking-widest text-xs">Service</th>
              <th className="text-right p-3 font-bold uppercase tracking-widest text-xs">USD</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Product registration — Class I', '~$150'],
              ['Product registration — Class II', '~$300'],
              ['Product registration — Class III', '~$500'],
              ['Product registration — Class IV', '~$750'],
              ['Import permit (per shipment)', '~$50–$150'],
              ['Authorised agent annual registration', '~$200–$400'],
              ['Registration certificate renewal', '~50–60% of initial fee'],
            ].map(([service, usd], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-clinical' : 'bg-white'}>
                <td className="p-3 text-navy/80">{service}</td>
                <td className="p-3 text-right font-bold text-navy">{usd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Customs */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Customs Clearance: Harare and Beitbridge</h2>
      <div className="bg-navy text-white rounded-2xl p-6 mb-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Primary Air Entry Point</div>
        <div className="font-black text-lg uppercase tracking-tight mb-2">Robert Gabriel Mugabe International Airport, Harare</div>
        <p className="text-sm text-white/70 leading-relaxed">The primary entry point for air freight medical equipment imports. Zimbabwe Revenue Authority (ZIMRA) manages customs clearance. Well-documented shipments typically clear within 3–7 working days. Medical equipment enters under HS Chapter 90 — confirm the correct HS code before shipment to avoid classification disputes.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-clinical rounded-2xl p-5">
          <div className="font-black text-navy text-sm uppercase tracking-tight mb-2">Beitbridge Border Post</div>
          <p className="text-xs text-navy/60 leading-relaxed">The busiest land border crossing in southern Africa, connecting Zimbabwe and South Africa on the N1/A6 highway. Primary surface freight entry point for cargo routing via South African ports (Durban). One-Stop Border Post improvements have reduced congestion but factor variable clearance times into your logistics planning during peak periods.</p>
        </div>
        <div className="bg-clinical rounded-2xl p-5">
          <div className="font-black text-navy text-sm uppercase tracking-tight mb-2">Joshua Mqabuko Nkomo Airport, Bulawayo</div>
          <p className="text-xs text-navy/60 leading-relaxed">Zimbabwe's second city and commercial hub of Matabeleland. For equipment destined for Bulawayo hospitals and the southern region, Bulawayo airport cargo handling is a practical alternative to routing everything through Harare.</p>
        </div>
      </div>
    </section>

    {/* Practical challenges */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Practical Challenges Specific to Zimbabwe</h2>
      <div className="space-y-4">
        {[
          {
            title: 'ZiG Currency Transition',
            icon: <AlertTriangle size={16} className="text-amber-600" />,
            bg: 'bg-amber-50 border-amber-200',
            body: 'Zimbabwe introduced the Zimbabwe Gold (ZiG) currency in 2024. As of 2025, USD remains the dominant currency for medical equipment procurement, invoicing, and payment. Verify current currency acceptance with your Zimbabwean agent before committing to payment terms. Ensure your contracts specify USD.',
          },
          {
            title: 'Power Supply Instability',
            icon: <Zap size={16} className="text-amber-600" />,
            bg: 'bg-amber-50 border-amber-200',
            body: 'Zimbabwe\'s electricity supply has been subject to significant load-shedding, particularly in regional cities and districts. Medical equipment for Zimbabwean hospitals — particularly in critical care, laboratory, and imaging categories — must be specified with UPS systems, surge protection, and power conditioning. This is a clinical safety requirement, not an optional add-on.',
          },
          {
            title: 'Healthcare Professional Retention',
            icon: <ShieldCheck size={16} className="text-navy/60" />,
            bg: 'bg-clinical border-navy/10',
            body: 'Zimbabwe\'s medical and technical workforce has experienced significant emigration. Hospitals face challenges not only with equipment supply but with the technical expertise to operate sophisticated equipment. Suppliers whose offering includes installation, operator training, and ongoing technical support have a distinct advantage in Zimbabwean procurement.',
          },
          {
            title: 'Government Procurement Timing',
            icon: <Clock size={16} className="text-navy/60" />,
            bg: 'bg-clinical border-navy/10',
            body: 'Public hospital procurement runs through the State Procurement Board (SPB) and hospital procurement committees. Government procurement can be slower than private sector purchasing and is subject to budget release timing. Align your pipeline with the Zimbabwean government budget cycle (January–December) and with donor-funded procurement timelines.',
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

    {/* Revitalisation programme */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">National Referral Hospital Revitalisation Programme</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        Zimbabwe's Ministry of Health and Child Care has identified the national referral hospital network as a primary investment target. The <strong className="text-navy">National Referral Hospital Revitalisation Programme</strong> encompasses Parirenyatwa Group of Hospitals and Harare Central Hospital in Harare, Mpilo Central Hospital in Bulawayo, and several provincial hospitals. Financing comes from the government's own capital budget, bilateral partners including China, the African Development Bank, and humanitarian partners.
      </p>
      <div className="bg-navy text-white rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-gold mb-4">Revitalisation Programme Procurement Areas</div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            { cat: 'Diagnostic Imaging', note: 'CT, MRI, ultrasound, X-ray — referral hospitals and regional centres' },
            { cat: 'Laboratory Modernisation', note: 'Haematology, biochemistry, microbiology, blood bank' },
            { cat: 'ICU & High Dependency', note: 'Patient monitors, ventilators, infusion systems' },
            { cat: 'Operating Theatre', note: 'Surgical tables, anaesthesia, electrosurgery, sterilisation' },
            { cat: 'Patient Monitoring', note: 'Ward monitors, telemetry, central monitoring stations' },
            { cat: 'Maternal & Neonatal', note: 'Delivery suites, neonatal incubators, fetal monitors' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="w-1.5 h-1.5 bg-teal rounded-full mt-2 shrink-0" />
              <div>
                <span className="font-bold text-white">{item.cat}: </span>
                <span className="text-white/60">{item.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <Link to="/patient-monitors-africa" className="text-teal font-bold text-sm hover:underline">Explore patient monitoring equipment for Southern African hospitals →</Link>
      </div>
    </section>

    {/* Market entry tips */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Practical Tips for First-Time Market Entrants</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            n: '01',
            title: 'Lead with certified refurbished equipment',
            body: 'Budget constraints mean competitively priced, high-quality refurbished equipment from ISO 13485-certified suppliers is often preferred over new equipment. The key is certification — CE marking, ISO 13485, and a credible warranty and service package differentiate you from uncertified alternatives.',
          },
          {
            n: '02',
            title: 'Private hospitals first, government second',
            body: 'Avenues Clinic, West End Hospital, and the growing private diagnostic sector in Harare make procurement decisions quickly and pay in USD. Establish reference sites in private facilities before pursuing government tender opportunities.',
          },
          {
            n: '03',
            title: 'Include training and service in your proposal',
            body: 'Zimbabwe\'s healthcare technical workforce deficit is real. Suppliers who include operator training, biomedical technician training, and a first-year service contract win more tenders. This is a differentiator, not a concession.',
          },
          {
            n: '04',
            title: 'Specify UPS in every regional hospital quote',
            body: 'Do not assume stable power outside Harare\'s CBD. UPS systems, solar-compatible power interfaces, and voltage stabilisation are requirements for district and provincial hospitals. Include them in your standard supply scope.',
          },
          {
            n: '05',
            title: 'Choose an agent with both MCAZ and ZIMRA experience',
            body: 'Regulatory compliance and customs clearance are distinct skill sets. Evaluate both capabilities when selecting your local partner — an agent strong at registration but weak at ZIMRA clearance will cost you time on every shipment.',
          },
          {
            n: '06',
            title: 'Connect with the Zimbabwean diaspora channel',
            body: 'Diaspora-connected procurement — where diaspora Zimbabweans in the UK, USA, South Africa, and Australia facilitate purchases for family clinics or community hospitals — is real and growing. Suppliers who engage Zimbabwean professional associations and diaspora health networks tap into a channel that moves faster than formal government procurement.',
          },
        ].map((tip, i) => (
          <div key={i} className="bg-clinical rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-teal text-white rounded-lg flex items-center justify-center font-black text-xs">{tip.n}</div>
              <div className="font-black text-navy text-sm uppercase tracking-tight">{tip.title}</div>
            </div>
            <p className="text-xs text-navy/60 leading-relaxed">{tip.body}</p>
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
            q: 'How long does MCAZ medical device registration take?',
            a: 'Typical timelines: Class I, 2–4 months; Class II, 3–5 months; Class III, 5–9 months; Class IV, 9–14 months. These timelines assume a complete dossier submitted by an experienced Zimbabwean authorised agent. Incomplete submissions trigger queries that add months. For Class III capital equipment, budget 6 months minimum.',
          },
          {
            q: 'Do I need a local Zimbabwean agent to register with MCAZ?',
            a: 'Yes. Foreign manufacturers must appoint a Zimbabwe-registered authorised agent who submits the registration application, maintains MCAZ correspondence, and holds import authorisations. The agent\'s quality — specifically their MCAZ experience and relationship with the authority\'s medical devices division — significantly influences your registration timeline.',
          },
          {
            q: 'What currency is used for medical equipment transactions in Zimbabwe?',
            a: 'USD is the dominant currency for medical equipment procurement and payment in Zimbabwe. The Zimbabwe Gold (ZiG) was introduced in 2024 but USD remains standard for capital equipment transactions. Invoice and contract in USD. Confirm current currency arrangements with your agent before finalising payment terms.',
          },
          {
            q: 'What are the main challenges importing medical equipment into Zimbabwe?',
            a: 'Four challenges consistently affect first-time market entrants: (1) Power supply instability — specify UPS and power conditioning for all equipment destined for regional hospitals. (2) Government procurement timing — public hospital procurement aligns with budget release cycles and can be unpredictable. (3) Technical workforce gaps — include operator training in your supply scope. (4) ZiG currency transition uncertainty — confirm USD payment mechanisms with your agent before contractual commitments.',
          },
          {
            q: 'How does Zimbabwe compare to South Africa as a medical equipment market?',
            a: 'They are very different markets. South Africa has a larger, more mature market with significantly more competition and a fully sophisticated regulatory framework in SAHPRA. Zimbabwe has acute equipment needs, less competition, a more accessible private sector procurement process, and a USD economy that simplifies payments. For suppliers already established in South Africa, Zimbabwe is a logical neighbouring market expansion — the Beitbridge corridor and geographic proximity make it practical to serve both from a South African logistics base.',
          },
          {
            q: 'Is Zimbabwe a good market for refurbished medical equipment?',
            a: 'Yes — Zimbabwe is one of the clearest market fits for high-quality, ISO 13485-certified refurbished equipment on the African continent. Budget constraints across public and private sectors mean certified refurbished equipment offers the optimal combination of clinical performance and procurement cost. The key differentiator is certification and warranty support — Zimbabwean buyers have learned to distinguish between certified refurbished equipment from reputable suppliers and uncertified second-hand equipment, and they pay a premium for the former.',
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
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Ready to Enter the Zimbabwean Market?</div>
        <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Get Verified Supplier Pricing for Zimbabwe</h3>
        <p className="text-white/60 text-sm mb-6 max-w-lg mx-auto">Connect with ISO 13485-certified suppliers who have experience with MCAZ registration documentation. Request verified pricing for your specific equipment requirements.</p>
        <Link
          to="/request-verified-pricing-medical-equipment"
          className="inline-block bg-teal text-white font-black uppercase tracking-tight px-8 py-4 rounded-xl hover:bg-teal/90 transition-colors"
        >
          Request Verified Pricing →
        </Link>
      </div>
    </section>

    <p className="text-xs text-navy/40 text-center italic">Guide accurate as of Q2 2025. MCAZ registration fees and procedures are subject to revision. Confirm current requirements with a Zimbabwe-registered authorised agent or directly with the Medicines Control Authority of Zimbabwe before submitting an application.</p>

  </div>
);
