import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

export const SAHPRAGuide: React.FC = () => (
  <div className="space-y-12">

    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        South Africa's medical device regulatory framework is among the most rigorous in Africa. The South African Health Products Regulatory Authority (SAHPRA) applies European-style device classification and authorisation requirements that many importers underestimate — particularly for refurbished capital equipment.
      </p>
      <p className="text-navy/70 leading-relaxed">
        This guide explains SAHPRA's Section 21 authorisation process, how medical devices are classified, what documentation you need, and how to avoid the most common compliance failures.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">SAHPRA Device Classification</h2>
      <p className="text-navy/70 text-sm mb-6">SAHPRA classifies medical devices into four classes based on risk. Classification determines the level of evidence required for authorisation.</p>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Class</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Risk Level</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Examples</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Pathway</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['Class A', 'Low', 'Tongue depressors, bandages, non-sterile gloves', 'Self-declaration (lowest burden)'],
              ['Class B', 'Low–Medium', 'Sutures, blood pressure monitors, basic diagnostics', 'Conformity assessment required'],
              ['Class C', 'Medium–High', 'Ultrasound, X-ray, lab analysers, ventilators', 'Full technical file + clinical evidence'],
              ['Class D', 'High', 'MRI, CT scanners, implantable devices', 'Most stringent — pre-market authorisation required'],
            ].map(([cls, risk, examples, pathway]) => (
              <tr key={cls} className="hover:bg-clinical/30">
                <td className="p-4 font-black text-navy">{cls}</td>
                <td className="p-4 text-navy/60">{risk}</td>
                <td className="p-4 text-navy/60 text-xs">{examples}</td>
                <td className="p-4 text-navy/70 text-xs">{pathway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-navy/40 mt-3">Most capital medical equipment (CT, MRI, Ultrasound, X-Ray) falls into Class C or D.</p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">What Is Section 21?</h2>
      <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
        <p className="text-navy/70 text-sm leading-relaxed mb-4">
          Section 21 of the Medicines and Related Substances Act provides a mechanism to authorise the use of medical devices that are not formally registered with SAHPRA. It is the most common pathway for imported refurbished equipment.
        </p>
        <p className="text-navy/70 text-sm leading-relaxed mb-4">
          A Section 21 authorisation is granted per product, per facility. This means a hospital in Johannesburg and a clinic in Cape Town both need separate Section 21 authorisations for the same device — even from the same supplier.
        </p>
        <div className="bg-gold/10 border border-gold/20 rounded-lg px-4 py-3 text-sm text-navy/70">
          <span className="font-bold">Important: </span>Section 21 is not permanent registration. It must be renewed, typically annually, and is tied to the specific healthcare facility. It cannot be transferred.
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Section 21 Application Process</h2>
      <div className="space-y-4">
        {[
          {
            n: '01',
            title: 'Prepare the Technical Dossier',
            timeline: '1–2 weeks',
            desc: "Gather all technical documentation from your supplier. This must include CE marking or FDA 510(k) clearance, ISO 13485 certificate, IFU (Instructions for Use), technical specifications, and the manufacturer's Declaration of Conformity.",
          },
          {
            n: '02',
            title: 'Submit via SAHPRA Online Portal',
            timeline: 'Day of submission',
            desc: "Applications are submitted through SAHPRA's eSAHPRA portal. You'll need a registered applicant account. The responsible person (usually the healthcare facility or its authorised representative) submits the application with all supporting documents.",
          },
          {
            n: '03',
            title: 'SAHPRA Review',
            timeline: '4–12 weeks',
            desc: "SAHPRA evaluates the technical file. For Class C/D devices, expect 8–12 weeks. Applications may be returned with queries — respond promptly as the clock doesn't restart on your original submission date.",
          },
          {
            n: '04',
            title: 'Authorisation Issued',
            timeline: 'Post-approval',
            desc: 'Section 21 authorisation letter is issued. This must be retained on file and presented on request. Validity is typically 12 months with renewal required.',
          },
        ].map(step => (
          <div key={step.n} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="text-3xl font-black text-teal/30 flex-shrink-0">{step.n}</div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="font-black text-navy">{step.title}</div>
                  <div className="flex items-center gap-1 text-xs font-bold text-navy/40">
                    <Clock className="w-3 h-3" />{step.timeline}
                  </div>
                </div>
                <p className="text-sm text-navy/60">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Required Documentation Checklist</h2>
      <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'CE Marking Declaration of Conformity (Class C/D)',
            'FDA 510(k) clearance (if US origin)',
            'ISO 13485 Quality Management Certificate',
            'Technical file / Design Dossier',
            'IFU — Instructions for Use (English)',
            'Clinical evaluation report',
            'Post-market surveillance data',
            'Proof of legal manufacturer identity',
            'Authorised representative letter (if manufacturer is non-SA)',
            'Facility details (name, registration number, intended use)',
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
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Common SAHPRA Compliance Failures</h2>
      <div className="space-y-3">
        {[
          { issue: 'CE certificate is expired', fix: 'CE certificates typically expire every 5 years. Always verify the expiry date on the certificate, not just that a CE mark exists.' },
          { issue: 'ISO 13485 is for the wrong scope', fix: "The refurbisher's ISO 13485 scope must explicitly cover the equipment type being imported. A general 'medical devices' scope may not satisfy SAHPRA." },
          { issue: 'Section 21 applied for wrong facility', fix: 'The application must name the specific facility where the equipment will be used. Equipment cannot be moved to another facility after authorisation.' },
          { issue: 'IFU not in English', fix: 'SAHPRA requires English IFU. Translated documents must include a certified translation certificate.' },
          { issue: 'Missing clinical evaluation report', fix: 'Class C/D devices require clinical evidence of safety and performance. Your supplier must provide this — it cannot be produced retrospectively.' },
        ].map(item => (
          <div key={item.issue} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm flex gap-3">
            <AlertTriangle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-navy text-sm mb-1">{item.issue}</div>
              <p className="text-xs text-navy/60">{item.fix}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-4">Practical Timeline for SA Import</h2>
      <p className="text-navy/70 text-sm leading-relaxed mb-4">
        For a Class C/D device (ultrasound, X-ray, lab equipment): budget 12–20 weeks from PO to installation. SAHPRA review alone takes 8–12 weeks. Verified suppliers with existing SAHPRA pre-clearance documentation can reduce this significantly.
      </p>
      <Link
        to="/refurbished-medical-equipment-south-africa"
        className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-bold hover:bg-teal/90 transition-colors text-sm"
      >
        Browse SAHPRA-Compliant SA Suppliers →
      </Link>
    </section>

  </div>
);
