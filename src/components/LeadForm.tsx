import React, { useState } from 'react';
import { ShieldCheck, Clock } from 'lucide-react';

export const LeadForm: React.FC = () => {
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
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-navy/5">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-gold/10 text-gold px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
          <Clock className="w-3 h-3" />
          48-Hour Response Guarantee
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4">Request Verified Data Room & Pricing</h3>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Full Name</label>
            <input required type="text" className="w-full p-2 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors text-sm" placeholder="Dr. John Doe" />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Job Title</label>
            <input required type="text" className="w-full p-2 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors text-sm" placeholder="Chief Medical Officer" />
          </div>
        </div>
        
        <div>
          <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Hospital / Diagnostic Centre Name</label>
          <input required type="text" className="w-full p-2 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors text-sm" placeholder="St. Mary's Hospital" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Country</label>
            <select required className="w-full p-2 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors bg-white text-sm">
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
            <select required className="w-full p-2 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors bg-white text-sm">
              <option value="">Select Type</option>
              <option>CT Scanner</option>
              <option>MRI Machine</option>
              <option>Ultrasound</option>
              <option>X-Ray / C-Arm</option>
              <option>Lab Equipment</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Brand Preference</label>
            <input type="text" className="w-full p-2 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors text-sm" placeholder="GE, Siemens, Philips..." />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Budget Range</label>
            <select required className="w-full p-2 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors bg-white text-sm">
              <option value="">Select Budget</option>
              <option>&lt;$20k</option>
              <option>$20k–$80k</option>
              <option>$80k–$200k</option>
              <option>$200k+</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">WhatsApp Number</label>
          <input required type="tel" className="w-full p-2 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors text-sm" placeholder="+254..." />
        </div>
        
        <div>
          <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Message / Specific Requirements</label>
          <textarea className="w-full p-2 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors h-16 text-sm" placeholder="Tell us more about your clinical needs..."></textarea>
        </div>
        
        <button type="submit" className="w-full bg-teal text-white py-3 rounded-xl font-bold text-base hover:bg-teal/90 transition-colors shadow-lg shadow-teal/20">
          Request Verified Data Room & Pricing →
        </button>
        
        <p className="text-[10px] text-center text-navy/40 uppercase tracking-widest">
          Secure B2B Transaction • Verified Suppliers Only • ISO 13485 Standards
        </p>
      </form>
    </div>
  );
};
