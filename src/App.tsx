import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import { WhyRefurbishedPage } from './WhyRefurbishedPage';
import { ProductPage } from './ProductPage';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/refurbished-medical-equipment-catalogue-africa" element={<CataloguePage />} />
          <Route path="/why-refurbished-medical-equipment-africa" element={<WhyRefurbishedPage />} />
          <Route path="/medical-equipment-guides-market-news-africa" element={<BlogPage />} />
          <Route path="/equipment/:slug" element={<ProductPage />} />
          
          {/* Categories */}
          <Route path="/refurbished-ct-scanners-africa" element={
            <CategoryPage 
              type="CT Scanner" 
              title="Refurbished CT Scanners Africa"
              seoTitle="Refurbished CT Scanners Africa | GE, Siemens, Philips | ISO 13485 Certified Suppliers"
              seoDescription="Verified refurbished CT scanners for sale in Africa. GE, Siemens, Philips systems with ISO 13485 certified refurbishment."
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
              title="Used MRI Machines Africa"
              seoTitle="Used MRI Machines for Sale Africa | 1.5T & 3T Systems | Verified Suppliers"
              seoDescription="High-quality used and refurbished MRI machines for sale in Africa. 1.5T and 3T systems from GE, Siemens, and Philips."
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
              seoTitle="Certified Refurbished Ultrasound Machines Africa | Philips, GE, Samsung"
              seoDescription="Certified refurbished ultrasound machines for sale in Africa. Portable and console systems for radiology, OB/GYN, and cardiology."
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
              seoTitle="Used Digital X-Ray Systems Africa | Mobile & Fixed | CE Marked Suppliers"
              seoDescription="Verified used digital X-ray and C-arm systems for sale in Africa. Fixed rooms and mobile units from major global brands."
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
              seoTitle="Used Laboratory Equipment Africa | Hematology, Biochemistry | CE Certified"
              seoDescription="High-quality used laboratory equipment for sale in Africa. Hematology, biochemistry, and immunology analyzers from verified suppliers."
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
              seoTitle="Refurbished Medical Equipment Kenya Nairobi | PPB Compliant Suppliers"
              seoDescription="Verified refurbished medical equipment for sale in Kenya. PPB (Pharmacy & Poisons Board) import compliant listings."
              complianceNote="PPB (Pharmacy & Poisons Board) import compliant."
            />
          } />
          <Route path="/used-medical-equipment-nigeria-lagos-abuja" element={
            <CountryPage 
              country="Nigeria"
              title="Used Medical Equipment Nigeria"
              seoTitle="Used Medical Equipment Nigeria Lagos | NAFDAC Registered | Verified Suppliers"
              seoDescription="Verified used medical equipment for sale in Nigeria. NAFDAC registered suppliers and compliant listings."
              complianceNote="NAFDAC registered suppliers."
            />
          } />
          <Route path="/refurbished-medical-equipment-south-africa" element={
            <CountryPage 
              country="South Africa"
              title="Refurbished Medical Equipment South Africa"
              seoTitle="Refurbished Medical Equipment South Africa | SAHPRA Compliant | GE, Siemens, Philips"
              seoDescription="Verified refurbished medical equipment for sale in South Africa. SAHPRA compliant listings from global suppliers."
              complianceNote="SAHPRA compliant listings."
            />
          } />
          <Route path="/used-medical-equipment-ghana-accra" element={
            <CountryPage 
              country="Ghana"
              title="Used Medical Equipment Ghana"
              seoTitle="Used Medical Equipment Ghana Accra | FDA Ghana Approved Suppliers"
              seoDescription="Verified used medical equipment for sale in Ghana. FDA Ghana approved suppliers and compliant listings."
              complianceNote="FDA Ghana compliant note."
            />
          } />
          <Route path="/refurbished-medical-equipment-uganda-kampala" element={
            <CountryPage 
              country="Uganda"
              title="Refurbished Medical Equipment Uganda"
              seoTitle="Refurbished Medical Equipment Uganda Kampala | NDA Compliant Suppliers"
              seoDescription="Verified refurbished medical equipment for sale in Uganda. NDA Uganda compliant listings."
              complianceNote="NDA Uganda compliant note."
            />
          } />
          <Route path="/used-medical-equipment-rwanda-kigali" element={
            <CountryPage 
              country="Rwanda"
              title="Used Medical Equipment Rwanda"
              seoTitle="Used Medical Equipment Rwanda Kigali | Rwanda FDA Compliant | Verified Listings"
              seoDescription="Verified used medical equipment for sale in Rwanda. Rwanda FDA compliant listings and verified suppliers."
              complianceNote="Rwanda FDA compliant note."
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
    </HelmetProvider>
  );
}
