import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, Clock, TrendingUp, MapPin, ShieldCheck } from 'lucide-react';

export const EthiopiaEFMHACAGuide: React.FC = () => (
  <div className="space-y-12">

    {/* Intro */}
    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        Ethiopia is the medical equipment market that international suppliers are still early to. A country of 120 million people — the second largest population on the African continent — with a government that has made hospital infrastructure expansion a declared national priority, a rapidly growing private healthcare sector, and a regulatory framework that, while newer than its peers, is increasingly functional and navigable. For suppliers already operating in established African markets and looking for the next significant opportunity, importing medical equipment into Ethiopia represents exactly the kind of first-mover position that is becoming harder to find elsewhere on the continent.
      </p>
      <p className="text-navy/70 leading-relaxed mb-4">
        This guide covers the EFMHACA registration process in full, the practical realities of customs clearance at Addis Ababa Bole International Airport, the documentation you will need, fees in both ETB and USD, the logistical challenges that catch first-time market entrants off guard, and the government investment context that makes this market worth the effort.
      </p>
    </section>

    {/* Internal link */}
    <section>
      <div className="bg-teal/5 border border-teal/15 rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Related Resource</div>
        <p className="text-sm text-navy/70 mb-3">Sourcing refurbished equipment for Ethiopian hospitals? Browse ISO 13485-certified suppliers with EFMHACA-compatible documentation.</p>
        <Link to="/verified-medical-equipment-suppliers" className="text-teal font-bold text-sm hover:underline">Browse Verified Medical Equipment Suppliers →</Link>
      </div>
    </section>

    {/* Why Ethiopia */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Why Ethiopia Is Becoming a Priority Market for Medical Equipment Suppliers</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        The case for Ethiopia begins with scale. At 120 million people it is larger than any European country. Life expectancy has risen from 52 years in 2000 to over 67 years in 2024 — a transformation driven by government investment in primary healthcare, vaccination coverage, and hospital infrastructure. That improvement has created a healthcare system now under pressure from demand it was not originally built to meet: non-communicable disease, chronic illness, trauma surgery, and diagnostic complexity at a scale that earlier infrastructure cannot support.
      </p>
      <p className="text-navy/70 text-sm leading-relaxed mb-6">
        The result is a procurement cycle that is structural, not cyclical. Ethiopia is buying medical equipment because its Health Sector Transformation Plan has committed the government to a multi-year expansion programme spanning primary health centres, district hospitals, and referral facilities. That commitment is embedded in national development planning — it does not stop at one election cycle.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          {
            icon: <TrendingUp size={20} className="text-teal" />,
            title: 'HSTP-Driven Demand',
            body: 'The Health Sector Transformation Plan has approved construction and upgrades for over 350 primary hospitals. Regional referral facilities in Addis Ababa, Hawassa, Bahir Dar, and Jimma are all active procurement targets.',
          },
          {
            icon: <CheckCircle2 size={20} className="text-teal" />,
            title: 'First-Mover Advantage',
            body: 'European, Chinese, and Indian suppliers have footholds but the market has not reached saturation. Relationships and registrations built now create structural advantages that will be significantly harder to achieve in five years.',
          },
          {
            icon: <MapPin size={20} className="text-teal" />,
            title: 'East African Hub',
            body: 'Addis Ababa Bole is one of Africa\'s best-connected airports. Ethiopian Airlines Cargo provides direct freighter routes from European and Asian manufacturing hubs. Ethiopia is a natural logistics base for East and Northeast Africa.',
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

    {/* EFMHACA Overview */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">EFMHACA: Ethiopia's Medical Device Regulator</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        <strong className="text-navy">EFMHACA</strong> — the Ethiopian Food, Medicine and Healthcare Administration and Control Authority — is the regulatory body responsible for the registration, authorisation, and post-market surveillance of medical devices in Ethiopia. Established under Proclamation No. 661/2009, EFMHACA has undergone institutional evolution and was reorganised under Proclamation No. 1112/2019, with some functions now operating under the EFDA (Ethiopian Food and Drug Authority) framework. In practice, the EFMHACA name and acronym remain the dominant reference in procurement documents, tenders, and import permits.
      </p>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        EFMHACA sits under the Federal Ministry of Health. Its medical device division handles product registration, importer licensing, import permit issuance, and market surveillance. Unlike more established African regulators, EFMHACA is a younger institution operating with a framework that is still maturing — which means the rules exist and are navigable, but interpretation can be inconsistent. First-time applicants who submit incomplete documentation face delays that experienced local partners routinely avoid.
      </p>

      {/* Comparison table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left p-3 font-bold uppercase tracking-widest">Dimension</th>
              <th className="text-left p-3 font-bold uppercase tracking-widest">EFMHACA (Ethiopia)</th>
              <th className="text-left p-3 font-bold uppercase tracking-widest">SAHPRA (S. Africa)</th>
              <th className="text-left p-3 font-bold uppercase tracking-widest">NAFDAC (Nigeria)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Institutional maturity', 'Developing', 'Highly mature', 'Mature'],
              ['Classification basis', 'WHO/GHTF 4-class', 'EU risk-based', 'NAFDAC internal'],
              ['Local agent required', 'Yes — licensed importer', 'Yes — Local Responsible Person', 'Yes — registered distributor'],
              ['Digital submission', 'Partial', 'Full (online portal)', 'Partial'],
              ['Typical timeline', '6–12 months', '6–18 months', '8–18 months'],
            ].map(([dim, eth, sa, ng], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-clinical' : 'bg-white'}>
                <td className="p-3 font-bold text-navy">{dim}</td>
                <td className="p-3 text-teal font-bold">{eth}</td>
                <td className="p-3 text-navy/60">{sa}</td>
                <td className="p-3 text-navy/60">{ng}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Device Classification */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Medical Device Classification Under Ethiopian Regulations</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-6">
        EFMHACA classifies medical devices into four risk classes aligned with the Global Harmonization Task Force (GHTF) framework. Most capital medical equipment — CT scanners, ultrasound systems, patient monitors, anaesthesia machines, laboratory analysers — falls into Class C or Class D.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            cls: 'Class A',
            label: 'Low Risk',
            colour: 'bg-green-50 border-green-200',
            badge: 'bg-green-100 text-green-800',
            examples: 'Non-sterile examination gloves, tongue depressors, hospital furniture, non-invasive accessories.',
            timeline: 'Fastest clearance',
          },
          {
            cls: 'Class B',
            label: 'Low–Medium Risk',
            colour: 'bg-blue-50 border-blue-200',
            badge: 'bg-blue-100 text-blue-800',
            examples: 'Hypodermic needles, basic suction equipment, non-sterile wound dressings, simple diagnostic instruments.',
            timeline: '3–6 months',
          },
          {
            cls: 'Class C',
            label: 'Medium–High Risk',
            colour: 'bg-amber-50 border-amber-200',
            badge: 'bg-amber-100 text-amber-800',
            examples: 'Haemodialysis machines, infusion pumps, lung ventilators, diagnostic imaging accessories, patient monitors.',
            timeline: '6–9 months',
          },
          {
            cls: 'Class D',
            label: 'Highest Risk',
            colour: 'bg-red-50 border-red-200',
            badge: 'bg-red-100 text-red-800',
            examples: 'Implantable cardiac devices, HIV/hepatitis diagnostic kits, blood glucose systems, sterile single-use invasive devices.',
            timeline: '9–12+ months',
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

    {/* Step-by-step registration */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step-by-Step EFMHACA Registration Process</h2>
      <div className="space-y-4">
        {[
          {
            n: '01',
            title: 'Appoint a Licensed Ethiopian Importer',
            body: 'You cannot register directly with EFMHACA as a foreign manufacturer. You must work through a licensed importer registered with EFMHACA in Ethiopia. This local partner holds the import licence, submits the registration application on your behalf, and takes regulatory responsibility for the product. Selecting the right importer is the single most important decision in your Ethiopian market entry strategy — an experienced importer who has handled your device category before will reduce your registration timeline by months.',
          },
          {
            n: '02',
            title: 'Obtain a Certificate of Free Sale',
            body: 'EFMHACA requires evidence that the device is legally marketed in its country of manufacture or in a recognised reference market. A Certificate of Free Sale from the relevant national authority (EU competent authority, US FDA, UK MHRA) is standard. CE certification with technical file documentation is widely accepted.',
          },
          {
            n: '03',
            title: 'Compile the Technical Dossier',
            body: 'The dossier is the core of your submission. Required components: manufacturer authorisation letter, Certificate of Free Sale, CE certificate, ISO 13485 certificate, Instructions for Use (English; Amharic translation may be required for Class D), Summary of Safety and Performance, product labelling samples, technical specifications, and post-market surveillance data for Class C and D devices.',
          },
          {
            n: '04',
            title: 'Submit Application to EFMHACA',
            body: 'Your licensed importer submits the full dossier to the EFMHACA Medical Devices Regulatory Directorate in Addis Ababa. Applications can be submitted in person or partially via the evolving online portal. EFMHACA assigns an application reference number upon receipt.',
          },
          {
            n: '05',
            title: 'Screening and Technical Review',
            body: 'EFMHACA screens the dossier for completeness. Incomplete submissions are returned with queries — this is the most common cause of delay for first-time applicants. Once accepted, technical review begins. For Class C and D devices, a specialist technical reviewer is assigned and may request additional clarification.',
          },
          {
            n: '06',
            title: 'Site Inspection (where applicable)',
            body: 'For higher-risk device categories, EFMHACA may request a site inspection of the manufacturing facility. This is more common for Class D devices and local manufacturing. For imported devices from established manufacturers with recognised quality certifications, remote document review is typical.',
          },
          {
            n: '07',
            title: 'Registration Certificate Issuance',
            body: 'Upon approval, EFMHACA issues a Medical Device Registration Certificate valid for five years. The certificate is product-specific, manufacturer-specific, and importer-specific — and is required for all subsequent import permits for that product. Renew before expiry.',
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

    {/* Documentation checklist */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Complete Documentation Checklist</h2>
      <div className="bg-clinical rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-navy/50 mb-4">Confirm before submission — incomplete dossiers restart the clock</div>
        <div className="space-y-3">
          {[
            'EFMHACA product registration application form (completed by licensed importer)',
            'Manufacturer authorisation letter — original, notarised',
            'Certificate of Free Sale — apostilled where required',
            'CE certificate or equivalent market authorisation — current, not expired',
            'ISO 13485 quality management certificate — valid',
            'Instructions for Use — English language version',
            'Product technical specifications (include power supply: Ethiopia uses 220V/50Hz)',
            'Clinical or performance evaluation summary',
            'Labelling samples — all language versions',
            'List of countries of current commercial sale',
            'Post-market surveillance report (Class C and D)',
            'Importer\'s valid EFMHACA import licence',
            'Ethiopian importer business registration documents',
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

    {/* Fee schedule */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-2">EFMHACA Fee Schedule (2025)</h2>
      <p className="text-xs text-navy/50 mb-6">Indicative fees based on current published schedules. Confirm current rates with your licensed importer before submission. ETB/USD conversion at approx. 130 ETB/USD.</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left p-3 font-bold uppercase tracking-widest text-xs">Service</th>
              <th className="text-right p-3 font-bold uppercase tracking-widest text-xs">ETB</th>
              <th className="text-right p-3 font-bold uppercase tracking-widest text-xs">USD (approx.)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Product registration — Class A', 'ETB 2,500', '~$19'],
              ['Product registration — Class B', 'ETB 5,000', '~$38'],
              ['Product registration — Class C', 'ETB 10,000', '~$77'],
              ['Product registration — Class D', 'ETB 15,000', '~$115'],
              ['Import permit (per shipment)', 'ETB 1,500–3,500', '~$12–$27'],
              ['Importer licence (annual renewal)', 'ETB 8,000–15,000', '~$62–$115'],
              ['Registration certificate renewal', '60–70% of initial fee', '—'],
            ].map(([service, etb, usd], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-clinical' : 'bg-white'}>
                <td className="p-3 text-navy/80">{service}</td>
                <td className="p-3 text-right font-bold text-navy">{etb}</td>
                <td className="p-3 text-right text-navy/60">{usd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
        <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800">The official ETB/USD exchange rate and the parallel market rate in Ethiopia have historically diverged. These figures use the official rate. Your importer will advise on current rates and their impact on fee calculations.</p>
      </div>
    </section>

    {/* Customs clearance */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Customs Clearance: Addis Ababa Bole Airport and Land Borders</h2>

      <div className="bg-navy text-white rounded-2xl p-6 mb-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Primary Entry Point</div>
        <div className="font-black text-lg uppercase tracking-tight mb-2">Addis Ababa Bole International Airport</div>
        <p className="text-sm text-white/70 leading-relaxed">The vast majority of medical equipment imports enter Ethiopia through Bole. Ethiopian Airlines Cargo operates direct freighter routes from major medical equipment manufacturing hubs in Europe, the USA, and China — giving Ethiopia genuinely competitive air freight access for a landlocked country.</p>
      </div>

      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        Customs clearance at Bole is managed by the Ethiopian Revenues and Customs Authority (ERCA). The standard process for medical equipment:
      </p>
      <div className="space-y-3 mb-6">
        {[
          { step: '1', text: 'Cargo agent notifies importer of arrival' },
          { step: '2', text: 'Documentation lodgement — commercial invoice, packing list, airway bill, EFMHACA import permit, registration certificate copy' },
          { step: '3', text: 'Customs classification under HS Chapter 90 (medical instruments). Misclassification is a frequent point of dispute — confirm HS code before shipment.' },
          { step: '4', text: 'Physical inspection — ERCA inspectors may inspect the consignment. For equipment classified as medical/exempt, inspection is typically documentation-focused.' },
          { step: '5', text: 'Duty payment — medical equipment imported by registered healthcare institutions may qualify for duty exemptions or reduced rates.' },
          { step: '6', text: 'Release and delivery — typically 5–15 working days from arrival for a compliant shipment with all documentation in order.' },
        ].map((s, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-6 h-6 bg-teal/15 text-teal rounded-full flex items-center justify-center text-[10px] font-black shrink-0">{s.step}</div>
            <p className="text-sm text-navy/70">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-clinical rounded-2xl p-5">
        <div className="font-black text-navy text-sm uppercase tracking-tight mb-2">Land Border Corridor: Djibouti</div>
        <p className="text-xs text-navy/60 leading-relaxed">The Port of Djibouti is Ethiopia's principal maritime gateway, handling the majority of containerised imports. The Djibouti–Addis Ababa corridor (road and rail) is the established surface freight route. The Galafi crossing (road) and Dewele are the primary entry points for containerised cargo from Djibouti. This corridor is well-served by freight forwarders with Ethiopia-specific experience.</p>
      </div>
    </section>

    {/* Practical challenges */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Practical Challenges Unique to Ethiopia</h2>
      <div className="space-y-4">
        {[
          {
            title: 'Foreign Exchange (FX) Constraints',
            icon: <AlertTriangle size={16} className="text-amber-600" />,
            bg: 'bg-amber-50 border-amber-200',
            body: 'Ethiopia has historically operated with significant foreign exchange shortages and controlled exchange rates with restrictions on access to USD. This is the most consistently cited practical challenge. Public sector procurement often involves USD-denominated contracts paid through international financing (World Bank, African Development Bank, bilateral aid) which bypasses the local FX constraint. Structure payment terms with this reality in mind before signing distributor agreements.',
          },
          {
            title: 'Infrastructure Outside Addis Ababa',
            icon: <MapPin size={16} className="text-navy/60" />,
            bg: 'bg-clinical border-navy/10',
            body: 'Addis Ababa has modern infrastructure for a Sub-Saharan capital. Outside Addis, logistics become more variable. Equipment requiring installation, commissioning, and ongoing service support needs a partner with genuine geographic reach across the regional hospital network. Build service and installation logistics into your market entry plan from the outset.',
          },
          {
            title: 'Power Supply',
            icon: <ShieldCheck size={16} className="text-navy/60" />,
            bg: 'bg-clinical border-navy/10',
            body: 'Ethiopia runs on 220V/50Hz. Voltage fluctuations are common outside Addis Ababa. Medical equipment for regional hospitals should be specified with appropriate voltage regulation or UPS systems included in the supply scope. Include this in your technical handover documentation.',
          },
          {
            title: 'Language',
            icon: <CheckCircle2 size={16} className="text-teal" />,
            bg: 'bg-clinical border-navy/10',
            body: 'Amharic is the working language of government. While major procurement is managed in English and most EFMHACA correspondence with foreign manufacturers is conducted in English, in-country relationships benefit from local Amharic-speaking commercial support. Your licensed importer handles this — which further reinforces why the choice of importer partner is critical.',
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

    {/* HSTP */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Ethiopia's Health Sector Transformation Plan: The Demand Engine</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        Ethiopia's <strong className="text-navy">Health Sector Transformation Plan (HSTP)</strong> is a multi-phase national health development strategy that has driven the most significant expansion of healthcare infrastructure in the country's history. HSTP I (2015–2020) focused on primary healthcare coverage and basic facility infrastructure. HSTP II (2020–2025) has escalated ambition: expansion and upgrade of district and referral hospitals, increases in specialist surgical capacity, expansion of diagnostic imaging coverage, and strengthening of laboratory networks.
      </p>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        The financial architecture involves Ethiopian government budget allocations, World Bank health systems lending, funding from the Global Fund, USAID, and bilateral partners including Norway, the UK, and the European Union. This multilateral financing creates procurement opportunities often conducted under international competitive bidding rules — giving foreign suppliers a structured entry mechanism that bypasses some FX constraints.
      </p>
      <div className="bg-navy text-white rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-gold mb-4">HSTP Procurement Opportunity Areas</div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            { cat: 'Diagnostic Imaging', note: 'CT, ultrasound, X-ray — hospital expansion targets' },
            { cat: 'Laboratory Systems', note: 'Haematology analysers, biochemistry, rapid diagnostics' },
            { cat: 'Patient Monitoring', note: 'ICU monitors, anaesthesia — surgical capacity expansion' },
            { cat: 'Dialysis Equipment', note: 'Renal disease burden increasing with urbanisation' },
            { cat: 'Maternal Health', note: 'Delivery beds, neonatal incubators, fetal monitors' },
            { cat: 'Surgical Equipment', note: 'Surgical tables, sterilisation, operating room fit-outs' },
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
    </section>

    {/* Market entry tips */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Practical Tips for First-Time Market Entrants</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            n: '01',
            title: 'Choose your importer before your dossier',
            body: 'The importer is a co-applicant, not a formality. Their EFMHACA licence and relationships with customs and regulatory officials determine your timeline. Ask for references from other manufacturers they represent — and ask specifically about Class C or D registrations they have completed.',
          },
          {
            n: '02',
            title: 'Confirm HS code before first shipment',
            body: 'Customs misclassification at Bole is common with medical equipment. A wrong HS code means the wrong duty rate, potential holds, and weeks of delay. Confirm classification with an ERCA-experienced freight forwarder before shipping.',
          },
          {
            n: '03',
            title: 'Budget 12 months for first registration',
            body: 'Six months is possible for Class B with a clean dossier. Class C and D more typically run 9–12 months. Do not plan your first commercial delivery before registration is confirmed.',
          },
          {
            n: '04',
            title: 'Target private diagnostics for first reference site',
            body: 'Private diagnostic centres in Addis Ababa move faster, pay in USD, and are more accessible than the public procurement cycle. A reference installation in a credible private facility strengthens your position significantly for subsequent government tender participation.',
          },
          {
            n: '05',
            title: 'Price in USD, receive USD where possible',
            body: 'Structure your distributor agreements to allow your importer to invoice Ethiopian private sector buyers in USD or through USD-linked payment mechanisms. For government procurement, align with the relevant financing mechanism.',
          },
          {
            n: '06',
            title: 'Register your country\'s export credit agency',
            body: 'UKEF (UK), US EXIM Bank (USA), and Euler Hermes (Germany) all have Ethiopian government procurement programmes. If you\'re targeting HSTP hospital contracts, engage your export credit agency early for trade finance and political risk cover.',
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

    {/* Internal link */}
    <section>
      <div className="bg-teal/5 border border-teal/15 rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">East Africa Pricing Guide</div>
        <p className="text-sm text-navy/70 mb-3">Comparing equipment costs across East Africa? See verified pricing for ultrasound machines, CT scanners, and more in the region.</p>
        <Link to="/ultrasound-machine-price-kenya" className="text-teal font-bold text-sm hover:underline">Ultrasound Machine Price — East Africa →</Link>
      </div>
    </section>

    {/* FAQs */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          {
            q: 'How long does EFMHACA registration take?',
            a: 'Registration timelines vary by device class. Class A and B devices with a complete dossier typically complete in 3–6 months. Class C devices run 6–9 months. Class D devices — highest risk, highest scrutiny — typically require 9–12 months, sometimes longer if additional technical queries are raised. These are realistic timelines assuming a complete, professionally assembled dossier submitted by an experienced licensed importer. Incomplete dossiers restart the clock.',
          },
          {
            q: 'Do I need a local Ethiopian agent to register with EFMHACA?',
            a: 'Yes — this is a firm requirement, not optional. Foreign manufacturers cannot submit product registration applications directly to EFMHACA. You must appoint a licensed importer holding a valid EFMHACA import licence, who acts as the authorised representative, submits the application, holds the import permits, and takes regulatory responsibility for the product. The manufacturer authorisation letter appointing this importer must be notarised and included in the dossier.',
          },
          {
            q: 'What are the main challenges importing medical equipment into Ethiopia?',
            a: 'Three challenges consistently affect first-time market entrants: (1) Foreign exchange access — Ethiopian importers and buyers may struggle to access USD to pay for equipment; structuring payment through letters of credit or USD-linked accounts is essential. (2) Customs classification — HS code disputes at Bole Airport can hold shipments for weeks; confirm classification before shipment. (3) Logistics outside Addis Ababa — delivering and commissioning equipment in regional hospitals requires a logistics and service partner with genuine regional coverage.',
          },
          {
            q: 'How do I get paid when selling medical equipment in Ethiopia?',
            a: 'Payment mechanisms depend on the buyer segment. Government hospital procurement funded by international development financing (World Bank, AfDB) is paid in USD through designated project accounts — the most straightforward hard-currency mechanism. Private sector buyers in Addis Ababa typically arrange payment via letter of credit through Ethiopian commercial banks with USD accounts, or through diaspora-connected financing. Avoid open-account terms with new Ethiopian customers until a payment track record is established.',
          },
          {
            q: 'Is Ethiopia a good entry point for East African medical equipment distribution?',
            a: 'Yes, with qualifications. Addis Ababa is among the best-connected cities in Africa for air freight — Ethiopian Airlines Cargo is a top-tier logistics partner. EFMHACA registration does not grant automatic market access in Kenya, Uganda, Tanzania, or other East African markets — each requires separate regulatory compliance. However, establishing an Ethiopian importer relationship and an Addis Ababa operational base provides a logistics and commercial platform from which East and Northeast African distribution is meaningfully more efficient.',
          },
          {
            q: 'What types of medical equipment are in highest demand in Ethiopia?',
            a: 'Current demand is concentrated in: diagnostic imaging (ultrasound, X-ray, CT — driven by hospital expansion); laboratory equipment (haematology analysers, biochemistry systems, rapid diagnostic platforms — tied to HSTP laboratory network targets); patient monitoring (ICU monitors, anaesthesia machines — linked to surgical capacity expansion); dialysis equipment (renal disease burden increasing with urbanisation); and maternal health equipment (delivery beds, neonatal incubators, fetal monitors — a persistent government priority).',
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
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Ready to Enter the Ethiopian Market?</div>
        <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Get Verified Supplier Pricing for Ethiopia</h3>
        <p className="text-white/60 text-sm mb-6 max-w-lg mx-auto">Connect with ISO 13485-certified suppliers who have experience with EFMHACA registration documentation. Request verified pricing for your specific equipment requirements.</p>
        <Link
          to="/request-verified-pricing-medical-equipment"
          className="inline-block bg-teal text-white font-black uppercase tracking-tight px-8 py-4 rounded-xl hover:bg-teal/90 transition-colors"
        >
          Request Verified Pricing →
        </Link>
      </div>
    </section>

    <p className="text-xs text-navy/40 text-center italic">Guide accurate as of Q2 2025. EFMHACA registration fees and procedures are subject to revision. Confirm current requirements with a licensed Ethiopian importer or directly with EFMHACA's Medical Devices Regulatory Directorate in Addis Ababa before submitting an application.</p>

  </div>
);
