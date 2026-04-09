import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, Clock, Globe } from 'lucide-react';

export const SAHPRAImportGuide: React.FC = () => (
  <div className="space-y-12">

    {/* Intro */}
    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        South Africa operates the most sophisticated and formally structured medical device regulatory system on the African continent. Importing medical equipment into South Africa is not simply a matter of documentation — it requires engagement with a regulator that has built its framework explicitly on international best practice, holds alignment with the European Union and global regulatory bodies, and enforces compliance with a rigour that no other African market currently matches.
      </p>
      <p className="text-navy/70 leading-relaxed mb-4">
        For international medical equipment suppliers and compliance officers entering this market, understanding what makes South African regulation genuinely different — not just from a bureaucratic standpoint, but in its underlying philosophy and enforcement approach — is the prerequisite for a successful market entry strategy.
      </p>
      <p className="text-navy/70 leading-relaxed">
        This guide is written for professionals. It assumes familiarity with medical device regulation in other markets and focuses on what distinguishes the South African framework, where experienced compliance teams make avoidable errors, and how to structure an entry strategy that accounts for realistic timelines and regulatory expectations.
      </p>
    </section>

    {/* Internal link */}
    <section>
      <div className="bg-teal/5 border border-teal/15 rounded-2xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">Related Resource</div>
        <p className="text-sm text-navy/70 mb-3">Sourcing refurbished equipment for South African hospitals? Browse verified, ISO 13485-certified suppliers with SAHPRA-ready documentation.</p>
        <Link to="/refurbished-medical-equipment-south-africa" className="text-teal font-bold text-sm hover:underline">Refurbished Medical Equipment — South Africa →</Link>
      </div>
    </section>

    {/* Why SA is most regulated */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Why South Africa Is Africa's Most Regulated Medical Equipment Market</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        South Africa's position as the continent's regulatory benchmark is not accidental. It reflects decades of investment in healthcare infrastructure, a domestic medical device manufacturing base with genuine export ambitions, and a post-apartheid public health framework that made pharmaceutical and device quality a matter of formal government policy.
      </p>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        The South African Health Products Regulatory Authority — SAHPRA — was established under the South African Health Products Regulatory Authority Act 35 of 2008 and became fully operational as a standalone entity in 2018, absorbing the Medicines Control Council's functions. The transition marked the beginning of a systematic modernisation programme: new risk-based classification criteria, updated dossier submission standards aligned with the International Medical Device Regulators Forum (IMDRF), online application processing, and an explicit commitment to international regulatory convergence.
      </p>
      <div className="bg-gold/10 border border-gold/20 rounded-xl px-5 py-4 text-sm text-navy/70">
        <span className="font-bold text-navy">The Medical Devices and IVDs Act (2019): </span>
        This overhaul fundamentally restructured how South Africa approaches device oversight — shifting from individual product authorisations to a licensing model that holds market authorisation holders accountable for the full product lifecycle, including post-market surveillance, adverse event reporting, and change notification obligations. SAHPRA has inspection capabilities and has exercised enforcement authority including product recalls and market withdrawal orders.
      </div>
    </section>

    {/* Risk classification */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">SAHPRA's Risk Classification — Class A Through Class D Explained</h2>
      <p className="text-navy/70 text-sm mb-6">Medical devices imported into South Africa are classified under a four-tier risk framework aligned closely with the Global Harmonisation Task Force (GHTF) guidance documents. If your compliance team is familiar with European MDR or FDA classification principles, the framework will be conceptually familiar — though specific boundaries differ.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            cls: 'Class A',
            risk: 'Low Risk',
            examples: 'Non-sterile examination gloves, hospital furniture, manual wheelchairs, basic bandaging materials, tongue depressors',
            pathway: 'Notification process in many cases — lightest regulatory scrutiny',
            color: 'border-l-4 border-teal',
          },
          {
            cls: 'Class B',
            risk: 'Low to Medium Risk',
            examples: 'Non-invasive monitoring equipment, blood pressure cuffs, some laboratory reagents, patient monitoring of external physiological parameters',
            pathway: 'Standard dossier submission and review',
            color: 'border-l-4 border-teal/60',
          },
          {
            cls: 'Class C',
            risk: 'Medium to High Risk',
            examples: 'Digital radiography, ultrasound imaging, haemodialysis machines, infusion pumps, clinical laboratory analysers, surgical lasers, ventilators',
            pathway: 'Detailed technical dossier, rigorous SAHPRA review — queries are common',
            color: 'border-l-4 border-gold',
          },
          {
            cls: 'Class D',
            risk: 'High Risk',
            examples: 'Implantable cardiac devices, HIV diagnostic kits, implantable drug delivery systems, blood banking IVD devices',
            pathway: 'Clinical evidence review, most detailed dossier requirements, longest timelines',
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
        <span className="font-bold text-navy">Capital equipment note: </span>CT scanners, MRI systems, and digital fluoroscopy typically fall into Class C. Dialysis machines are Class C. Advanced implantable cardiac devices move into Class D. Budget your regulatory timeline and costs based on Class C assumptions for most imaging and diagnostic equipment.
      </div>
    </section>

    {/* How SAHPRA differs */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">How SAHPRA Differs From Other African Regulators</h2>
      <p className="text-navy/70 text-sm mb-6">For compliance professionals managing multi-country African market entry, the contrast between SAHPRA and other regional regulators is significant enough to warrant explicit attention. The differences are not merely administrative — they reflect fundamentally different regulatory philosophies.</p>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden mb-4">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Regulator</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Country</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Framework Basis</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">International Alignment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['SAHPRA', 'South Africa', 'IMDRF/GHTF aligned, full lifecycle', 'High — explicit convergence programme'],
              ['PPB', 'Kenya', 'ISO 13485 + CE Mark acceptance', 'Moderate'],
              ['Ghana FDA', 'Ghana', 'Product registration', 'Low–Moderate'],
              ['NDA', 'Uganda', 'Import permit model', 'Low'],
              ['EFMHACA', 'Ethiopia', 'Product registration (developing)', 'Emerging'],
            ].map(([reg, country, framework, alignment]) => (
              <tr key={reg} className={`hover:bg-clinical/30 ${reg === 'SAHPRA' ? 'bg-teal/5' : ''}`}>
                <td className="p-4 font-black text-navy">{reg}</td>
                <td className="p-4 text-navy/60">{country}</td>
                <td className="p-4 text-navy/60 text-xs">{framework}</td>
                <td className={`p-4 font-bold text-xs ${reg === 'SAHPRA' ? 'text-teal' : 'text-navy/40'}`}>{alignment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-navy/40">SAHPRA requires evidence that your QMS is genuinely implemented, that clinical data supports your intended use claims, and that you have organisational capacity to meet post-market obligations. This is closer to the European MDR framework than to anything else on the African continent.</p>
    </section>

    {/* Step by step */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step-by-Step SAHPRA Registration Process With Realistic Timelines</h2>
      <div className="space-y-4">
        {[
          {
            n: '01',
            title: 'Appoint a South African Local Responsible Person',
            timeline: '6–12 weeks to establish',
            desc: 'SAHPRA requires that the market authorisation holder be a South African company or individual. Foreign manufacturers cannot hold a South African Medical Device Licence in their own name. You must appoint a Local Responsible Person (LRP) — a South African entity that will hold the licence and take on the legal obligations of market authorisation holder within South Africa.',
            tip: 'Your LRP owns the registration legally. Choosing a distributor as LRP without separate regulatory capacity is a common structural error — ensure your LRP has dedicated regulatory affairs personnel.',
          },
          {
            n: '02',
            title: 'Determine Classification and Confirm Dossier Requirements',
            timeline: '2–4 weeks',
            desc: 'Formally confirm your product\'s SAHPRA risk classification before preparing any documentation. Do not rely on classification from another market without verification — while SAHPRA\'s system aligns with IMDRF principles, the specific classification may differ from CE Mark or FDA classification. For devices at classification boundaries, consider seeking a pre-submission interaction with SAHPRA.',
            tip: 'A misclassified submission does not get corrected in review — it gets returned. Invest the time upfront.',
          },
          {
            n: '03',
            title: 'Assemble the Technical Dossier',
            timeline: '8–16 weeks',
            desc: 'Dossier preparation is where timelines are most commonly underestimated. South African submissions require documentation that is not always immediately available from manufacturers — particularly for companies accessing the African market for the first time. Clinical evaluation reports, post-market surveillance plans, and risk management files aligned to SAHPRA\'s specific expectations require careful preparation.',
            tip: 'A CE technical file is a strong foundation, but is not a direct equivalent to a SAHPRA dossier. Review the checklist and identify gaps before you commit to a submission date.',
          },
          {
            n: '04',
            title: 'Submit via SAHPRA\'s Online Registration Portal',
            timeline: '1–2 weeks to submit',
            desc: 'SAHPRA accepts applications through its online submissions portal at sahpra.org.za. Initial administrative screening determines whether the submission is complete enough to proceed to technical review. Incomplete submissions are returned — not queried — which means a failed administrative check resets the clock entirely.',
            tip: 'Register on the portal early and review the current submission guidance before you begin document assembly. Formatting and upload requirements are specific.',
          },
          {
            n: '05',
            title: 'Administrative Completeness Check',
            timeline: '4–8 weeks',
            desc: 'SAHPRA reviews submitted dossiers for administrative completeness before assigning to a technical reviewer. This is not a substantive review — it confirms that all required sections are present and that documents meet formal requirements. Passing this stage moves the application to technical review and formal timeline.',
            tip: 'Missing sections at this stage cost you the full administrative review period plus a new submission. Verify against the published checklist before submitting.',
          },
          {
            n: '06',
            title: 'Technical Review and Query Response',
            timeline: '3–12 months',
            desc: 'The substantive review of the technical dossier. For Class C devices, this is where the majority of timeline sits. SAHPRA technical reviewers assess clinical evidence, risk management documentation, design verification data, and quality system compliance. Queries are common at this stage and must be responded to within specified windows.',
            tip: 'Missed query response deadlines result in applications being lapsed, not paused. Establish a query response protocol with your manufacturer before submitting — many queries require manufacturer input.',
          },
          {
            n: '07',
            title: 'Licence Issuance and Post-Market Registration',
            timeline: 'Ongoing after approval',
            desc: 'Upon approval, SAHPRA issues a Medical Device Licence. This is not a one-time event — licence holders must maintain the licence through annual fees, adverse event reporting, post-market surveillance plan implementation, and notification of significant changes to the device or manufacturing process.',
            tip: 'Post-market obligations are legally binding. SAHPRA has the authority to suspend or revoke licences for non-compliance. Factor ongoing compliance costs into your market entry budget.',
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

      {/* Timeline summary */}
      <div className="mt-6 bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
        <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Realistic Total Timelines by Class</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { cls: 'Class A', time: '1–3 months' },
            { cls: 'Class B', time: '4–8 months' },
            { cls: 'Class C', time: '9–18 months' },
            { cls: 'Class D', time: '12–24 months' },
          ].map(({ cls, time }) => (
            <div key={cls} className="text-center">
              <div className="font-black text-navy text-sm mb-1">{cls}</div>
              <div className="text-teal font-bold text-xs">{time}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-navy/40 mt-4">Class C times assume a well-documented dossier. Significant queries or incomplete clinical evidence extends timelines to 18–24 months.</p>
      </div>
    </section>

    {/* Document checklist */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Complete Documentation Checklist</h2>
      <p className="text-navy/70 text-sm mb-6">Applies to Class B and Class C medical device applications. Class D requires additional clinical performance evidence.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Quality Management System</div>
          <div className="space-y-3 mb-6">
            {[
              'ISO 13485 certificate — current, from accredited body, covering the product type',
              'QMS scope statement and summary',
              'List of significant suppliers and outsourced processes',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Regulatory Status</div>
          <div className="space-y-3 mb-6">
            {[
              'CE Mark certificate — current, from notified body, including technical file reference',
              'Declaration of Conformity (EU) or equivalent from country of manufacture',
              'Certificate of Free Sale — issued by competent authority in country of manufacture',
              'List of countries where device is currently approved or marketed',
              'Details of any refused registrations, market withdrawals, or recalls in any country',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Local Responsible Person</div>
          <div className="space-y-3">
            {[
              'Letter of appointment of Local Responsible Person',
              'LRP company registration documents (South African company)',
              'Signed declaration of responsibilities',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Technical Documentation</div>
          <div className="space-y-3 mb-6">
            {[
              'Device description and intended use statement',
              'Indications and contraindications',
              'Full technical specifications',
              'List of applicable standards with evidence of conformity (test reports)',
              'Risk management file summary — aligned to ISO 14971',
              'Design verification and validation summary',
              'Biocompatibility evidence — aligned to ISO 10993 series (patient-contacting devices)',
              'Sterilisation validation documentation (sterile devices)',
              'Software documentation — aligned to IEC 62304 (software-controlled devices)',
              'EMC documentation — aligned to IEC 60601 series (electrical devices)',
              'Shelf life and stability data (where applicable)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Clinical Evidence</div>
          <div className="space-y-3 mb-6">
            {[
              'Clinical evaluation report — aligned to IMDRF guidance',
              'Summary of clinical performance and safety',
              'Post-market clinical follow-up plan (Class C/D)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Labelling & Application</div>
          <div className="space-y-3">
            {[
              'Device labels and Instructions for Use — in English',
              'Conformity with SAHPRA labelling requirements confirmed',
              'Completed SAHPRA application form submitted via online portal',
              'Payment confirmation of applicable fees',
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
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Fee Schedule in ZAR and USD</h2>
      <p className="text-navy/70 text-sm mb-6">SAHPRA fees are set by regulation and are revised periodically. Verify current fees directly with SAHPRA at sahpra.org.za before submission. Exchange rate approximation: R18.50/USD.</p>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden mb-4">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Fee Category</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">ZAR</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">USD (approx.)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['Application — Class A', 'R 2,280', '~$123'],
              ['Application — Class B', 'R 7,410', '~$401'],
              ['Application — Class C', 'R 14,820', '~$801'],
              ['Application — Class D', 'R 22,230', '~$1,201'],
              ['Annual licence fee — Class A', 'R 1,140', '~$62'],
              ['Annual licence fee — Class B', 'R 3,705', '~$200'],
              ['Annual licence fee — Class C', 'R 7,410', '~$401'],
              ['Annual licence fee — Class D', 'R 11,115', '~$601'],
              ['Significant change notification', 'R 3,705–R 7,410', '~$200–$401'],
            ].map(([cat, zar, usd]) => (
              <tr key={cat} className="hover:bg-clinical/30">
                <td className="p-4 text-navy/70">{cat}</td>
                <td className="p-4 font-bold text-navy">{zar}</td>
                <td className="p-4 text-navy/60">{usd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: 'Local Responsible Person (annual)', value: 'R 15,000–R 60,000+' },
          { label: 'Regulatory affairs consultancy (per submission)', value: 'R 20,000–R 100,000+' },
          { label: 'Total Class C registration budget (all-in)', value: 'R 80,000–R 250,000' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-clinical rounded-xl p-4">
            <div className="text-xs text-navy/50 mb-1">{label}</div>
            <div className="font-black text-navy text-sm">{value}</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-navy/40 mt-3">SAHPRA fees are payable in ZAR. Budget foreign currency exposure carefully — SAHPRA fee commitments span multiple years across a product portfolio.</p>
    </section>

    {/* Common mistakes */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">What International Suppliers Consistently Get Wrong With SAHPRA Applications</h2>
      <div className="space-y-4">
        {[
          {
            mistake: 'Treating CE documentation as a direct SAHPRA substitute',
            fix: 'CE Mark certification is strong supporting evidence — particularly for risk classification and clinical performance — but it is not a substitute for SAHPRA registration. South African labelling requirements, adverse event reporting obligations, and post-market surveillance plan structure all have local requirements that must be addressed separately. Companies that treat SAHPRA as a rubber-stamp on CE documentation consistently receive queries.',
          },
          {
            mistake: 'Underestimating the clinical evidence standard',
            fix: 'SAHPRA\'s clinical evaluation report must demonstrate genuine clinical evidence for the specific intended use in the South African context. For Class C devices where clinical conditions have African-specific considerations, SAHPRA reviewers have been known to query whether European or North American clinical data is adequately representative.',
          },
          {
            mistake: 'Choosing an LRP based on cost rather than regulatory experience',
            fix: 'The LRP is the legal licence holder in South Africa. When SAHPRA has regulatory concerns, it communicates with the LRP. When queries arrive, the LRP responds. When adverse events occur, the LRP reports them. An LRP without dedicated regulatory capacity will slow your registration, miss query deadlines, and create compliance liability. Separate your distribution agreement from your LRP arrangement if necessary — but do not compromise on LRP regulatory expertise.',
          },
          {
            mistake: 'Filing without a genuine post-market surveillance plan',
            fix: 'SAHPRA\'s post-2019 framework requires Class B, C, and D device applications to include a post-market surveillance plan. SAHPRA reviewers distinguish between genuine post-market surveillance strategies and boilerplate templates. Inadequate PMS plans generate queries that delay approvals.',
          },
          {
            mistake: 'Not notifying SAHPRA of device changes after registration',
            fix: 'Once a Medical Device Licence is issued, the licence holder must notify SAHPRA of significant changes — including manufacturing changes, software updates affecting intended use, and QMS changes. Many companies treat approval as a permanent state rather than an ongoing obligation. SAHPRA has the authority to suspend or revoke licences for non-compliance.',
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

    {/* Post-registration */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Post-Registration: Customs Clearance, Ports of Entry, and VAT</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Customs Clearance (SARS)</div>
          <p className="text-xs text-navy/60 leading-relaxed mb-4">Medical equipment entering South Africa clears through the South African Revenue Service (SARS). A valid SAHPRA Medical Device Licence must exist before commercial consignments can be legally imported and sold. The SARS Tariff Book provides applicable import duty rates — many categories attract 0% duty, but confirm per HS Code.</p>
          <div className="space-y-2">
            {[
              'Commercial invoice and packing list',
              'Bill of Lading or Airway Bill',
              'Certificate of Origin (where required for preferential tariff)',
              'SAHPRA Medical Device Licence reference',
              'Delivery Order',
              'Insurance certificate',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-teal mt-0.5 shrink-0" />
                <span className="text-xs text-navy/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Primary Ports of Entry</div>
          <div className="space-y-4">
            {[
              { port: 'Port of Durban', note: 'South Africa\'s primary container port — handles the majority of sea freight medical equipment consignments' },
              { port: 'Port of Cape Town', note: 'Secondary container port, used for Western Cape distribution' },
              { port: 'OR Tambo International Airport (Johannesburg)', note: 'Primary air freight entry point — used for urgent, high-value or smaller consignments' },
            ].map(({ port, note }) => (
              <div key={port}>
                <div className="font-bold text-navy text-xs mb-1">{port}</div>
                <p className="text-xs text-navy/50">{note}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-gold/10 border border-gold/20 rounded-lg px-4 py-3">
            <div className="text-xs font-bold text-navy mb-1">VAT: 15%</div>
            <p className="text-xs text-navy/60">Medical equipment is generally not VAT-exempt in South Africa. A South African VAT-registered importer pays import VAT and reclaims it through standard VAT accounting. Foreign entities importing directly without SA VAT registration cannot reclaim import VAT.</p>
          </div>
        </div>
      </div>
    </section>

    {/* SADC springboard */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-4">Using South Africa as a Springboard Into SADC Markets</h2>
      <div className="bg-navy rounded-2xl p-8 text-white">
        <div className="flex items-start gap-4 mb-6">
          <Globe size={28} className="text-teal shrink-0 mt-1" />
          <div>
            <h3 className="font-black text-xl uppercase tracking-tight mb-2">350 Million Addressable Market</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              South Africa's regulatory sophistication is not merely a compliance burden — it is a strategic asset. The Southern African Development Community (SADC) is actively working toward regulatory harmonisation across its 16 member states, with SAHPRA's framework serving as the de facto reference standard.
            </p>
          </div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          Countries including Namibia, Botswana, Eswatini, and Lesotho frequently reference SAHPRA registration as primary evidence of device acceptability for their own import or market approval processes. Zimbabwe, Zambia, and Mozambique each have their own regulatory frameworks, but SAHPRA-registered status is recognised as a mark of quality by procurement officers and health ministries across the region.
        </p>
        <div className="bg-white/10 rounded-xl px-5 py-4 text-sm text-white/80">
          <span className="font-bold text-white">The practical implication: </span>Frame your South African regulatory investment as a regional market entry cost, not a single-country cost. A device that is SAHPRA-registered, with a South African distribution and logistics infrastructure in place, can address a SADC market of over 350 million people. The marginal cost of expanding into Namibia or Botswana after South Africa is a fraction of the initial registration investment.
        </div>
      </div>
    </section>

    {/* Practical tips */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Practical Tips From the Field</h2>
      <div className="space-y-4">
        {[
          {
            title: 'Start with the SAHPRA online portal early',
            body: 'The submission process at sahpra.org.za has specific formatting and document requirements. Many compliance officers building their first SAHPRA dossier lose time reformatting documents that do not meet portal specifications. Register early and review the current guidance before you begin assembly.',
          },
          {
            title: 'Commission your clinical evaluation report before your ISO certificate renewal date',
            body: 'If your ISO 13485 certificate is approaching renewal during the SAHPRA review process, coordinate timing carefully. An expired ISO certificate during technical review will generate a query — and in the worst case, require the submission to be updated, resetting review priority.',
          },
          {
            title: 'Understand the SAHPRA query response process precisely',
            body: 'Queries have specified response windows. Missed response deadlines result in applications being lapsed, not paused. Do not treat query notices as the beginning of a negotiation — treat them as hard deadlines. Establish a query response protocol that routes manufacturer input requests in parallel, not sequentially.',
          },
          {
            title: 'Use the pre-submission process for complex or novel devices',
            body: 'SAHPRA has a formal pre-submission interaction process for devices at classification boundaries, novel intended uses, or questions about applicable standards. A pre-submission interaction can save months of query-and-response cycles during technical review.',
          },
          {
            title: 'Budget in ZAR, not USD',
            body: 'Your SAHPRA fees, LRP retainer, consultant fees, and local storage costs are all denominated in ZAR. The ZAR has experienced significant volatility against major currencies — build in a buffer on any multi-year market entry budget expressed in foreign currency.',
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
            q: 'How long does SAHPRA registration actually take in reality?',
            a: 'For Class C devices — which covers most capital diagnostic equipment including CT, MRI, ultrasound, and digital X-ray — the official process is designed to complete in 12–15 months from submission. In practice, well-prepared submissions from manufacturers with strong CE Mark technical files and experienced LRPs have achieved registration in 9–12 months. Submissions with incomplete clinical evidence, poorly structured risk management documentation, or inadequate query responses routinely extend to 18–24 months. Plan for 12 months as your working assumption and treat anything faster as a bonus.',
          },
          {
            q: 'Does CE marking speed up SAHPRA registration?',
            a: 'Yes, materially — but not in the way many applicants assume. CE Mark certification does not trigger a shorter official review pathway under SAHPRA. What it does is provide a strong evidentiary foundation: clinical evaluation reports prepared to MDR standards, notified body-reviewed technical files, and ISO 13485 certification together constitute much of what SAHPRA requires. A manufacturer with a current CE Mark, a rigorous technical file, and a properly prepared South African dossier will receive fewer queries and faster review than an equivalent device presented without this documentation base.',
          },
          {
            q: 'Can a foreign company register directly with SAHPRA, or do they need a local representative?',
            a: 'Foreign manufacturers cannot hold a South African Medical Device Licence directly. A Local Responsible Person who is a South African entity must hold the licence. This requirement is non-negotiable under South African law. The LRP assumes legal responsibility for the device\'s compliance in the South African market, including post-market obligations, adverse event reporting, and liaison with SAHPRA. Foreign companies can structure their South African presence in different ways — a dedicated regulatory affairs firm as LRP, a distribution partner who holds the LRP role, or a South African subsidiary — but a locally registered South African entity must be the licence holder.',
          },
          {
            q: 'What is the difference between a Class A and Class D medical device under SAHPRA?',
            a: 'Class A devices present low individual risk and low public health risk — examples include non-sterile examination gloves, basic patient furniture, non-measuring devices. They undergo the lightest regulatory scrutiny, with the lowest fees and shortest review timelines. Class D devices represent the highest risk tier — devices where failure or misuse could directly result in serious injury or death, or where the device plays a role in disease management at population scale (such as HIV diagnostics). Class D devices require the most comprehensive clinical evidence, the most detailed technical file review, the highest fees, and the longest timelines.',
          },
          {
            q: 'Does SAHPRA registration cover all SADC countries?',
            a: 'SAHPRA registration does not automatically confer approval in other SADC countries — each country maintains its own regulatory authority and market authorisation process. However, SAHPRA registration is regarded as strong evidence of device quality and regulatory compliance across the region, and several SADC markets explicitly reference SAHPRA-registered status in their own approval processes. SADC is working toward regional regulatory harmonisation, but this remains a long-term project. Plan for separate regulatory interactions in each additional SADC country you target — but budget the South African investment as a regional foundation cost.',
          },
          {
            q: 'What happens if a device undergoes a significant change after SAHPRA registration?',
            a: 'Significant changes to a registered medical device must be notified to SAHPRA before implementation. This includes design changes affecting safety or performance, changes to intended use, manufacturing site changes, and software updates that affect device function. The licence holder (LRP) is responsible for making these notifications via SAHPRA\'s online portal and for obtaining SAHPRA approval where required before implementing changes in the South African market. Failure to notify constitutes a licence breach and can result in regulatory action including suspension.',
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
      <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Work with a Verified Supplier</div>
      <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Suppliers with SAHPRA-Ready Documentation</h3>
      <p className="text-white/60 text-sm mb-6 leading-relaxed">
        Working with a supplier who already holds SAHPRA registration — or who can provide the complete technical file, current ISO 13485, and Certificate of Free Sale required for a South African application — reduces your timeline and your compliance risk substantially.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link to="/refurbished-medical-equipment-south-africa" className="bg-teal text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-teal/90 transition-colors">Browse South Africa Listings →</Link>
        <Link to="/request-verified-pricing-medical-equipment" className="border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white/10 transition-colors">Request Verified Pricing</Link>
      </div>
    </section>

  </div>
);
