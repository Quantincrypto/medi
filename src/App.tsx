import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ListingsContext, useListingsFetcher } from './data';
import { Home } from './Home';
import { CategoryPage } from './CategoryPage';
import { CountryPage } from './CountryPage';
import { SuppliersPage } from './SuppliersPage';
import { CompliancePage } from './CompliancePage';
import { FAQPage } from './FAQPage';
import { AboutPage } from './AboutPage';
import { RequestPricingPage } from './RequestPricingPage';
import { CataloguePage } from './CataloguePage';
import { BlogPage } from './BlogPage';
import { BlogPostPage } from './BlogPostPage';
import { WhyRefurbishedPage } from './WhyRefurbishedPage';
import { ProductPage } from './ProductPage';

function ListingsProvider({ children }: { children: React.ReactNode }) {
  const state = useListingsFetcher();
  return (
    <ListingsContext.Provider value={state}>
      {children}
    </ListingsContext.Provider>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ListingsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/refurbished-medical-equipment-catalogue-africa" element={<CataloguePage />} />
          <Route path="/why-refurbished-medical-equipment-africa" element={<WhyRefurbishedPage />} />
          <Route path="/medical-equipment-guides-market-news-africa" element={<BlogPage />} />
          <Route path="/guides/:slug" element={<BlogPostPage />} />
          <Route path="/equipment/:slug" element={<ProductPage />} />
          
          {/* Categories */}
          <Route path="/refurbished-ct-scanners-africa" element={
            <CategoryPage
              type="CT Scanner"
              title="Refurbished CT Scanners Africa"
              seoTitle="Refurbished CT Scanners for Sale Africa | 16–128 Slice | GE, Siemens, Philips | ISO 13485"
              seoDescription="Buy verified refurbished CT scanners in Africa. 16-slice to 128-slice systems from GE, Siemens and Philips. ISO 13485 certified refurbishment, 24-month warranty. PPB, NAFDAC and SAHPRA compliant."
              seoCanonical="/refurbished-ct-scanners-africa"
              internalLinks={[
                { name: 'MRI Machines', path: '/used-mri-machines-africa' },
                { name: 'X-Ray Systems', path: '/used-digital-x-ray-systems-africa' }
              ]}
              specTable={
                <table className="w-full text-sm text-left">
                  <thead className="bg-clinical border-b border-navy/5">
                    <tr>
                      <th className="p-3">Feature</th>
                      <th className="p-3">Standard Refurbished</th>
                      <th className="p-3">Premium Refurbished</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy/5">
                    <tr><td className="p-3 font-medium">Slices</td><td className="p-3">16 - 64 Slices</td><td className="p-3">128+ Slices</td></tr>
                    <tr><td className="p-3 font-medium">Tube Life</td><td className="p-3">&gt;70% Remaining</td><td className="p-3">New or &gt;90%</td></tr>
                    <tr><td className="p-3 font-medium">Warranty</td><td className="p-3">12 Months</td><td className="p-3">24 Months</td></tr>
                  </tbody>
                </table>
              }
            />
          } />
          <Route path="/used-mri-machines-africa" element={
            <CategoryPage
              type="MRI"
              title="Refurbished MRI Machines Africa"
              seoTitle="Refurbished MRI Machines for Sale Africa | 1.5T & 3T | Siemens, GE, Philips | ISO 13485"
              seoDescription="Buy verified refurbished MRI machines in Africa. 1.5T and 3T systems from Siemens, GE and Philips. Wide bore options available. ISO 13485 certified, 18–24 month warranty."
              seoCanonical="/used-mri-machines-africa"
              internalLinks={[
                { name: 'CT Scanners', path: '/refurbished-ct-scanners-africa' },
                { name: 'Ultrasound', path: '/refurbished-ultrasound-machines-africa' }
              ]}
            />
          } />
          <Route path="/refurbished-ultrasound-machines-africa" element={
            <CategoryPage
              type="Ultrasound"
              title="Refurbished Ultrasound Machines Africa"
              seoTitle="Refurbished Ultrasound Machines for Sale Africa | Philips, GE, Samsung | CE Certified"
              seoDescription="Verified refurbished ultrasound machines for African hospitals. Portable and console systems for radiology, OB/GYN and cardiology. CE certified with 12–24 month warranty."
              seoCanonical="/refurbished-ultrasound-machines-africa"
              internalLinks={[
                { name: 'MRI Machines', path: '/used-mri-machines-africa' },
                { name: 'Lab Equipment', path: '/used-laboratory-equipment-africa' }
              ]}
            />
          } />
          <Route path="/used-digital-x-ray-systems-africa" element={
            <CategoryPage
              type="X-Ray"
              title="Used Digital X-Ray & C-Arm Systems Africa"
              seoTitle="Used Digital X-Ray & C-Arm Systems for Sale Africa | CE Marked | Mobile & Fixed"
              seoDescription="Verified used digital X-ray and C-arm systems for African hospitals. Fixed room and mobile units from GE, Siemens and Philips. CE marked, installation support included."
              seoCanonical="/used-digital-x-ray-systems-africa"
              internalLinks={[
                { name: 'CT Scanners', path: '/refurbished-ct-scanners-africa' },
                { name: 'MRI Machines', path: '/used-mri-machines-africa' }
              ]}
            />
          } />
          <Route path="/used-laboratory-equipment-africa" element={
            <CategoryPage
              type="Lab Equipment"
              title="Used Laboratory Equipment Africa"
              seoTitle="Used Laboratory Equipment Africa | Haematology & Biochemistry Analysers | CE Certified"
              seoDescription="High-quality used laboratory equipment for African hospitals and diagnostic centres. Haematology, biochemistry and immunology analysers from Mindray, Sysmex and Roche. CE certified with warranty."
              seoCanonical="/used-laboratory-equipment-africa"
              internalLinks={[
                { name: 'Ultrasound', path: '/refurbished-ultrasound-machines-africa' },
                { name: 'Compliance Guide', path: '/medical-equipment-import-regulations-africa' }
              ]}
            />
          } />

          {/* Countries */}
          <Route path="/refurbished-medical-equipment-kenya-nairobi" element={
            <CountryPage
              country="Kenya"
              title="Refurbished Medical Equipment Kenya"
              seoTitle="Refurbished Medical Equipment Kenya | PPB Type Approval Compliant | Nairobi & Mombasa"
              seoDescription="Buy verified refurbished CT scanners, MRI and ultrasound in Kenya. PPB (Pharmacy & Poisons Board) compliant listings with KNRA radiation clearance. Nairobi and Mombasa delivery."
              seoCanonical="/refurbished-medical-equipment-kenya-nairobi"
              complianceNote="PPB (Pharmacy & Poisons Board) Type Approval compliant."
            />
          } />
          <Route path="/used-medical-equipment-nigeria-lagos-abuja" element={
            <CountryPage
              country="Nigeria"
              title="Refurbished Medical Equipment Nigeria"
              seoTitle="Refurbished Medical Equipment Nigeria | NAFDAC Registered | Lagos & Abuja Delivery"
              seoDescription="Buy verified refurbished medical imaging equipment in Nigeria. NAFDAC registered, SONCAP pre-shipment certified. Certified refurbished systems for Lagos, Abuja and Port Harcourt."
              seoCanonical="/used-medical-equipment-nigeria-lagos-abuja"
              complianceNote="NAFDAC registered and SONCAP pre-shipment certified."
            />
          } />
          <Route path="/refurbished-medical-equipment-south-africa" element={
            <CountryPage
              country="South Africa"
              title="Refurbished Medical Equipment South Africa"
              seoTitle="Refurbished Medical Equipment South Africa | SAHPRA Compliant | Johannesburg & Cape Town"
              seoDescription="Verified refurbished CT scanners, MRI and ultrasound for South African hospitals. SAHPRA Section 21 compliant. Delivery to Johannesburg, Cape Town and Durban."
              seoCanonical="/refurbished-medical-equipment-south-africa"
              complianceNote="SAHPRA Section 21 authorisation compliant."
            />
          } />
          <Route path="/used-medical-equipment-ghana-accra" element={
            <CountryPage
              country="Ghana"
              title="Refurbished Medical Equipment Ghana"
              seoTitle="Refurbished Medical Equipment Ghana | Ghana FDA Approved | Accra Delivery"
              seoDescription="Verified refurbished medical equipment for Ghanaian hospitals. Ghana FDA approved listings. CT scanners, MRI and ultrasound with full import documentation for Accra."
              seoCanonical="/used-medical-equipment-ghana-accra"
              complianceNote="Ghana FDA approved listings."
            />
          } />
          <Route path="/refurbished-medical-equipment-uganda-kampala" element={
            <CountryPage
              country="Uganda"
              title="Refurbished Medical Equipment Uganda"
              seoTitle="Refurbished Medical Equipment Uganda | NDA Compliant | Kampala Delivery"
              seoDescription="Verified refurbished CT scanners and ultrasound for Ugandan hospitals. NDA Uganda compliant with full import support for Kampala and regional facilities."
              seoCanonical="/refurbished-medical-equipment-uganda-kampala"
              complianceNote="NDA Uganda compliant."
            />
          } />
          <Route path="/used-medical-equipment-rwanda-kigali" element={
            <CountryPage
              country="Rwanda"
              title="Refurbished Medical Equipment Rwanda"
              seoTitle="Refurbished Medical Equipment Rwanda Kigali | Rwanda FDA Compliant | Verified Listings"
              seoDescription="Verified refurbished medical equipment for Rwandan hospitals and clinics. Rwanda FDA compliant listings. CT scanners, MRI and ultrasound with full import documentation for Kigali."
              seoCanonical="/used-medical-equipment-rwanda-kigali"
              complianceNote="Rwanda FDA compliant."
            />
          } />

          {/* Other Pages */}
          <Route path="/verified-medical-equipment-suppliers-africa" element={<SuppliersPage />} />
          <Route path="/medical-equipment-import-regulations-africa" element={<CompliancePage />} />
          <Route path="/faq-buying-refurbished-medical-equipment-africa" element={<FAQPage />} />
          <Route path="/about-medicalequipment-africa" element={<AboutPage />} />
          <Route path="/request-verified-pricing-medical-equipment" element={<RequestPricingPage />} />
        </Routes>
      </BrowserRouter>
      </ListingsProvider>
    </HelmetProvider>
  );
}
