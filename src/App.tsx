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
import { PrivacyPolicyPage } from './PrivacyPolicyPage';
import { TermsOfServicePage } from './TermsOfServicePage';
import { EquipmentPricingPage } from './EquipmentPricingPage';
import { WholesaleKenyaPage } from './WholesaleKenyaPage';
import { SellEquipmentSAPage } from './SellEquipmentSAPage';

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
          
          {/* Dynamic category route — handles any type added to the sheet */}
          <Route path="/category/:typeSlug" element={<CategoryPage />} />

          {/* Named SEO category routes */}
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

          {/* Equipment pricing pages — Kenya */}
          <Route path="/ultrasound-machine-price-kenya" element={
            <EquipmentPricingPage
              equipmentType="Ultrasound Machine"
              seoTitle="Ultrasound Machine Price in Kenya 2026 | Mindray, GE, Philips | Verified Ranges"
              seoDescription="Ultrasound machine prices in Kenya 2026. Refurbished portable and console systems from $4,000. Mindray, GE, Philips and Samsung. PPB compliant, Nairobi delivery."
              seoCanonical="/ultrasound-machine-price-kenya"
              refurbishedDiscount="50–65% less than new"
              categoryLink={{ name: 'Ultrasound Machines', path: '/refurbished-ultrasound-machines-africa' }}
              priceRanges={[
                { brand: 'Mindray', entry: '$4,000–$8,000', mid: '$8,000–$15,000', premium: '$15,000–$25,000', note: 'Most common in Kenya' },
                { brand: 'GE', entry: '$6,000–$12,000', mid: '$12,000–$22,000', premium: '$22,000–$40,000', note: 'Wide range available' },
                { brand: 'Philips', entry: '$7,000–$14,000', mid: '$14,000–$25,000', premium: '$25,000–$45,000', note: 'Strong after-sales' },
                { brand: 'Samsung', entry: '$4,500–$9,000', mid: '$9,000–$16,000', premium: '$16,000–$28,000', note: 'Good mid-market value' },
              ]}
              faqs={[
                { q: 'How much does an ultrasound machine cost in Kenya?', a: 'Refurbished ultrasound machines in Kenya range from $4,000 for entry-level portable units to $45,000 for premium console systems. The most popular mid-range systems (Mindray and Samsung) sell for $8,000–$16,000.' },
                { q: 'Is a refurbished ultrasound machine reliable?', a: 'Yes — certified refurbished machines undergo full component inspection, probe testing and software updates. Our suppliers provide 12–24 month warranties and PPB-compliant documentation.' },
                { q: 'Can I get an ultrasound machine delivered to Nairobi?', a: 'Yes. All verified suppliers offer delivery to Nairobi and major Kenyan towns. Installation and training are included.' },
              ]}
            />
          } />

          <Route path="/x-ray-machine-price-kenya" element={
            <EquipmentPricingPage
              equipmentType="X-Ray Machine"
              seoTitle="X-Ray Machine Price in Kenya 2026 | Digital DR & CR Systems | Verified Ranges"
              seoDescription="X-ray machine prices in Kenya 2026. Refurbished digital DR and CR systems from $5,000. GE, Siemens, Philips and Mindray. KNRA compliant, Nairobi delivery."
              seoCanonical="/x-ray-machine-price-kenya"
              refurbishedDiscount="45–60% less than new"
              categoryLink={{ name: 'X-Ray Systems', path: '/used-digital-x-ray-systems-africa' }}
              priceRanges={[
                { brand: 'Mindray', entry: '$5,000–$9,000', mid: '$9,000–$18,000', premium: '$18,000–$30,000', note: 'Digital DR systems' },
                { brand: 'GE', entry: '$7,000–$14,000', mid: '$14,000–$25,000', premium: '$25,000–$45,000', note: 'Fixed & mobile units' },
                { brand: 'Siemens', entry: '$8,000–$16,000', mid: '$16,000–$28,000', premium: '$28,000–$50,000', note: 'Premium build quality' },
                { brand: 'Philips', entry: '$7,500–$15,000', mid: '$15,000–$26,000', premium: '$26,000–$48,000', note: 'DR & CR systems' },
              ]}
              faqs={[
                { q: 'How much does an X-ray machine cost in Kenya?', a: 'Refurbished digital X-ray machines in Kenya range from $5,000 for entry-level mobile units to $50,000 for premium fixed room systems. A standard digital DR room system costs $9,000–$18,000.' },
                { q: 'Do I need KNRA approval for an X-ray machine in Kenya?', a: 'Yes — all X-ray equipment requires Kenya Nuclear Regulatory Authority (KNRA) radiation clearance. Our verified suppliers provide all documentation required for KNRA approval.' },
                { q: 'What is the difference between CR and DR X-ray?', a: 'CR (Computed Radiography) uses cassette-based plates and is lower cost ($5,000–$12,000). DR (Digital Radiography) captures images directly to a flat panel detector and is faster and higher quality ($9,000–$50,000).' },
              ]}
            />
          } />

          <Route path="/mri-machine-price-kenya" element={
            <EquipmentPricingPage
              equipmentType="MRI Machine"
              seoTitle="MRI Machine Price in Kenya 2026 | 1.5T & 3T Systems | Verified Ranges"
              seoDescription="MRI machine prices in Kenya 2026. Refurbished 1.5T and 3T systems from $80,000. GE, Siemens and Philips. KNRA compliant, full installation support."
              seoCanonical="/mri-machine-price-kenya"
              refurbishedDiscount="40–55% less than new"
              categoryLink={{ name: 'MRI Machines', path: '/used-mri-machines-africa' }}
              priceRanges={[
                { brand: 'GE', entry: '$80,000–$150,000', mid: '$150,000–$250,000', premium: '$250,000–$400,000', note: '1.5T systems' },
                { brand: 'Siemens', entry: '$90,000–$160,000', mid: '$160,000–$280,000', premium: '$280,000–$450,000', note: '1.5T & 3T' },
                { brand: 'Philips', entry: '$85,000–$155,000', mid: '$155,000–$260,000', premium: '$260,000–$420,000', note: 'Wide bore options' },
              ]}
              faqs={[
                { q: 'How much does an MRI machine cost in Kenya?', a: 'Refurbished MRI machines in Kenya start at $80,000 for entry-level 1.5T systems and reach $450,000 for premium 3T systems. Most Kenyan facilities purchase 1.5T systems in the $150,000–$250,000 range.' },
                { q: 'What is included in the price of a refurbished MRI?', a: 'Our prices include the system, shipping to Kenya, installation, site planning support, and a 12–24 month warranty. KNRA radiation clearance documentation is also provided.' },
                { q: 'How long does it take to install an MRI machine in Kenya?', a: 'Installation typically takes 4–8 weeks from delivery. This includes site preparation, magnet energisation, shimming, and staff training.' },
              ]}
            />
          } />

          {/* Geo-specific category pages */}
          <Route path="/laboratory-equipment-suppliers-kenya" element={
            <CategoryPage
              type="Lab Equipment"
              country="Kenya"
              title="Laboratory Equipment Suppliers in Kenya"
              seoTitle="Laboratory Equipment Suppliers in Kenya | Haematology, Biochemistry | Nairobi"
              seoDescription="Verified laboratory equipment suppliers in Kenya. Haematology, biochemistry and immunology analysers from Mindray, Sysmex and Roche. PPB compliant, Nairobi delivery."
              seoCanonical="/laboratory-equipment-suppliers-kenya"
              priceLink={{ label: 'Lab equipment price list', path: '/refurbished-medical-equipment-catalogue-africa' }}
              internalLinks={[
                { name: 'All Lab Equipment Africa', path: '/used-laboratory-equipment-africa' },
                { name: 'Medical Equipment Kenya', path: '/refurbished-medical-equipment-kenya-nairobi' },
              ]}
            />
          } />

          <Route path="/hospital-beds-south-africa" element={
            <CategoryPage
              type="Hospital Bed"
              country="South Africa"
              title="Hospital Beds for Sale in South Africa"
              seoTitle="Hospital Beds for Sale in South Africa | New & Used | Johannesburg & Cape Town Delivery"
              seoDescription="New and used hospital beds for South African hospitals. Electric, manual and ICU beds from verified suppliers. Delivery to Johannesburg, Cape Town and Durban."
              seoCanonical="/hospital-beds-south-africa"
              internalLinks={[
                { name: 'Medical Equipment South Africa', path: '/refurbished-medical-equipment-south-africa' },
                { name: 'Suppliers Johannesburg', path: '/medical-equipment-suppliers-johannesburg' },
              ]}
            />
          } />

          {/* ICU & ward equipment category pages */}
          <Route path="/dialysis-machines-africa" element={
            <CategoryPage
              type="Dialysis Machine"
              title="Refurbished Dialysis Machines Africa"
              seoTitle="Refurbished Dialysis Machines for Sale Africa | Fresenius, Nipro | ISO 13485 Certified"
              seoDescription="Verified refurbished dialysis machines for African hospitals. Fresenius 5008S and HD4 systems. ISO 13485 certified, 12-month warranty. PPB Kenya compliant. Dialysis machine price in Kenya from $8,000."
              seoCanonical="/dialysis-machines-africa"
              internalLinks={[
                { name: 'Medical Equipment Kenya', path: '/refurbished-medical-equipment-kenya-nairobi' },
                { name: 'Lab Equipment Kenya', path: '/laboratory-equipment-suppliers-kenya' },
              ]}
            />
          } />
          <Route path="/patient-monitors-africa" element={
            <CategoryPage
              type="Patient Monitor"
              title="Refurbished Patient Monitors Africa"
              seoTitle="Refurbished Patient Monitors for Sale Africa | Mindray, Philips | ISO 13485 Certified"
              seoDescription="Verified refurbished bedside patient monitors for African hospitals and ICUs. Mindray BeneView and Philips IntelliVue systems. ISO 13485 certified, 12-month warranty. PPB Kenya compliant."
              seoCanonical="/patient-monitors-africa"
              internalLinks={[
                { name: 'Medical Equipment Kenya', path: '/refurbished-medical-equipment-kenya-nairobi' },
                { name: 'Verified Suppliers', path: '/verified-medical-equipment-suppliers-africa' },
              ]}
            />
          } />
          <Route path="/ecg-machines-africa" element={
            <CategoryPage
              type="ECG Machine"
              title="Refurbished ECG Machines Africa"
              seoTitle="Refurbished ECG Machines for Sale Africa | Schiller, GE, Mindray | ISO 13485 Certified"
              seoDescription="Verified refurbished 12-lead ECG machines for African hospitals and clinics. Schiller CARDIOVIT, GE MAC, and Mindray units. ISO 13485 certified. ECG machine price in Kenya from $1,200. PPB Kenya compliant."
              seoCanonical="/ecg-machines-africa"
              internalLinks={[
                { name: 'Medical Equipment Kenya', path: '/refurbished-medical-equipment-kenya-nairobi' },
                { name: 'Patient Monitors', path: '/patient-monitors-africa' },
              ]}
            />
          } />

          {/* Content pages */}
          <Route path="/wholesale-medical-supplies-kenya" element={<WholesaleKenyaPage />} />
          <Route path="/sell-medical-equipment-south-africa" element={<SellEquipmentSAPage />} />

          {/* Countries */}
          <Route path="/refurbished-medical-equipment-kenya-nairobi" element={
            <CountryPage
              country="Kenya"
              title="Refurbished Medical Equipment Kenya"
              seoTitle="Refurbished Medical Equipment Kenya | PPB Type Approval Compliant | Nairobi & Mombasa"
              seoDescription="Buy verified refurbished CT scanners, MRI and ultrasound in Kenya. PPB (Pharmacy & Poisons Board) compliant listings with KNRA radiation clearance. Nairobi and Mombasa delivery."
              seoCanonical="/refurbished-medical-equipment-kenya-nairobi"
              complianceNote="PPB (Pharmacy & Poisons Board) Type Approval compliant."
              relatedLinks={[
                { label: 'Ultrasound prices in Kenya', path: '/ultrasound-machine-price-kenya' },
                { label: 'X-ray machine prices', path: '/x-ray-machine-price-kenya' },
                { label: 'MRI machine prices', path: '/mri-machine-price-kenya' },
                { label: 'Lab equipment suppliers', path: '/laboratory-equipment-suppliers-kenya' },
              ]}
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
              citySections={[
                {
                  city: 'Lagos',
                  description: "Lagos is Nigeria's largest medical equipment market. Suppliers are concentrated in Ikeja, Lagos Island, and Victoria Island. Most verified suppliers offer same-day quotes for Lagos delivery.",
                  complianceNote: 'NAFDAC registration required for all medical devices imported through Lagos ports.',
                },
                {
                  city: 'Abuja',
                  description: 'Abuja (FCT) is the primary procurement hub for government hospitals and federal health facilities. Suppliers serve Abuja directly from Lagos stock with 24–48 hour delivery.',
                  complianceNote: 'Federal procurement requires SONCAP pre-shipment certification.',
                },
              ]}
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
              cityPageLinks={[
                { name: 'Johannesburg', path: '/medical-equipment-suppliers-johannesburg' },
                { name: 'Pretoria', path: '/medical-equipment-suppliers-pretoria' },
              ]}
            />
          } />

          <Route path="/medical-equipment-suppliers-johannesburg" element={
            <CountryPage
              country="South Africa"
              city="Johannesburg"
              title="Medical Equipment Suppliers in Johannesburg"
              seoTitle="Medical Equipment Suppliers in Johannesburg | SAHPRA Compliant | Same-Day Quotes"
              seoDescription="Verified medical equipment suppliers in Johannesburg. CT scanners, MRI, ultrasound and lab equipment. SAHPRA compliant, Gauteng delivery."
              seoCanonical="/medical-equipment-suppliers-johannesburg"
              complianceNote="SAHPRA Section 21 compliant. Gauteng delivery available."
            />
          } />

          <Route path="/medical-equipment-suppliers-pretoria" element={
            <CountryPage
              country="South Africa"
              city="Pretoria"
              title="Medical Equipment Suppliers in Pretoria"
              seoTitle="Medical Equipment Suppliers in Pretoria | SAHPRA Compliant | Tshwane Delivery"
              seoDescription="Verified medical equipment suppliers in Pretoria and Tshwane. CT scanners, MRI, ultrasound and lab equipment. SAHPRA compliant."
              seoCanonical="/medical-equipment-suppliers-pretoria"
              complianceNote="SAHPRA Section 21 compliant. Pretoria / Tshwane delivery available."
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
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </BrowserRouter>
      </ListingsProvider>
    </HelmetProvider>
  );
}
