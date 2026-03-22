import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageSquare, Shield, Award, CheckCircle } from 'lucide-react';
import logo from '../me.png';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {
      name: 'Browse Equipment',
      items: [
        { name: 'CT Scanners', path: '/refurbished-ct-scanners-africa' },
        { name: 'MRI Machines', path: '/used-mri-machines-africa' },
        { name: 'Ultrasound', path: '/refurbished-ultrasound-machines-africa' },
        { name: 'X-Ray Systems', path: '/used-digital-x-ray-systems-africa' },
        { name: 'Lab Equipment', path: '/used-laboratory-equipment-africa' },
      ]
    },
    {
      name: 'By Country',
      items: [
        { name: 'Kenya', path: '/refurbished-medical-equipment-kenya-nairobi' },
        { name: 'Nigeria', path: '/used-medical-equipment-nigeria-lagos-abuja' },
        { name: 'South Africa', path: '/refurbished-medical-equipment-south-africa' },
        { name: 'Ghana', path: '/used-medical-equipment-ghana-accra' },
        { name: 'Uganda', path: '/refurbished-medical-equipment-uganda-kampala' },
        { name: 'Rwanda', path: '/used-medical-equipment-rwanda-kigali' },
      ]
    },
    { name: 'Verified Suppliers', path: '/verified-medical-equipment-suppliers-africa' },
    { name: 'Compliance', path: '/medical-equipment-import-regulations-africa' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-navy text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="MedicalEquipment.Africa" className="h-12 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.items ? (
                    <button className="flex items-center gap-1 font-semibold hover:text-teal transition-colors py-8">
                      {link.name} <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link to={link.path!} className="font-semibold hover:text-teal transition-colors py-8">
                      {link.name}
                    </Link>
                  )}
                  
                  {link.items && (
                    <div className="absolute top-full left-0 w-64 bg-white text-navy shadow-2xl rounded-b-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                      {link.items.map((item) => (
                        <Link 
                          key={item.path} 
                          to={item.path}
                          className="block px-6 py-3 hover:bg-clinical hover:text-teal font-medium border-b border-navy/5 last:border-0"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                to="/request-verified-pricing-medical-equipment"
                className="bg-teal text-white px-6 py-3 rounded-lg font-bold hover:bg-teal/90 transition-all shadow-lg shadow-teal/20"
              >
                Request Pricing
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-navy border-t border-white/10 p-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.items ? (
                  <div className="space-y-2">
                    <div className="text-teal text-xs font-bold uppercase tracking-widest px-2">{link.name}</div>
                    {link.items.map((item) => (
                      <Link 
                        key={item.path} 
                        to={item.path}
                        className="block px-2 py-2 text-lg font-semibold"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link 
                    to={link.path!}
                    className="block px-2 py-2 text-lg font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white pt-16 pb-32 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="font-bold text-teal mb-6 uppercase tracking-widest text-xs">Equipment</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/refurbished-ct-scanners-africa" className="hover:text-white">CT Scanners</Link></li>
                <li><Link to="/used-mri-machines-africa" className="hover:text-white">MRI Machines</Link></li>
                <li><Link to="/refurbished-ultrasound-machines-africa" className="hover:text-white">Ultrasound</Link></li>
                <li><Link to="/used-digital-x-ray-systems-africa" className="hover:text-white">X-Ray & C-Arm</Link></li>
                <li><Link to="/used-laboratory-equipment-africa" className="hover:text-white">Lab Equipment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-teal mb-6 uppercase tracking-widest text-xs">By Country</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/refurbished-medical-equipment-kenya-nairobi" className="hover:text-white">Kenya</Link></li>
                <li><Link to="/used-medical-equipment-nigeria-lagos-abuja" className="hover:text-white">Nigeria</Link></li>
                <li><Link to="/refurbished-medical-equipment-south-africa" className="hover:text-white">South Africa</Link></li>
                <li><Link to="/used-medical-equipment-ghana-accra" className="hover:text-white">Ghana</Link></li>
                <li><Link to="/refurbished-medical-equipment-uganda-kampala" className="hover:text-white">Uganda</Link></li>
                <li><Link to="/used-medical-equipment-rwanda-kigali" className="hover:text-white">Rwanda</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-teal mb-6 uppercase tracking-widest text-xs">Resources</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/why-refurbished-medical-equipment-africa" className="hover:text-white">Why Refurbished?</Link></li>
                <li><Link to="/medical-equipment-guides-market-news-africa" className="hover:text-white">Insights & Guides</Link></li>
                <li><Link to="/verified-medical-equipment-suppliers-africa" className="hover:text-white">Verified Suppliers</Link></li>
                <li><Link to="/medical-equipment-import-regulations-africa" className="hover:text-white">Compliance Guide</Link></li>
                <li><Link to="/faq-buying-refurbished-medical-equipment-africa" className="hover:text-white">FAQ</Link></li>
                <li><Link to="/about-medicalequipment-africa" className="hover:text-white">About Us</Link></li>
                <li><Link to="/request-verified-pricing-medical-equipment" className="hover:text-white">Request Pricing</Link></li>
              </ul>
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-gold">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase">ISO 13485 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-teal">
                  <Shield className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase">CE Mark Verified</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase">48h Response</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>© 2026 MedicalEquipment.Africa. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/447777100397" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 lg:bottom-8 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-6 h-6" />
      </a>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-navy/5 p-3 flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <a 
          href="https://wa.me/447777100397" 
          className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm"
        >
          <Phone className="w-4 h-4" /> WhatsApp
        </a>
        <Link 
          to="/request-verified-pricing-medical-equipment"
          className="flex-1 bg-teal text-white flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm"
        >
          Request Pricing
        </Link>
      </div>
    </div>
  );
};
