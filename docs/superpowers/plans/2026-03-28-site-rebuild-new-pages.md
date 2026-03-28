# Site Rebuild — New Pages & Enrichments Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 9 new SEO-optimised pages and enrich 3 existing pages, targeting 160 validated keywords across Kenya, Nigeria, and South Africa.

**Architecture:** Extend `CategoryPage` and `CountryPage` with optional props for geo-filtering and city sections. Create one new `EquipmentPricingPage` component for Kenya equipment pricing pages. Two standalone content pages for wholesale and sell-side flows. All routes registered in `App.tsx`.

**Tech Stack:** React 19, TypeScript, Vite, React Router v7, Tailwind CSS v4, react-helmet-async, lucide-react. No test framework — verify by running `npm run dev` and navigating to each route.

---

## File Map

| File | Action | What it does |
|---|---|---|
| `src/CategoryPage.tsx` | Modify | Add `country?` + `priceLink?` props |
| `src/CountryPage.tsx` | Modify | Add `city?`, `cityPageLinks?`, `citySections?`, `relatedLinks?` props |
| `src/EquipmentPricingPage.tsx` | Create | New component for ultrasound/x-ray/MRI pricing pages |
| `src/WholesaleKenyaPage.tsx` | Create | Wholesale medical supplies Kenya content page |
| `src/SellEquipmentSAPage.tsx` | Create | Sell used medical equipment South Africa content page |
| `src/App.tsx` | Modify | 9 new routes + update Nigeria, Kenya, SA routes with new props |

---

## Task 1: Extend `CategoryPage` with `country` and `priceLink` props

**Files:**
- Modify: `src/CategoryPage.tsx`

- [ ] **Step 1: Add the two new optional props to the interface and component signature**

Open `src/CategoryPage.tsx`. Replace the `CategoryPageProps` interface and component signature (lines 9–23) with:

```tsx
interface CategoryPageProps {
  type?: string;
  title?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoCanonical?: string;
  specTable?: React.ReactNode;
  internalLinks?: { name: string; path: string }[];
  country?: string;
  priceLink?: { label: string; path: string };
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  type: typeProp, title: titleProp, seoTitle: seoTitleProp,
  seoDescription: seoDescProp, seoCanonical: seoCanonicalProp,
  specTable, internalLinks, country, priceLink
}) => {
```

- [ ] **Step 2: Filter listings by country when the prop is set**

Find this line (currently line 34):
```tsx
const filtered = listings.filter(l => l.type === type || (type === 'X-Ray' && l.type === 'C-Arm'));
```

Replace it with:
```tsx
const filtered = listings.filter(l => {
  const typeMatch = l.type === type || (type === 'X-Ray' && l.type === 'C-Arm');
  const countryMatch = country ? l.country === country : true;
  return typeMatch && countryMatch;
});
```

- [ ] **Step 3: Update the hero subtitle to reflect country when set**

Find this line in the hero div (currently line 66):
```tsx
<p className="text-white/60 max-w-2xl">Verified refurbished {type.toLowerCase()} systems from global certified suppliers. ISO 13485 compliant refurbishment standards.</p>
```

Replace it with:
```tsx
<p className="text-white/60 max-w-2xl">
  {country
    ? `Verified ${type.toLowerCase()} available in ${country}. ISO 13485 compliant refurbishment standards.`
    : `Verified refurbished ${type.toLowerCase()} systems from global certified suppliers. ISO 13485 compliant refurbishment standards.`}
</p>
```

- [ ] **Step 4: Add the priceLink callout box after the specTable block**

Find this block (currently starting at line 73):
```tsx
{specTable && (
  <div className="mb-12 bg-white rounded-xl shadow-sm border border-navy/5 overflow-hidden">
```

Add the `priceLink` callout immediately before it:
```tsx
{priceLink && (
  <div className="mb-6 flex items-center gap-3 bg-teal/5 border border-teal/20 rounded-xl p-4">
    <span className="text-sm text-navy/70">Looking for price ranges?</span>
    <Link to={priceLink.path} className="text-sm font-bold text-teal hover:underline">
      {priceLink.label} →
    </Link>
  </div>
)}
{specTable && (
  <div className="mb-12 bg-white rounded-xl shadow-sm border border-navy/5 overflow-hidden">
```

