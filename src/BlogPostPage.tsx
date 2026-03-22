import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ChevronRight, ArrowRight, AlertTriangle, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { blogPosts } from './data';

// ─── Article: CT Procurement Framework ───────────────────────────────────────

const CTFrameworkContent: React.FC = () => (
  <div className="space-y-16">

    {/* Phase 1 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">01</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Mastering the Regulatory Landscape</h2>
      </div>
      <div className="bg-navy/5 border-l-4 border-teal rounded-r-2xl p-5 mb-6 text-sm text-navy/70 leading-relaxed">
        Medical imaging equipment classified as <strong>Radiation Emitting Devices</strong> (HS codes 9022.12 for CT scanners, 9018.13 for MRI magnets) triggers stringent oversight far beyond standard import permits. Failure at this phase results in port seizures, 6-month registration delays, or outright import bans.
      </div>

      {/* Kenya */}
      <div className="bg-white border border-navy/10 rounded-2xl p-8 mb-6 shadow-sm">
        <h3 className="text-lg font-black uppercase tracking-tight mb-1 flex items-center gap-2">
          🇰🇪 <Link to="/refurbished-medical-equipment-kenya-nairobi" className="hover:text-teal transition-colors">Kenya: PPB Type Approval + KNRA Radiation Compliance</Link>
        </h3>
        <p className="text-sm text-navy/60 mb-5 leading-relaxed">
          The Pharmacy and Poisons Board (PPB) Medical Devices Directorate requires formal Type Approval Certification for every{' '}
          <Link to="/refurbished-ct-scanners-africa" className="text-teal font-bold hover:underline">CT scanner</Link>,{' '}
          <Link to="/used-mri-machines-africa" className="text-teal font-bold hover:underline">MRI system</Link>, or fluoroscopy unit entering Kenya.
        </p>
        <h4 className="text-xs font-black uppercase tracking-widest text-navy/40 mb-3">Supplier Documentation Package</h4>
        <ul className="space-y-2 mb-6">
          {[
            'ISO 13485 Quality Management Certificate (refurbisher)',
            'CE Marking Declaration of Conformity or FDA 510(k) clearance',
            'Certificate of Refurbishment detailing OEM parts replacement',
            'Radiation output specifications (CTDIvol ≤ 15 mGy for standard head protocols)',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <h4 className="text-xs font-black uppercase tracking-widest text-navy/40 mb-3">Radiation Protection Board (RPB) Requirements</h4>
        <ul className="space-y-2">
          {[
            'Minimum 2mm lead equivalency in CT control room walls',
            'Structural engineer certification for bunker integrity',
            'Annual radiation worker dosimetry monitoring',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
              <ShieldCheck className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 p-4 bg-teal/5 rounded-xl text-sm text-navy/70">
          The Kenya Nuclear Regulatory Authority (KNRA) conducts mandatory pre-commissioning radiation surveys. Our{' '}
          <Link to="/guides/definitive-guide-importing-medical-equipment-kenya-ppb" className="text-teal font-bold hover:underline">Kenya PPB Import Guide</Link>{' '}
          contains the exact 2026 document checklist verified through successful Kenyan deliveries.
        </div>
      </div>

      {/* Nigeria */}
      <div className="bg-white border border-navy/10 rounded-2xl p-8 mb-6 shadow-sm">
        <h3 className="text-lg font-black uppercase tracking-tight mb-1 flex items-center gap-2">
          🇳🇬 <Link to="/used-medical-equipment-nigeria-lagos-abuja" className="hover:text-teal transition-colors">Nigeria: NAFDAC Registration + SONCAP Pre-Shipment Verification</Link>
        </h3>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-amber-800 font-medium">Nigeria maintains the continent's most aggressive anti-e-waste stance. <strong>"Used"</strong> medical equipment imports face automatic rejection — only <strong>"Certified Refurbished"</strong> systems qualify.</p>
        </div>
        <h4 className="text-xs font-black uppercase tracking-widest text-navy/40 mb-3">NAFDAC Medical Devices Directorate Process (3–6 months)</h4>
        <ul className="space-y-2 mb-5">
          {[
            'Letter of Authorization from ISO 13485 refurbisher',
            'Full technical file submission (200+ pages)',
            'Local Authorized Representative appointment',
            'NAFDAC Registration Number issuance',
          ].map((item, i) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="w-5 h-5 bg-navy text-white rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">{i + 1}</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-navy/60 leading-relaxed">
          <strong>SONCAP Pre-Shipment Verification:</strong> Mandatory pre-shipment inspection at the origin port prevents Lagos port backlogs. Our directory flags{' '}
          <Link to="/used-medical-equipment-nigeria-lagos-abuja" className="text-teal font-bold hover:underline">NAFDAC-pre-registered systems</Link>{' '}
          enabling procurement timelines under 90 days.
        </p>
      </div>

      {/* South Africa */}
      <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
        <h3 className="text-lg font-black uppercase tracking-tight mb-3 flex items-center gap-2">
          🇿🇦 <Link to="/refurbished-medical-equipment-south-africa" className="hover:text-teal transition-colors">South Africa: SAHPRA Section 21 Authorization Pathway</Link>
        </h3>
        <p className="text-sm text-navy/60 leading-relaxed mb-4">
          SAHPRA Section 21 permits provide the fastest pathway for unregistered imaging systems.
        </p>
        <div className="bg-teal/5 rounded-xl p-4 text-sm text-navy/70">
          <strong>Required Docs:</strong> ISO 13485 Refurbisher Certificate, Clinical motivation letter, and facility lead shielding certification (min 2.5mm equivalency).
        </div>
      </div>
    </section>

    {/* Phase 2 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">02</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Understanding Refurbishment Quality Grades</h2>
      </div>
      <p className="text-sm text-navy/60 mb-6 leading-relaxed">
        Africa's environmental challenges — 40°C ambient temperatures, 80% humidity, frequent grid voltage spikes — expose weaknesses in substandard refurbishments.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">Tier 1 — Avoid</div>
          <h4 className="font-black text-sm mb-3">"As-Is, Where-Is"</h4>
          <p className="text-xs text-navy/60 leading-relaxed mb-3">Equipment de-installed and crated without functional testing.</p>
          <div className="space-y-1">
            <div className="text-xs text-red-700 font-bold">⚠ Seized gantry bearings & corroded boards</div>
            <div className="text-xs text-red-700 font-bold">⚠ 87% failure rate within 90 days in tropical climates</div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-2">Tier 2 — Speculative Risk</div>
          <h4 className="font-black text-sm mb-3">"Tested & Working"</h4>
          <p className="text-xs text-navy/60 leading-relaxed mb-3">Units power on, but critical wear components remain untouched.</p>
          <div className="space-y-1">
            <div className="text-xs text-amber-700 font-bold">⚠ X-ray tubes often &lt;40% life remaining</div>
            <div className="text-xs text-amber-700 font-bold">⚠ Expect significant failures within 6–12 months</div>
          </div>
        </div>
        <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6">
          <div className="text-[10px] font-black uppercase tracking-widest text-teal mb-2">Tier 3 — Recommended</div>
          <h4 className="font-black text-sm mb-3">ISO 13485 Certified</h4>
          <p className="text-xs text-navy/60 leading-relaxed mb-3">Full OEM Restoration Protocol: complete teardown, new generator capacitors, 120-hour burn-in test.</p>
          <div className="space-y-1">
            <div className="text-xs text-teal font-black">✓ 98% uptime guarantee</div>
            <div className="text-xs text-teal font-black">✓ 24-month parts + labor warranty</div>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-navy/5 rounded-xl text-sm text-navy/60">
        Our <Link to="/guides/uk-refurbishment-standard-iso-13485-explained" className="text-teal font-bold hover:underline">UK Refurbishment Protocol</Link> partners guarantee 24-month parts + labor warranties with local African service coverage.
      </div>
    </section>

    {/* Phase 3 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">03</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Logistics & Incoterms Mastery</h2>
      </div>
      <p className="text-sm text-navy/60 mb-6 leading-relaxed">
        A $325,000 GE Optima CT660 quote becomes meaningless if the gantry sustains shipping damage. Protect your investment with the right Incoterms structure.
      </p>
      <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm mb-4">
        <h3 className="text-sm font-black uppercase tracking-widest text-teal mb-4">Recommended: CIF Port of Discharge</h3>
        <ul className="space-y-3">
          {[
            'Supplier pays ocean freight + marine insurance',
            'Real-time GPS container tracking',
            'Climate control for MRI cryostats (18–22°C)',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-navy/5 rounded-2xl p-6 text-sm text-navy/70 leading-relaxed">
        <strong>MRI-Specific Cold Chain:</strong> Liquid helium quench protection is vital. Our{' '}
        <Link to="/used-mri-machines-africa" className="text-teal font-bold hover:underline">Siemens Magnetom Aera 1.5T listings</Link>{' '}
        include verified cold-chain logs from Felixstowe to Durban.
      </div>
    </section>

    {/* Phase 4 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">04</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Critical Site Readiness Checklist</h2>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 font-medium">Poor site preparation destroys more imaging systems than poor engineering. Every requirement below is non-negotiable.</p>
      </div>
      <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm mb-6">
        <h3 className="text-sm font-black uppercase tracking-widest mb-5">
          64-Slice CT Requirements —{' '}
          <Link to="/refurbished-ct-scanners-africa" className="text-teal hover:underline">GE Optima CT660</Link>
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: <Zap className="w-4 h-4 text-teal" />, label: 'Voltage Stabilizer', value: '150kVA, ±2% regulation', note: 'Mandatory' },
            { icon: <ShieldCheck className="w-4 h-4 text-teal" />, label: 'UPS Backup', value: '30 min at full load', note: '100kVA' },
            { icon: <Zap className="w-4 h-4 text-teal" />, label: 'HVAC', value: 'Redundant chillers N+1', note: 'Maintain 18–22°C' },
          ].map(item => (
            <div key={item.label} className="bg-clinical rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">{item.icon}<span className="text-[10px] font-black uppercase tracking-widest text-navy/40">{item.label}</span></div>
              <div className="font-black text-sm">{item.value}</div>
              <div className="text-[10px] text-teal font-bold uppercase tracking-widest mt-1">{item.note}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <div className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">Real Case Study</div>
        <p className="text-sm text-red-800 leading-relaxed">
          A <Link to="/used-medical-equipment-nigeria-lagos-abuja" className="font-bold hover:underline">Lagos hospital</Link> lost <strong>$280,000</strong> on a Philips 128-slice CT when grid surges destroyed the detector array during installation. Proper 200kVA stabilization would have prevented this entirely.
        </p>
      </div>
    </section>

    {/* Phase 5 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">05</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Evidence-Based Modality Selection Matrix</h2>
      </div>
      <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">
        <Link to="/refurbished-ct-scanners-africa" className="hover:text-teal transition-colors">CT Scanner</Link> Slice Count Decision Framework
      </h3>
      <div className="overflow-x-auto rounded-2xl border border-navy/10 mb-8 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-navy text-white">
            <tr>
              {['Slice Count', 'Clinical Applications', 'Annual Throughput', 'Target Facility', 'Price Range (2026)'].map(h => (
                <th key={h} className="p-4 text-[10px] font-black uppercase tracking-widest">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5 bg-white">
            <tr className="hover:bg-clinical transition-colors">
              <td className="p-4 font-black">16-Slice</td>
              <td className="p-4 text-navy/60">Trauma, chest, basic abdomen</td>
              <td className="p-4 text-navy/60">&lt;5,000 scans</td>
              <td className="p-4 text-navy/60">Level 3 clinics</td>
              <td className="p-4 font-bold text-teal">$120k – $180k</td>
            </tr>
            <tr className="hover:bg-clinical transition-colors bg-teal/5">
              <td className="p-4 font-black">64-Slice <span className="text-[10px] text-teal font-black ml-1">★ SWEET SPOT</span></td>
              <td className="p-4 text-navy/60">Cardiac CT angio, oncology</td>
              <td className="p-4 text-navy/60">8,000 – 12,000</td>
              <td className="p-4 text-navy/60">Private hospitals</td>
              <td className="p-4 font-bold text-teal">$250k – $350k</td>
            </tr>
            <tr className="hover:bg-clinical transition-colors">
              <td className="p-4 font-black">128/256+</td>
              <td className="p-4 text-navy/60">Advanced perfusion, research</td>
              <td className="p-4 text-navy/60">&gt;15,000</td>
              <td className="p-4 text-navy/60">Academic centers</td>
              <td className="p-4 font-bold text-teal">$450k – $750k</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6 mb-8 text-sm text-navy/70 leading-relaxed">
        <strong>64-Slice Sweet Spot:</strong> Handles 82% of private African hospital volume. See our{' '}
        <Link to="/guides/ge-optima-ct660-vs-siemens-somatom-64-slice-comparison" className="text-teal font-bold hover:underline">GE vs Siemens 64-Slice Comparison</Link>{' '}
        for a deep dive on the most popular models in the African market.
      </div>

      <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">
        <Link to="/used-mri-machines-africa" className="hover:text-teal transition-colors">MRI Field Strength</Link> Optimization
      </h3>
      <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm text-sm text-navy/70 leading-relaxed">
        <strong>1.5T Systems are recommended for 90% of African facilities</strong> due to lower helium consumption, wider patient bores, and lower power draw. Prioritize Zero Boil-Off (ZBO) magnets to save <strong>$12,000/year</strong> in cryogen refills.{' '}
        <Link to="/guides/mri-field-strength-1-5t-vs-3t-guide-africa" className="text-teal font-bold hover:underline">Read the full 1.5T vs 3.0T guide →</Link>
      </div>
    </section>

    {/* Phase 6 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">06</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">2026 Africa Pricing & Payment Benchmarks</h2>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-navy/10 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-navy text-white">
            <tr>
              {['Equipment Type', 'Model Example', 'Est. Price Range (USD, CIF)', 'Warranty'].map(h => (
                <th key={h} className="p-4 text-[10px] font-black uppercase tracking-widest">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5 bg-white">
            {[
              { type: 'CT Scanners', model: 'GE Optima CT660', path: '/refurbished-ct-scanners-africa', price: '$250k – $350k', warranty: '24 mo.' },
              { type: '128-Slice CT', model: 'Philips Ingenuity', path: '/refurbished-ct-scanners-africa', price: '$400k – $550k', warranty: '24 mo.' },
              { type: 'MRI 1.5T', model: 'Siemens MAGNETOM Aera', path: '/used-mri-machines-africa', price: '$450k – $650k', warranty: '24 mo.' },
              { type: 'Premium Ultrasound', model: 'GE Voluson E10', path: '/refurbished-ultrasound-machines-africa', price: '$50k – $120k', warranty: '12 mo.' },
            ].map(row => (
              <tr key={row.model} className="hover:bg-clinical transition-colors">
                <td className="p-4 font-bold">
                  <Link to={row.path} className="text-teal hover:underline">{row.type}</Link>
                </td>
                <td className="p-4 text-navy/60">{row.model}</td>
                <td className="p-4 font-bold">{row.price}</td>
                <td className="p-4 text-navy/60">{row.warranty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Phase 7 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">07</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">The UK–Africa Procurement Trust Corridor</h2>
      </div>
      <p className="text-sm text-navy/60 mb-6 leading-relaxed">
        Direct supplier relationships carry unacceptable risk. MedicalEquipment.Africa provides institutional-grade brokerage with full pre-deposit transparency.
      </p>
      <div className="bg-navy text-white rounded-2xl p-8">
        <h3 className="text-sm font-black uppercase tracking-widest text-teal mb-5">Verified Data Room Access (Pre-Deposit)</h3>
        <ul className="space-y-3 mb-8">
          {[
            'Full tube usage logs + remaining filament life',
            '120-hour burn-in test reports',
            'Regulatory document samples (PPB / NAFDAC / SAHPRA)',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/80">
              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <Link
          to="/request-verified-pricing-medical-equipment"
          className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-xl font-bold hover:bg-teal/90 transition-all"
        >
          Request Data Room Access <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* Phase 8 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">08</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Post-Installation Revenue Optimization</h2>
      </div>
      <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Annual Operating Cost Benchmarks (64-Slice CT)</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Service Contract', value: '$45k – $65k', sub: 'Per annum' },
          { label: 'Power Consumption', value: '$28k', sub: 'Per annum' },
          { label: 'Net Profit Potential', value: '$1.11M', sub: 'Year 1 @ 12k scans' },
        ].map(item => (
          <div key={item.label} className="bg-clinical rounded-2xl p-6 text-center">
            <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-2">{item.label}</div>
            <div className="text-2xl font-black text-teal mb-1">{item.value}</div>
            <div className="text-[10px] text-navy/40 uppercase tracking-widest">{item.sub}</div>
          </div>
        ))}
      </div>
      <p className="text-sm text-navy/60 leading-relaxed">
        Based on 12,000 scans at $120 average scan revenue — achievable at a well-positioned private hospital running a{' '}
        <Link to="/refurbished-ct-scanners-africa" className="text-teal font-bold hover:underline">64-slice CT system</Link>.
      </p>
    </section>

    {/* CTA */}
    <div className="bg-navy text-white rounded-3xl p-10 text-center">
      <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Ready to Procure?</h2>
      <p className="text-white/70 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
        Request verified Data Room access — including tube logs, burn-in reports, and regulatory documentation — for the GE Optima CT660 and other listed systems. No commitment required.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/request-verified-pricing-medical-equipment"
          className="bg-teal text-white px-8 py-4 rounded-xl font-bold hover:bg-teal/90 transition-all"
        >
          Request Verified Data Room & Pricing →
        </Link>
        <Link
          to="/refurbished-medical-equipment-catalogue-africa"
          className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/20"
        >
          Browse Full Catalogue
        </Link>
      </div>
    </div>

  </div>
);

// ─── Article: GE vs Siemens 64-Slice Comparison ──────────────────────────────

const GEvsSimiensContent: React.FC = () => (
  <div className="space-y-16">

    {/* Phase 1 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">01</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Core Technical Specifications</h2>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-navy/10 shadow-sm mb-6">
        <table className="w-full text-sm text-left">
          <thead className="bg-navy text-white">
            <tr>
              {['Specification', 'GE Optima CT660', 'Siemens Somatom Perspective', 'African Clinic Impact'].map(h => (
                <th key={h} className="p-4 text-[10px] font-black uppercase tracking-widest">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5 bg-white">
            {[
              { spec: 'Generator Power', ge: '80 kW', siemens: '60 kW', impact: 'GE enables obese patients (up to 200kg) + high mA cardiac', geWins: true },
              { spec: 'Rotation Time', ge: '0.4 seconds', siemens: '0.5 seconds', impact: 'GE = 25% faster temporal resolution for cardiac CTA', geWins: true },
              { spec: 'Heat Storage', ge: '8 MHU', siemens: '6 MHU', impact: 'GE sustains 2× longer high-dose protocols without cooldown', geWins: true },
              { spec: 'Spatial Resolution', ge: '0.30 mm', siemens: '0.33 mm', impact: 'GE superior for coronary stent visualization', geWins: true },
              { spec: 'Refurb Price', ge: '$175k – $195k', siemens: '$140k – $165k', impact: 'Siemens 18% cheaper upfront', geWins: false },
              { spec: 'Dimensions', ge: '190 × 140 cm', siemens: '185 × 145 cm', impact: 'GE fits tighter African scan rooms', geWins: true },
            ].map(row => (
              <tr key={row.spec} className="hover:bg-clinical transition-colors">
                <td className="p-4 font-black text-navy/80">{row.spec}</td>
                <td className={`p-4 font-bold ${row.geWins ? 'text-teal' : 'text-navy/60'}`}>{row.ge}</td>
                <td className={`p-4 font-bold ${!row.geWins ? 'text-teal' : 'text-navy/60'}`}>{row.siemens}</td>
                <td className="p-4 text-navy/50 text-xs leading-relaxed">{row.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6 text-sm text-navy/70 leading-relaxed">
        <strong>Technical Verdict:</strong> The <Link to="/refurbished-ct-scanners-africa" className="text-teal font-bold hover:underline">GE Optima CT660</Link> demonstrates clear superiority across power delivery, speed, and heat capacity — critical for busy African hospitals averaging 25–40 scans daily. Siemens counters with a lower acquisition cost.
      </div>
    </section>

    {/* Phase 2 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">02</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Power & Infrastructure Demands</h2>
      </div>
      <div className="bg-navy/5 border-l-4 border-teal rounded-r-2xl p-5 mb-6 text-sm text-navy/70 leading-relaxed">
        Sub-Saharan Africa's notorious voltage fluctuations (180–260V spikes) demand robust scanner engineering. Both systems require a dedicated stabilizer — undersizing this is the leading cause of preventable scanner damage.
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-teal/30 rounded-2xl p-8 shadow-sm">
          <div className="text-[10px] font-black uppercase tracking-widest text-teal mb-3">GE Optima CT660</div>
          <ul className="space-y-3">
            {[
              { label: 'Peak Power Draw', value: '80 kW (3-phase 415V)' },
              { label: 'Recommended Stabilizer', value: '150 kVA online double-conversion UPS' },
              { label: 'Daily Power Cost', value: '~$22 (120 kWh @ $0.18/kWh Lagos rates)' },
            ].map(item => (
              <li key={item.label} className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-navy/40">{item.label}</span>
                <span className="text-sm font-bold text-navy/80">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-3">Siemens Somatom Perspective</div>
          <ul className="space-y-3">
            {[
              { label: 'Peak Power Draw', value: '60 kW (3-phase 400V)' },
              { label: 'Recommended Stabilizer', value: '120 kVA' },
              { label: 'Daily Power Cost', value: '~$18' },
            ].map(item => (
              <li key={item.label} className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-navy/40">{item.label}</span>
                <span className="text-sm font-bold text-navy/80">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 bg-teal/5 border border-teal/20 rounded-xl p-4 text-sm text-navy/70">
        <strong>Winner: GE Optima</strong> — Higher power headroom future-proofs against growing patient volumes. See our <Link to="/guides/ct-scanner-procurement-framework-africa-2026" className="text-teal font-bold hover:underline">CT Procurement Framework</Link> for full site readiness specifications.
      </div>
    </section>

    {/* Phase 3 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">03</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Heat Management & Throughput Capacity</h2>
      </div>
      <p className="text-sm text-navy/60 mb-6 leading-relaxed">
        Heat storage determines sustainable scan volume before mandatory cooldown periods — the silent killer of CT revenue in high-throughput African hospitals.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { name: 'GE Optima CT660', mhu: '8 MHU', scans: '320 scans/day', revenue: '$1.15M', color: 'teal', highlight: true },
          { name: 'Siemens Perspective', mhu: '6 MHU', scans: '260 scans/day', revenue: '$936k', color: 'navy', highlight: false },
        ].map(item => (
          <div key={item.name} className={`rounded-2xl p-8 ${item.highlight ? 'bg-teal text-white' : 'bg-white border border-navy/10'} shadow-sm`}>
            <div className={`text-[10px] font-black uppercase tracking-widest mb-2 ${item.highlight ? 'text-white/60' : 'text-navy/40'}`}>{item.name}</div>
            <div className={`text-3xl font-black mb-1 ${item.highlight ? 'text-white' : 'text-navy'}`}>{item.mhu}</div>
            <div className={`text-sm mb-4 ${item.highlight ? 'text-white/80' : 'text-navy/60'}`}>{item.scans} before cooldown</div>
            <div className={`text-[10px] font-black uppercase tracking-widest ${item.highlight ? 'text-white/60' : 'text-navy/40'}`}>Annual Revenue Potential</div>
            <div className={`text-xl font-black ${item.highlight ? 'text-white' : 'text-teal'}`}>{item.revenue}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Phase 4 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">04</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Service Ecosystem & Parts Availability</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-teal/30 rounded-2xl p-8 shadow-sm">
          <div className="text-[10px] font-black uppercase tracking-widest text-teal mb-4">GE Healthcare Africa Network</div>
          <ul className="space-y-3 text-sm text-navy/70">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /><span><strong>Regional Hubs:</strong> <Link to="/refurbished-medical-equipment-kenya-nairobi" className="text-teal hover:underline">Nairobi</Link>, <Link to="/used-medical-equipment-nigeria-lagos-abuja" className="text-teal hover:underline">Lagos</Link>, <Link to="/refurbished-medical-equipment-south-africa" className="text-teal hover:underline">Johannesburg</Link></span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /><span><strong>Parts Guarantee:</strong> 14-day tube delivery</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /><span><strong>Network:</strong> 120 Field Engineers across Sub-Saharan Africa</span></li>
          </ul>
        </div>
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-4">Siemens Healthineers Coverage</div>
          <ul className="space-y-3 text-sm text-navy/70">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-navy/30 mt-0.5 flex-shrink-0" /><span><strong>Regional Hubs:</strong> <Link to="/used-medical-equipment-nigeria-lagos-abuja" className="text-teal hover:underline">Lagos</Link>, Cape Town</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-navy/30 mt-0.5 flex-shrink-0" /><span><strong>Parts Delivery:</strong> 21–28 day international shipping</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-4 bg-teal/5 border border-teal/20 rounded-xl p-4 text-sm text-navy/70">
        <strong>Clear Winner: GE</strong> — 45% faster parts availability prevents the <strong>$8k/day revenue loss</strong> from X-ray tube failures.
      </div>
    </section>

    {/* Phase 5 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">05</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Total Cost of Ownership — 5-Year TCO Analysis</h2>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-navy/10 shadow-sm mb-6">
        <table className="w-full text-sm text-left">
          <thead className="bg-navy text-white">
            <tr>
              {['Cost Category', 'GE Optima CT660', 'Siemens Perspective'].map(h => (
                <th key={h} className="p-4 text-[10px] font-black uppercase tracking-widest">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5 bg-white">
            {[
              { cat: 'Acquisition (CIF)', ge: '$185,000', siemens: '$152,000' },
              { cat: 'Annual Service (×5)', ge: '$260,000', siemens: '$230,000' },
              { cat: 'Downtime Losses', ge: '$115,000', siemens: '$201,000' },
            ].map(row => (
              <tr key={row.cat} className="hover:bg-clinical transition-colors">
                <td className="p-4 font-bold text-navy/70">{row.cat}</td>
                <td className="p-4 text-navy/60">{row.ge}</td>
                <td className="p-4 text-navy/60">{row.siemens}</td>
              </tr>
            ))}
            <tr className="bg-teal text-white font-black">
              <td className="p-4 uppercase tracking-widest text-sm">Total 5-Year TCO</td>
              <td className="p-4">$1.60M</td>
              <td className="p-4">$1.60M</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-navy/5 border-l-4 border-teal rounded-r-2xl p-5 text-sm text-navy/70 leading-relaxed">
        <strong>TCO Revelation:</strong> Despite the higher price tag, GE's superior uptime generates <strong>$219k higher net revenue</strong> over 5 years — making it the stronger financial decision for most African private hospitals.
      </div>
    </section>

    {/* Phase 6 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">06</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Africa-Specific Installation Considerations</h2>
      </div>
      <p className="text-sm text-navy/60 mb-5 leading-relaxed">
        Both systems require pre-commissioning radiation surveys from the relevant authority — <Link to="/refurbished-medical-equipment-kenya-nairobi" className="text-teal font-bold hover:underline">KNRA in Kenya</Link>, <Link to="/used-medical-equipment-nigeria-lagos-abuja" className="text-teal font-bold hover:underline">NAFDAC/SONCAP in Nigeria</Link>, and <Link to="/refurbished-medical-equipment-south-africa" className="text-teal font-bold hover:underline">SAHPRA in South Africa</Link> — verifying:
      </p>
      <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
        <ul className="space-y-3">
          {[
            'Control room walls: minimum 2mm lead equivalency',
            'Viewing window: <0.1% transmission at 120kVp',
            'Structural certification for floor load-bearing capacity',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
              <ShieldCheck className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-navy/5">
          <Link to="/guides/definitive-guide-importing-medical-equipment-kenya-ppb" className="text-teal font-bold text-sm hover:underline flex items-center gap-1">
            View full CT Room Design & Compliance Checklist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Phase 7 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">07</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">ROI Projections — Private African Hospital</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { name: 'GE Optima CT660', profit: '$412k', breakeven: 'Month 7', highlight: true },
          { name: 'Siemens Perspective', profit: '$289k', breakeven: 'Month 9', highlight: false },
        ].map(item => (
          <div key={item.name} className={`rounded-2xl p-8 text-center ${item.highlight ? 'bg-navy text-white' : 'bg-white border border-navy/10'} shadow-sm`}>
            <div className={`text-[10px] font-black uppercase tracking-widest mb-3 ${item.highlight ? 'text-white/50' : 'text-navy/40'}`}>{item.name}</div>
            <div className={`text-3xl font-black mb-2 ${item.highlight ? 'text-teal' : 'text-navy'}`}>{item.profit}</div>
            <div className={`text-sm mb-1 ${item.highlight ? 'text-white/60' : 'text-navy/50'}`}>Year 1 Net Profit</div>
            <div className={`text-[10px] font-black uppercase tracking-widest mt-4 ${item.highlight ? 'text-white/40' : 'text-navy/30'}`}>Break-even</div>
            <div className={`text-lg font-black ${item.highlight ? 'text-white' : 'text-navy'}`}>{item.breakeven}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Phase 8 — Final Recommendation */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">08</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Final Recommendation Matrix</h2>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-navy/10 shadow-sm mb-6">
        <table className="w-full text-sm text-left">
          <thead className="bg-navy text-white">
            <tr>
              {['Decision Factor', 'Winner', 'Rationale'].map(h => (
                <th key={h} className="p-4 text-[10px] font-black uppercase tracking-widest">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5 bg-white">
            {[
              { factor: 'Performance', winner: 'GE Optima', rationale: 'Superior power, speed, and 0.3mm resolution' },
              { factor: 'Throughput', winner: 'GE Optima', rationale: '23% higher daily scan volume' },
              { factor: 'Budget-Constrained', winner: 'Siemens', rationale: '$33k cheaper upfront cost' },
              { factor: 'Africa Support', winner: 'GE Optima', rationale: '45% faster Africa-wide parts delivery' },
            ].map(row => (
              <tr key={row.factor} className="hover:bg-clinical transition-colors">
                <td className="p-4 font-bold text-navy/80">{row.factor}</td>
                <td className={`p-4 font-black ${row.winner === 'GE Optima' ? 'text-teal' : 'text-navy/60'}`}>{row.winner}</td>
                <td className="p-4 text-navy/50 text-xs">{row.rationale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-navy/5 border-l-4 border-teal rounded-r-2xl p-5 text-sm text-navy/70 leading-relaxed">
        <strong>Strategic Recommendation:</strong> <Link to="/refurbished-ct-scanners-africa" className="text-teal font-bold hover:underline">GE Optima CT660</Link> for 92% of African private hospitals. The Siemens Perspective is the best choice for startup clinics prioritising lowest entry cost.
      </div>
    </section>

    {/* CTA */}
    <div className="bg-navy text-white rounded-3xl p-10">
      <h2 className="text-2xl font-black uppercase tracking-tight mb-4 text-center">Secure Your System</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Link to="/request-verified-pricing-medical-equipment" className="bg-teal text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-teal/90 transition-all text-center">
          Request GE Optima CT660 Data Room →
        </Link>
        <Link to="/refurbished-ct-scanners-africa" className="bg-white/10 text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-all border border-white/20 text-center">
          View CT Scanner Inventory
        </Link>
        <Link to="/request-verified-pricing-medical-equipment" className="bg-white/10 text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-all border border-white/20 text-center">
          Speak with Our Engineering Team
        </Link>
      </div>
      <div className="border-t border-white/10 pt-6">
        <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Essential Resources</div>
        <div className="flex flex-wrap gap-4">
          <Link to="/guides/ct-scanner-procurement-framework-africa-2026" className="text-teal text-sm font-bold hover:underline">2026 Africa CT Procurement Guide</Link>
          <Link to="/guides/uk-refurbishment-standard-iso-13485-explained" className="text-teal text-sm font-bold hover:underline">UK Refurbishment Standard</Link>
          <Link to="/medical-equipment-guides-market-news-africa" className="text-teal text-sm font-bold hover:underline">Full Insights Directory</Link>
        </div>
      </div>
    </div>

  </div>
);

// ─── Article: UK Refurbishment Standard ──────────────────────────────────────

const UKRefurbContent: React.FC = () => (
  <div className="space-y-16">

    {/* Intro */}
    <div className="bg-navy/5 border-l-4 border-teal rounded-r-2xl p-6 text-sm text-navy/70 leading-relaxed">
      In the <strong>$2.5B global refurbished medical imaging market</strong>, quality varies dramatically — from "used-as-is" junk to true ISO 13485-certified restoration from UK engineering centres. African hospitals paying <Link to="/refurbished-ct-scanners-africa" className="text-teal font-bold hover:underline">$175k–$250k for 64-slice CT scanners</Link> cannot afford downtime from failed bearings or quenched <Link to="/used-mri-machines-africa" className="text-teal font-bold hover:underline">MRI magnets</Link>. MedicalEquipment.Africa mandates that every listed system undergoes our proprietary 5-Phase UK Refurbishment Protocol — delivering <strong>98.4% uptime</strong> across 180+ African installations since 2023.
    </div>

    {/* Phase 1 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">01</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Precision Selection & OEM De-Installation</h2>
      </div>

      <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm mb-6">
        <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Source Material Quality Control</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-amber-800 font-medium">We reject <strong>78% of available systems</strong> during initial screening. Only systems meeting every criterion below are accepted.</p>
        </div>
        <ul className="space-y-2">
          {[
            'Clinical usage <8,000 tube-hours (CT) / <25,000 magnet-hours (MRI)',
            'Service history: Private clinics / NHS only (no trauma centres)',
            'No flood, fire, or smoke exposure documentation',
            'Complete OEM service log availability',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
        <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">OEM-Trained De-Installation — 72-Point Checklist</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Gantry parking in service position',
            'Helium level verification (MRI only)',
            'X-ray tube cooldown to <40°C',
            'High-voltage generator discharge',
            'All internal cabling labelled & photographed',
            'Transport frame OEM mounting',
          ].map(item => (
            <div key={item} className="flex items-start gap-2 text-sm text-navy/70 bg-clinical rounded-lg p-3">
              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
            </div>
          ))}
        </div>
        <div className="mt-5 p-4 bg-teal/5 rounded-xl text-sm text-navy/70">
          <strong>Result:</strong> Zero transport damage across 240 shipments to <Link to="/refurbished-medical-equipment-kenya-nairobi" className="text-teal font-bold hover:underline">Mombasa</Link>, <Link to="/used-medical-equipment-nigeria-lagos-abuja" className="text-teal font-bold hover:underline">Lagos</Link>, and <Link to="/refurbished-medical-equipment-south-africa" className="text-teal font-bold hover:underline">Durban</Link>.
        </div>
      </div>
    </section>

    {/* Phase 2 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">02</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Comprehensive Mechanical & Electronic Restoration</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Mechanical Components — 100% Inspection</h3>
          <ul className="space-y-3">
            {[
              'Gantry bearings: Laser alignment + OEM replacement',
              'Laser positioning system: Full recalibration',
              'Cooling fans/pumps: 100% new with vibration analysis',
              'Table drive belts: OEM replacement regardless of wear',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <Zap className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Electronic Systems — Load Testing</h3>
          <ul className="space-y-3">
            {[
              'Generator capacitors: ESR testing, replace if >5% drift',
              'PC boards: Burn-in at 50°C for 48 hours',
              'Power distribution: Insulation resistance >100 MΩ',
              'Patient table load: 225kg dynamic verification',
              'Speed accuracy: ±0.1mm/s across 180cm travel',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <Zap className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 bg-teal/5 border border-teal/20 rounded-xl p-4 text-sm text-navy/70">
        <strong>Engineering Metric:</strong> Post-refurbishment MTBF (Mean Time Between Failures) matches new systems at <strong>28,000 hours</strong>.
      </div>
    </section>

    {/* Phase 3 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">03</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">X-Ray Tube & Detector Array Certification</h2>
      </div>
      <div className="inline-block bg-amber-50 border border-amber-200 text-amber-800 text-xs font-black uppercase tracking-widest px-3 py-1 rounded mb-6">
        The $85k Risk Mitigator
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">CT Tube Life Assessment</h3>
          <ul className="space-y-3">
            {[
              'Filament emission spectroscopy (minimum 72% remaining)',
              'Anode bearing vibration analysis (<0.2mm orbit)',
              'High-voltage arcing test (10kV increments)',
              '100kHU heat load cycle (5 repetitions)',
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
                <span className="w-5 h-5 bg-navy text-white rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
          <h3 className="text-sm font-black uppercase tracking-widest text-red-500 mb-4">Mandatory Replacement Thresholds</h3>
          <ul className="space-y-3">
            {[
              '<70% filament life → Mandatory replacement',
              '>0.3mm anode wobble → Mandatory replacement',
              'Focal spot degradation >15% → Mandatory replacement',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-red-800 font-medium">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm mb-4">
        <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Detector Array Recalibration — CATPHAN 700 Phantom</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: 'Low Contrast Sensitivity', value: '0.5% @ 120kVp' },
            { label: 'High Contrast Resolution', value: '9 LP/cm' },
            { label: 'Slice Thickness Accuracy', value: '±0.2mm' },
            { label: 'CTDIvol Calibration', value: '±3% IEC standard' },
          ].map(item => (
            <div key={item.label} className="bg-clinical rounded-xl p-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-1">{item.label}</div>
              <div className="text-sm font-black text-teal">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-teal/5 border border-teal/20 rounded-xl p-4 text-sm text-navy/70">
        <strong>Clinical Validation:</strong> Post-refurb images indistinguishable from new systems (blinded radiologist review, n=45).
      </div>
    </section>

    {/* Phase 4 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">04</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Medical-Grade Cosmetic & Hygienic Restoration</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Anti-Microbial Surface Engineering</h3>
          <ul className="space-y-3">
            {[
              'Chemical stripping (no sanding damage to aluminium)',
              'Ultrasonic degreasing (all crevices)',
              'Anti-microbial powder coat (ISO 22196 certified)',
              'UV-C sterilization (30 min full spectrum)',
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
                <span className="w-5 h-5 bg-teal text-white rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 p-3 bg-teal/5 rounded-lg text-xs text-teal font-bold">
            Reduces surface MRSA colonisation by 99.9% vs standard paint
          </div>
        </div>
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Aesthetic Standards</h3>
          <ul className="space-y-3">
            {[
              'Powder coat matching original OEM colour codes',
              'All labelling re-applied (serial numbers, warnings)',
              'Touchscreen overlays replaced — no scratches or cracks',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 p-3 bg-navy/5 rounded-lg text-xs text-navy/60 italic">
            Systems appear "factory new" — enhancing hospital premium positioning with patients.
          </div>
        </div>
      </div>
    </section>

    {/* Phase 5 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">05</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">120-Hour Clinical Simulation Burn-In</h2>
      </div>
      <p className="text-sm text-navy/60 mb-6 leading-relaxed">
        The burn-in phase eliminates "infant mortality" failures — components that pass static testing but fail under sustained clinical load. 5 continuous days of accelerated life testing.
      </p>
      <div className="bg-navy text-white rounded-2xl p-8 mb-6">
        <h3 className="text-sm font-black uppercase tracking-widest text-teal mb-5">Continuous Operation Matrix</h3>
        <div className="space-y-3">
          {[
            { day: 'Day 1–2', task: 'Maximum kV/mA protocols (120kVp, 500mA)' },
            { day: 'Day 3–4', task: 'Temperature cycling (18°C – 42°C)' },
            { day: 'Day 5', task: 'Mixed clinical protocols (7,200 simulated scans)' },
          ].map(item => (
            <div key={item.day} className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-teal w-16 flex-shrink-0">{item.day}</div>
              <div className="text-sm text-white/80">{item.task}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Monitored Parameters (200+ data points)</h3>
          <ul className="space-y-2">
            {[
              'Gantry temperature (<55°C bearings)',
              'Tube heat load (track MHU accumulation)',
              'Detector drift (<2% hourly)',
              'Table position accuracy (±0.1mm)',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-red-500 mb-4">Zero-Tolerance Faults</h3>
          <ul className="space-y-2">
            {[
              'Thermal runaway (>65°C any component)',
              'Image artifacts >3% uniformity deviation',
              'Mechanical binding under 200kg load',
              'Communication errors >0.1%',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-red-800 font-medium">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 bg-teal/5 border border-teal/20 rounded-xl p-4 text-sm text-navy/70">
        <strong>Statistical Outcome:</strong> 99.7% pass rate — 3% of systems are rejected after burn-in before they can ever reach an African clinic.
      </div>
    </section>

    {/* Phase 6 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">06</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">UK Vetting & Quality Assurance Guarantee</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Physical Facility Audits (Annual)</h3>
          <ul className="space-y-3">
            {[
              'ISO 13485:2016 certification current',
              'Segregated clean room for detector work',
              'Calibrated phantoms (traceable to NIST)',
              'OEM parts inventory audit (£250k minimum)',
              'Engineer competency records (OEM training <18 months)',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <ShieldCheck className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-navy text-white rounded-2xl p-8">
          <h3 className="text-sm font-black uppercase tracking-widest text-teal mb-4">Technical Data Room — 47 Documents</h3>
          <ul className="space-y-3 text-sm text-white/80">
            {[
              '120-hour burn-in test logs + graphs',
              'CATPHAN image quality report (50 images)',
              'Tube filament spectroscopy certificate',
              'Full parts replacement manifest',
              'Final conformity declaration (OEM engineer)',
              'Vibration analysis report (gantry/table)',
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <Link
            to="/request-verified-pricing-medical-equipment"
            className="mt-6 inline-flex items-center gap-2 bg-teal text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-teal/90 transition-all"
          >
            Request Data Room Access <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Phase 7 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">07</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Performance Metrics vs Global Benchmarks</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-teal text-white rounded-2xl p-8 shadow-sm">
          <div className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-4">UK Standard Systems — 180 Installations</div>
          <div className="space-y-4">
            {[
              { label: 'Uptime (first 24 months)', value: '98.4%' },
              { label: 'Mean Time To Repair', value: '4.2 hours' },
              { label: 'Tube Life Post-Refurb', value: '18,500 hours avg' },
            ].map(item => (
              <div key={item.label}>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/50">{item.label}</div>
                <div className="text-2xl font-black">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-4">Global "Used" Market Average</div>
          <div className="space-y-4">
            {[
              { label: 'Uptime', value: '82.1%' },
              { label: 'Mean Time To Repair', value: '11.7 hours' },
              { label: 'Tube Life', value: '9,200 hours' },
            ].map(item => (
              <div key={item.label}>
                <div className="text-[10px] font-black uppercase tracking-widest text-navy/40">{item.label}</div>
                <div className="text-2xl font-black text-navy/40">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">5-Year TCO Savings vs New Equipment</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Capital Cost', value: '55% lower' },
            { label: 'Service Costs', value: '28% lower' },
            { label: 'Downtime Losses', value: '76% lower' },
            { label: 'Total Savings', value: '$1.27M' },
          ].map(item => (
            <div key={item.label} className="text-center bg-clinical rounded-xl p-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-1">{item.label}</div>
              <div className="text-xl font-black text-teal">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Phase 8 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">08</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Africa-Specific Optimisations</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Power Grid Hardening</h3>
          <ul className="space-y-2">
            {[
              'Enhanced surge suppression (80kA rating)',
              'Wide voltage tolerance (±15%)',
              'Self-resetting fuses (generator section)',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <Zap className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Tropical Climate Engineering</h3>
          <ul className="space-y-2">
            {[
              'High-temperature bearings (rated 75°C)',
              'Enhanced cooling airflow (20% increase)',
              'Humidity-resistant cabling (IP65 connectors)',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <Zap className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Local Service Integration</h3>
          <ul className="space-y-2">
            {[
              'OEM-trained African engineers (min 2 per country)',
              'Regional spare parts cache (tubes, detectors)',
              '24/7 remote diagnostics capability',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Phase 9 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">09</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Procurement Assurance Protocol</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Before 30% Deposit</h3>
          <ul className="space-y-3">
            {[
              'Physical UK warehouse verification (video/serial match)',
              'Complete Data Room review (47 documents)',
              'Third-party engineering sign-off',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Before Final Payment</h3>
          <ul className="space-y-3">
            {[
              'SONCAP/PVoC certification complete',
              'Cold-chain monitoring activated (MRI)',
              'Port radiation clearance confirmed',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <ShieldCheck className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">24-Month Comprehensive Warranty</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Parts: OEM replacement (no core charge)',
            'Labor: 4-hour response (major cities)',
            'Loaner tube during replacements',
            'Software updates (1 major version)',
          ].map(item => (
            <div key={item} className="flex items-start gap-2 text-sm text-navy/70 bg-clinical rounded-lg p-3">
              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <div className="bg-navy text-white rounded-3xl p-10">
      <h2 className="text-2xl font-black uppercase tracking-tight mb-2 text-center">Verify Any Supplier Against Our Standard</h2>
      <p className="text-white/60 text-sm text-center mb-8 max-w-xl mx-auto">Every system in our directory has passed this protocol. Request the full 47-document Data Room — including burn-in logs, tube certificates, and conformity declarations — before committing a penny.</p>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Link to="/request-verified-pricing-medical-equipment" className="bg-teal text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-teal/90 transition-all text-center">
          Request UK-Vetted Data Room →
        </Link>
        <Link to="/refurbished-medical-equipment-catalogue-africa" className="bg-white/10 text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-all border border-white/20 text-center">
          Browse Verified Directory
        </Link>
        <Link to="/request-verified-pricing-medical-equipment" className="bg-white/10 text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-all border border-white/20 text-center">
          Speak with UK Engineering Team
        </Link>
      </div>
      <div className="border-t border-white/10 pt-6">
        <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Essential Technical Resources</div>
        <div className="flex flex-wrap gap-4">
          <Link to="/guides/ct-scanner-procurement-framework-africa-2026" className="text-teal text-sm font-bold hover:underline">2026 CT Procurement Framework</Link>
          <Link to="/guides/ge-optima-ct660-vs-siemens-somatom-64-slice-comparison" className="text-teal text-sm font-bold hover:underline">GE vs Siemens 64-Slice Comparison</Link>
          <Link to="/medical-equipment-guides-market-news-africa" className="text-teal text-sm font-bold hover:underline">Full Insights Directory</Link>
        </div>
      </div>
    </div>

  </div>
);

// ─── Article: Definitive CT Procurement Framework ────────────────────────────

const CTProcurementContent: React.FC = () => (
  <div className="space-y-16">

    {/* Intro */}
    <div className="bg-navy/5 border-l-4 border-teal rounded-r-2xl p-6 text-sm text-navy/70 leading-relaxed">
      Acquiring a <Link to="/refurbished-ct-scanners-africa" className="text-teal font-bold hover:underline">refurbished CT scanner</Link> represents the single highest-impact capital investment for African private hospitals and diagnostic centres in 2026. A properly selected 64-slice system generates <strong>$1.1M+ annual scan revenue</strong> while delivering world-class cardiac, oncology, and trauma imaging at 45% of new equipment costs. Poor selection — driven by price alone — results in 6-month service delays, $300k+ tube replacements, and chronic downtime killing profitability.
    </div>

    {/* Phase 1 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">01</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Slice Count Decision Matrix</h2>
      </div>

      <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm mb-6">
        <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Understanding CT Slice Configuration</h3>
        <p className="text-sm text-navy/60 mb-4 leading-relaxed">Slice count determines simultaneous image coverage per gantry rotation, directly impacting scan speed, radiation dose, and clinical applications:</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { slices: '16-Slice', coverage: '16 × 0.625mm = 10mm coverage/rotation', color: 'navy/5' },
            { slices: '64-Slice', coverage: '64 × 0.625mm = 40mm coverage/rotation', color: 'teal/10', highlight: true },
            { slices: '128-Slice', coverage: '128 × 0.6mm = 77mm coverage/rotation', color: 'navy/5' },
          ].map(item => (
            <div key={item.slices} className={`rounded-xl p-4 ${item.highlight ? 'bg-teal/10 border border-teal/30' : 'bg-clinical'}`}>
              <div className={`text-sm font-black mb-1 ${item.highlight ? 'text-teal' : 'text-navy'}`}>{item.slices}</div>
              <div className="text-xs text-navy/60 leading-relaxed">{item.coverage}</div>
              {item.highlight && <div className="text-[10px] font-black text-teal uppercase tracking-widest mt-2">★ Recommended</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-navy/10 shadow-sm mb-6">
        <table className="w-full text-sm text-left">
          <thead className="bg-navy text-white">
            <tr>
              {['Slice Count', 'Primary Applications', 'Annual Volume', 'Target Facility', 'Capital Cost (2026)'].map(h => (
                <th key={h} className="p-4 text-[10px] font-black uppercase tracking-widest">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5 bg-white">
            <tr className="hover:bg-clinical transition-colors">
              <td className="p-4 font-black">16-Slice</td>
              <td className="p-4 text-navy/60 text-xs">Trauma, chest, basic abdomen</td>
              <td className="p-4 text-navy/60">3,000 – 6,000</td>
              <td className="p-4 text-navy/60 text-xs">Level 3 clinics, rural hospitals</td>
              <td className="p-4 font-bold text-navy/60">$110k – $160k</td>
            </tr>
            <tr className="bg-teal/5 hover:bg-teal/10 transition-colors">
              <td className="p-4 font-black">64-Slice <span className="text-[10px] text-teal font-black ml-1">★ SWEET SPOT</span></td>
              <td className="p-4 text-navy/60 text-xs">Cardiac CTA, oncology staging, stroke</td>
              <td className="p-4 text-navy/60">8,000 – 15,000</td>
              <td className="p-4 text-navy/60 text-xs">Private hospitals, cancer centres</td>
              <td className="p-4 font-bold text-teal">$175k – $225k</td>
            </tr>
            <tr className="hover:bg-clinical transition-colors">
              <td className="p-4 font-black">128-Slice</td>
              <td className="p-4 text-navy/60 text-xs">Perfusion, research, high-volume cardiac</td>
              <td className="p-4 text-navy/60">18,000+</td>
              <td className="p-4 text-navy/60 text-xs">Academic centres, cardiology hubs</td>
              <td className="p-4 font-bold text-navy/60">$380k – $550k</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-teal/5 border border-teal/20 rounded-2xl p-5 text-sm text-navy/70 leading-relaxed">
        <strong>Strategic Recommendation:</strong> 64-slice CT scanners represent the optimal balance for 92% of African private hospitals — handling 84% of clinical indications while maintaining manageable power and infrastructure requirements. The <Link to="/refurbished-ct-scanners-africa" className="text-teal font-bold hover:underline">GE Optima CT660</Link> processes 35 patients/day (12,500/year) generating <strong>$1.42M revenue</strong> at $115/scan average tariff.
      </div>
    </section>

    {/* Phase 2 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">02</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Critical Technical Specifications Checklist</h2>
      </div>
      <div className="space-y-4">

        {/* Generator Power */}
        <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-black text-sm uppercase tracking-widest">Generator Power — The Throughput Engine</h3>
            <span className="bg-teal/10 text-teal text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest flex-shrink-0">Critical</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-3">
            <div className="bg-clinical rounded-xl p-3 text-center">
              <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-1">Minimum</div>
              <div className="font-black text-navy">70kW continuous</div>
            </div>
            <div className="bg-teal/10 border border-teal/30 rounded-xl p-3 text-center">
              <div className="text-[10px] font-black uppercase tracking-widest text-teal mb-1">Optimal</div>
              <div className="font-black text-teal">80kW+ (GE Optima CT660)</div>
            </div>
            <div className="bg-clinical rounded-xl p-3 text-center">
              <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-1">Clinical Benefit</div>
              <div className="font-black text-navy text-xs">Patients ≤200kg + cardiac protocols</div>
            </div>
          </div>
        </div>

        {/* Rotation Speed */}
        <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
          <h3 className="font-black text-sm uppercase tracking-widest mb-3">Gantry Rotation Speed — Temporal Resolution</h3>
          <div className="grid md:grid-cols-3 gap-3 mb-3">
            {[
              { model: 'GE Optima CT660', speed: '0.4s', badge: 'Best', color: true },
              { model: 'Philips Ingenuity', speed: '0.45s', badge: 'Good', color: false },
              { model: 'Siemens Perspective', speed: '0.5s', badge: 'Acceptable', color: false },
            ].map(item => (
              <div key={item.model} className={`rounded-xl p-4 ${item.color ? 'bg-teal/10 border border-teal/30' : 'bg-clinical'}`}>
                <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${item.color ? 'text-teal' : 'text-navy/40'}`}>{item.badge}</div>
                <Link to="/refurbished-ct-scanners-africa" className={`font-black text-sm hover:underline ${item.color ? 'text-teal' : 'text-navy'}`}>{item.model}</Link>
                <div className="text-xl font-black mt-1">{item.speed}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-navy/60 leading-relaxed">0.4s rotation reduces cardiac motion artifacts by <strong>35%</strong>, enabling diagnostic CTA without beta blockers.</p>
        </div>

        {/* Heat Storage */}
        <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
          <h3 className="font-black text-sm uppercase tracking-widest mb-3">Heat Storage Capacity — Daily Throughput Limit</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-3">
            <div className="bg-teal/10 border border-teal/30 rounded-xl p-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-teal mb-1">Optimal — 8+ MHU</div>
              <div className="font-black">GE Optima CT660</div>
              <div className="text-sm text-navy/60 mt-1">320 high-dose abdomen scans before cooldown</div>
            </div>
            <div className="bg-clinical rounded-xl p-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-1">Minimum — 6 MHU</div>
              <div className="font-black">Siemens Perspective</div>
              <div className="text-sm text-navy/60 mt-1">240 scans before cooldown</div>
            </div>
          </div>
        </div>

        {/* Tube Life */}
        <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-black text-sm uppercase tracking-widest">X-Ray Tube Remaining Life — The $80k Risk Factor</h3>
            <span className="bg-red-100 text-red-600 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest flex-shrink-0">Non-Negotiable</span>
          </div>
          <ul className="space-y-2">
            {[
              'Minimum 70% filament life remaining',
              '≤ 8,000 tube hours usage',
              'Burn-in test documentation (120+ hours)',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <div className="mt-3 text-xs text-navy/50">
            See our <Link to="/guides/uk-refurbishment-standard-iso-13485-explained" className="text-teal font-bold hover:underline">UK Refurbishment Protocol</Link> for full tube certification methodology.
          </div>
        </div>
      </div>
    </section>

    {/* Phase 3 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">03</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Africa-Specific Operating Requirements</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Electrical Infrastructure — Grid Volatility Protection</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-navy/40 mb-3">Mandatory Specifications</h4>
              <ul className="space-y-2">
                {[
                  '3-phase 415V ±10% (373–457V tolerance)',
                  '150kVA online voltage stabiliser',
                  '100kVA UPS (30+ minutes backup)',
                  'Type 1+2 surge protection (60kA rating)',
                  'Dedicated 400A breaker panel',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                    <Zap className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-clinical rounded-xl p-5">
              <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-3">Daily Power Cost Example</div>
              <div className="text-xs text-navy/60 mb-1">GE Optima CT660 — <Link to="/used-medical-equipment-nigeria-lagos-abuja" className="text-teal hover:underline">Lagos 2026 rates</Link></div>
              <div className="text-2xl font-black text-teal">$21.60/day</div>
              <div className="text-xs text-navy/40 mt-1">120 kWh × $0.18/kWh</div>
              <div className="text-sm font-bold text-navy/60 mt-2">Annual: ~$7,900</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Scan Room Design Standards — GE Optima CT660</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-navy/40 mb-3">Minimum Dimensions</h4>
              <div className="space-y-2">
                {[
                  { label: 'Control Room', value: '4m × 4m × 2.7m ceiling' },
                  { label: 'Scan Room', value: '5m × 4m × 2.7m' },
                  { label: 'Door Width', value: '≥ 110cm gantry clearance' },
                  { label: 'Lead Shielding', value: '2.5mm equivalency walls' },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between bg-clinical rounded-lg p-3">
                    <span className="text-xs font-black uppercase tracking-widest text-navy/40">{item.label}</span>
                    <span className="text-sm font-bold text-navy/70">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-navy/40 mb-3">HVAC Requirements</h4>
              <ul className="space-y-2">
                {[
                  'Scan Room: 18–22°C (±1°C), 40–60% RH',
                  'Positive pressure HEPA filtration (H14)',
                  'N+1 chiller redundancy',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                    <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Radiation Safety Compliance — Pre-Commissioning Verification</h3>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { label: 'Control Room Scatter', value: '< 1 μSv/hr', auth: 'KNRA / PPB' },
              { label: 'Viewing Glass', value: '< 0.1% @ 120kVp', auth: 'SAHPRA' },
              { label: 'Annual Worker Dose', value: '< 5 mSv', auth: 'All markets' },
            ].map(item => (
              <div key={item.label} className="bg-clinical rounded-xl p-4 text-center">
                <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-1">{item.label}</div>
                <div className="font-black text-teal text-sm">{item.value}</div>
                <div className="text-[10px] text-navy/40 mt-1 uppercase tracking-widest">{item.auth}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Phase 4 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">04</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Regulatory Import Framework — Country by Country</h2>
      </div>
      <div className="space-y-4">
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-lg font-black mb-1 flex items-center gap-2">
            🇰🇪 <Link to="/refurbished-medical-equipment-kenya-nairobi" className="hover:text-teal transition-colors">Kenya — PPB Type Approval</Link>
          </h3>
          <p className="text-xs text-navy/50 mb-4">Timeline: 45–60 days | Success Rate: 94% with verified suppliers</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'ISO 13485 Refurbisher Certificate',
              'CE Mark Declaration + FDA 510(k)',
              'Certificate of Refurbishment (OEM parts list)',
              'CTDIvol dose specifications (≤ 15 mGy head)',
              'PVoC Certificate (Kenya Bureau of Standards)',
              'Local Authorised Representative Agreement',
            ].map((item, i) => (
              <div key={item} className="flex items-start gap-2 text-sm text-navy/70 bg-clinical rounded-lg p-3">
                <span className="w-4 h-4 bg-teal text-white rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-navy/60">
            <Link to="/guides/definitive-guide-importing-medical-equipment-kenya-ppb" className="text-teal font-bold hover:underline flex items-center gap-1">
              Read the full Kenya PPB Import Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-lg font-black mb-3 flex items-center gap-2">
            🇳🇬 <Link to="/used-medical-equipment-nigeria-lagos-abuja" className="hover:text-teal transition-colors">Nigeria — NAFDAC Registration</Link>
          </h3>
          <ul className="space-y-2 mb-4">
            {[
              'Full Technical File (200+ pages)',
              'NAFDAC Registration Number (3–6 months)',
              'SONCAP Pre-Shipment Certificate',
              'Local Authorised Rep (Lagos-based)',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <div className="bg-teal/5 border border-teal/20 rounded-xl p-3 text-sm text-navy/70">
            <strong>Pro Tip:</strong> Select NAFDAC pre-registered systems for 90-day procurement timelines.
          </div>
        </div>

        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-lg font-black mb-3 flex items-center gap-2">
            🇿🇦 <Link to="/refurbished-medical-equipment-south-africa" className="hover:text-teal transition-colors">South Africa — SAHPRA Section 21</Link>
          </h3>
          <div className="inline-block bg-teal/10 text-teal text-xs font-black px-3 py-1 rounded mb-4 uppercase tracking-widest">Fast-Track: 30 Days</div>
          <ul className="space-y-2">
            {[
              'Clinical motivation letter (CMO signature)',
              'ISO 13485 + radiation specifications',
              'Facility shielding certification',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Phase 5 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">05</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Total Cost of Ownership — 5-Year Projection</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Capital Expenditure</h3>
          <div className="space-y-2">
            {[
              { label: 'Scanner (CIF Mombasa)', value: '$185,000' },
              { label: 'Stabiliser + UPS', value: '$28,000' },
              { label: 'Installation & Commissioning', value: '$15,000' },
              { label: 'PPB Registration', value: '$8,500' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between text-sm py-1 border-b border-navy/5 last:border-0">
                <span className="text-navy/60">{item.label}</span>
                <span className="font-bold">{item.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between pt-2">
              <span className="font-black text-sm uppercase tracking-widest text-teal">Total CAPEX</span>
              <span className="font-black text-teal">$236,500</span>
            </div>
          </div>
        </div>
        <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Annual Operating Expenditure</h3>
          <div className="space-y-2">
            {[
              { label: 'Service Contract', value: '$52,000' },
              { label: 'Power', value: '$7,900' },
              { label: 'Contrast Media (12k scans)', value: '$180,000' },
              { label: 'Technologist Salaries', value: '$75,000' },
              { label: 'Consumables', value: '$18,000' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between text-sm py-1 border-b border-navy/5 last:border-0">
                <span className="text-navy/60">{item.label}</span>
                <span className="font-bold">{item.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between pt-2">
              <span className="font-black text-sm uppercase tracking-widest text-navy/60">Total OPEX/yr</span>
              <span className="font-black text-navy/60">$332,900</span>
            </div>
          </div>
        </div>
        <div className="bg-navy text-white rounded-2xl p-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-teal mb-4">Revenue Potential</h3>
          <div className="space-y-3">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Scan Volume</div>
              <div className="text-xl font-black">12,500/year</div>
              <div className="text-xs text-white/50">34/day × 365</div>
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Average Tariff</div>
              <div className="text-xl font-black">$115</div>
              <div className="text-xs text-white/50">Trauma $80 / Oncology $160</div>
            </div>
            <div className="border-t border-white/10 pt-3">
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Gross Revenue</div>
              <div className="text-2xl font-black text-teal">$1,437,500</div>
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Year 1 Net Profit</div>
              <div className="text-2xl font-black">$1.1M</div>
            </div>
            <div className="bg-teal rounded-xl p-3 text-center">
              <div className="text-[10px] font-black uppercase tracking-widest text-white/70">5-Year ROI</div>
              <div className="text-2xl font-black">420%</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Phase 6 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">06</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Refurbishment Quality Verification Protocol</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">ISO 13485 Mandatory Checklist</h3>
          <ul className="space-y-2">
            {[
              'Complete system teardown (95% disassembly)',
              'OEM parts replacement (gantry bearings, HV capacitors)',
              '120-hour burn-in testing (max kV/mA)',
              'CTDIvol calibration (±5% tolerance)',
              'Image uniformity testing (≤ 10% variance)',
              'OEM-trained engineer sign-off',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 text-sm">
            <Link to="/guides/uk-refurbishment-standard-iso-13485-explained" className="text-teal font-bold hover:underline flex items-center gap-1">
              Read the full UK Refurbishment Protocol <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
          <h3 className="text-sm font-black uppercase tracking-widest text-red-500 mb-4">Red Flags — Immediate Rejection</h3>
          <ul className="space-y-3">
            {[
              '"Tested & Working" claims without documentation',
              'Tube usage > 12,000 hours',
              'Missing burn-in test reports',
              'No ISO 13485 certification',
              'Warranty < 18 months',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-red-800 font-medium">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Phase 7 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">07</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Top 5 Recommended 64-Slice Systems — 2026 Africa</h2>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-navy/10 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-navy text-white">
            <tr>
              {['Rank', 'Model', 'Rotation', 'Best For', 'Availability'].map(h => (
                <th key={h} className="p-4 text-[10px] font-black uppercase tracking-widest">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5 bg-white">
            {[
              { rank: '1', model: 'GE Optima CT660', rotation: '0.4s', best: 'All private hospitals', avail: 'Nairobi, Lagos', top: true },
              { rank: '2', model: 'Philips Ingenuity 64', rotation: '0.45s', best: 'Oncology focus', avail: 'Johannesburg', top: false },
              { rank: '3', model: 'Siemens Definition AS', rotation: '0.5s', best: 'Budget cardiac', avail: 'Lagos, Accra', top: false },
              { rank: '4', model: 'Toshiba Aquilion 64', rotation: '0.5s', best: 'Rural hospitals', avail: 'Kenya, Uganda', top: false },
              { rank: '5', model: 'GE BrightSpeed Elite', rotation: '0.6s', best: 'Startup clinics', avail: 'All markets', top: false },
            ].map(row => (
              <tr key={row.model} className={`hover:bg-clinical transition-colors ${row.top ? 'bg-teal/5' : ''}`}>
                <td className={`p-4 font-black text-lg ${row.top ? 'text-teal' : 'text-navy/40'}`}>{row.rank}</td>
                <td className="p-4">
                  <Link to="/refurbished-ct-scanners-africa" className={`font-black hover:underline ${row.top ? 'text-teal' : 'text-navy'}`}>{row.model}</Link>
                  {row.top && <span className="ml-2 text-[9px] font-black bg-teal text-white px-1.5 py-0.5 rounded uppercase tracking-widest">Top Pick</span>}
                </td>
                <td className={`p-4 font-bold ${row.top ? 'text-teal' : 'text-navy/60'}`}>{row.rotation}</td>
                <td className="p-4 text-navy/60 text-xs">{row.best}</td>
                <td className="p-4 text-navy/60 text-xs">{row.avail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Phase 8 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">08</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">ROI Optimisation Strategies</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Throughput Maximisation</h3>
          <ul className="space-y-3">
            {[
              'Gantry cooldown automation (12-min cycles)',
              'Protocol standardisation (reduce setup time 30%)',
              'Double technician staffing at peak hours',
              'Extended hours operation (7am – 11pm)',
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
                <span className="w-5 h-5 bg-teal text-white rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Service Contract Mandatory Clauses</h3>
          <ul className="space-y-2">
            {[
              '4-hour response SLA (major cities)',
              'Unlimited remote diagnostics',
              'Annual preventive maintenance (4×/year)',
              'Loaner tube during replacements',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Phase 9 */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">09</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Procurement Action Sequence — 30-Day Fast Track</h2>
      </div>
      <div className="space-y-3">
        {[
          { week: 'Week 1', task: 'Data Room review + technical shortlist', link: null },
          { week: 'Week 2', task: 'UK warehouse inspection (virtual or physical)', link: null },
          { week: 'Week 3', task: 'Letter of Intent + 30% deposit', link: '/request-verified-pricing-medical-equipment' },
          { week: 'Weeks 4–8', task: 'Manufacturing + SONCAP / PVoC certification', link: null },
          { week: 'Weeks 9–10', task: 'Shipping + port clearance', link: null },
          { week: 'Week 11', task: 'Installation + PPB commissioning', link: '/guides/definitive-guide-importing-medical-equipment-kenya-ppb' },
        ].map(item => (
          <div key={item.week} className="flex items-center gap-4 bg-white border border-navy/10 rounded-xl p-4 shadow-sm">
            <div className="text-[10px] font-black uppercase tracking-widest text-teal w-20 flex-shrink-0">{item.week}</div>
            <div className="text-sm text-navy/70 flex-1">{item.task}</div>
            {item.link && (
              <Link to={item.link} className="text-teal text-xs font-bold hover:underline flex items-center gap-1 flex-shrink-0">
                Guide <ArrowRight className="w-3 h-3" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <div className="bg-navy text-white rounded-3xl p-10">
      <h2 className="text-2xl font-black uppercase tracking-tight mb-2 text-center">Start Your Procurement Today</h2>
      <p className="text-white/60 text-sm text-center mb-8 max-w-xl mx-auto">Access verified Data Room documentation — tube logs, burn-in reports, and country-specific regulatory checklists — for the GE Optima CT660 and other listed systems.</p>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Link to="/request-verified-pricing-medical-equipment" className="bg-teal text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-teal/90 transition-all text-center">
          Request Verified Data Room →
        </Link>
        <Link to="/refurbished-medical-equipment-catalogue-africa" className="bg-white/10 text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-all border border-white/20 text-center">
          Browse CT Scanner Inventory
        </Link>
        <Link to="/request-verified-pricing-medical-equipment" className="bg-white/10 text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-all border border-white/20 text-center">
          Schedule Engineering Consultation
        </Link>
      </div>
      <div className="border-t border-white/10 pt-6">
        <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Essential Technical Resources</div>
        <div className="flex flex-wrap gap-4">
          <Link to="/guides/definitive-guide-importing-medical-equipment-kenya-ppb" className="text-teal text-sm font-bold hover:underline">Kenya PPB Import Guide</Link>
          <Link to="/guides/ge-optima-ct660-vs-siemens-somatom-64-slice-comparison" className="text-teal text-sm font-bold hover:underline">GE vs Siemens Comparison</Link>
          <Link to="/guides/uk-refurbishment-standard-iso-13485-explained" className="text-teal text-sm font-bold hover:underline">UK Refurbishment Standard</Link>
          <Link to="/medical-equipment-guides-market-news-africa" className="text-teal text-sm font-bold hover:underline">Full Insights Directory</Link>
        </div>
      </div>
    </div>

  </div>
);

// ─── Article: MRI Field Strength Guide ───────────────────────────────────────

const MRIGuideContent: React.FC = () => (
  <div className="space-y-16">

    {/* Category Snapshot */}
    <section>
      <div className="overflow-x-auto rounded-2xl border border-navy/10 shadow-sm mb-6">
        <table className="w-full text-sm text-left">
          <thead className="bg-navy text-white">
            <tr>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest">Category</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest">Detail</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5 bg-white">
            {[
              { cat: 'Equipment Type', detail: 'Refurbished MRI Scanners' },
              { cat: 'Field Strength', detail: '1.5T and 3T systems' },
              { cat: 'Brands Listed', detail: 'Siemens Healthineers, GE Healthcare, Philips Healthcare, Canon Medical / Toshiba' },
              { cat: 'Refurbishment Standards', detail: 'ISO 13485, OEM Refurb, FDA Refurb, CE Marked workflows' },
              { cat: 'Warranty Range', detail: '18 to 24 months' },
              { cat: 'Support Scope', detail: 'Full turnkey installation, standard technical setup, training, or remote engineering support' },
              { cat: 'Regulatory Coverage', detail: 'PPB Kenya, NAFDAC Nigeria, SAHPRA South Africa, Ghana FDA, Rwanda FDA' },
            ].map(row => (
              <tr key={row.cat} className="hover:bg-clinical transition-colors">
                <td className="p-4 font-black text-navy/70 text-xs uppercase tracking-widest">{row.cat}</td>
                <td className="p-4 text-navy/60">{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { value: '1.5T–3T', label: 'Field Strength Range' },
          { value: '18–24', label: 'Month Warranty' },
          { value: '4', label: 'Major OEM Brands' },
          { value: '5', label: 'African Markets' },
        ].map(item => (
          <div key={item.label} className="bg-navy text-white rounded-2xl p-5 text-center">
            <div className="text-2xl font-black text-teal mb-1">{item.value}</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/50">{item.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Which configuration */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">01</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Which MRI Configuration Fits Your Facility?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: '1.5T MRI',
            tag: 'Most Common',
            tagColor: 'teal',
            highlight: true,
            desc: 'Best suited to private hospitals and diagnostic centres that need strong all-round MRI capability across neuro, spine, MSK, abdomen, and general radiology. The most practical starting point for broad clinical demand.',
            models: ['Siemens MAGNETOM Aera', 'Siemens MAGNETOM Essenza', 'Philips Multiva 1.5T'],
          },
          {
            title: 'Wide Bore MRI',
            tag: 'Patient Comfort',
            tagColor: 'navy',
            highlight: false,
            desc: 'Wide-bore platforms are ideal for facilities prioritising patient comfort, larger patients, and reduced claustrophobia without compromising diagnostic utility.',
            models: ['GE Optima MR450w', 'Toshiba Vantage Titan 1.5T'],
          },
          {
            title: '3T MRI',
            tag: 'Specialist Imaging',
            tagColor: 'navy',
            highlight: false,
            desc: 'Best for higher-end centres requiring stronger image resolution and advanced applications in neuro, cardiac, vascular, and academic or specialist referral environments.',
            models: ['GE Discovery MR750 3T'],
          },
        ].map(config => (
          <div key={config.title} className={`rounded-2xl p-8 shadow-sm border ${config.highlight ? 'bg-teal text-white border-teal' : 'bg-white border-navy/10'}`}>
            <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded mb-3 inline-block ${config.highlight ? 'bg-white/20 text-white' : 'bg-teal/10 text-teal'}`}>
              {config.tag}
            </span>
            <h3 className={`text-lg font-black mb-3 ${config.highlight ? 'text-white' : 'text-navy'}`}>{config.title}</h3>
            <p className={`text-sm leading-relaxed mb-4 ${config.highlight ? 'text-white/80' : 'text-navy/60'}`}>{config.desc}</p>
            <div className={`text-[10px] font-black uppercase tracking-widest mb-2 ${config.highlight ? 'text-white/50' : 'text-navy/40'}`}>Example Models</div>
            <ul className="space-y-1">
              {config.models.map(m => (
                <li key={m} className={`text-xs font-bold flex items-center gap-1 ${config.highlight ? 'text-white/80' : 'text-navy/60'}`}>
                  <span className={`w-1 h-1 rounded-full flex-shrink-0 ${config.highlight ? 'bg-white/50' : 'bg-teal'}`} /> {m}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* Featured brands */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">02</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Featured MRI Brands & Models</h2>
      </div>
      <div className="space-y-4">
        {[
          {
            brand: 'Siemens Healthineers',
            models: 'MAGNETOM Aera · MAGNETOM Essenza',
            desc: 'Reliable 1.5T performance for high-demand clinical settings. The Aera offers a 70cm wide bore and Tim+Dot technology for workflow efficiency.',
            link: '/used-mri-machines-africa',
          },
          {
            brand: 'GE Healthcare',
            models: 'Optima MR450w · Discovery MR750 3T',
            desc: 'Optima MR450w delivers wide-bore 1.5T imaging; Discovery MR750 3T serves higher-end specialist centres requiring advanced neuro and cardiac imaging.',
            link: '/used-mri-machines-africa',
          },
          {
            brand: 'Philips Healthcare',
            models: 'Multiva 1.5T',
            desc: 'Cost-effective routine MRI for growing radiology departments, with strong SNR performance and a straightforward installation footprint.',
            link: '/used-mri-machines-africa',
          },
          {
            brand: 'Canon Medical / Toshiba',
            models: 'Vantage Titan 1.5T',
            desc: 'Wide-bore comfort and quieter scanning environments — well suited to paediatric and claustrophobic patients without sacrificing image quality.',
            link: '/used-mri-machines-africa',
          },
        ].map(b => (
          <div key={b.brand} className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-start gap-4">
            <div className="md:w-64 flex-shrink-0">
              <div className="font-black text-navy mb-1">{b.brand}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-teal">{b.models}</div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-navy/60 leading-relaxed">{b.desc}</p>
            </div>
            <Link to={b.link} className="text-teal font-bold text-xs flex items-center gap-1 hover:underline flex-shrink-0 mt-1">
              View Listings <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        ))}
      </div>
    </section>

    {/* Refurbishment & Compliance */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">03</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Refurbishment, Warranty & Compliance</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Refurbishment Pathways</h3>
          <ul className="space-y-3">
            {[
              { standard: 'ISO 13485', desc: 'Full OEM restoration protocol with documented teardown and burn-in' },
              { standard: 'OEM Refurb', desc: 'Manufacturer-led reconditioning with original parts' },
              { standard: 'FDA Refurb', desc: 'US FDA-registered refurbisher workflow' },
              { standard: 'CE Marked', desc: 'European conformity for import into CE-accepting markets' },
            ].map(item => (
              <li key={item.standard} className="flex items-start gap-3">
                <span className="bg-teal/10 text-teal text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest flex-shrink-0 mt-0.5">{item.standard}</span>
                <span className="text-sm text-navy/60 leading-relaxed">{item.desc}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-sm">
            <Link to="/guides/uk-refurbishment-standard-iso-13485-explained" className="text-teal font-bold hover:underline flex items-center gap-1">
              Read the full UK Refurbishment Standard <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-navy/40 mb-4">Country Compliance Coverage</h3>
          <div className="space-y-3">
            {[
              { flag: '🇰🇪', country: 'Kenya', body: 'PPB — Pharmacy & Poisons Board', path: '/refurbished-medical-equipment-kenya-nairobi' },
              { flag: '🇳🇬', country: 'Nigeria', body: 'NAFDAC Medical Devices Directorate', path: '/used-medical-equipment-nigeria-lagos-abuja' },
              { flag: '🇿🇦', country: 'South Africa', body: 'SAHPRA Section 21 Authorization', path: '/refurbished-medical-equipment-south-africa' },
              { flag: '🇬🇭', country: 'Ghana', body: 'Ghana FDA', path: '/used-medical-equipment-ghana-accra' },
              { flag: '🇷🇼', country: 'Rwanda', body: 'Rwanda FDA', path: '/used-medical-equipment-rwanda-kigali' },
            ].map(item => (
              <Link key={item.country} to={item.path} className="flex items-center gap-3 p-3 rounded-xl bg-clinical hover:bg-teal/5 transition-colors group">
                <span className="text-xl">{item.flag}</span>
                <div>
                  <div className="font-black text-sm group-hover:text-teal transition-colors">{item.country}</div>
                  <div className="text-[10px] text-navy/40 uppercase tracking-widest">{item.body}</div>
                </div>
                <ArrowRight className="w-3 h-3 text-teal ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Why refurbished */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">04</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">Why Buyers Choose Refurbished MRI</h2>
      </div>
      <div className="bg-navy/5 border-l-4 border-teal rounded-r-2xl p-6 mb-6 text-sm text-navy/70 leading-relaxed">
        Refurbished <Link to="/used-mri-machines-africa" className="text-teal font-bold hover:underline">MRI scanners</Link> give hospitals and imaging centres access to advanced diagnostic capability without the full capital requirement of new systems. This is particularly valuable where phased expansion, specialist service launch, or radiology ROI needs to be managed carefully.
      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Capital Cost Saving', value: '45–55%', sub: 'vs new equivalent' },
          { label: 'Warranty Coverage', value: '18–24 mo', sub: 'parts & labour' },
          { label: 'Deployment Timeline', value: '8–12 wks', sub: 'from order to commissioning' },
        ].map(item => (
          <div key={item.label} className="bg-white border border-navy/10 rounded-2xl p-6 text-center shadow-sm">
            <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-2">{item.label}</div>
            <div className="text-3xl font-black text-teal mb-1">{item.value}</div>
            <div className="text-xs text-navy/40 uppercase tracking-widest">{item.sub}</div>
          </div>
        ))}
      </div>
      <div className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm text-sm text-navy/60 leading-relaxed">
        The best procurement outcomes come from matching <strong>field strength</strong>, <strong>bore size</strong>, <strong>patient profile</strong>, <strong>site readiness</strong>, <strong>local compliance pathway</strong>, and <strong>engineering support</strong> before final supplier selection.
      </div>
    </section>

    {/* FAQs */}
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal text-white rounded-xl flex items-center justify-center font-black text-sm">05</div>
        <h2 className="text-2xl font-black uppercase tracking-tight">MRI Buyer FAQs</h2>
      </div>
      <div className="space-y-4">
        {[
          {
            q: 'Should I choose 1.5T or 3T MRI?',
            a: 'A 1.5T system suits most routine radiology departments across neuro, spine, MSK, and abdomen. 3T MRI is more appropriate for higher-end specialist imaging in neuro, cardiac, vascular, and academic settings — and carries higher infrastructure costs.',
          },
          {
            q: 'Do MRI listings include installation and support?',
            a: 'Yes. Listings include support options such as full turnkey installation, standard technical setup, training, or remote engineering support depending on supplier and model.',
          },
          {
            q: 'What brands are represented in the MRI inventory?',
            a: 'Current listings include Siemens Healthineers, GE Healthcare, Philips Healthcare, and Canon Medical / Toshiba platforms across 1.5T and 3T configurations.',
          },
          {
            q: 'Can these MRI systems be imported into African markets?',
            a: 'Yes. Each listing maps to local compliance pathways including PPB Kenya, NAFDAC Nigeria, SAHPRA South Africa, Ghana FDA, and Rwanda FDA — helping buyers assess import readiness earlier in procurement.',
          },
        ].map(item => (
          <div key={item.q} className="bg-white border border-navy/10 rounded-2xl p-6 shadow-sm">
            <h4 className="font-black text-sm mb-2 text-navy">{item.q}</h4>
            <p className="text-sm text-navy/60 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <div className="bg-navy text-white rounded-3xl p-10">
      <h2 className="text-2xl font-black uppercase tracking-tight mb-2 text-center">Request Verified Data Room & Pricing</h2>
      <p className="text-white/60 text-sm text-center mb-8 max-w-xl mx-auto">
        Request MRI specifications, refurbishment documentation, warranty terms, siting requirements, and verified supplier introductions for projects across Africa.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-xl mx-auto">
        <Link to="/request-verified-pricing-medical-equipment" className="bg-teal text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-teal/90 transition-all text-center">
          Request Data Room & Pricing →
        </Link>
        <Link to="/used-mri-machines-africa" className="bg-white/10 text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-all border border-white/20 text-center">
          Browse MRI Listings
        </Link>
      </div>
      <div className="border-t border-white/10 pt-6">
        <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Continue Your Research</div>
        <div className="flex flex-wrap gap-4">
          <Link to="/refurbished-ct-scanners-africa" className="text-teal text-sm font-bold hover:underline">Browse CT Scanners</Link>
          <Link to="/used-digital-x-ray-systems-africa" className="text-teal text-sm font-bold hover:underline">Browse X-Ray Systems</Link>
          <Link to="/refurbished-medical-equipment-catalogue-africa" className="text-teal text-sm font-bold hover:underline">Full Equipment Catalogue</Link>
          <Link to="/guides/ct-scanner-procurement-framework-africa-2026" className="text-teal text-sm font-bold hover:underline">CT Procurement Framework</Link>
          <Link to="/medical-equipment-guides-market-news-africa" className="text-teal text-sm font-bold hover:underline">All Insights & Guides</Link>
        </div>
      </div>
    </div>

  </div>
);

// ─── Content Map ─────────────────────────────────────────────────────────────

const articleContent: Record<string, React.ReactNode> = {
  'definitive-guide-importing-medical-equipment-kenya-ppb': <CTFrameworkContent />,
  'ge-optima-ct660-vs-siemens-somatom-64-slice-comparison': <GEvsSimiensContent />,
  'uk-refurbishment-standard-iso-13485-explained': <UKRefurbContent />,
  'ct-scanner-procurement-framework-africa-2026': <CTProcurementContent />,
  'mri-field-strength-1-5t-vs-3t-guide-africa': <MRIGuideContent />,
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <Link to="/medical-equipment-guides-market-news-africa" className="text-teal font-bold hover:underline">
            Back to Insights & Guides
          </Link>
        </div>
      </Layout>
    );
  }

  const related = blogPosts.filter(p => p.id !== post.id).slice(0, 3);
  const content = articleContent[post.slug];

  return (
    <Layout>
      <SEO
        title={`${post.title} | MedicalEquipment.Africa`}
        description={post.excerpt}
        canonical={`/guides/${post.slug}`}
        ogType="article"
        ogImage={post.image}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "datePublished": post.date,
            "author": { "@type": "Organization", "name": "MedicalEquipment.Africa", "url": "https://medicalequipment.africa" },
            "publisher": { "@type": "Organization", "name": "MedicalEquipment.Africa", "url": "https://medicalequipment.africa" },
            "url": `https://medicalequipment.africa/guides/${post.slug}`,
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://medicalequipment.africa/guides/${post.slug}` }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" },
              { "@type": "ListItem", "position": 2, "name": "Insights & Guides", "item": "https://medicalequipment.africa/medical-equipment-guides-market-news-africa" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://medicalequipment.africa/guides/${post.slug}` }
            ]
          }
        ]}
      />

      {/* Breadcrumbs */}
      <div className="bg-clinical py-4 border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-navy/40">
          <Link to="/" className="hover:text-teal">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/medical-equipment-guides-market-news-africa" className="hover:text-teal">Insights & Guides</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy/80 truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="bg-teal/20 text-teal text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</div>
            <div className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 mb-12">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-72 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        {content ?? (
          <p className="text-xl text-navy/40 italic text-center py-20">Full article content coming soon.</p>
        )}
      </div>

      {/* Related Articles */}
      <section className="py-20 bg-clinical border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(item => (
              <Link
                key={item.id}
                to={`/guides/${item.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-navy/5 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-teal/10 text-teal text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest mb-3 inline-block">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-sm leading-tight mb-3 group-hover:text-teal transition-colors">{item.title}</h4>
                  <div className="text-teal font-bold text-xs flex items-center gap-1">
                    {item.readLabel} <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
