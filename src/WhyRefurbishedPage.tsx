import React from 'react';
import { ShieldCheck, Award, Zap, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';
import { Link } from 'react-router-dom';

export const WhyRefurbishedPage: React.FC = () => {
  const benefits = [
    {
      title: 'Up to 60% Cost Savings',
      description: 'Acquire high-end diagnostic imaging systems for a fraction of the cost of new equipment, allowing for faster ROI and expanded clinical services.',
      icon: <Zap className="w-8 h-8 text-teal" />
    },
    {
      title: 'Certified Quality Standards',
      description: 'Our suppliers adhere to ISO 13485 and CE Mark standards, ensuring every system undergoes a rigorous multi-point inspection and component replacement.',
      icon: <ShieldCheck className="w-8 h-8 text-teal" />
    },
    {
      title: 'Full Warranty & Support',
      description: 'All equipment comes with comprehensive warranties and access to local service engineers for installation, training, and ongoing maintenance.',
      icon: <Award className="w-8 h-8 text-teal" />
    },
    {
      title: 'Environmental Sustainability',
      description: 'Choosing refurbished equipment reduces medical waste and the carbon footprint associated with manufacturing new systems.',
      icon: <Users className="w-8 h-8 text-teal" />
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Why Choose Refurbished Medical Equipment? | MedicalEquipment.Africa"
        description="Learn the benefits of refurbished medical equipment: cost savings, certified quality, and environmental sustainability for African healthcare providers."
      />

      <div className="bg-navy text-white py-24 lg:py-32 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-black mb-8 uppercase tracking-tight leading-tight">
              The Case for <span className="text-teal">Refurbished</span> Medical Equipment
            </h1>
            <p className="text-xl text-white/85 mb-10 leading-relaxed">
              Bridging the healthcare gap in Africa by providing world-class diagnostic technology that is affordable, reliable, and sustainable.
            </p>
            <Link to="/refurbished-medical-equipment-catalogue-africa" className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal/90 transition-all shadow-xl shadow-teal/20">
              Browse Catalogue <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Quality Without Compromise</h2>
              <p className="text-navy/60 mb-6 leading-relaxed">
                Refurbished doesn't mean "used." It means a system has been restored to its original factory specifications by certified engineers. Every component is tested, software is updated, and cosmetic parts are replaced.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Full system disassembly and cleaning',
                  'Replacement of all wear-and-tear components',
                  'Latest software updates and calibration',
                  'Rigorous clinical testing and verification',
                  'ISO 13485 & CE Mark compliance'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal" />
                    <span className="font-bold text-sm text-navy/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-clinical p-8 rounded-3xl border border-navy/5">
              <img 
                src="https://picsum.photos/seed/refurbished/800/600" 
                alt="Refurbished CT Scanner" 
                className="rounded-2xl shadow-2xl mb-8"
                referrerPolicy="no-referrer"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-navy/5">
                  <div className="text-2xl font-black text-teal">60%</div>
                  <div className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Typical Savings</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-navy/5">
                  <div className="text-2xl font-black text-teal">12+</div>
                  <div className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Months Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-clinical">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-16 text-center uppercase tracking-tight">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Ready to Upgrade Your Facility?</h2>
              <p className="text-navy/60 mb-10 leading-relaxed">
                Connect with our verification team to discuss your clinical requirements and receive a detailed data room for your preferred equipment.
              </p>
              <div className="bg-navy text-white p-8 rounded-3xl">
                <h4 className="text-xl font-bold mb-4">What's in a Data Room?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-teal/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-teal font-bold text-xs">1</span>
                    </div>
                    <div>
                      <span className="font-bold block">Detailed Service History</span>
                      <span className="text-white/50 text-sm">Full records of previous maintenance and refurbishment steps.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-teal/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-teal font-bold text-xs">2</span>
                    </div>
                    <div>
                      <span className="font-bold block">Refurbishment Certificate</span>
                      <span className="text-white/50 text-sm">Official documentation of ISO 13485 compliance.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-teal/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-teal font-bold text-xs">3</span>
                    </div>
                    <div>
                      <span className="font-bold block">Verified Pricing</span>
                      <span className="text-white/50 text-sm">Transparent B2B pricing including logistics options.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