- [ ] **Step 5: Update the BreadcrumbList schema to include country when set**

Find the schema array in the `<SEO>` component (line 57–60). Replace the BreadcrumbList entry with:

```tsx
{ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" },
  ...(country ? [{ "@type": "ListItem", "position": 2, "name": country, "item": `https://medicalequipment.africa/refurbished-medical-equipment-${country.toLowerCase().replace(/\s+/g, '-')}` }] : []),
  { "@type": "ListItem", "position": country ? 3 : 2, "name": title, "item": `https://medicalequipment.africa${seoCanonical}` }
]}
```

- [ ] **Step 6: Verify the build compiles**

```bash
npm run lint
```

Expected: no TypeScript errors.

- [ ] **Step 7: Commit**

```bash
git add src/CategoryPage.tsx
git commit -m "feat: add country and priceLink props to CategoryPage"
```

---

## Task 2: Extend `CountryPage` with `city`, `cityPageLinks`, `citySections`, `relatedLinks` props

**Files:**
- Modify: `src/CountryPage.tsx`

- [ ] **Step 1: Add the four new optional props to the interface and component signature**

Open `src/CountryPage.tsx`. Replace the `CountryPageProps` interface (lines 9–16) and component signature (lines 18–19) with:

```tsx
interface CitySection {
  city: string;
  description: string;
  complianceNote?: string;
}

interface CountryPageProps {
  country: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  seoCanonical: string;
  complianceNote: string;
  city?: string;
  cityPageLinks?: { name: string; path: string }[];
  citySections?: CitySection[];
  relatedLinks?: { label: string; path: string }[];
}

