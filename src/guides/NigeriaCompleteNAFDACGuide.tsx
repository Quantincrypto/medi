import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

export const NigeriaCompleteNAFDACGuide: React.FC = () => (
  <div className="space-y-12">

    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        Nigeria is not the easiest market to import medical equipment into. Registration timelines that officially read "6–8 weeks" routinely stretch to six months. Documents submitted correctly get queried anyway. Product classification decisions that seem obvious on paper turn out to be contested in practice.
      </p>
      <p className="text-navy/70 leading-relaxed mb-4">
        And yet, Nigeria is the market no serious medical equipment supplier can afford to ignore. With a population exceeding 220 million — the largest in Africa — Nigeria represents roughly 20% of the continent's entire consumer base. Federal and state government capital budgets for health equipment procurement run into billions of naira annually, and the private hospital sector has expanded rapidly, generating consistent demand for diagnostic and imaging equipment, laboratory systems, and patient monitoring.
      </p>
      <p className="text-navy/70 leading-relaxed">
        According to National Bureau of Statistics data, medical and pharmaceutical imports regularly rank among the top five import categories by value, with medical devices and equipment accounting for an estimated $300–$400 million USD annually at declared customs value. The Federal Ministry of Health has identified CT scanners, MRI systems, dialysis machines, digital X-ray, and laboratory automation as chronic shortage areas in public facilities.
      </p>
    </section>

    <section>
      <div className="bg-teal/5 border border-teal/15 rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Related Resource</div>
        <p className="text-sm text-navy/70 mb-3">Sourcing refurbished equipment for Nigerian hospitals? Browse verified, ISO 13485-certified suppliers with NAFDAC-ready documentation.</p>
        <Link to="/used-medical-equipment-nigeria-lagos-abuja" className="text-teal font-bold text-sm hover:underline">Used Medical Equipment — Nigeria (Lagos &amp; Abuja) →</Link>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">NAFDAC vs Other African Regulators</h2>
      <p className="text-navy/70 text-sm mb-6">Most procurement officers with experience across multiple African markets find NAFDAC to be the most document-intensive regulator on the continent. Here is why that matters in practice.</p>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Regulator</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Country</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Core Mechanism</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Real-World Timeline</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['NAFDAC', 'Nigeria', 'Product Registration + SONCAP Pre-shipment', '8–18 months'],
              ['PPB', 'Kenya', 'ISO 13485 + CE Mark acceptance', '4–8 weeks'],
              ['SAHPRA', 'South Africa', 'Section 21 Authorisation + Medical Device Licence', '6–10 months'],
              ['Ghana FDA', 'Ghana', 'Product Registration + CFS', '4–10 months'],
              ['NDA Uganda', 'Uganda', 'Import Permit + GMP evidence', '4–8 weeks'],
            ].map(([reg, country, mechanism, timeline]) => (
              <tr key={reg} className="hover:bg-clinical/30">
                <td className="p-4 font-black text-navy">{reg}</td>
                <td className="p-4 text-navy/60">{country}</td>
                <td className="p-4 text-navy/60 text-xs">{mechanism}</td>
                <td className="p-4 font-bold text-teal text-xs">{timeline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-navy/40 mt-3">Kenya's PPB largely accepts CE Mark and ISO 13485 — approval is relatively straightforward. NAFDAC requires full product registration, mandatory pre-shipment inspection, and a long document set that does not automatically renew.</p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Product Classification: What Class Is Your Equipment?</h2>
      <p className="text-navy/70 text-sm mb-6">NAFDAC classifies medical devices into four risk classes. Your classification determines the dossier requirements, the review process, and the applicable fees.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            cls: 'Class A',
            risk: 'Low Risk',
            examples: 'Examination gloves (non-sterile), bandages, hospital furniture, tongue depressors, stethoscopes',
            pathway: 'Notification/listing — shortest process',
            color: 'border-l-4 border-teal',
          },
          {
            cls: 'Class B',
            risk: 'Low to Medium Risk',
            examples: 'Syringes, blood pressure monitors (non-invasive), thermometers, patient monitors (basic vital signs), wheelchairs',
            pathway: 'Full registration, shorter technical review',
            color: 'border-l-4 border-teal/60',
          },
          {
            cls: 'Class C',
            risk: 'Medium to High Risk',
            examples: 'Digital X-ray, ultrasound, surgical lasers, haemodialysis machines, infusion pumps, clinical laboratory analysers',
            pathway: 'Full registration, extended technical review, possible site inspection',
            color: 'border-l-4 border-gold',
          },
          {
            cls: 'Class D',
            risk: 'High Risk',
            examples: 'Implantable cardiac devices, HIV diagnostic test kits, implantable drug delivery systems',
            pathway: 'Full registration, mandatory clinical data review, highest fees',
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
      <div className="mt-4 bg-gold/10 border border-gold/20 rounded-xl px-5 py-4 text-sm text-navy/70">
        <span className="font-bold text-navy">Important: </span>Most capital equipment Nigerian hospitals are actively procuring — CT scanners, MRI systems, C-arm fluoroscopy, dialysis machines — is typically Class C or D. Budget your timelines accordingly.
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step-by-Step NAFDAC Registration Process</h2>
      <div className="space-y-4">
        {[
          {
            n: '01',
            title: 'Determine Registration Requirement',
            timeline: 'Before you start',
            desc: 'Confirm whether your product requires registration. As a general rule: if it is a medical device intended for diagnosis, treatment, monitoring or prevention of disease, it requires registration. Refurbished equipment is not exempt — NAFDAC does not have a secondhand carve-out.',
            tip: 'Check whether an existing NAFDAC registration already exists for your model. Working through an existing registrant may be faster than a new application.',
          },
          {
            n: '02',
            title: 'Engage a Nigerian Local Representative',
            timeline: '1–3 weeks',
            desc: 'NAFDAC regulations require the applicant to be a Nigerian company. Foreign manufacturers cannot apply directly. You must appoint a Nigerian entity as your local regulatory affairs representative. Your choice of local partner significantly affects your timeline.',
            tip: 'Ask prospective partners specifically which medical device categories they have registered in the last 24 months. An experienced NAFDAC-facing firm is worth paying more for.',
          },
          {
            n: '03',
            title: 'Assemble Technical Dossier',
            timeline: '4–10 weeks',
            desc: "This is where most timelines slip. Original documents from manufacturers in Europe, the US, or Asia require apostilles, notarisations, and Chamber of Commerce certifications. Start document assembly before you have a local partner confirmed — don't wait.",
            tip: 'Getting a Certificate of Free Sale notarised and apostilled from a European manufacturer can take 4–8 weeks on its own. Factor this into your schedule.',
          },
          {
            n: '04',
            title: 'Submit Application to NAFDAC MDDD',
            timeline: 'Day of submission',
            desc: "Applications are submitted to NAFDAC's Medical Devices and Diagnostics Division. As of 2024–2025, initial submission moves through NAFDAC's online portal, but original physical documents are still required for the official dossier.",
            tip: 'Administrative check takes 2–4 weeks. NAFDAC will return the application if documents are incomplete — causing full re-submission.',
          },
          {
            n: '05',
            title: 'Technical Review and Query Response',
            timeline: '4–16 weeks (per round)',
            desc: "NAFDAC routinely raises technical queries on Class C and D products. Each query response resets a portion of the clock. Official timeline is 3–6 months. Real-world median for Class C equipment: 9–14 months. If queries are poorly handled or documents have errors: 18+ months.",
            tip: 'Establish a formal query response protocol with your manufacturer before you submit. Missing a 60-day query window means your application is closed and you re-apply.',
          },
          {
            n: '06',
            title: 'SONCAP Pre-Shipment Inspection',
            timeline: '2–6 weeks',
            desc: 'Separate from and in addition to NAFDAC registration. A SON-approved inspection agency (SGS, Intertek, Bureau Veritas) inspects the equipment in the country of export and generates a Product Certificate and Certificate of Conformity. Without these, goods will not clear customs regardless of NAFDAC status.',
            tip: 'SONCAP inspections must happen before shipment, in the country of origin. Budget 0.3–0.5% of FOB value, with minimum charges.',
          },
          {
            n: '07',
            title: 'Customs Clearance at Port of Entry',
            timeline: '2–8 weeks',
            desc: 'Primary ports: Lagos Port Complex (Apapa/Tin Can Island) for sea freight, Lagos and Abuja airports for air freight. Required: NAFDAC certificate, SONCAP CoC, Form M (opened through a Nigerian bank before shipment), Bill of Lading, Commercial Invoice, Packing List, Insurance Certificate.',
            tip: 'Form M must be opened before goods ship. Opening it after the fact creates clearance problems that can result in port detention and demurrage.',
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
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Complete Document Checklist</h2>
      <p className="text-navy/70 text-sm mb-6">Applies to Class B and Class C medical device registrations. Class D devices require additional clinical and performance data.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">From the Manufacturer (Country of Origin)</div>
          <div className="space-y-3">
            {[
              'Certificate of Free Sale (CFS) — apostilled or notarised',
              'ISO 13485 QMS certificate — current, from accredited body',
              'CE Mark certificate or FDA 510(k)/513(f) clearance letter',
              'Declaration of Conformity (EU) or equivalent',
              "Manufacturer's Authorisation Letter appointing Nigerian representative",
              'Full product specifications and intended use statement',
              'Instructions for Use (IFU) / User Manual — in English',
              'Summary of Safety and Clinical Performance (Class C/D)',
              'Biocompatibility data (for products in contact with body)',
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
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">From the Nigerian Applicant</div>
          <div className="space-y-3 mb-6">
            {[
              'Completed NAFDAC application form (signed by authorised officer)',
              'Certificate of Incorporation (CAC) — Nigerian company registration',
              'Memorandum and Articles of Association',
              'Tax Clearance Certificate (current)',
              'Premises Inspection Report / NAFDAC-certified storage facility evidence',
              'Power of Attorney from manufacturer to local representative',
              'Sworn affidavit of compliance',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">For the Application Package</div>
          <div className="space-y-3">
            {[
              'Payment receipt for application fees',
              'Index/Table of Contents for the dossier',
              'All documents in A4 format, bound and indexed',
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

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Fee Schedule (2025 Estimates)</h2>
      <p className="text-navy/70 text-sm mb-6">Verify current fees directly with NAFDAC before submission. Total budget for a complete Class C registration — including consultant and SONCAP — typically runs $3,000–$8,000 USD.</p>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Fee Category</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">NGN</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">USD (approx. ₦1,550/$)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['Application fee (Class A)', '₦50,000', '~$32'],
              ['Application fee (Class B)', '₦100,000', '~$65'],
              ['Application fee (Class C)', '₦150,000', '~$97'],
              ['Application fee (Class D)', '₦250,000', '~$161'],
              ['Dossier review fee (Class B)', '₦200,000', '~$129'],
              ['Dossier review fee (Class C)', '₦400,000', '~$258'],
              ['Dossier review fee (Class D)', '₦750,000', '~$484'],
              ['Site inspection fee (if triggered)', '₦300,000–₦500,000', '~$194–$323'],
              ['Registration certificate issuance', '₦100,000–₦250,000', '~$65–$161'],
              ['Annual renewal fee', '20–25% of registration fee', '—'],
            ].map(([cat, ngn, usd]) => (
              <tr key={cat} className="hover:bg-clinical/30">
                <td className="p-4 text-navy/70">{cat}</td>
                <td className="p-4 font-bold text-navy">{ngn}</td>
                <td className="p-4 text-navy/60">{usd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-navy/40 mt-3">Fees are payable in NGN. Regulatory affairs consultancy fees are additional — typically ₦500,000–₦2,000,000+ depending on product class and consultant experience.</p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Common Mistakes — and How to Avoid Them</h2>
      <div className="space-y-4">
        {[
          {
            mistake: 'Submitting documents without apostilles or notarisation',
            fix: 'Build notarisation and apostille into your document assembly checklist from day one. Identify which documents need what level of authentication for the specific issuing country. This catches the application at administrative review — losing 4–8 weeks before you can resubmit.',
          },
          {
            mistake: 'Getting the product classification wrong',
            fix: 'Classifying a Class C product as Class B gets caught by NAFDAC\'s technical reviewers. When caught, the application is rejected and you start again. If your product sits on the boundary, seek a written classification determination before filing.',
          },
          {
            mistake: 'Choosing a local partner based on price rather than track record',
            fix: 'Ask prospective partners specifically which device categories they have registered in the last 24 months and get references. A partner without established NAFDAC relationships will cost you months, not money.',
          },
          {
            mistake: 'Not opening Form M before the goods ship',
            fix: 'Form M is the Nigerian import document that must be opened through a licensed Nigerian bank before shipment. Many importers open it after the fact — resulting in port detention, demurrage, and clearance delays that can run for months.',
          },
          {
            mistake: 'Treating SONCAP as optional',
            fix: 'Some importers assume goods will clear without SONCAP because they have seen it happen. This gamble can result in goods being seized at port or subjected to compulsory in-country inspection — slower, more expensive, and far less predictable.',
          },
          {
            mistake: 'Not having a query response protocol in place',
            fix: 'NAFDAC gives you 60 days to respond to technical queries. Missing this window closes the application. Establish query response protocols with your manufacturer before you submit — many queries require manufacturer input that takes weeks to obtain.',
          },
          {
            mistake: 'Registering in the name of the wrong entity',
            fix: 'NAFDAC registrations belong to the Nigerian applicant. If you register through a distributor who later stops representing you, the registration belongs to them. Structure your agreements before registration begins.',
          },
        ].map(({ mistake, fix }) => (
          <div key={mistake} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle size={16} className="text-gold mt-0.5 shrink-0" />
              <span className="font-black text-navy text-sm">{mistake}</span>
            </div>
            <p className="text-sm text-navy/60 leading-relaxed pl-7">{fix}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">After Approval: What the Certificate Gives You</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">What the Certificate Covers</div>
          <div className="space-y-3">
            {[
              'Legal importation of the registered product model',
              'Commercial distribution through registered Nigerian entity',
              'Valid for 5 years from date of issue',
              'Tied to the specific manufacturer and model listed',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Post-Approval Obligations</div>
          <div className="space-y-3">
            {[
              'Notify NAFDAC of any material product specification changes',
              'Maintain distribution records — NAFDAC has inspection powers',
              'Store in NAFDAC-compliant facilities with correct temperature/humidity controls',
              'Begin renewal process 6–12 months before expiry',
              'Continue SONCAP inspection per shipment (registration does not replace it)',
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

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Practical Tips: What Experience Teaches You</h2>
      <div className="space-y-4">
        {[
          {
            title: 'Start with the documents, not the portal',
            body: "The NAFDAC online system is improving but document quality and completeness determines everything. Before you log into any portal, have your full document set assembled.",
          },
          {
            title: 'Build a relationship with your manufacturer\'s regulatory team early',
            body: 'Getting a Certificate of Free Sale notarised and apostilled from a European or US manufacturer can take 4–8 weeks if their regulatory team is not familiar with African market requirements.',
          },
          {
            title: 'Know your HS Code precisely',
            body: 'Medical equipment straddles multiple HS chapters depending on primary function. The wrong HS Code affects your import duty, Form M, SONCAP category, and potentially your NAFDAC classification. Get a formal tariff classification opinion if you are unsure.',
          },
          {
            title: 'Follow up on a specific schedule, not when you feel like it',
            body: 'Applications that are not actively followed up drift. Establish a fortnightly follow-up cadence with your local partner, with written confirmation of each interaction.',
          },
          {
            title: 'Budget for multiple trips to Abuja',
            body: "NAFDAC's Medical Devices division is in Abuja, not Lagos. Your local regulatory affairs partner will need to be present in person at key stages. Factor this into your consultant fee structure.",
          },
          {
            title: 'Consider whether an existing registration exists',
            body: 'If another company has already registered the same model, it may be faster to negotiate a distribution agreement with the existing registrant than to go through a new registration. Particularly relevant for common patient monitors, ultrasound machines, and dialysis equipment.',
          },
        ].map(({ title, body }) => (
          <div key={title} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm">
            <div className="font-black text-navy text-sm mb-2">{title}</div>
            <p className="text-sm text-navy/60 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          {
            q: 'Can a foreign manufacturer apply for NAFDAC registration directly?',
            a: "No. NAFDAC regulations require that the applicant be a Nigerian company. Foreign manufacturers must appoint a Nigerian local regulatory representative, who becomes the registered holder of the NAFDAC certificate. Some manufacturers appoint their Nigerian distributor; others work with dedicated regulatory affairs firms and maintain a separate distribution agreement. The choice has legal implications for who controls the registration.",
          },
          {
            q: 'Does NAFDAC registration expire, and what happens to existing stock if it lapses?',
            a: "NAFDAC product registrations are valid for 5 years from the date of issue. Renewal applications should be filed at least 6 months before expiry. If a registration lapses, you cannot legally import new stock. Products already legally imported before expiry can generally continue to be sold, but seek legal advice on this position rather than assuming it.",
          },
          {
            q: 'Is refurbished or reconditioned medical equipment treated differently under NAFDAC?',
            a: "NAFDAC does not have a dedicated pathway for refurbished devices. In practice, refurbished equipment from certified refurbishers holding ISO 13485 for refurbishment — and carrying the original CE Mark or FDA clearance — has been successfully registered. The critical factor is that the refurbisher must supply the same documentation as an original manufacturer: current ISO 13485, Certificate of Free Sale, and full technical file.",
          },
          {
            q: 'We have NAFDAC registration. Do we still need SONCAP inspection for every shipment?',
            a: "Yes. NAFDAC registration and SONCAP are entirely separate requirements. NAFDAC registration confirms the product is approved for the Nigerian market. SONCAP pre-shipment inspection confirms each specific consignment meets applicable standards. SONCAP is required per shipment, not per product registration. Budget for it as a recurring cost on every consignment.",
          },
          {
            q: 'How long does NAFDAC registration actually take in practice for a Class C device?',
            a: "Officially, NAFDAC states 3–6 months. In practice, for Class C devices (which covers most capital diagnostic and imaging equipment), 9–14 months is the realistic expectation if the dossier is well-prepared and queries are responded to promptly. If documents are incomplete at submission, or significant technical queries arise requiring manufacturer input, 18 months is not unusual. Plan for 12 months as your working assumption.",
          },
          {
            q: 'Can we import equipment while registration is pending?',
            a: "You cannot legally import products for commercial sale or distribution while NAFDAC registration is pending. Goods imported without a valid NAFDAC registration for commercial purposes are subject to seizure. Ensure your distribution agreements clearly allocate the registration risk between parties, and pursue registration before a confirmed buyer is in hand.",
          },
          {
            q: 'What is the difference between NAFDAC registration and an import permit?',
            a: "An import permit authorises a single consignment. NAFDAC product registration is a product-level approval that, once granted, permits repeated importation while the registration remains valid (subject to SONCAP per shipment). For medical devices, registration is the primary requirement — there is no standalone import permit mechanism that substitutes for NAFDAC registration.",
          },
          {
            q: 'Are any medical devices exempt from NAFDAC registration in Nigeria?',
            a: "NAFDAC has published a list of products subject to notification rather than full registration — typically Class A products such as examination gloves, simple bandages, and basic hospital furniture. However, NAFDAC has been known to challenge classification decisions at port. If you believe your product may fall into an exempt category, obtain a written classification determination from NAFDAC before relying on an exemption.",
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
      <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Work with a Verified Supplier</div>
      <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Suppliers with NAFDAC-Ready Documentation</h3>
      <p className="text-white/60 text-sm mb-6 leading-relaxed">
        One of the most effective ways to reduce NAFDAC registration burden is working with a supplier who has already been through the process for your specific equipment models — and can provide the complete technical file, ISO 13485, and Certificate of Free Sale from day one.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link to="/used-medical-equipment-nigeria-lagos-abuja" className="bg-teal text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-teal/90 transition-colors">Browse Nigeria Listings →</Link>
        <Link to="/request-verified-pricing-medical-equipment" className="border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white/10 transition-colors">Request Verified Pricing</Link>
      </div>
    </section>

  </div>
);
