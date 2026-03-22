import React from 'react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "What is the difference between 'used' and 'refurbished' medical equipment?",
      a: "Used equipment is sold 'as-is' with minimal testing. Refurbished equipment undergoes a rigorous process: complete disassembly, replacement of worn parts, software updates, cosmetic restoration, and clinical calibration to OEM standards. All our listings are for certified refurbished systems."
    },
    {
      q: "Are these systems compliant with local African regulations like NAFDAC or PPB?",
      a: "Yes. We only list equipment from suppliers who provide the necessary documentation (ISO 13485, CE Mark, FDA) required by regulatory bodies like NAFDAC (Nigeria), PPB (Kenya), and SAHPRA (South Africa)."
    },
    {
      q: "What kind of warranty is provided with refurbished equipment?",
      a: "Standard warranties range from 12 to 24 months, covering parts and labor. We also offer extended service contracts and remote technical support packages."
    },
    {
      q: "How long does shipping and installation take?",
      a: "Typically, shipping takes 4-8 weeks depending on the destination port. Installation by certified engineers usually takes 3-7 days once the site is prepared."
    },
    {
      q: "Do you provide training for our clinical staff?",
      a: "Yes. Most procurement packages include on-site application training for radiographers and clinicians to ensure optimal use of the equipment."
    },
    {
      q: "Can you help with site planning and lead shielding?",
      a: "Absolutely. For CT and MRI systems, our partners provide detailed site planning drawings and radiation shielding specifications (lead lining requirements)."
    },
    {
      q: "What are the payment terms for international procurement?",
      a: "Standard terms are 50% deposit to initiate refurbishment and 50% against shipping documents (Bill of Lading). We also work with select medical equipment financing partners."
    },
    {
      q: "How do I know the supplier is legitimate?",
      a: "Every supplier on MedicalEquipment.Africa is 'Verified'. This means we have audited their ISO 13485 certificates, inspected their facility, and verified their track record with other African hospitals."
    },
    {
      q: "What happens if the machine breaks down after the warranty?",
      a: "We maintain a network of local biomedical engineers in all 6 major markets (Kenya, Nigeria, etc.) who can provide rapid on-site service and spare parts."
    },
    {
      q: "Can I visit the supplier's facility before buying?",
      a: "Yes, we encourage 'Live Video Inspections' where the supplier demonstrates the actual machine you are buying. Physical site visits to USA/EU/Türkiye facilities can also be arranged."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="FAQ: Buying Refurbished Medical Equipment in Africa | Pricing, Compliance & Warranty"
        description="Answers to the most common questions about buying refurbished medical equipment in Africa. Covers pricing, compliance, warranty, logistics and supplier verification."
        canonical="/faq-buying-refurbished-medical-equipment-africa"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          }))
        }}
      />

      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">Frequently Asked Questions</h1>
          <p className="text-white/60 max-w-2xl mx-auto">Everything you need to know about procuring high-end refurbished medical systems for your facility.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-navy/5 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-clinical transition-colors"
              >
                <span className="font-bold text-lg pr-8">{faq.q}</span>
                {openIndex === index ? <ChevronUp className="text-teal" /> : <ChevronDown className="text-navy/30" />}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-navy/70 leading-relaxed border-t border-navy/5 bg-clinical/30">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-teal/5 border border-teal/20 p-12 rounded-3xl text-center">
          <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Still have questions?</h2>
          <p className="text-navy/60 mb-8">Our expert team is ready to help you with technical specs, compliance, or financing.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-verified-pricing-medical-equipment" className="bg-teal text-white px-8 py-4 rounded-xl font-bold hover:bg-teal/90 transition-all">
              Request Expert Consultation
            </Link>
            <Link to="/medical-equipment-import-regulations-africa" className="bg-white text-navy border border-navy/10 px-8 py-4 rounded-xl font-bold hover:bg-clinical transition-all">
              View Compliance Guide
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
