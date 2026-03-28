import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

export const NigeriaImportGuide: React.FC = () => (
  <div className="space-y-12">

    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        Importing medical equipment into Nigeria is one of the most documentation-intensive procurement processes in Africa. Two separate regulatory bodies — NAFDAC and the Standards Organisation of Nigeria (SON) — both have mandatory requirements, and failure at either stage results in port detention, fines, or confiscation.
      </p>
      <p className="text-navy/70 leading-relaxed">
        This guide covers the complete import pathway for medical devices into Nigeria: NAFDAC product registration, SONCAP pre-shipment inspection, SON certification, HS codes, and the practical timeline from PO to delivery.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">The Two Regulators You Must Satisfy</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-2">Regulator 1</div>
          <div className="font-black text-navy text-lg mb-3">NAFDAC</div>
          <p className="text-sm text-navy/60 mb-4">National Agency for Food and Drug Administration and Control. Governs all medical devices imported into Nigeria. Product registration is mandatory before commercial import.</p>
          <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">Key requirement</div>
          <p className="text-sm text-navy/70">NAFDAC product registration certificate for each device model</p>
        </div>
        <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-2">Regulator 2</div>
          <div className="font-black text-navy text-lg mb-3">SON / SONCAP</div>
          <p className="text-sm text-navy/60 mb-4">Standards Organisation of Nigeria. SONCAP (SON Conformity Assessment Programme) requires pre-shipment inspection of goods before they leave the origin country. Applies to most medical equipment.</p>
          <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">Key requirement</div>
          <p className="text-sm text-navy/70">Product Certificate (PC) and SONCAP Certificate before shipment</p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step-by-Step Import Process</h2>
      <div className="space-y-4">
        {[
          {
            n: '01',
            title: 'NAFDAC Product Registration',
            timeline: '3–6 months',
            desc: 'Submit a dossier to NAFDAC including: technical file, ISO 13485 certificate of the manufacturer/refurbisher, CE marking or FDA 510(k), labelling, and a letter of authorisation from the foreign manufacturer. NAFDAC reviews and issues a registration certificate valid for 5 years.',
            tip: 'Many verified refurbishers already hold NAFDAC pre-clearance for their product lines. Always ask your supplier before starting the registration process.',
          },
          {
            n: '02',
            title: 'SONCAP Pre-Shipment Inspection',
            timeline: '2–4 weeks',
            desc: 'Before goods leave the origin country, a SON-approved inspection body (SGS, Bureau Veritas, Intertek) inspects the consignment and issues a Product Certificate (PC). The SONCAP Certificate is issued at port of entry on presentation of the PC.',
            tip: 'SONCAP inspections must happen in the country of manufacture or refurbishment — not in Nigeria. Build this into your supplier lead time.',
          },
          {
            n: '03',
            title: 'Shipping Documentation',
            timeline: 'Concurrent with above',
            desc: 'Required documents: Commercial Invoice, Bill of Lading/Airway Bill, Packing List, Certificate of Origin, NAFDAC registration number on all labelling, SONCAP Product Certificate, ISO 13485 certificate, CE/FDA documentation.',
            tip: 'All documents must match exactly — any discrepancy between invoice and packing list triggers NCS (Nigeria Customs) queries.',
          },
          {
            n: '04',
            title: 'Port Clearance (Lagos / Apapa)',
            timeline: '1–3 weeks',
            desc: 'Nigeria Customs Service (NCS) clears the consignment. Medical devices attract 5–10% import duty depending on HS code. Items with valid NAFDAC registration and SONCAP certificate clear faster. Lagos congestion can add 2–3 weeks.',
            tip: 'Use a licensed customs broker with medical device experience. General brokers often misclassify HS codes, triggering incorrect duty rates.',
          },
          {
            n: '05',
            title: 'Last-Mile Delivery',
            timeline: '2–5 days',
            desc: 'Once cleared at Apapa or Tin Can port, equipment is trucked to your facility. For large capital equipment (CT, MRI), ensure your facility has completed site preparation before the shipment arrives.',
            tip: null,
          },
        ].map(step => (
          <div key={step.n} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="text-3xl font-black text-teal/30 flex-shrink-0">{step.n}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="font-black text-navy">{step.title}</div>
                  <div className="flex items-center gap-1 text-xs font-bold text-navy/40">
                    <Clock className="w-3 h-3" />{step.timeline}
                  </div>
                </div>
                <p className="text-sm text-navy/60 mb-3">{step.desc}</p>
                {step.tip && (
                  <div className="bg-teal/5 border border-teal/20 rounded-lg px-4 py-2 text-xs text-navy/70">
                    <span className="font-bold text-teal">Tip: </span>{step.tip}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">HS Codes for Common Medical Equipment</h2>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Equipment</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">HS Code</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Import Duty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['CT Scanners', '9022.12', '5%'],
              ['MRI Machines', '9018.13', '5%'],
              ['Ultrasound Equipment', '9018.12', '5%'],
              ['X-Ray Systems', '9022.14', '5%'],
              ['Laboratory Analysers', '9027.80', '5–10%'],
              ['Hospital Beds', '9402.90', '10%'],
            ].map(([equip, hs, duty]) => (
              <tr key={equip} className="hover:bg-clinical/30">
                <td className="p-4 font-medium text-navy">{equip}</td>
                <td className="p-4 text-navy/60 font-mono">{hs}</td>
                <td className="p-4 text-navy/70">{duty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-navy/40 mt-3">Duty rates subject to change. Verify with your customs broker before filing.</p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Document Checklist</h2>
      <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'NAFDAC product registration certificate',
            'SONCAP Product Certificate (PC)',
            'ISO 13485 certificate (refurbisher)',
            'CE marking Declaration of Conformity or FDA 510(k)',
            'Commercial Invoice (must match packing list exactly)',
            'Bill of Lading or Airway Bill',
            'Packing List',
            'Certificate of Origin',
            'Letter of Authorisation from manufacturer',
            'Technical file / IFU (Instructions for Use)',
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
      <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6 flex gap-4">
        <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
        <div>
          <div className="font-bold text-navy mb-1">Realistic timeline</div>
          <p className="text-sm text-navy/70">
            If you're starting from scratch with an unregistered product, expect 5–9 months from PO to delivery. Verified suppliers with existing NAFDAC registration and SONCAP relationships can compress this to 6–10 weeks. Always confirm your supplier's Nigeria compliance status before ordering.
          </p>
        </div>
      </div>
    </section>

    <section>
      <Link
        to="/used-medical-equipment-nigeria-lagos-abuja"
        className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-bold hover:bg-teal/90 transition-colors text-sm"
      >
        Browse NAFDAC-Compliant Nigeria Suppliers →
      </Link>
    </section>

  </div>
);