export const CountryPage: React.FC<CountryPageProps> = ({
  country, title, seoTitle, seoDescription, seoCanonical, complianceNote,
  city, cityPageLinks, citySections, relatedLinks
}) => {
```

- [ ] **Step 2: Add `relatedLinks` pill row to the hero — insert after the closing `</div>` of the hero `<p>` tag**

Find the hero section. It currently ends with:
```tsx
          <p className="text-white/60 max-w-2xl">Verified refurbished medical equipment available for import and local delivery in {country}. {complianceNote}</p>
        </div>
      </div>
```

Replace with:
```tsx
          <p className="text-white/60 max-w-2xl">
            {city
              ? `Verified medical equipment suppliers serving ${city}. ${complianceNote}`
              : `Verified refurbished medical equipment available for import and local delivery in ${country}. ${complianceNote}`}
          </p>
          {relatedLinks && relatedLinks.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {relatedLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
```

- [ ] **Step 3: Update the hero badge to show city when set**

Find:
```tsx
          <div className="inline-block bg-teal/20 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Regional Hub: {country}
          </div>
```

Replace with:
```tsx
          <div className="inline-block bg-teal/20 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            {city ? `${country} — ${city}` : `Regional Hub: ${country}`}
          </div>
```

- [ ] **Step 4: Add "Back to country" link for city pages — insert after the compliance block**

Find the compliance block:
```tsx
            <div className="bg-gold/10 border border-gold/20 p-6 rounded-xl mb-12 flex items-start gap-4">
              <div className="bg-gold text-white p-2 rounded-lg font-bold text-xs uppercase">Compliance</div>
              <p className="text-sm font-medium text-navy/80">{complianceNote} Our verified suppliers handle all necessary regulatory documentation for seamless customs clearance.</p>
            </div>
```

Replace with:
```tsx
            {city && (
              <div className="mb-4">
                <Link
                  to={`/refurbished-medical-equipment-${country.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-bold text-teal hover:underline"
                >
                  ← All {country} medical equipment suppliers
                </Link>
              </div>
            )}
            <div className="bg-gold/10 border border-gold/20 p-6 rounded-xl mb-12 flex items-start gap-4">
              <div className="bg-gold text-white p-2 rounded-lg font-bold text-xs uppercase">Compliance</div>
              <p className="text-sm font-medium text-navy/80">{complianceNote} Our verified suppliers handle all necessary regulatory documentation for seamless customs clearance.</p>
            </div>
```

- [ ] **Step 5: Add `citySections` blocks after the listings grid**

Find the closing tag of the listings grid block — right before the "Browse By Category" section:
```tsx
            <div className="mt-16 p-8 bg-clinical rounded-2xl border border-navy/5">
              <h3 className="font-bold mb-4 uppercase tracking-widest text-xs text-navy/40">Browse By Category</h3>
```

Insert before it:
```tsx
            {citySections && citySections.length > 0 && (
              <div className="mt-12 space-y-8">
                {citySections.map(section => (
                  <div key={section.city} className="bg-white rounded-2xl border border-navy/5 p-8 shadow-sm">
                    <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-3">
                      Medical Equipment Suppliers in {section.city}
                    </h2>
                    <p className="text-navy/70 mb-4">{section.description}</p>
                    {section.complianceNote && (
                      <div className="bg-gold/10 border border-gold/20 rounded-lg px-4 py-3 text-sm text-navy/70">
                        <span className="font-bold">Compliance note: </span>{section.complianceNote}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div className="mt-16 p-8 bg-clinical rounded-2xl border border-navy/5">
              <h3 className="font-bold mb-4 uppercase tracking-widest text-xs text-navy/40">Browse By Category</h3>
```

- [ ] **Step 6: Add `cityPageLinks` grid after the "Browse By Category" block**

Find the closing `</div>` of the "Browse By Category" block — right before the outer column closing `</div>`:
```tsx
            </div>

          </div>

          <div className="space-y-8">
```

Insert before the outer column `</div>`:
```tsx
            {cityPageLinks && cityPageLinks.length > 0 && (
              <div className="mt-8 p-8 bg-clinical rounded-2xl border border-navy/5">
                <h3 className="font-bold mb-4 uppercase tracking-widest text-xs text-navy/40">Find Suppliers in Your City</h3>
                <div className="flex flex-wrap gap-4">
                  {cityPageLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="bg-white px-4 py-2 rounded-lg text-sm font-bold border border-navy/5 hover:border-teal transition-colors"
                    >
                      {link.name} →
                    </Link>
                  ))}
                </div>
              </div>
            )}
```

- [ ] **Step 7: Verify the build compiles**

```bash
npm run lint
```

Expected: no TypeScript errors.

- [ ] **Step 8: Commit**

```bash
git add src/CountryPage.tsx
git commit -m "feat: add city, cityPageLinks, citySections, relatedLinks props to CountryPage"
```

---

## Task 3: Create `EquipmentPricingPage` component

**Files:**
- Create: `src/EquipmentPricingPage.tsx`

- [ ] **Step 1: Create the file with complete implementation**

Create `src/EquipmentPricingPage.tsx` with this full content:

```tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';
import { ShieldCheck, Clock, Award, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

export interface PriceRange {
  brand: string;
  entry: string;
  mid: string;
  premium: string;
  note: string;
}

export interface PricingFAQ {
  q: string;
  a: string;
}

interface EquipmentPricingPageProps {
  equipmentType: string;
  seoTitle: string;
  seoDescription: string;
  seoCanonical: string;
  priceRanges: PriceRange[];
  faqs: PricingFAQ[];
  categoryLink: { name: string; path: string };
  refurbishedDiscount: string;
}

function FAQItem({ q, a }: PricingFAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-navy/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-5 text-left font-bold text-navy hover:bg-clinical transition-colors"
      >
        <span>{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-teal flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-navy/40 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-navy/70 text-sm leading-relaxed border-t border-navy/5">
          {a}
        </div>
      )}
    </div>
  );
}

export const EquipmentPricingPage: React.FC<EquipmentPricingPageProps> = ({
  equipmentType, seoTitle, seoDescription, seoCanonical,
  priceRanges, faqs, categoryLink, refurbishedDiscount
}) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" },
      { "@type": "ListItem", "position": 2, "name": "Kenya", "item": "https://medicalequipment.africa/refurbished-medical-equipment-kenya-nairobi" },
      { "@type": "ListItem", "position": 3, "name": `${equipmentType} Prices Kenya`, "item": `https://medicalequipment.africa${seoCanonical}` }
    ]
  };

  const factors = [
    { icon: <ShieldCheck className="w-6 h-6 text-teal" />, label: 'Condition & Grade', desc: 'A/B/C grade certification affects price by up to 30%' },
    { icon: <Clock className="w-6 h-6 text-teal" />, label: 'Warranty Length', desc: '12-month vs 24-month warranty adds 8–15% to cost' },
    { icon: <Award className="w-6 h-6 text-teal" />, label: 'Brand & Model', desc: 'GE and Siemens carry a 15–25% premium over Mindray' },
    { icon: <Wrench className="w-6 h-6 text-teal" />, label: 'Machine Age & Hours', desc: 'Systems under 8 years with <20,000 hours command higher prices' },
  ];

  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={seoCanonical}
        schema={[faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-teal/20 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Prices updated March 2026
          </div>
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">
            {equipmentType} Prices in Kenya 2026
          </h1>
          <p className="text-white/60 max-w-2xl">
            Refurbished and new price ranges from verified suppliers. All prices in USD. Delivery to Kenya included.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">

            {/* Price range table */}
            <div className="bg-white rounded-2xl shadow-sm border border-navy/5 overflow-hidden">
              <div className="bg-clinical px-6 py-4 border-b border-navy/5">
                <h2 className="font-bold uppercase tracking-widest text-xs text-navy/50">
                  {equipmentType} Price Ranges — Refurbished (Kenya, 2026)
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-clinical/50">
                    <tr>
                      <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Brand</th>
                      <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Entry-level</th>
                      <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Mid-range</th>
                      <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Premium</th>
                      <th className="text-left p-4 font-bold text-navy/60 uppercase tracking-widest text-xs">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy/5">
                    {priceRanges.map(row => (
                      <tr key={row.brand} className="hover:bg-clinical/30 transition-colors">
                        <td className="p-4 font-bold text-navy">{row.brand}</td>
                        <td className="p-4 text-navy/70">{row.entry}</td>
                        <td className="p-4 text-navy/70">{row.mid}</td>
                        <td className="p-4 text-navy/70">{row.premium}</td>
                        <td className="p-4 text-navy/50 text-xs">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* New vs Refurbished */}
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">
                New vs Refurbished Cost Comparison
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-navy/10 rounded-2xl p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">New Equipment</div>
                  <div className="text-3xl font-black text-navy mb-2">Full Price</div>
                  <p className="text-sm text-navy/60">Factory new. Longest warranty. Highest upfront cost. Typical lead time 12–24 weeks.</p>
                </div>
                <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-teal mb-2">Certified Refurbished</div>
                  <div className="text-3xl font-black text-navy mb-2">{refurbishedDiscount}</div>
                  <p className="text-sm text-navy/60">ISO 13485 certified. 12–24 month warranty. Same clinical performance. 4–8 week delivery.</p>
                </div>
              </div>
            </div>

            {/* Factors */}
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">
                Factors That Affect Price
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {factors.map(f => (
                  <div key={f.label} className="flex gap-4 bg-white border border-navy/5 rounded-xl p-5 shadow-sm">
                    <div className="flex-shrink-0">{f.icon}</div>
                    <div>
                      <div className="font-bold text-navy mb-1">{f.label}</div>
                      <div className="text-sm text-navy/60">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map(faq => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>

            {/* Browse suppliers link */}
            <div className="bg-clinical rounded-2xl p-6 border border-navy/5">
              <p className="text-sm text-navy/60 mb-3">Ready to browse verified suppliers?</p>
              <Link to={categoryLink.path} className="text-teal font-bold hover:underline">
                Browse verified {categoryLink.name} in Africa →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <LeadForm equipmentType={equipmentType} />
            <div className="bg-navy text-white p-8 rounded-2xl">
              <h4 className="font-bold mb-4">Why Buy Refurbished?</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex gap-2"><span className="text-teal font-bold">✓</span>Up to 65% cost savings vs new</li>
                <li className="flex gap-2"><span className="text-teal font-bold">✓</span>PPB compliant documentation</li>
                <li className="flex gap-2"><span className="text-teal font-bold">✓</span>12–24 month warranty included</li>
                <li className="flex gap-2"><span className="text-teal font-bold">✓</span>Nairobi installation & training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
            Get Exact Pricing for Your Requirements
          </h2>
          <p className="text-white/60 mb-8">Our verified suppliers respond within 48 hours with a full data room and pricing.</p>
          <Link
            to="/request-verified-pricing-medical-equipment"
            className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-bold hover:bg-teal/90 transition-colors"
          >
            Request Verified Pricing →
          </Link>
        </div>
      </div>
    </Layout>
  );
};
```

- [ ] **Step 2: Verify the build compiles**

```bash
npm run lint
```

Expected: no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/EquipmentPricingPage.tsx
git commit -m "feat: create EquipmentPricingPage component"
```

---

## Task 4: Create `WholesaleKenyaPage`

**Files:**
- Create: `src/WholesaleKenyaPage.tsx`

- [ ] **Step 1: Create the file with complete implementation**

Create `src/WholesaleKenyaPage.tsx`:

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';
import { Building2, Landmark, Heart, Package, Stethoscope, Activity, Microscope, Bed } from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wholesale Medical Supplies Kenya",
  "description": "Wholesale and bulk medical equipment supply for hospitals, government facilities and NGOs in Kenya.",
  "provider": { "@type": "Organization", "name": "MedicalEquipment.Africa", "url": "https://medicalequipment.africa" },
  "areaServed": "Kenya",
  "serviceType": "Wholesale Medical Equipment Supply"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" },
    { "@type": "ListItem", "position": 2, "name": "Kenya", "item": "https://medicalequipment.africa/refurbished-medical-equipment-kenya-nairobi" },
    { "@type": "ListItem", "position": 3, "name": "Wholesale Medical Supplies Kenya", "item": "https://medicalequipment.africa/wholesale-medical-supplies-kenya" }
  ]
};

const audiences = [
  { icon: <Building2 className="w-7 h-7 text-teal" />, title: 'Private Hospitals', desc: 'Multi-site procurement teams sourcing equipment across Kenya.' },
  { icon: <Landmark className="w-7 h-7 text-teal" />, title: 'Government Facilities', desc: 'County and national government hospitals and health centres.' },
  { icon: <Heart className="w-7 h-7 text-teal" />, title: 'NGOs & Aid Organisations', desc: 'MSF, IMC, and other health NGOs procuring for field facilities.' },
];

const steps = [
  { n: '01', title: 'Submit Requirements', desc: 'Tell us what equipment you need, quantities, and delivery timeline.' },
  { n: '02', title: 'Receive Verified Quotes', desc: 'We match your requirements with 3+ verified suppliers and send a data room within 48 hours.' },
  { n: '03', title: 'Confirm and Ship', desc: 'Approve your preferred quote. Suppliers handle PPB documentation, KNRA clearance, and Nairobi delivery.' },
];

const categories = [
  { icon: <Activity className="w-5 h-5" />, name: 'Imaging Equipment' },
  { icon: <Microscope className="w-5 h-5" />, name: 'Laboratory Equipment' },
  { icon: <Bed className="w-5 h-5" />, name: 'Hospital Beds & Furniture' },
  { icon: <Stethoscope className="w-5 h-5" />, name: 'Diagnostic Devices' },
  { icon: <Package className="w-5 h-5" />, name: 'Surgical Equipment' },
  { icon: <Heart className="w-5 h-5" />, name: 'ICU & Critical Care' },
];

export const WholesaleKenyaPage: React.FC = () => (
  <Layout>
    <SEO
      title="Wholesale Medical Supplies Kenya | Bulk Orders for Hospitals & NGOs | MedicalEquipment.Africa"
      description="Wholesale medical equipment supply for hospitals, government facilities and NGOs in Kenya. Volume pricing on imaging, laboratory and surgical equipment. PPB compliant."
      canonical="/wholesale-medical-supplies-kenya"
      schema={[serviceSchema, breadcrumbSchema]}
    />

    {/* Hero */}
    <div className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="inline-block bg-teal/20 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          Wholesale & Bulk Orders
        </div>
        <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">
          Wholesale Medical Supplies in Kenya
        </h1>
        <p className="text-white/60 max-w-2xl">
          Volume pricing for hospitals, government health facilities, and NGOs. PPB compliant sourcing with verified suppliers and full import documentation.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">

          {/* Who this is for */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">Who This Is For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {audiences.map(a => (
                <div key={a.title} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
                  <div className="mb-3">{a.icon}</div>
                  <div className="font-bold text-navy mb-2">{a.title}</div>
                  <p className="text-sm text-navy/60">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">How It Works</h2>
            <div className="space-y-4">
              {steps.map(s => (
                <div key={s.n} className="flex gap-6 bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl font-black text-teal/30 flex-shrink-0">{s.n}</div>
                  <div>
                    <div className="font-bold text-navy mb-1">{s.title}</div>
                    <p className="text-sm text-navy/60">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">Equipment Categories Available</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map(c => (
                <div key={c.name} className="flex items-center gap-3 bg-white border border-navy/5 rounded-xl p-4 shadow-sm">
                  <span className="text-teal">{c.icon}</span>
                  <span className="text-sm font-bold text-navy">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MOQ callout */}
          <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6">
            <div className="font-bold text-navy mb-1">Minimum Order Information</div>
            <p className="text-sm text-navy/70">
              No minimum order for individual units. Volume pricing available for 5+ units of the same type. Contact us to discuss framework agreements for ongoing supply.
            </p>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-4">
            <Link to="/refurbished-medical-equipment-kenya-nairobi" className="text-sm font-bold text-teal hover:underline">
              ← Medical equipment suppliers in Kenya
            </Link>
            <Link to="/refurbished-medical-equipment-catalogue-africa" className="text-sm font-bold text-teal hover:underline">
              Browse full catalogue →
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <LeadForm />
        </div>
      </div>
    </div>
  </Layout>
);
```

- [ ] **Step 2: Verify**

```bash
npm run lint
```

Expected: no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/WholesaleKenyaPage.tsx
git commit -m "feat: create WholesaleKenyaPage"
```

---

## Task 5: Create `SellEquipmentSAPage`

**Files:**
- Create: `src/SellEquipmentSAPage.tsx`

- [ ] **Step 1: Create the file with complete implementation**

Create `src/SellEquipmentSAPage.tsx`:

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';
import { CheckCircle, Users, Tag, Globe } from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Sell Used Medical Equipment South Africa",
  "description": "List your used or second-hand medical equipment with Africa's verified B2B buyer network.",
  "provider": { "@type": "Organization", "name": "MedicalEquipment.Africa", "url": "https://medicalequipment.africa" },
  "areaServed": "South Africa",
  "serviceType": "Used Medical Equipment Marketplace"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalequipment.africa" },
    { "@type": "ListItem", "position": 2, "name": "South Africa", "item": "https://medicalequipment.africa/refurbished-medical-equipment-south-africa" },
    { "@type": "ListItem", "position": 3, "name": "Sell Medical Equipment South Africa", "item": "https://medicalequipment.africa/sell-medical-equipment-south-africa" }
  ]
};

const accepted = [
  'Imaging equipment (CT, MRI, X-ray, Ultrasound)',
  'Laboratory & diagnostic analysers',
  'Hospital beds & patient furniture',
  'Surgical & theatre equipment',
  'ICU & critical care monitors',
  'Physiotherapy & rehabilitation equipment',
];

const steps = [
  { n: '01', title: 'Submit Details', desc: 'Tell us the equipment type, brand, model, year, condition, and your location in South Africa.' },
  { n: '02', title: 'We Verify & Value', desc: 'Our team verifies the equipment details and provides a fair market valuation within 48 hours.' },
  { n: '03', title: 'Listed to 500+ Buyers', desc: 'Your equipment is listed to our verified network of hospital procurement teams across Africa.' },
];

const trustPoints = [
  { icon: <Users className="w-6 h-6 text-teal" />, title: 'Verified Buyer Network', desc: 'Access to 500+ vetted hospital and clinic procurement managers across Africa.' },
  { icon: <Tag className="w-6 h-6 text-teal" />, title: 'No Upfront Fees', desc: 'Listing is free. We charge a small success fee only when your equipment sells.' },
  { icon: <Globe className="w-6 h-6 text-teal" />, title: 'Pan-Africa Reach', desc: 'Buyers from Kenya, Nigeria, Ghana, Tanzania, and 20+ other African markets.' },
];

export const SellEquipmentSAPage: React.FC = () => (
  <Layout>
    <SEO
      title="Sell Used Medical Equipment South Africa | SAHPRA Compliant | MedicalEquipment.Africa"
      description="Sell your second-hand medical equipment in South Africa. Access 500+ verified buyers across Africa. Free listing, SAHPRA compliant, no upfront fees."
      canonical="/sell-medical-equipment-south-africa"
      schema={[serviceSchema, breadcrumbSchema]}
    />

    {/* Hero */}
    <div className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="inline-block bg-teal/20 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          South Africa — Sell Equipment
        </div>
        <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">
          Sell Your Used Medical Equipment in South Africa
        </h1>
        <p className="text-white/60 max-w-2xl">
          We connect South African sellers with verified buyers across Africa. Free listing. No upfront fees.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">

          {/* What we accept */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">What Equipment We Accept</h2>
            <div className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
              <ul className="space-y-3">
                {accepted.map(item => (
                  <li key={item} className="flex items-center gap-3 text-navy/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-navy/5 text-xs text-navy/50">
                Minimum condition: functional with documented service history. SAHPRA-registered equipment preferred.
              </div>
            </div>
          </div>

          {/* How to list */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">How to List Your Equipment</h2>
            <div className="space-y-4">
              {steps.map(s => (
                <div key={s.n} className="flex gap-6 bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl font-black text-teal/30 flex-shrink-0">{s.n}</div>
                  <div>
                    <div className="font-bold text-navy mb-1">{s.title}</div>
                    <p className="text-sm text-navy/60">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why list with us */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-navy mb-6">Why List With Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {trustPoints.map(tp => (
                <div key={tp.title} className="bg-white border border-navy/5 rounded-2xl p-6 shadow-sm">
                  <div className="mb-3">{tp.icon}</div>
                  <div className="font-bold text-navy mb-2">{tp.title}</div>
                  <p className="text-sm text-navy/60">{tp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buy side link */}
          <div className="bg-clinical rounded-2xl p-6 border border-navy/5">
            <p className="text-sm text-navy/60 mb-2">Looking to buy instead?</p>
            <Link to="/refurbished-medical-equipment-south-africa" className="text-sm font-bold text-teal hover:underline">
              Browse medical equipment for sale in South Africa →
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-navy/5">
            <div className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-3">Submit Your Equipment</div>
            <p className="text-sm text-navy/60 mb-4">Fill in the form and our team will respond within 48 hours with a valuation and next steps.</p>
          </div>
          <LeadForm />
        </div>
      </div>
    </div>
  </Layout>
);
```

- [ ] **Step 2: Verify**

```bash
npm run lint
```

Expected: no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/SellEquipmentSAPage.tsx
git commit -m "feat: create SellEquipmentSAPage"
```

---

## Task 6: Wire all routes in `App.tsx` and update existing routes

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Add new imports at the top of `App.tsx`**

Find the existing imports block. Add three new imports after the existing page imports:

```tsx
import { EquipmentPricingPage } from './EquipmentPricingPage';
import { WholesaleKenyaPage } from './WholesaleKenyaPage';
import { SellEquipmentSAPage } from './SellEquipmentSAPage';
```

- [ ] **Step 2: Add the 3 equipment pricing routes**

Find the comment `{/* Countries */}` in the Routes block. Insert the following immediately before it:

```tsx
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
```

- [ ] **Step 3: Add lab equipment Kenya and hospital beds SA routes**

Find the comment `{/* Countries */}` again. Insert immediately before it (after the pricing routes just added):

```tsx
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
```

- [ ] **Step 4: Add city pages for Johannesburg and Pretoria**

Find the existing South Africa country route:
```tsx
          <Route path="/refurbished-medical-equipment-south-africa" element={
```

Insert these two new routes immediately after the South Africa route's closing `} />`:

```tsx
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
```

- [ ] **Step 5: Add wholesale and sell routes**

Find the `{/* Other Pages */}` comment. Insert these two routes before it:

```tsx
          {/* Content pages */}
          <Route path="/wholesale-medical-supplies-kenya" element={<WholesaleKenyaPage />} />
          <Route path="/sell-medical-equipment-south-africa" element={<SellEquipmentSAPage />} />
```

- [ ] **Step 6: Enrich the Nigeria route with `citySections`**

Find the existing Nigeria route:
```tsx
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
```

Replace it with:
```tsx
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
```

- [ ] **Step 7: Enrich the Kenya route with `relatedLinks`**

Find the existing Kenya route:
```tsx
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
```

Replace it with:
```tsx
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
```

- [ ] **Step 8: Enrich the South Africa route with `cityPageLinks`**

Find the existing South Africa route:
```tsx
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
```

Replace it with:
```tsx
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
```

- [ ] **Step 9: Verify the full build compiles**

```bash
npm run lint
```

Expected: no TypeScript errors.

- [ ] **Step 10: Run the dev server and manually verify all 9 new routes load**

```bash
npm run dev
```

Navigate to each of these URLs and confirm the page renders without errors:
- `http://localhost:3000/ultrasound-machine-price-kenya`
- `http://localhost:3000/x-ray-machine-price-kenya`
- `http://localhost:3000/mri-machine-price-kenya`
- `http://localhost:3000/laboratory-equipment-suppliers-kenya`
- `http://localhost:3000/hospital-beds-south-africa`
- `http://localhost:3000/medical-equipment-suppliers-johannesburg`
- `http://localhost:3000/medical-equipment-suppliers-pretoria`
- `http://localhost:3000/wholesale-medical-supplies-kenya`
- `http://localhost:3000/sell-medical-equipment-south-africa`

Also verify the 3 enriched existing pages:
- `http://localhost:3000/used-medical-equipment-nigeria-lagos-abuja` — should show Lagos and Abuja H2 sections
- `http://localhost:3000/refurbished-medical-equipment-kenya-nairobi` — should show related links pill row in hero
- `http://localhost:3000/refurbished-medical-equipment-south-africa` — should show "Find Suppliers in Your City" grid

- [ ] **Step 11: Commit**

```bash
git add src/App.tsx
git commit -m "feat: wire 9 new SEO pages and enrich Nigeria, Kenya, SA routes"
```

---

## Self-Review Notes

- All 9 new routes from spec section 6 are covered: ultrasound/x-ray/MRI pricing, lab Kenya, hospital beds SA, JHB, Pretoria, wholesale Kenya, sell SA ✅
- All 3 existing page enrichments covered: Nigeria citySections, Kenya relatedLinks, SA cityPageLinks ✅
- `EquipmentPricingPage` props match throughout Tasks 3 and 6 ✅
- `WholesaleKenyaPage` and `SellEquipmentSAPage` use existing `LeadForm` component — no new form ✅
- `CategoryPage` `country` filter added, `priceLink` callout added ✅
- `CountryPage` all 4 new props implemented ✅
- No Lagos/Abuja separate pages created — city sections only ✅
- Cannibalization guardrails maintained: pricing pages link TO category pages, not the reverse ✅
