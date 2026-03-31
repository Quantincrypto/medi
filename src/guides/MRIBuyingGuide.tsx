import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ShieldCheck, Zap, Wrench, DollarSign } from 'lucide-react';

export const MRIBuyingGuide: React.FC = () => (
  <div className="space-y-12">

    {/* Intro */}
    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        An MRI machine is the single largest capital equipment purchase most African hospitals will ever make. A well specified refurbished MRI system can serve your facility for 10–15 years. A poorly sourced one can leave you with a machine that fails customs, never passes KNRA or NAFDAC inspection, or breaks down within 18 months of installation.
      </p>
      <p className="text-navy/70 leading-relaxed mb-4">
        This guide is written for hospital procurement managers and biomedical engineers across Africa. It covers every stage of the buying process — from choosing the right field strength to negotiating a maintenance contract after installation.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link to="/used-mri-machines-africa" className="text-xs font-bold text-teal bg-teal/10 px-3 py-1.5 rounded-full hover:bg-teal/20 transition-colors">Browse MRI listings</Link>
        <Link to="/mri-machine-price-kenya" className="text-xs font-bold text-teal bg-teal/10 px-3 py-1.5 rounded-full hover:bg-teal/20 transition-colors">MRI prices in Kenya</Link>
        <Link to="/guides/mri-field-strength-1-5t-vs-3t-guide-africa" className="text-xs font-bold text-teal bg-teal/10 px-3 py-1.5 rounded-full hover:bg-teal/20 transition-colors">1.5T vs 3T comparison</Link>
        <Link to="/guides/sahpra-section-21-medical-equipment-south-africa" className="text-xs font-bold text-teal bg-teal/10 px-3 py-1.5 rounded-full hover:bg-teal/20 transition-colors">SAHPRA Section 21 guide</Link>
        <Link to="/guides/import-medical-equipment-nigeria-nafdac-soncap" className="text-xs font-bold text-teal bg-teal/10 px-3 py-1.5 rounded-full hover:bg-teal/20 transition-colors">Nigeria NAFDAC import guide</Link>
      </div>
    </section>

    {/* Section 1: Field Strength */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step 1 — Choose the Right Field Strength</h2>
      <p className="text-navy/70 leading-relaxed mb-6">
        Field strength is the most fundamental decision. It determines clinical capability, infrastructure requirements, and total cost of ownership. Most African private hospitals and diagnostic centres purchase 1.5T systems. Here is why — and when 3T or Open MRI might be the right choice instead. For a deeper technical comparison, see our <Link to="/guides/mri-field-strength-1-5t-vs-3t-guide-africa" className="text-teal font-bold hover:underline">1.5T vs 3T guide for Africa</Link>.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            type: 'Open / Low-Field (0.3T–0.7T)',
            priceRange: '$25,000–$70,000',
            bestFor: 'Claustrophobic patients, orthopaedic imaging, rural district hospitals',
            pros: 'No cryogen required (permanent magnet). Lower running costs. Can be installed in standard rooms without full RF shielding in some configurations.',
            cons: 'Lower image resolution. Not suitable for neurological, cardiac or oncology imaging. Limited software upgrade path.',
            verdict: 'Niche use only',
          },
          {
            type: '1.5 Tesla (1.5T)',
            priceRange: '$80,000–$280,000',
            bestFor: 'General radiology, neurology, musculoskeletal, OB/GYN — suitable for 95% of clinical indications',
            pros: 'Gold standard for private practice in Africa. Wide parts availability. Proven reliability. Comprehensive coil libraries. Software upgradeable.',
            cons: 'Requires superconducting magnet with liquid helium cryogen system. Full RF shielded suite required.',
            verdict: 'Recommended for most facilities',
          },
          {
            type: '3 Tesla (3T)',
            priceRange: '$250,000–$550,000',
            bestFor: 'Teaching hospitals, neuro centres, advanced research, high volume diagnostic imaging',
            pros: 'Superior soft tissue resolution. Advanced functional and spectroscopic imaging. Higher revenue per scan.',
            cons: 'Higher SAR (patient heating), more artefacts, greater infrastructure cost, and stricter power requirements (typically 400V 3-phase, 150kVA). Fewer service engineers in Africa.',
            verdict: 'For high volume tertiary centres only',
          },
        ].map(sys => (
          <div key={sys.type} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="text-xs font-bold uppercase tracking-widest text-teal mb-2">{sys.priceRange}</div>
            <div className="font-black text-navy mb-1">{sys.type}</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-navy/40 mb-3">{sys.verdict}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-1">Best for</div>
            <p className="text-sm text-navy/60 mb-3">{sys.bestFor}</p>
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-1">Advantages</div>
            <p className="text-sm text-navy/60 mb-3">{sys.pros}</p>
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-1">Limitations</div>
            <p className="text-sm text-navy/60">{sys.cons}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Section 2: Refurbishment grades */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step 2 — Understand What "Refurbished" Actually Means for MRI</h2>
      <p className="text-navy/70 leading-relaxed mb-6">
        MRI refurbishment is more complex than CT or ultrasound. A credible refurbisher must address the magnet, gradient system, RF system, coils, and patient table — not just clean the bore and apply new paint. The following grading framework helps procurement teams evaluate what they are actually buying.
      </p>
      <div className="bg-white border border-navy/5 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Grade</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">What it covers</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Warranty</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Suitable for?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              [
                'Grade A — OEM Standard Refurb',
                'Full system inspection. Gradient amplifier rebuild or replacement. RF coil full test and replacement where needed. Cryogen refill to 100%. Software updated to latest licensed version. Full QA phantom study report.',
                '18–24 months (parts & labour)',
                'All clinical settings. Required for PPB, NAFDAC and SAHPRA compliance.',
              ],
              [
                'Grade B — Tested and Working',
                'Functional scan tests passed. Cosmetic work. Limited coil testing. Helium at 70%+ but not topped up. No gradient rebuild.',
                '6–12 months (usually labour only)',
                'Low volume facilities with strong in-house biomedical engineering team. Higher risk of mid-term failure.',
              ],
              [
                'Grade C — "Deinstall and Crate"',
                'System removed from previous site, packed, and shipped. No functional testing. No component servicing.',
                'None',
                'Not recommended for clinical use in Africa.',
              ],
            ].map(([grade, covers, warranty, suitable]) => (
              <tr key={grade} className="hover:bg-clinical/30">
                <td className="p-4 font-medium text-navy align-top">{grade}</td>
                <td className="p-4 text-navy/60 align-top">{covers}</td>
                <td className="p-4 text-navy/70 font-medium align-top">{warranty}</td>
                <td className="p-4 text-navy/70 align-top">{suitable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Section 3: Key components to inspect */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-2">Step 3 — Key Components to Evaluate Before Buying</h2>
      <p className="text-navy/70 leading-relaxed mb-6">
        Request a written technical report on each of these components before issuing a purchase order. Any supplier unwilling to provide this documentation should be disqualified.
      </p>

      <div className="space-y-4">
        {[
          {
            component: 'Superconducting Magnet & Helium Level',
            icon: <Zap className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />,
            detail: 'Helium level must be at or above 70% at point of sale (ideally refilled to 100% before shipping). A quench or low helium event can cost $15,000–$30,000 to recover. Ask for the last documented helium level and date.',
            redFlag: 'Red flag: seller cannot provide magnet log or helium level records.',
          },
          {
            component: 'Gradient System (Amplifiers & Coils)',
            icon: <Zap className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />,
            detail: 'Gradient amplifiers are high failure components in tropical climates. Request gradient performance test results (slew rate, linearity). Rebuilt or new amplifiers are preferable to untested originals.',
            redFlag: 'Red flag: no gradient performance documentation, or system is >12 years old with original amplifiers.',
          },
          {
            component: 'RF Coils',
            icon: <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />,
            detail: 'Coils degrade with use and are expensive to replace ($3,000–$18,000 per coil). Request a full SNR (signal to noise ratio) test report for every coil included in the package. Confirm coil compatibility with your software version.',
            redFlag: 'Red flag: coils listed as "available" rather than confirmed and tested.',
          },
          {
            component: 'Magnet Age & Quench History',
            icon: <ShieldCheck className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />,
            detail: 'Magnets manufactured before 2010 carry higher risk of coil degradation and limited OEM support. Ask for the magnet serial number and year of manufacture. Confirm whether the magnet has ever quenched and review the incident report if it has.',
            redFlag: 'Red flag: seller refuses to provide magnet serial number or quench history.',
          },
          {
            component: 'Software Version & Upgrade Rights',
            icon: <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />,
            detail: 'Confirm the current software version and whether it can be upgraded. Older software versions may not support current clinical protocols (e.g., DWI for stroke, MRCP for biliary imaging). Software upgrade licences can cost $20,000–$60,000.',
            redFlag: 'Red flag: system is on end of life software with no upgrade path.',
          },
          {
            component: 'Chiller / Cooling System',
            icon: <Wrench className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />,
            detail: 'MRI gradient systems generate significant heat. Africa\'s climate makes cooling reliability critical. Request documentation on the chiller age, last service date, and whether it has been tested at ambient temperatures above 35°C.',
            redFlag: 'Red flag: chiller is original equipment on a system >8 years old with no service history.',
          },
          {
            component: 'Patient Table & Bore Dimensions',
            icon: <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />,
            detail: 'Confirm table weight limit (minimum 200kg recommended) and bore diameter. Wide bore (70cm+) systems significantly improve patient compliance and are preferred for obese or claustrophobic patients. Standard bore is 60cm.',
            redFlag: 'Red flag: bore diameter not specified in the sales document.',
          },
        ].map(({ component, icon, detail, redFlag }) => (
          <div key={component} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              {icon}
              <span className="font-bold text-navy text-sm">{component}</span>
            </div>
            <p className="text-sm text-navy/60 mb-2 leading-relaxed">{detail}</p>
            <div className="flex items-start gap-2 bg-gold/10 border border-gold/20 rounded-xl px-3 py-2">
              <AlertTriangle className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-xs text-navy/70">{redFlag}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Section 4: Site requirements */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-2">Step 4 — Site Preparation Requirements</h2>
      <p className="text-navy/70 leading-relaxed mb-6">
        MRI site preparation is uniquely demanding. Failure to meet site requirements before equipment arrival is one of the most common and costly mistakes in African MRI procurement. Address these before signing a purchase order.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            req: 'RF Shielding (Faraday Cage)',
            detail: 'Required for all 1.5T and 3T systems. A certified RF shielding contractor must build a copper or aluminium cage around the magnet room. Typical cost: $30,000–$80,000 depending on room size and contractor.',
          },
          {
            req: 'Magnetic Field Zone Planning',
            detail: 'The 5 Gauss line must be contained within the facility. Zone mapping by a medical physicist is mandatory. No ferromagnetic materials, pacemaker patients, or unscreened staff within Zone III/IV.',
          },
          {
            req: 'Power Supply',
            detail: '1.5T systems typically require 380–415V 3-phase supply, 100–120kVA. A UPS or AVR (automatic voltage regulator) is strongly recommended given grid instability across African markets. Voltage spikes are a leading cause of gradient amplifier failures.',
          },
          {
            req: 'Air Conditioning',
            detail: 'Magnet room must be maintained at 18–22°C with humidity control. Two independent AC units are recommended — one as a backup. Failure of AC in a tropical climate can trigger a quench within hours.',
          },
          {
            req: 'Quench Pipe',
            detail: 'A quench pipe (helium vent) must exit the magnet room through the roof or external wall. In a quench event, 1,500–2,000 litres of helium gas are released rapidly. Without a properly installed quench pipe, this creates a life threatening asphyxiation risk.',
          },
          {
            req: 'Structural Load',
            detail: 'A 1.5T MRI system weighs 4,000–8,000 kg. The floor must be reinforced to support this load. An engineer\'s structural report is required before installation. Basement or ground floor installation is preferred.',
          },
          {
            req: 'Door Width & Delivery Access',
            detail: 'The magnet bore is typically 170–210cm in diameter. Confirm that access corridors, door frames, and lifts can accommodate delivery. Some installations require temporary wall removal.',
          },
          {
            req: 'Helium Delivery Access',
            detail: 'Ongoing helium top-ups require delivery truck access. Confirm helium is available from a reliable supplier in your country. Kenya, Nigeria, South Africa, and Ghana all have helium supply chains; confirm availability before purchase in smaller markets.',
          },
        ].map(({ req, detail }) => (
          <div key={req} className="flex gap-3 bg-white border border-navy/5 rounded-xl p-4 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-navy text-sm">{req}</div>
              <div className="text-xs text-navy/50 mt-0.5 leading-relaxed">{detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Section 5: Regulatory compliance */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-2">Step 5 — Regulatory Compliance by Country</h2>
      <p className="text-navy/70 leading-relaxed mb-6">
        MRI systems are classified as high risk medical devices in all major African markets. Import and operation without proper regulatory clearance can result in equipment seizure, heavy fines, or permanent revocation of your facility's operating licence. Start regulatory paperwork at least 3 months before your target delivery date.
      </p>

      <div className="space-y-4">
        {[
          {
            flag: '🇰🇪',
            country: 'Kenya',
            body: 'PPB + KNRA',
            path: '/refurbished-medical-equipment-kenya-nairobi',
            timeline: '6–10 weeks',
            requirements: [
              'PPB Type Approval Certificate — requires ISO 13485 certificate from refurbisher and CE/FDA marking',
              'KNRA (Kenya Nuclear Regulatory Authority) precommissioning radiation survey — mandatory even though MRI does not use ionising radiation (KNRA regulates all medical imaging)',
              'Facility radiation protection plan and signage',
              'Medical physicist sign-off on 5 Gauss line containment',
            ],
            note: 'The PPB Type Approval process typically takes 4–8 weeks. KNRA inspection is booked separately after installation. Your supplier should provide a document checklist aligned with current PPB requirements.',
          },
          {
            flag: '🇳🇬',
            country: 'Nigeria',
            body: 'NAFDAC',
            path: '/used-medical-equipment-nigeria-lagos-abuja',
            timeline: '3–6 months',
            requirements: [
              'NAFDAC Medical Devices Directorate product registration (200+ page technical file)',
              'Local Authorised Representative appointment',
              'SONCAP preshipment inspection certificate — mandatory before export from origin country',
              'Letter of Authorisation from ISO 13485 refurbisher',
            ],
            note: 'Nigeria\'s NAFDAC registration process is the longest in the region. Plan a minimum of 3 months. Systems labelled "used" (as opposed to "certified refurbished") are subject to automatic rejection at Lagos port under Nigeria\'s e-waste regulations.',
          },
          {
            flag: '🇿🇦',
            country: 'South Africa',
            body: 'SAHPRA',
            path: '/refurbished-medical-equipment-south-africa',
            timeline: '8–16 weeks',
            requirements: [
              'SAHPRA Section 21 Authorisation for unregistered devices (or full registration for high volume suppliers)',
              'CE marking or FDA 510(k) clearance required',
              'Clinical motivation letter from responsible radiologist',
              'Lead shielding certification (minimum 2.5mm equivalency for MRI room)',
            ],
            note: 'South Africa has the most sophisticated regulatory environment in Africa. SAHPRA Section 21 is the fastest pathway for hospital specific procurement. Full device registration can take 18–24 months.',
          },
          {
            flag: '🇬🇭',
            country: 'Ghana',
            body: 'Ghana FDA',
            path: '/used-medical-equipment-ghana-accra',
            timeline: '4–8 weeks',
            requirements: [
              'Ghana FDA medical device registration — ISO 13485 supplier certification strongly preferred',
              'CE or FDA marking required as part of registration package',
              'Radiation Protection Board of Ghana (RPBG) installation approval',
            ],
            note: 'Ghana\'s regulatory process is manageable but requires early engagement with the Ghana FDA Medical Devices Division. A local registered agent simplifies the process considerably.',
          },
          {
            flag: '🇹🇿',
            country: 'Tanzania',
            body: 'TFDA',
            path: '/refurbished-medical-equipment-catalogue-africa',
            timeline: '6–12 weeks',
            requirements: [
              'Tanzania Food and Drugs Authority (TFDA) device registration',
              'ISO 13485 certificate from supplier',
              'Tanzania Atomic Energy Commission (TAEC) installation approval',
            ],
            note: 'TAEC approval for MRI installation adds to the regulatory timeline. Plan 3 months minimum from purchase order to legal operation.',
          },
        ].map(({ flag, country, body, path, timeline, requirements, note }) => (
          <div key={country} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{flag}</span>
              <div>
                <Link to={path} className="font-black text-navy hover:text-teal transition-colors">{country}</Link>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-bold text-teal bg-teal/10 px-2 py-0.5 rounded-full">{body}</span>
                  <span className="text-xs font-bold text-navy/40">Typical timeline: {timeline}</span>
                </div>
              </div>
            </div>
            <ul className="space-y-1.5 mb-3">
              {requirements.map(req => (
                <li key={req} className="flex items-start gap-2 text-sm text-navy/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal mt-0.5 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
            <p className="text-xs text-navy/50 leading-relaxed bg-clinical rounded-xl px-3 py-2">{note}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Section 6: Cost ranges */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-2">Step 6 — Cost Ranges for Refurbished MRI Machines in Africa (2026)</h2>
      <p className="text-navy/70 leading-relaxed mb-6">
        Prices below are CIF (cost, insurance, freight) to main African ports. They include the system, international shipping, and standard installation support. RF shielding, site preparation, and local regulatory fees are additional.
      </p>

      <div className="bg-white border border-navy/5 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-clinical border-b border-navy/5">
            <tr>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">System</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Entry (Grade B)</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Mid Range (Grade A)</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Premium (Grade A+)</th>
              <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            {[
              ['GE Signa 1.5T', '$80,000–$120,000', '$120,000–$200,000', '$200,000–$320,000', 'Optima 450W and 360 are most common in Africa'],
              ['Siemens MAGNETOM 1.5T', '$90,000–$140,000', '$140,000–$230,000', '$230,000–$350,000', 'Aera (wide bore) and Avanto popular'],
              ['Philips Ingenia 1.5T', '$85,000–$130,000', '$130,000–$220,000', '$220,000–$340,000', 'Ingenia has strong coil ecosystem'],
              ['GE Discovery / Signa 3T', '$250,000–$320,000', '$320,000–$420,000', '$420,000–$550,000', '750W is most sought-after 3T system'],
              ['Siemens Prisma / Skyra 3T', '$260,000–$340,000', '$340,000–$440,000', '$440,000–$580,000', 'Prisma preferred for research/neuro'],
              ['Open MRI (0.3T–0.7T)', '$25,000–$40,000', '$40,000–$60,000', '$60,000–$80,000', 'Hitachi and Fonar most common open systems'],
            ].map(([sys, entry, mid, premium, note]) => (
              <tr key={sys} className="hover:bg-clinical/30">
                <td className="p-4 font-medium text-navy">{sys}</td>
                <td className="p-4 text-navy/60">{entry}</td>
                <td className="p-4 text-navy/70 font-medium">{mid}</td>
                <td className="p-4 text-navy/60">{premium}</td>
                <td className="p-4 text-navy/40 text-xs">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 bg-teal/5 border border-teal/20 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <DollarSign className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-navy mb-1 text-sm">Total Project Cost: Budget Beyond the Machine</div>
            <p className="text-sm text-navy/60 leading-relaxed">
              The machine price is typically 50–65% of the total project cost. Budget separately for: RF shielding ($30,000–$80,000), site preparation and civil works ($15,000–$40,000), power infrastructure and UPS ($10,000–$25,000), and first year maintenance contract ($15,000–$40,000/year). A 1.5T MRI project with all in costs typically runs $180,000–$420,000 total.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Section 7: Common pitfalls */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Step 7 — Common Pitfalls to Avoid</h2>

      <div className="space-y-4">
        {[
          {
            pitfall: 'Buying from non specialist brokers or trading platforms',
            detail: 'Platforms such as Alibaba, Made-in-China, and even some regional trading sites list MRI machines with appealing prices. These listings almost never include ISO 13485 refurbishment certificates, regulatory documentation, or meaningful warranties. Systems bought through these channels frequently fail inspection at the port of entry or arrive without the helium levels or coil packages described in the listing.',
          },
          {
            pitfall: 'No local service coverage',
            detail: 'An MRI machine without a local service engineer is a liability. Before signing a purchase order, confirm that the supplier has a service engineer either based in your country or with documented quarterly travel commitments. Ask for response time commitments in writing — a target of 48–72 hours for on-site response is the minimum acceptable standard in African markets.',
          },
          {
            pitfall: 'Underestimating helium operating costs',
            detail: 'Liquid helium for a standard 1.5T system costs $5,000–$12,000 per refill (depending on market and helium losses). Many hospitals are surprised by this recurring cost. New zero boil off (ZBO) systems largely eliminate this expense, but older systems still require annual or biannual top-ups. Factor helium into your 5 year operating budget.',
          },
          {
            pitfall: 'Skipping the medical physicist',
            detail: 'A medical physicist is not optional. They validate RF shielding integrity, confirm 5 Gauss line compliance, and perform acceptance testing after installation. Regulatory bodies in Kenya, Nigeria, South Africa, and Ghana all require medical physicist involvement. Skipping this step risks failed regulatory inspection and expensive rework.',
          },
          {
            pitfall: 'Buying without confirming parts availability',
            detail: 'Some older MRI systems (pre-2008, particularly certain GE Signa Excite and Siemens Harmony models) have parts that are either end of life or extremely difficult to source in Africa. Request a parts availability confirmation letter from your supplier covering the key consumable and high failure components for a minimum of 5 years.',
          },
          {
            pitfall: 'No escrow or staged payment structure',
            detail: 'For purchases above $150,000, a staged payment structure protects your facility. A typical structure is: 30% deposit on signed purchase order, 40% against shipping documents, and 30% on successful installation and acceptance testing. Never pay 100% upfront, regardless of how compelling the price appears.',
          },
        ].map(({ pitfall, detail }) => (
          <div key={pitfall} className="bg-white border border-navy/5 rounded-2xl p-5 shadow-sm flex gap-4">
            <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-navy mb-1">{pitfall}</div>
              <p className="text-sm text-navy/60 leading-relaxed">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Section 8: Maintenance */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-2">Step 8 — Ongoing Maintenance Considerations</h2>
      <p className="text-navy/70 leading-relaxed mb-6">
        MRI systems have a theoretical lifespan of 20+ years, but only with disciplined preventive maintenance. In African operating conditions — characterised by high ambient temperatures, power instability, and limited local engineering support — proactive maintenance is non negotiable.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            task: 'Preventive Maintenance Contract',
            frequency: 'Annual',
            detail: 'Negotiate a PPM (Planned Preventive Maintenance) contract at the time of purchase. Annual cost for a 1.5T system is typically $15,000–$40,000 depending on coverage level. Confirm whether the contract covers parts or labour only.',
          },
          {
            task: 'Helium Level Monitoring',
            frequency: 'Monthly',
            detail: 'Monitor helium level monthly via the system console. Trending downward? Schedule a top-up before reaching the 30% threshold to avoid a quench. Zero boil off systems require annual monitoring only.',
          },
          {
            task: 'Chiller Service',
            frequency: 'Quarterly',
            detail: 'The water cooled chiller serving the gradient system must be serviced quarterly in tropical climates. Change filters, check refrigerant levels, and test high temperature shutoffs.',
          },
          {
            task: 'RF Coil Inspection',
            frequency: 'Every 6 months',
            detail: 'Test all coils for SNR degradation every 6 months. Coils dropped, submerged in cleaning fluids, or stored improperly fail silently — producing scans that appear acceptable but carry diagnostic errors.',
          },
          {
            task: 'Gradient Amplifier Health Check',
            frequency: 'Annual',
            detail: 'Gradient amplifiers are the most failure-prone component in African climates. Include a gradient performance test in every annual service. High ambient temperatures accelerate capacitor degradation.',
          },
          {
            task: 'UPS & Power Infrastructure',
            frequency: 'Every 6 months',
            detail: 'Test UPS battery health and AVR (automatic voltage regulator) function every 6 months. Power fluctuations are the leading cause of MRI system damage across Africa. UPS battery replacement is typically required every 3–5 years.',
          },
          {
            task: 'Quench Pipe Integrity Check',
            frequency: 'Annual',
            detail: 'Inspect the quench pipe for blockages, corrosion, or pest infiltration annually. A blocked quench pipe is a serious safety hazard and will fail KNRA or RPBG inspection.',
          },
          {
            task: 'Staff Training Refresher',
            frequency: 'Annual',
            detail: 'Ensure all MRI operators and radiographers complete annual MRI safety training. High staff turnover in African healthcare means institutional MRI safety knowledge erodes quickly without refresher programmes.',
          },
        ].map(({ task, frequency, detail }) => (
          <div key={task} className="flex gap-3 bg-white border border-navy/5 rounded-xl p-4 shadow-sm">
            <Wrench className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-bold text-navy text-sm">{task}</span>
                <span className="text-[10px] font-bold text-teal bg-teal/10 px-1.5 py-0.5 rounded-full">{frequency}</span>
              </div>
              <p className="text-xs text-navy/50 leading-relaxed">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section>
      <div className="bg-navy rounded-2xl p-8 text-center">
        <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3">Ready to Source a Refurbished MRI Machine?</h3>
        <p className="text-white/70 mb-6 text-sm max-w-xl mx-auto">
          Browse our verified listings of refurbished MRI machines from ISO 13485 certified refurbishers. All listings include PPB, NAFDAC, and SAHPRA compliance documentation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/used-mri-machines-africa"
            className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-bold hover:bg-teal/90 transition-colors text-sm"
          >
            Browse MRI Machine Listings →
          </Link>
          <Link
            to="/mri-machine-price-kenya"
            className="inline-block border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm"
          >
            MRI Machine Prices in Kenya →
          </Link>
          <Link
            to="/guides/ultrasound-machine-buying-guide-africa"
            className="inline-block border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm"
          >
            Ultrasound Buying Guide →
          </Link>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          {
            q: 'How much does a refurbished MRI machine cost in Africa?',
            a: 'Refurbished MRI machines in Africa range from $25,000 for an open/low field system to $580,000 for a premium 3T system. The most common choice for private hospitals is a refurbished 1.5T system in the $120,000–$230,000 range. Total project cost including site preparation, RF shielding, and first year maintenance is typically $180,000–$420,000 for a 1.5T installation.',
          },
          {
            q: 'Is a refurbished MRI machine safe and reliable?',
            a: 'Yes — when sourced from an ISO 13485 certified refurbisher. Grade A refurbished MRI systems undergo full component inspection, gradient amplifier rebuilds, RF coil testing, cryogen refill, and software updates before shipping. They are backed by 18–24 month warranties and are fully compliant with CE/FDA standards. Avoid Grade C "as is" systems, which carry unacceptably high failure risk.',
          },
          {
            q: 'What regulatory approvals do I need to install an MRI in Kenya?',
            a: 'In Kenya, you need PPB (Pharmacy and Poisons Board) Type Approval before import and KNRA (Kenya Nuclear Regulatory Authority) precommissioning approval before clinical operation. Your supplier should provide ISO 13485 and CE/FDA documentation for the PPB application. The KNRA inspection is conducted after installation.',
          },
          {
            q: 'How long does MRI installation take in Africa?',
            a: 'From purchase order to first patient scan typically takes 4–6 months. This includes equipment shipping (4–8 weeks), RF shielding construction (4–8 weeks, which can run in parallel with shipping), installation and commissioning (2–4 weeks), and regulatory approval (which varies by country). Delays in site preparation — particularly RF shielding — are the most common cause of project overruns.',
          },
          {
            q: 'What is the ongoing cost of running an MRI machine in Africa?',
            a: 'Annual operating costs for a 1.5T MRI typically include: preventive maintenance contract ($15,000–$40,000/year), helium top-up every 1–2 years ($5,000–$12,000 per refill), chiller and cooling system servicing ($2,000–$5,000/year), and power infrastructure maintenance ($1,000–$3,000/year). Total annual operating cost is typically $20,000–$55,000 depending on system age and local service rates.',
          },
          {
            q: 'What is the difference between 1.5T and 3T MRI for African hospitals?',
            a: 'A 1.5T MRI handles 95% of clinical imaging needs at lower cost, lower infrastructure demand, and with better local service availability across Africa. 3T systems offer superior resolution for neuro, cardiac, and oncology imaging but require more power, more rigorous shielding, and more specialist radiographers to interpret results. For private diagnostic centres and district hospitals, 1.5T is almost always the right choice. 3T is appropriate for large teaching hospitals or specialist referral centres.',
          },
          {
            q: 'Can I buy a refurbished MRI machine from Alibaba or Jiji?',
            a: 'Not recommended. Listings on general trading platforms rarely include ISO 13485 refurbishment certificates, regulatory documentation, or genuine warranties. Equipment sourced from non specialist traders frequently fails port inspection, arrives without disclosed faults, or lacks the coil packages described in the listing. For a capital expenditure of $80,000–$450,000, sourcing from a verified, certified refurbisher with documented African delivery experience is essential.',
          },
          {
            q: 'Do refurbished MRI machines come with a warranty?',
            a: 'Grade A (OEM-standard) refurbished MRI systems come with 18–24 month parts and labour warranties. Grade B systems typically offer 6–12 month labour only warranties. Always confirm whether the warranty covers the magnet, gradient system, and coils — not just the console. Ask for a written warranty document before signing the purchase order.',
          },
          {
            q: 'How do I find a reliable MRI service engineer in Africa?',
            a: 'Verify that your supplier either has a certified field service engineer (FSE) based in your country or a documented service partnership with a local biomedical engineering company. Key countries with qualified MRI service engineers include Kenya, Nigeria, South Africa, Ghana, Egypt, and Tanzania. Ask your supplier for: name of local FSE, response time commitment in writing, and at least two client references in your country or region.',
          },
          {
            q: 'What brands of refurbished MRI are most common in Africa?',
            a: 'GE Healthcare (Signa and Optima series), Siemens Healthineers (MAGNETOM Aera, Avanto, Skyra), and Philips (Ingenia and Achieva) are the most common refurbished MRI brands in Africa. GE systems have strong local engineer availability across Kenya, Nigeria, and South Africa. Siemens systems are popular in South Africa and Egypt. All three brands have verified refurbishers and African distribution networks.',
          },
        ].map(({ q, a }) => (
          <div key={q} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="font-bold text-navy mb-2">{q}</div>
            <p className="text-sm text-navy/60 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </section>

  </div>
);
