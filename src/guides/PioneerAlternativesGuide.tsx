import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export const PioneerAlternativesGuide: React.FC = () => (
  <div className="space-y-12">

    <section>
      <p className="text-navy/70 leading-relaxed mb-4">
        Pioneer Medical Supplies Kenya is one of the most searched medical equipment brands in Kenya — with over 110 searches per month from procurement managers, hospital administrators, and clinic buyers. If you've landed here, you're likely evaluating Pioneer or looking for verified alternatives with broader inventory, transparent pricing, or pan-Africa delivery capability.
      </p>
      <p className="text-navy/70 leading-relaxed">
        This guide compares what Pioneer offers against the verified supplier network at MedicalEquipment.Africa, so you can make the right call for your facility.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">What Pioneer Medical Supplies Kenya Offers</h2>
      <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm mb-6">
        <p className="text-navy/70 leading-relaxed mb-4">
          Pioneer Medical Supplies is a Nairobi-based distributor primarily serving private clinics and small hospitals. Their catalogue covers consumables, diagnostic equipment, and some capital equipment lines. They are PPB-registered and well-known in the Nairobi market.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-3">What they do well</div>
            <ul className="space-y-2">
              {[
                'Strong consumables catalogue',
                'Established Nairobi presence',
                'PPB registration in order',
                'Good for small clinic orders',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                  <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-3">Known limitations</div>
            <ul className="space-y-2">
              {[
                'Limited capital equipment (CT, MRI, Ultrasound)',
                'Pricing not publicly listed',
                'No pan-Africa delivery',
                'Limited refurbished ISO 13485 certified inventory',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Comparison: Pioneer vs Verified B2B Suppliers</h2>
      <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-clinical border-b border-navy/5">
              <tr>
                <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Criteria</th>
                <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Pioneer Medical Kenya</th>
                <th className="text-left p-4 font-bold text-teal uppercase tracking-widest text-xs">MedicalEquipment.Africa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy/5">
              {[
                ['Equipment types', 'Consumables + some diagnostics', 'Imaging, Lab, ICU, Surgical, Beds'],
                ['Refurbished capital equipment', 'Limited', 'ISO 13485 certified, full range'],
                ['Price transparency', 'Quote on request', 'Price ranges published per brand'],
                ['ISO 13485 certification', 'Not confirmed', 'Required for all listed suppliers'],
                ['Warranty', 'Varies by product', '12–24 months standard'],
                ['Delivery coverage', 'Nairobi primarily', 'Kenya, Nigeria, SA, Ghana, Uganda'],
                ['Regulatory documentation', 'PPB', 'PPB, NAFDAC, SAHPRA, Ghana FDA'],
                ['Installation & training', 'Limited', 'Included for capital equipment'],
              ].map(([criteria, pioneer, mea]) => (
                <tr key={criteria} className="hover:bg-clinical/30">
                  <td className="p-4 font-medium text-navy">{criteria}</td>
                  <td className="p-4 text-navy/60">{pioneer}</td>
                  <td className="p-4 text-navy font-medium">{mea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-6">Other Verified Alternatives in Kenya</h2>
      <div className="space-y-4">
        {[
          {
            name: 'Crown Healthcare Kenya',
            desc: 'Another well-known Nairobi distributor. Strong on hospital furniture and beds. Less coverage on imaging equipment.',
            fit: 'Good for: hospital furniture, basic diagnostics',
          },
          {
            name: 'Philips Healthcare East Africa',
            desc: 'Direct OEM presence in Kenya. New equipment only — pricing is significantly higher than refurbished alternatives.',
            fit: 'Good for: new Philips equipment with full OEM support',
          },
          {
            name: 'MedicalEquipment.Africa Verified Network',
            desc: 'B2B directory connecting Kenya hospitals directly with ISO 13485 certified refurbishers. Best option for capital equipment (CT, MRI, Ultrasound, Lab) at 40–65% below new prices.',
            fit: 'Good for: capital equipment, volume procurement, pan-Africa delivery',
          },
        ].map(alt => (
          <div key={alt.name} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
            <div className="font-black text-navy mb-1">{alt.name}</div>
            <p className="text-sm text-navy/60 mb-2">{alt.desc}</p>
            <div className="text-xs font-bold text-teal">{alt.fit}</div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6 flex gap-4">
        <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
        <div>
          <div className="font-bold text-navy mb-1">Procurement note</div>
          <p className="text-sm text-navy/70">
            For capital equipment valued over $10,000, always verify that your supplier holds a current ISO 13485 certificate and can provide PPB Type Approval documentation. Pioneer and similar local distributors may not carry these for refurbished imaging equipment — which can delay customs clearance.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-black uppercase tracking-tight text-navy mb-4">Bottom Line</h2>
      <p className="text-navy/70 leading-relaxed mb-4">
        Pioneer Medical Supplies Kenya is a solid choice for consumables and small equipment orders in Nairobi. For capital equipment — CT scanners, MRI, ultrasound, laboratory analysers — you'll get better pricing, documentation, and warranty coverage through a verified ISO 13485 certified supplier network.
      </p>
      <Link
        to="/refurbished-medical-equipment-kenya-nairobi"
        className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-bold hover:bg-teal/90 transition-colors text-sm"
      >
        Browse Verified Kenya Suppliers →
      </Link>
    </section>

  </div>
);
