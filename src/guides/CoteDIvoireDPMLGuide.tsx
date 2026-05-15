import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, Clock, TrendingUp, MapPin } from 'lucide-react';

export const CoteDIvoireDPMLGuide: React.FC = () => (
  <div className="space-y-12">

    {/* Intro */}
    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        Côte d'Ivoire is the medical equipment market that English-speaking suppliers consistently overlook — and that French and Chinese suppliers have been quietly building in for a decade. For a market of 27 million people, the largest economy in the UEMOA zone, and one of the fastest-growing economies on the African continent for the past ten years, Côte d'Ivoire receives a fraction of the international supplier attention it deserves from companies whose commercial focus defaults to Anglophone markets.
      </p>
      <p className="text-navy/70 leading-relaxed mb-4">
        That oversight is an opportunity. Importing medical equipment into Côte d'Ivoire requires engaging with the DPML — the Direction de la Pharmacie, du Médicament et des Laboratoires — but the regulatory framework, while conducted primarily in French, is navigable for internationally certified manufacturers. The market's healthcare investment story is compelling, Port of Abidjan is one of West Africa's premier logistics hubs, and the CFA franc's peg to the euro removes the foreign exchange volatility that complicates other African markets.
      </p>
    </section>

    {/* Internal link */}
    <section>
      <div className="bg-teal/5 border border-teal/15 rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Related Resource</div>
        <p className="text-sm text-navy/70 mb-3">Sourcing verified refurbished equipment for West African hospitals? Browse ISO 13485-certified suppliers ready to supply Côte d'Ivoire and the UEMOA region.</p>
        <Link to="/refurbished-medical-equipment-catalogue-africa" className="text-teal font-bold text-sm hover:underline">Browse Verified Medical Equipment Catalogue →</Link>
      </div>
    </section>

    {/* Why CIV */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Why Côte d'Ivoire Is the Gateway to Francophone West Africa</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-6">
        Côte d'Ivoire's case for medical equipment suppliers rests on three interlocking realities that most English-speaking market analysts underweight.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          {
            icon: <TrendingUp size={20} className="text-teal" />,
            title: 'Economic Leadership in West Africa',
            body: 'Côte d\'Ivoire has posted GDP growth of 6–8% annually for over a decade. Abidjan is the commercial capital of the UEMOA zone — home to the BCEAO regional central bank, the BRVM regional stock exchange, and the headquarters of major regional financial institutions.',
          },
          {
            icon: <CheckCircle2 size={20} className="text-teal" />,
            title: 'The CFA Franc Advantage',
            body: 'The West African CFA franc (XOF) is pegged to the euro at a fixed rate of 655.96 XOF/EUR, guaranteed by the French Treasury. This eliminates foreign exchange volatility. For European suppliers, pricing in EUR maps directly to XOF without conversion risk — genuinely rare in African markets.',
          },
          {
            icon: <MapPin size={20} className="text-teal" />,
            title: 'Regional Distribution Platform',
            body: 'Abidjan is 3 hours from Accra (Ghana) and serves as the logistics gateway for landlocked Mali and Burkina Faso. Port of Abidjan handles 25 million tonnes annually. A DPML-registered Ivorian distributor can serve the broader Francophone West Africa region efficiently.',
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
        <span className="font-bold text-navy">Healthcare investment gap: </span>
        The government's Plan National de Développement Sanitaire has committed to expanding hospital infrastructure across all regions — including major investment in diagnostic imaging, laboratory systems, and maternal health equipment. The expansion of private hospital and diagnostic centre capacity in Abidjan has accelerated markedly, driven by a growing urban middle class and employer-funded health insurance schemes.
      </div>
    </section>

    {/* DPML section */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">DPML: Côte d'Ivoire's Medical Device Regulator</h2>
      <p className="text-navy/70 text-sm mb-4">
        The <span className="font-bold text-navy">Direction de la Pharmacie, du Médicament et des Laboratoires (DPML)</span> is the directorate within the Ministère de la Santé et de l'Hygiène Publique responsible for regulating pharmaceutical products and medical devices in Côte d'Ivoire. The DPML oversees product registration, import authorisation, market surveillance, and quality control of medical devices on the Ivorian market.
      </p>
      <p className="text-navy/70 text-sm mb-4">
        The DPML operates within a framework that reflects Côte d'Ivoire's membership in both UEMOA and ECOWAS. Registration requirements draw on WHO international guidance, meaning manufacturers with CE certification, US FDA clearance, or WHO Prequalification will find their documentation portfolio largely compatible with DPML requirements.
      </p>
      <div className="bg-gold/10 border border-gold/20 rounded-xl px-5 py-4 flex items-start gap-3">
        <AlertTriangle size={16} className="text-gold mt-0.5 shrink-0" />
        <p className="text-sm text-navy/70">
          <span className="font-bold text-navy">Language barrier: </span>
          All regulatory correspondence with the DPML, application forms, and in-country labelling requirements are conducted in French. This is the single most significant practical barrier for non-Francophone manufacturers — and the primary reason an experienced Francophone local importer-partner is essential.
        </p>
      </div>
    </section>

    {/* Classification */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Medical Device Classification in Côte d'Ivoire</h2>
      <p className="text-navy/70 text-sm mb-6">Côte d'Ivoire's classification framework follows WHO/GHTF risk-based principles across four classes. Most imported capital medical equipment — imaging systems, laboratory platforms, ICU equipment — falls into Class III or Class IV.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            cls: 'Classe I',
            risk: 'Faible Risque (Low Risk)',
            examples: 'Hospital furniture, non-sterile consumables, basic diagnostic accessories, tongue depressors',
            pathway: 'Abbreviated regulatory pathway — registration still required before sale in Côte d\'Ivoire',
            color: 'border-l-4 border-teal',
          },
          {
            cls: 'Classe II',
            risk: 'Risque Modéré (Moderate Risk)',
            examples: 'Non-sterile wound dressings, basic monitoring accessories, suction equipment, non-critical diagnostic reagents',
            pathway: 'Standard registration dossier and technical review',
            color: 'border-l-4 border-teal/60',
          },
          {
            cls: 'Classe III',
            risk: 'Risque Élevé (High Risk)',
            examples: 'Ultrasound systems, digital X-ray, patient monitors, infusion pumps, haematology analysers, dialysis machines',
            pathway: 'Full technical dossier required — most capital equipment imported by Ivorian hospitals sits here',
            color: 'border-l-4 border-gold',
          },
          {
            cls: 'Classe IV',
            risk: 'Risque Très Élevé (Highest Risk)',
            examples: 'Implantable cardiac devices, HIV diagnostic test kits, blood screening IVDs, life-sustaining implantables',
            pathway: 'Most extensive documentation and expert review — 10–14 months typical timeline',
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
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step-by-Step DPML Registration Process</h2>
      <div className="space-y-4">
        {[
          {
            n: '01',
            title: 'Appoint a Licensed Ivorian Importer',
            timeline: '4–8 weeks to establish',
            desc: 'Foreign manufacturers must work through a locally licensed importer registered with the DPML in Côte d\'Ivoire. This partner submits the registration application, handles all French-language correspondence with the DPML, holds import authorisations, and takes regulatory responsibility in the Ivorian market.',
            tip: 'Selecting an importer with genuine DPML experience in your device category is the most important decision in your Ivorian market entry strategy. Experience with Class III capital equipment is particularly valuable — the documentation requirements are significantly more complex than for Class I or II.',
          },
          {
            n: '02',
            title: 'Prepare the French-Language Technical Dossier',
            timeline: '8–16 weeks',
            desc: 'The DPML registration dossier must be submitted in French. This is the most time-intensive stage. Technical documents, clinical data summaries, and Instructions for Use must all be professionally translated — not machine-translated. Start the Certificate of Free Sale (Certificat de Libre Vente) process at the same time as translation, as authentication can take 4–8 weeks.',
            tip: 'A poorly translated dossier is a returned dossier. Budget for professional technical translation from day one — do not attempt to save cost here. The time cost of a returned submission is far higher than the translation fee.',
          },
          {
            n: '03',
            title: 'Submit Application to DPML in Abidjan',
            timeline: 'Day of submission',
            desc: 'Applications are submitted to the DPML directorate in Abidjan. The DPML conducts an administrative screening review followed by technical evaluation. Given the French-language requirement throughout, an experienced local importer who manages this process is essential. Payment of dossier fees is required at submission.',
            tip: 'Verify the completeness of your dossier against the published DPML checklist before submitting. An incomplete submission is returned in full — resetting the timeline entirely.',
          },
          {
            n: '04',
            title: 'Technical Review and Query Response',
            timeline: '4–12 months depending on class',
            desc: 'The DPML technical review timeline varies by device class. Class I and II devices with complete dossiers typically move faster. For Class III and IV capital equipment, additional expert review may be required. Queries from DPML reviewers must be responded to within specified timeframes — your licensed importer manages this correspondence.',
            tip: 'Establish a query response protocol with your licensed importer and manufacturer before submitting. Queries often require technical input that takes weeks to obtain from overseas manufacturing teams.',
          },
          {
            n: '05',
            title: 'Autorisation de Mise sur le Marché (AMM) Issued',
            timeline: '1–3 weeks after approval',
            desc: 'Upon approval, the DPML issues a market authorisation — the Autorisation de Mise sur le Marché (AMM). This is the document required for all subsequent import permit applications. The AMM is product-specific and importer-specific, valid for five years, and renewable at 50–60% of the initial registration fee.',
            tip: 'Diarise your AMM renewal date immediately and begin renewal proceedings at least 3 months before expiry. A lapsed AMM means you cannot legally import or distribute until the renewed authorisation is issued.',
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
            { cls: 'Classe I', time: '3–5 months' },
            { cls: 'Classe II', time: '4–6 months' },
            { cls: 'Classe III', time: '6–10 months' },
            { cls: 'Classe IV', time: '10–14 months' },
          ].map(({ cls, time }) => (
            <div key={cls} className="text-center">
              <div className="font-black text-navy text-sm mb-1">{cls}</div>
              <div className="text-teal font-bold text-xs">{time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Documentation checklist */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Complete Documentation Checklist</h2>
      <p className="text-navy/70 text-sm mb-6">Required for Class II, III, and IV device registrations. All documents submitted to the DPML must be in French or accompanied by certified French translations.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">From the Manufacturer (Country of Origin)</div>
          <div className="space-y-3">
            {[
              'Lettre d\'autorisation du fabricant — notarised + certified French translation',
              'Certificat de Libre Vente (Certificate of Free Sale) — apostilled + French translation',
              'Certificat CE, autorisation FDA américaine, ou préqualification OMS — current',
              'Certificat ISO 13485 — valid and from accredited body',
              'Notice d\'utilisation (Instructions for Use) — French language version required',
              'Fiche technique — technical specifications including 220V/50Hz power compatibility',
              'Données cliniques / évaluation des performances — clinical/performance data summary',
              'Rapport de surveillance post-commercialisation — Class III and IV devices',
              'Étiquetage / échantillons d\'emballage — French labelling samples',
              'Liste des pays de commercialisation',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">From the Licensed Ivorian Importer</div>
          <div className="space-y-3">
            {[
              'Formulaire de demande d\'enregistrement DPML — completed by licensed importer',
              'Licence d\'importateur DPML — valid and current',
              'Documents d\'enregistrement de la société ivoirienne (Registre du Commerce)',
              'Signed importer-manufacturer agreement — French language',
              'Storage facility documentation (where required by device class)',
              'Confirmation de paiement des frais de dossier',
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
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">DPML Fee Schedule: XOF, EUR, and USD</h2>
      <p className="text-navy/70 text-sm mb-6">
        Fees are denominated in XOF (West African CFA franc). The EUR/XOF peg at 655.96 XOF/EUR means fees are effectively stable in EUR terms. USD conversion at approximately 600 XOF/USD. Confirm current rates with your licensed Ivorian importer before submission — fees are subject to revision by the DPML.
      </p>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden mb-4">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Service</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">XOF</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">EUR (approx.)</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">USD (approx.)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['Enregistrement — Classe I', 'XOF 150,000', '~€230', '~$250'],
              ['Enregistrement — Classe II', 'XOF 300,000', '~€460', '~$500'],
              ['Enregistrement — Classe III', 'XOF 600,000', '~€915', '~$1,000'],
              ['Enregistrement — Classe IV', 'XOF 900,000', '~€1,370', '~$1,500'],
              ['Autorisation d\'importation (per shipment)', 'XOF 50,000–150,000', '~€75–€230', '~$85–$250'],
              ['Renouvellement AMM (5-year renewal)', '50–60% of initial fee', '—', '—'],
            ].map(([cat, xof, eur, usd]) => (
              <tr key={cat} className="hover:bg-clinical/30">
                <td className="p-4 text-navy/70">{cat}</td>
                <td className="p-4 font-bold text-navy">{xof}</td>
                <td className="p-4 text-navy/60">{eur}</td>
                <td className="p-4 text-navy/60">{usd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: 'Licensed importer DPML licence (annual)', value: 'XOF 200,000–500,000' },
          { label: 'French translation (per dossier)', value: 'EUR 2,000–8,000' },
          { label: 'Total Class III budget (all-in)', value: 'XOF 1.5M–4M + translation' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-clinical rounded-xl p-4">
            <div className="text-xs text-navy/50 mb-1">{label}</div>
            <div className="font-black text-navy text-sm">{value}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Customs clearance */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Customs Clearance: Port of Abidjan and Félix-Houphouët-Boigny Airport</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Port of Abidjan</div>
          <p className="text-sm text-navy/60 leading-relaxed mb-4">
            The Port of Abidjan handles approximately 25 million tonnes of cargo annually and is the primary logistics gateway for Côte d'Ivoire and for landlocked Mali, Burkina Faso, and Niger. All customs declarations are processed through SYDAM (the Ivorian customs IT system).
          </p>
          <div className="space-y-3">
            {[
              'Commercial invoice — with HS Code, FOB value, country of origin',
              'Packing list',
              'Bill of lading',
              'DPML import authorisation and valid AMM certificate',
              'Insurance certificate',
              'Certificate of origin — important for ECOWAS preferential treatment',
              'Conformity documents for HS Chapter 90 classification',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-navy/40 mt-4">Well-documented shipments with complete DPML authorisation typically clear within 5–10 working days.</p>
        </div>

        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Import Duties and Taxes</div>
          <p className="text-xs text-navy/60 mb-4">Côte d'Ivoire applies the ECOWAS Common External Tariff (CET). Most medical equipment may qualify for reduced or zero import duty rates under Ivorian healthcare procurement frameworks. Additional levies apply:</p>
          <div className="space-y-2 mb-4">
            {[
              { item: 'CET Base Duty (most medical equipment)', rate: '0–5%' },
              { item: 'ECOWAS Community Levy', rate: '0.5% of CIF' },
              { item: 'UEMOA Community Levy', rate: '1.0% of CIF' },
              { item: 'TVA (VAT)', rate: '18%' },
              { item: 'Statistical Tax (Redevance statistique)', rate: '1.0% of CIF' },
            ].map(({ item, rate }) => (
              <div key={item} className="flex justify-between items-center text-xs">
                <span className="text-navy/60">{item}</span>
                <span className="font-bold text-navy">{rate}</span>
              </div>
            ))}
          </div>
          <div className="bg-teal/5 border border-teal/15 rounded-lg px-4 py-3">
            <p className="text-xs text-navy/60">Confirm HS code treatment with a licensed Ivorian customs broker (transitaire agréé en douane) before committing to a commercial price. Specific categories of medical equipment may qualify for TVA exemption under government healthcare procurement programmes.</p>
          </div>
          <div className="mt-4">
            <div className="text-xs font-bold uppercase tracking-widest text-teal mb-2">Félix-Houphouët-Boigny International Airport</div>
            <p className="text-xs text-navy/60">Air freight for time-sensitive or high-value equipment. Abidjan is well connected to Paris CDG, Brussels, and Amsterdam with daily direct flights. Same DGD customs process applies. Typically used for urgent diagnostic equipment.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Practical challenges */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Key Challenges to Anticipate</h2>
      <div className="space-y-4">
        {[
          {
            challenge: 'French language throughout the entire process',
            detail: 'The entire regulatory, customs, and commercial process operates in French. Application forms, technical dossiers, labelling, customs declarations, and correspondence with the DPML must be in French. Non-Francophone manufacturers must rely entirely on a local importer partner with full French-language capability. This is not a minor consideration: a poorly translated dossier is a rejected dossier, and a rejected dossier resets the timeline.',
          },
          {
            challenge: 'Registration timelines for Class III and IV devices',
            detail: 'Class III registrations realistically take 6–10 months; Class IV can take 10–14 months. Suppliers who commit to the Ivorian market but have not allowed for these lead times find themselves market-ready on paper but unable to import or sell. Begin DPML registration as soon as your commercial pipeline shows serious Ivorian interest — not when you have a confirmed order.',
          },
          {
            challenge: 'After-sales service infrastructure outside Abidjan',
            detail: 'Abidjan concentrates the majority of biomedical engineering capability. Hospitals outside the capital — particularly CHRs (Centres Hospitaliers Régionaux) being expanded under the Plan National de Développement Sanitaire — expect supplier-backed service coverage. Either establish a Ghanaian or Ivorian service partner with genuine biomedical engineering capability, or build extended warranty and remote support into your commercial model.',
          },
          {
            challenge: 'Regional market vs national market distinction',
            detail: 'Côte d\'Ivoire\'s commercial importance in the UEMOA zone means that distributors often position it as a platform for supply to Mali, Burkina Faso, and other landlocked neighbours. This is commercially attractive but requires understanding that medical device registration in Côte d\'Ivoire does not confer market authorisation in neighbouring countries — each has its own regulatory requirements. ECOWAS membership facilitates logistics and duties, not regulatory approvals.',
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
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Practical Tips for First-Time Market Entrants</h2>
      <div className="space-y-4">
        {[
          {
            title: 'French-language capability in your importer is non-negotiable',
            body: 'A bilingual importer with established DPML relationships is the single most important enabler of your Ivorian registration. Experience with your specific device category — particularly Class III capital equipment — is more valuable than general regulatory experience. Ask for references from other international manufacturers they have registered with the DPML.',
          },
          {
            title: 'Factor translation costs and time into your dossier timeline',
            body: 'Technical documents, clinical data summaries, and IFUs must be professionally translated to French — not machine-translated. Budget 4–8 weeks for this alone, and start it simultaneously with other dossier preparation, not sequentially after it.',
          },
          {
            title: 'Price in EUR where possible',
            body: 'The XOF/EUR peg at 655.96 makes EUR pricing straightforward and eliminates FX conversion discussion. For USD-based suppliers, the peg provides predictable USD/XOF conversion via USD/EUR rates. Ivorian private hospitals increasingly expect EUR-denominated invoicing.',
          },
          {
            title: 'Target Abidjan private diagnostics first',
            body: 'Polycliniques and private diagnostic centres in Abidjan\'s commercial districts (Plateau, Cocody, Marcory) have faster procurement cycles and better hard-currency access than public hospitals. Government CHR expansion creates demand but typically involves longer procurement cycles through Ministère de la Santé frameworks.',
          },
          {
            title: 'Engage the regional distribution opportunity from the start',
            body: 'A DPML-registered Ivorian distributor can supply Mali and Burkina Faso more efficiently than a separate market entry in each country. Build this into your regional strategy from day one — structure your importer agreement to allow onward distribution, and ensure your AMM documentation package is formatted so it can be reused as supporting evidence for neighbouring country registrations.',
          },
        ].map(({ title, body }) => (
          <div key={title} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm">
            <div className="font-black text-navy text-sm mb-2">{title}</div>
            <p className="text-sm text-navy/60 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Internal link to ultrasound */}
    <section>
      <div className="bg-teal/5 border border-teal/15 rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Equipment for West African Hospitals</div>
        <p className="text-sm text-navy/70 mb-3">Ultrasound is the most requested imaging modality across Francophone West Africa — district hospital expansion programmes consistently prioritise it. Browse verified refurbished ultrasound systems from ISO 13485-certified suppliers.</p>
        <Link to="/refurbished-ultrasound-machines-africa" className="text-teal font-bold text-sm hover:underline">Browse Refurbished Ultrasound Machines for Africa →</Link>
      </div>
    </section>

    {/* FAQ */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          {
            q: 'How long does DPML medical device registration take?',
            a: 'Class I: 3–5 months. Class II: 4–6 months. Class III: 6–10 months. Class IV: 10–14 months. A complete, professionally translated French-language dossier submitted by an experienced licensed importer is the primary determinant of timeline. A returned or rejected submission resets the clock entirely — completeness before submission is critical.',
          },
          {
            q: 'Do I need a local Ivorian agent to register with the DPML?',
            a: 'Yes. Foreign manufacturers must work through a DPML-licensed local importer who submits the application, holds the AMM, and manages all French-language regulatory correspondence. This partner is not optional. Structure your contracts before registration begins: address ownership of registration data, conditions for AMM transfer, and obligations on both parties if the representation relationship terminates.',
          },
          {
            q: 'Does the CFA franc peg affect how I price and receive payment?',
            a: 'The XOF/EUR peg at 655.96 means EUR pricing is directly convertible without volatility risk. For European suppliers, this is a significant advantage. For USD-based suppliers, the peg provides predictable USD/XOF conversion via USD/EUR rates. Payment is typically arranged via letter of credit through Ivorian commercial banks or through USD/EUR-denominated trade finance arrangements.',
          },
          {
            q: 'Is Côte d\'Ivoire a good base for Francophone West Africa distribution?',
            a: 'Yes — and this is increasingly how sophisticated international suppliers approach the sub-region. Abidjan is the commercial capital of the UEMOA zone, Port of Abidjan serves as the logistics gateway for Mali, Burkina Faso, and Niger, and the road network connects efficiently to Ghana. A DPML-registered distributor provides the commercial and logistics infrastructure to serve the broader Francophone West Africa region. Note that individual country registrations are still required in each market — ECOWAS membership facilitates logistics and duties, not regulatory approvals.',
          },
          {
            q: 'What medical equipment is in highest demand in Côte d\'Ivoire?',
            a: 'Diagnostic imaging (ultrasound, X-ray, CT — district hospital expansion drives this); laboratory equipment (haematology, biochemistry — national laboratory network investment); patient monitoring (ICU and surgical ward expansion in Abidjan private hospitals); dialysis equipment (growing renal disease burden); and dental equipment (private clinic sector in Abidjan growing rapidly). Government CHR expansion programmes systematically prioritise diagnostic imaging and laboratory automation.',
          },
          {
            q: 'How does DPML registration compare to FDA Ghana registration?',
            a: 'Both require local representation, full product registration, and a technical dossier including ISO 13485 and Certificate of Free Sale. The key practical differences are language (DPML requires French throughout; FDA Ghana is English) and predictability. FDA Ghana is widely considered more transparent and consistently applied. For a non-Francophone manufacturer, FDA Ghana is a more forgiving environment to learn African regulatory processes — and Ghana can serve as a distribution staging post for Côte d\'Ivoire via the ECOWAS framework.',
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
      <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Start Your Côte d'Ivoire Market Entry</div>
      <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Suppliers with DPML-Ready Documentation</h3>
      <p className="text-white/60 text-sm mb-6 leading-relaxed">
        The Ivorian market rewards preparation. Working with a supplier who can provide a complete technical file, current ISO 13485 certificate, and Certificate of Free Sale from day one reduces your DPML registration timeline and your market entry risk. Browse verified suppliers and request pricing tailored to Francophone West African procurement.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link to="/refurbished-medical-equipment-catalogue-africa" className="bg-teal text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-teal/90 transition-colors">Browse Equipment Catalogue →</Link>
        <Link to="/request-verified-pricing-medical-equipment" className="border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white/10 transition-colors">Request Verified Pricing</Link>
      </div>
    </section>

  </div>
);
