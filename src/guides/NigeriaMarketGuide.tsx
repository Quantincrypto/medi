import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const NigeriaMarketGuide: React.FC = () => (
  <div className="space-y-12">

    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        Nigeria's medical device market is, by any credible measure, the largest and fastest-growing on the African continent — and it is structurally undersupplied. Estimated at between $800 million and $1.2 billion USD annually at formal import value, with informal and grey-market channels adding a further 20–35% to real market volume, Nigeria's medical equipment sector has grown at a compound annual rate of 7–9% over the past five years.
      </p>
      <p className="text-navy/70 leading-relaxed mb-4">
        Independent projections place the market at $1.6–$2.1 billion by 2030, driven by demographic pressure, private sector hospital expansion, and a federal government increasingly forced to address decades of infrastructure underinvestment.
      </p>
      <p className="text-navy/70 leading-relaxed">
        But the headline numbers understate the real opportunity — and the real complexity. Nigeria is not one market. It is a federation of 36 states plus the FCT, operating across multiple healthcare funding models, with buyers ranging from internationally tendering federal teaching hospitals to rural mission facilities procuring secondhand equipment through diaspora networks. Understanding who buys, how they buy, and why the distribution chain works the way it does is more valuable than any top-line market size figure.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Market Size and Growth Projections to 2030</h2>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden mb-6">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Year</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Estimated Market Value (USD)</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Key Growth Driver</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['2023', '$900M–$1.1B', 'Base year'],
              ['2024', '$970M–$1.2B', 'NHIA expansion, private sector investment'],
              ['2025', '$1.05B–$1.3B', 'Federal capital equipment budgets, PPP projects'],
              ['2027', '$1.3B–$1.6B', 'State hospital upgrade programmes'],
              ['2030', '$1.7B–$2.1B', 'Universal health coverage push, insurance penetration'],
            ].map(([year, value, driver]) => (
              <tr key={year} className="hover:bg-clinical/30">
                <td className="p-4 font-black text-navy">{year}</td>
                <td className="p-4 font-bold text-teal">{value}</td>
                <td className="p-4 text-navy/60 text-xs">{driver}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gold/10 border border-gold/20 rounded-xl px-5 py-4 text-sm text-navy/70">
        <span className="font-bold text-navy">FX risk caveat: </span>Nigeria's macroeconomic environment creates non-linear risk. The naira depreciated approximately 60% against the dollar in 2023 following CBN policy changes. A market worth $1 billion USD can contract in local currency purchasing power even as demand rises. Unit demand growth and USD revenue growth do not move together in this market.
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Equipment Category Breakdown</h2>
      <div className="space-y-4">
        {[
          {
            category: 'Consumables and Single-Use Devices',
            share: '35%',
            body: 'By volume, the dominant category — and the most heavily penetrated by Chinese manufacturers. Examination gloves, syringes, infusion sets, catheters, surgical drapes, wound care products. Margins are thin. Competition is intense. The move toward higher-quality consumables is visible in the private sector, but the public sector remains overwhelmingly price-driven.',
            links: null,
          },
          {
            category: 'Diagnostic Imaging',
            share: '22%',
            body: "The highest-value category with the most acute supply shortage. Nigeria has approximately 20–25 operational MRI units for 220 million people. CT scanner availability is slightly better but concentrated in Lagos, Abuja, and Port Harcourt. The market for refurbished imaging equipment is substantial — federal teaching hospitals and most state facilities cannot access new equipment at OEM prices.",
            links: [
              { label: 'Refurbished CT Scanners Africa →', to: '/refurbished-ct-scanners-africa' },
              { label: 'Used MRI Machines Africa →', to: '/used-mri-machines-africa' },
            ],
          },
          {
            category: 'Clinical Laboratory Equipment',
            share: '19%',
            body: 'Haematology analysers, biochemistry systems, blood gas analysers, microbiology systems, and point-of-care diagnostics. Driven by the scale of infectious disease burden and laboratory accreditation programmes that have compelled public sector laboratories to upgrade. Reagent and consumable supply agreements tied to capital placements are a critical commercial consideration.',
            links: [
              { label: 'Used Laboratory Equipment Africa →', to: '/used-laboratory-equipment-africa' },
            ],
          },
          {
            category: 'Surgical and Anaesthesia Equipment',
            share: '14%',
            body: 'Operating theatre equipment, anaesthesia workstations, electrosurgical units, laparoscopic systems, sterilisation equipment. Growing in step with private hospital construction. The most significant recent growth has been laparoscopic and minimally invasive surgery equipment, driven by specialist surgical centres in Lagos and Abuja.',
            links: null,
          },
          {
            category: 'Patient Monitoring and ICU',
            share: '10%',
            body: 'Patient monitors, ventilators, infusion pumps, and ICU systems. COVID-19 produced a one-off spike in ventilator imports that is not representative of steady-state demand. The underlying secular trend is positive: private hospitals are investing in ICU capability as a competitive differentiator.',
            links: [
              { label: 'Patient Monitors Africa →', to: '/patient-monitors-africa' },
            ],
          },
        ].map(({ category, share, body, links }) => (
          <div key={category} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="font-black text-navy">{category}</div>
              <div className="ml-auto bg-teal/10 text-teal font-black text-sm px-3 py-1 rounded-full flex items-center gap-1">
                <TrendingUp size={12} /> {share}
              </div>
            </div>
            <p className="text-sm text-navy/60 leading-relaxed mb-3">{body}</p>
            {links && (
              <div className="flex flex-wrap gap-4 pt-2 border-t border-navy/5">
                {links.map(({ label, to }) => (
                  <Link key={to} to={to} className="text-teal text-xs font-bold hover:underline">{label}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Import Source Countries</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {[
          {
            country: 'China',
            share: '35–45% of import volume',
            strengths: 'Price competitiveness, established NAFDAC registrations, strong distributor networks. Dominant in consumables, lab diagnostics, patient monitoring, and entry-level imaging.',
            risks: 'Wide quality gradient. Lower-tier exporters produce equipment that works for 18 months and then becomes a maintenance liability — spare parts and trained engineers do not exist in-country.',
            brands: 'Mindray, Shinva, Biobase (credible); many unbranded direct-to-importer suppliers (risky)',
          },
          {
            country: 'Germany',
            share: 'Premium segment leader',
            strengths: 'Gold standard for clinical performance and after-sales reliability. Siemens Healthineers maintains dominant positions in imaging at major teaching hospitals. Dräger leads in anaesthesia and ICU.',
            risks: 'Price premium limits volume market share. Requires strong local service infrastructure to justify the premium.',
            brands: 'Siemens Healthineers, Dräger, B. Braun',
          },
          {
            country: 'United States',
            share: 'Imaging and diagnostics leader',
            strengths: 'GE Healthcare has substantial installed base of CT, MRI, ultrasound, and X-ray across Nigerian teaching hospitals — much installed in the 2000s. Replacement cycle is now arriving. Strong private sector brand preference.',
            risks: 'High price points. After-sales support requires either local GE infrastructure or third-party service engineering.',
            brands: 'GE Healthcare, Becton Dickinson, Abbott, Roche',
          },
          {
            country: 'India',
            share: 'Growing mid-market presence',
            strengths: 'Competitive price-to-specification for hospital beds, surgical instruments, basic lab equipment, and diagnostic reagents. Growing distributor relationships.',
            risks: 'Lower brand recognition compared to established European/US players. After-sales infrastructure still developing.',
            brands: 'Skanray, Larsen & Toubro Medical, various pharma-adjacent device companies',
          },
        ].map(({ country, share, strengths, risks, brands }) => (
          <div key={country} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="font-black text-navy text-lg mb-1">{country}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">{share}</div>
            <div className="space-y-3">
              <div>
                <div className="text-xs font-bold text-navy/50 uppercase tracking-widest mb-1">Strengths</div>
                <p className="text-xs text-navy/60 leading-relaxed">{strengths}</p>
              </div>
              <div>
                <div className="text-xs font-bold text-navy/50 uppercase tracking-widest mb-1">Risks</div>
                <p className="text-xs text-navy/60 leading-relaxed">{risks}</p>
              </div>
              <div>
                <div className="text-xs font-bold text-navy/50 uppercase tracking-widest mb-1">Key Names</div>
                <p className="text-xs text-navy/60">{brands}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Who the Buyers Are — and How They Actually Purchase</h2>
      <div className="space-y-4">
        {[
          {
            segment: 'Federal Government Teaching Hospitals',
            count: '22 teaching hospitals + 47 federal medical centres',
            how: 'Open competitive tender via Bureau of Public Procurement (BPP) framework. International suppliers participate through registered local agents. Brand recognition, service contract availability, and compliance documentation are the primary decision criteria.',
            payment: '3–18 months after delivery. Credit risk is real.',
            tip: 'Relationship with the procurement directorate matters alongside formal compliance. Price matters but is less determinative than at state level.',
          },
          {
            segment: 'State Government Hospitals',
            count: '36 states + FCT each operating secondary and tertiary networks',
            how: 'Combination of formal tender and direct procurement. State procurement is more variable, faster when it moves, and more relationship-dependent than federal. Lagos, Rivers, and FCT hospitals have larger budgets. Northern states are more constrained and more dependent on federal interventions.',
            payment: 'Variable. Lagos State has reasonable payment record; some states have a history of disputed or delayed payments.',
            tip: 'Local representation is more critical at state level than at federal level. Executive decisions can bypass formal process — know who is actually deciding.',
          },
          {
            segment: 'Private Hospital Groups',
            count: 'Estimated 60–70% of urban healthcare utilisation',
            how: 'Direct commercial relationships with distributors, or direct international procurement for major capital purchases. Decision-making is faster — a private hospital medical director can commit in weeks rather than months. Prioritise reliability, after-sales support, and financial terms (leasing, deferred payment).',
            payment: 'Commercial terms. Most creditworthy buyer segment.',
            tip: 'This is the highest-quality buyer segment in quality-willingness-to-pay terms. It is also where demand for refurbished premium equipment is most pronounced.',
          },
          {
            segment: 'Mission Hospitals and Faith-Based Facilities',
            count: '~2,000 facilities (CHAN, Catholic Secretariat, Islamic health orgs)',
            how: 'Often through international NGO procurement channels, donor funding, or diaspora remittances. Purchases tend to be opportunistic rather than planned. Refurbished equipment strongly preferred due to budget constraints.',
            payment: 'Depends on funding source. Donor-funded purchases can be slow to release but are reliable.',
            tip: 'Build relationships with CHAN procurement offices for access to this segment at scale.',
          },
          {
            segment: 'International NGOs and Development Partners',
            count: 'WHO, UNICEF, MSF, USAID-funded projects, bilateral health programmes',
            how: 'International competitive tender via UNGM or NGO procurement portals. ISO 13485 and WHO prequalification typically mandatory. Institutionally demanding but USD-denominated payment.',
            payment: 'USD, reliable. Most predictable payment in the market.',
            tip: 'Pre-qualification takes time but opens the door to regular volume across multiple countries, not just Nigeria.',
          },
        ].map(({ segment, count, how, payment, tip }) => (
          <div key={segment} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="font-black text-navy text-base mb-1">{segment}</div>
            <div className="text-xs text-teal font-bold uppercase tracking-widest mb-4">{count}</div>
            <div className="grid md:grid-cols-3 gap-4 text-xs">
              <div>
                <div className="font-bold text-navy/50 uppercase tracking-widest mb-2">How They Buy</div>
                <p className="text-navy/60 leading-relaxed">{how}</p>
              </div>
              <div>
                <div className="font-bold text-navy/50 uppercase tracking-widest mb-2">Payment Reality</div>
                <p className="text-navy/60 leading-relaxed">{payment}</p>
              </div>
              <div className="bg-teal/5 rounded-xl p-3">
                <div className="font-bold text-teal uppercase tracking-widest mb-2 text-[10px]">Key Insight</div>
                <p className="text-navy/60 leading-relaxed">{tip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">NHIA Expansion: The Structural Demand Driver Most Suppliers Are Underestimating</h2>
      <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm mb-5">
        <p className="text-navy/70 text-sm leading-relaxed mb-4">
          The National Health Insurance Authority (NHIA), which replaced the previous NHIS in 2022 under new enabling legislation, represents the most significant structural shift in Nigerian healthcare financing in a generation. The new Act substantially expands the mandate for universal health coverage and introduces mechanisms for states to enrol populations beyond formal sector employees.
        </p>
        <p className="text-navy/70 text-sm leading-relaxed">
          If NHIA implementation follows even a partial version of its mandate, the addressable patient population within formal insurance will expand by tens of millions over the next five years.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-teal/5 border border-teal/15 rounded-2xl p-5">
          <div className="font-black text-navy mb-3 text-sm">Implication 1: New Procurement Events</div>
          <p className="text-xs text-navy/60 leading-relaxed">Private clinics and hospitals that want to serve insured patients need to meet NHIA accreditation standards, which include equipment requirements. Accreditation-driven procurement is a distinct buying event separate from regular capital replacement.</p>
        </div>
        <div className="bg-teal/5 border border-teal/15 rounded-2xl p-5">
          <div className="font-black text-navy mb-3 text-sm">Implication 2: PHC Equipment Investment</div>
          <p className="text-xs text-navy/60 leading-relaxed">The Primary Health Care level — historically the most neglected — is specifically targeted under NHIA. Point-of-care diagnostics, basic monitoring, maternal health equipment, and cold chain infrastructure all stand to benefit significantly.</p>
        </div>
      </div>
      <p className="text-xs text-navy/40 mt-4">This is a medium-term demand driver. NHIA implementation is proceeding slowly in many states. Suppliers building relationships with PHC boards and accreditation-focused private providers now will be positioned when procurement inflection arrives.</p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">The Distribution Landscape</h2>
      <div className="space-y-4">
        {[
          {
            title: 'The Lagos Funnel',
            body: 'The overwhelming majority of medical equipment enters Nigeria through Lagos — Apapa and Tin Can Island ports for sea freight, Murtala Muhammed International Airport for air freight. Customs clearance at Apapa is notorious for delays: 2–6 weeks is typical, 8–12 weeks is not unusual. Demurrage costs accumulate quickly on capital equipment.',
          },
          {
            title: 'The Distributor Layer',
            body: "Dominant players are Lagos-based trading companies that hold NAFDAC registrations across multiple product lines and supply both public and private sector buyers. The largest distributors have warehouse facilities, biomedical engineering teams, and established relationships with procurement directorates. International suppliers who attempt to go direct to buyers typically find their bids rejected on local registration grounds or outcompeted by distributors with superior operational capability.",
          },
          {
            title: 'Last-Mile to Northern and Eastern States',
            body: 'Beyond Lagos and Abuja, distribution becomes logistically challenging. Equipment to Kano, Enugu, or Maiduguri requires road transport, reliable in-state contacts, and — for specialist installation — biomedical engineers willing to travel. Distributors with genuine national coverage are rare and command premium positioning. A realistic national distribution strategy requires presence in Lagos, Abuja, Port Harcourt, and Kano at minimum.',
          },
        ].map(({ title, body }) => (
          <div key={title} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="font-black text-navy mb-3">{title}</div>
            <p className="text-sm text-navy/60 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Key Challenges</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            title: 'FX Availability',
            body: 'Nigeria operates a managed FX system. When FX availability tightens, import volumes decline even if clinical demand is unchanged. The naira depreciated ~60% against the dollar in 2023 alone. Any financial model needs to account for FX risk explicitly — budget USD costs in NGN with realistic exchange rate scenarios.',
          },
          {
            title: 'Maintenance Ecosystem',
            body: 'Equipment in Nigerian hospitals frequently suffers from poor maintenance, not because hospitals do not want to maintain it but because the after-sales infrastructure barely exists at scale. OEM-trained biomedical engineers are concentrated in Lagos. Spare parts supply chains are unreliable. This creates reputational risk for suppliers regardless of fault.',
          },
          {
            title: 'Infrastructure for High-End Imaging',
            body: 'MRI systems require stable power, shielded rooms, and HVAC that maintains temperature and humidity. Many facilities that want imaging equipment lack one or more prerequisites. Site preparation can add 6–18 months and $100,000–$500,000 to a capital project. Suppliers who support full site preparation close more deals.',
          },
        ].map(({ title, body }) => (
          <div key={title} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={14} className="text-gold" />
              <span className="font-black text-navy text-sm">{title}</span>
            </div>
            <p className="text-xs text-navy/60 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Opportunities: Fastest-Growing Segments</h2>
      <div className="space-y-4">
        {[
          {
            title: 'Refurbished Premium Imaging',
            badge: 'Largest Near-Term Opportunity',
            body: "Nigerian private hospitals and state facilities want GE, Siemens, and Philips imaging systems at prices they can actually afford. Quality-certified refurbished equipment from ISO 13485-accredited refurbishers fills this gap directly.",
            links: [
              { label: 'Refurbished CT Scanners Africa', to: '/refurbished-ct-scanners-africa' },
              { label: 'Used MRI Machines Africa', to: '/used-mri-machines-africa' },
            ],
          },
          {
            title: 'Dialysis Equipment',
            badge: 'Critical Shortage',
            body: 'Nigeria has an estimated 25–30 million people living with chronic kidney disease and approximately 250 operational dialysis machines in the country. The gap is catastrophic and the demand is real. Private dialysis centres are expanding rapidly in Lagos and Abuja.',
            links: [
              { label: 'Dialysis Machines Africa', to: '/dialysis-machines-africa' },
            ],
          },
          {
            title: 'Point-of-Care Diagnostics',
            badge: 'NHIA-Driven Growth',
            body: 'NHIA expansion, PHC facility upgrading, and the ongoing infectious disease burden create sustained demand for portable, robust, easy-to-maintain diagnostic equipment. Products that perform without stable power and without specialist maintenance have a distinct competitive advantage.',
            links: null,
          },
          {
            title: 'Telemedicine-Enabling Equipment',
            badge: 'Post-COVID Momentum',
            body: 'The teleconsultation sector accelerated during COVID-19 and has maintained momentum. Portable diagnostic equipment that can transmit data to remote specialists — portable ECG, ultrasound, pulse oximetry — serves both private telehealth ventures and NGO programmes.',
            links: null,
          },
        ].map(({ title, badge, body, links }) => (
          <div key={title} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="font-black text-navy">{title}</div>
              <div className="bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">{badge}</div>
            </div>
            <p className="text-sm text-navy/60 leading-relaxed mb-3">{body}</p>
            {links && (
              <div className="flex flex-wrap gap-4 pt-2 border-t border-navy/5">
                {links.map(({ label, to }) => (
                  <Link key={to} to={to} className="text-teal text-xs font-bold hover:underline">{label} →</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
        <div className="font-black text-navy mb-4">Recommended Entry Sequence for New International Suppliers</div>
        <div className="space-y-3">
          {[
            'Identify and partner with a financially stable, NAFDAC-registered Lagos distributor with established government relationships',
            'Prioritise NAFDAC registration for your highest-volume SKUs before entering — do not rely on distributor\'s existing registrations for your products',
            'Focus initial efforts on private hospital groups in Lagos and Abuja where decision cycles are faster (weeks vs months)',
            'Use early private sector placements to build the reference site portfolio needed to compete for federal and state tenders',
            'Invest in biomedical engineer training and local spare parts inventory — this creates defensible competitive advantage',
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="text-xs font-black text-teal bg-teal/10 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
              <p className="text-sm text-navy/60 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          {
            q: 'What is the realistic minimum investment required to establish a viable market position in Nigeria?',
            a: "Establishing a meaningful presence typically requires a minimum two-year commitment. Budget for: NAFDAC registration across key product lines ($3,000–$8,000 per registration), at minimum two to three in-country visits per year, distributor support activities, and the cost of carrying receivables that may stretch 6–18 months on government accounts. Suppliers expecting fast ROI consistently underperform those treating Nigeria as a 3–5 year market development investment.",
          },
          {
            q: 'Is the Nigerian government a reliable payer for equipment contracts?',
            a: "Federal government payment is slow but ultimately reliable for contracted deliveries — the key risk is the gap between delivery and payment, which routinely exceeds 12 months. State government payment is more variable: Lagos State has a reasonable payment record; some northern states have histories of disputed or delayed payments. Structure contracts with advance payment requirements where politically feasible, or price the receivables risk into your commercial terms.",
          },
          {
            q: 'How significant is the grey market and how does it affect legitimate suppliers?',
            a: "Grey market operators — equipment imported without NAFDAC registration or through informal channels — can undercut legitimate importers by 20–40% because they are not carrying registration, SONCAP, or full duty costs. The mitigation is to compete on quality documentation, after-sales service, and formal sector buyer relationships where grey market sourcing is too risky for buyers to consider.",
          },
          {
            q: 'Does local manufacturing have any meaningful role in the Nigerian medical device market?',
            a: "Minimal, currently. There is nascent domestic production of consumables and basic equipment, encouraged by government local content policies. But the industrial infrastructure and investment environment have not yet produced significant scale. For the foreseeable future, the Nigerian medical device market will remain 90%+ import-dependent. Local content requirements in public sector tenders are worth monitoring — this could affect bidding requirements within 3–5 years.",
          },
          {
            q: 'How does Nigeria compare to South Africa as an entry point for pan-African expansion?',
            a: "They serve different strategic purposes. South Africa is a more mature market with better infrastructure, more predictable regulation (SAHPRA), and higher per-capita healthcare spending — but smaller by population and growing more slowly. Nigeria offers vastly larger population scale and faster growth but requires significantly more operational investment. Companies needing to demonstrate African revenue quickly often enter South Africa first. Companies building for long-term leadership prioritise Nigeria. Treat them as distinct country strategies, not a single Africa plan.",
          },
          {
            q: 'What impact has naira devaluation had on Nigerian equipment purchasing decisions?',
            a: "In the short term, it contracted public sector purchasing power. This has accelerated interest in refurbished equipment at lower USD price points and extended equipment operating lifetimes through maintenance rather than replacement. In the medium term, it has made Nigerian distributors reluctant to hold large USD-priced inventory, preferring shorter-order cycles. International suppliers should expect Nigerian buyers to push harder for naira-denominated contracts or FX hedging mechanisms.",
          },
          {
            q: 'Which Nigerian cities represent the best entry points beyond Lagos?',
            a: "Abuja (FCT) is the second most important market — federal government buyers, growing private hospital sector, better infrastructure. Port Harcourt has significant private sector healthcare activity from the oil and gas industry, with buyers who have high standards and reasonable payment capacity. Kano is the largest northern city and a distribution hub for the northwest. Enugu serves the southeast. A realistic national distribution strategy requires presence in all four cities.",
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

    <section className="bg-navy rounded-2xl p-8 text-white">
      <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Regulatory Companion</div>
      <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Also Read: The Complete NAFDAC Registration Guide</h3>
      <p className="text-white/60 text-sm mb-6 leading-relaxed">
        This report covers the market opportunity. For the full step-by-step NAFDAC registration process, document checklist, fee schedule, and common mistakes, see our dedicated compliance guide.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link to="/guides/importing-medical-equipment-nigeria-nafdac" className="bg-teal text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-teal/90 transition-colors">Read the NAFDAC Guide →</Link>
        <Link to="/request-verified-pricing-medical-equipment" className="border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white/10 transition-colors">Request Verified Pricing</Link>
      </div>
    </section>

  </div>
);
