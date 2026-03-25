import React, { useState } from 'react';
import { ShieldCheck, Clock } from 'lucide-react';

interface LeadFormProps {
  equipmentType?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ equipmentType }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-teal/20 text-center">
        <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="w-8 h-8 text-teal" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Request Received</h3>
        <p className="text-navy/70 mb-6">Our verification team will contact you within 48 hours with the requested data room and pricing.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-teal font-bold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-2xl shadow-xl border border-navy/5">
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-gold/10 text-gold px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
          <Clock className="w-3 h-3" />
          48-Hour Response Guarantee
        </div>
      </div>

      <h3 className="text-base font-bold mb-3">Request Verified Data Room & Pricing</h3>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Full Name</label>
          <input required type="text" className="w-full p-1.5 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors text-sm" placeholder="Dr. John Doe" />
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Hospital / Diagnostic Centre Name</label>
          <input required type="text" className="w-full p-1.5 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors text-sm" placeholder="St. Mary's Hospital" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Country</label>
            <select required className="w-full p-1.5 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors bg-white text-sm">
              <option value="">Select Country</option>
              <option>Kenya</option>
              <option>Nigeria</option>
              <option>South Africa</option>
              <option>Ghana</option>
              <option>Uganda</option>
              <option>Rwanda</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Equipment Type</label>
            <select
              required
              defaultValue={equipmentType ?? ''}
              className="w-full p-1.5 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors bg-white text-sm"
            >
              <option value="">Select Type</option>
              <option value="CT Scanner">CT Scanner</option>
              <option value="MRI">MRI Machine</option>
              <option value="Ultrasound">Ultrasound</option>
              <option value="X-Ray">X-Ray</option>
              <option value="C-Arm">C-Arm</option>
              <option value="Lab Equipment">Lab Equipment</option>
              <option value="SPECT/CT">SPECT/CT</option>
              <option value="Angiography">Angiography</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">WhatsApp Number</label>
          <input required type="tel" className="w-full p-1.5 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors text-sm" placeholder="+254..." />
        </div>

        <button type="submit" className="w-full bg-teal text-white py-2.5 rounded-xl font-bold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/20">
          Request Verified Data Room & Pricing →
        </button>

        <p className="text-[10px] text-center text-navy/40 uppercase tracking-widest">
          Secure B2B Transaction • Verified Suppliers Only • ISO 13485 Standards
        </p>
      </form>
    </div>
  );
};
