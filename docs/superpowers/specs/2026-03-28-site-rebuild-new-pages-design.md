# Site Rebuild — New Pages & Enrichments Design
**Date:** 2026-03-28
**Status:** Approved
**Scope:** 9 new pages + 3 existing page enrichments

---

## Context

Phase 2 SEO keyword validation (DataForSEO) produced 160 validated keywords across Kenya, Nigeria, South Africa, Ghana. This spec covers the full implementation: 9 new pages and enrichments to 3 existing pages. Cannibalization audit completed — `seo-audit/13-cannibalization-audit.md` is the authority on keyword ownership.

---

## Approach

**Option A — extend existing components.** Add optional props to `CategoryPage` and `CountryPage`. Create one new component (`EquipmentPricingPage`) for the pricing pages. Two standalone content pages (`WholesaleKenyaPage`, `SellEquipmentSAPage`). All new routes registered in `App.tsx`.

---

## 1. New Component: `EquipmentPricingPage`

**File:** `src/EquipmentPricingPage.tsx`

**Used by:** `/ultrasound-machine-price-kenya`, `/x-ray-machine-price-kenya`, `/mri-machine-price-kenya`

### Props

```ts
interface PriceRange {
  brand: string;
  entry: string;   // e.g. "$8,000 – $12,000"
  mid: string;     // e.g. "$12,000 – $20,000"
  premium: string; // e.g. "$20,000 – $35,000"
  note: string;    // e.g. "portable units only"
}

interface FAQ {
  q: string;
  a: string;
}

interface EquipmentPricingPageProps {
  equipmentType: string;         // e.g. "Ultrasound Machine"
  seoTitle: string;
  seoDescription: string;
  seoCanonical: string;
  priceRanges: PriceRange[];
  faqs: FAQ[];
  categoryLink: { name: string; path: string };
  refurbishedDiscount: string;   // e.g. "40–60% less than new"
}
```

### Page Layout (top to bottom)

1. **Hero** — navy background. Badge: "Prices updated March 2026". H1: "[EquipmentType] Prices in Kenya 2026". Subtext: "Refurbished and new price ranges from verified suppliers. All prices in USD, delivery to Kenya included."

2. **Price range table** — white card. Columns: Brand | Entry-level (refurbished) | Mid-range (refurbished) | Premium (refurbished) | Notes. One row per brand from `priceRanges` prop.

3. **New vs Refurbished callout** — two-column comparison block. Left: "New equipment" with typical new price. Right: "Refurbished (certified)" with range and the `refurbishedDiscount` saving callout in teal.

4. **Factors affecting price** — 4-item icon grid using lucide-react icons: Condition & Grade / Warranty Length / Brand & Model / Machine Age & Hours.

5. **FAQ section** — renders each `faqs[]` item as an accordion or static Q&A. Includes FAQPage JSON-LD schema.

6. **CTA block** — navy background. Heading: "Get exact pricing for your requirements". Button: "Request verified pricing" → `/request-verified-pricing-medical-equipment`. Secondary link: `categoryLink` → "Browse verified [name] in Africa →"

### Schema

- `FAQPage` schema from `faqs[]`
- `BreadcrumbList`: Home → [equipmentType] Prices Kenya

---

## 2. `CategoryPage` Extensions

**File:** `src/CategoryPage.tsx` — add two optional props.

```ts
country?: string;
// When set: filters listings by l.country === country
// Changes subtitle: "Available in [country]"
// Adjusts BreadcrumbList schema to include country

priceLink?: { label: string; path: string };
// When set: renders a teal callout box near top of content:
// "Looking for price ranges? → [label]"
// Keeps pricing content on the pricing page, not the category page.
```

### New routes using extended CategoryPage

```tsx
// /laboratory-equipment-suppliers-kenya
<CategoryPage
  type="Lab Equipment"
  country="Kenya"
  title="Laboratory Equipment Suppliers in Kenya"
  seoTitle="Laboratory Equipment Suppliers in Kenya | Haematology, Biochemistry | Nairobi"
  seoDescription="Verified laboratory equipment suppliers in Kenya. Haematology, biochemistry and immunology analysers from Mindray, Sysmex and Roche. PPB compliant, Nairobi delivery."
  seoCanonical="/laboratory-equipment-suppliers-kenya"
  priceLink={{ label: "Lab equipment price list", path: "/refurbished-medical-equipment-catalogue-africa" }}
  internalLinks={[
    { name: 'All Lab Equipment Africa', path: '/used-laboratory-equipment-africa' },
    { name: 'Medical Equipment Kenya', path: '/refurbished-medical-equipment-kenya-nairobi' }
  ]}
/>

// /hospital-beds-south-africa
// NOTE: "Hospital Bed" type must exist in the Google Sheet (SHEET_ID: 1gTCUhVZ9HCofyoLNVP60l0SPp-ShzY43).
// If no listings exist yet, the page renders with empty listings + a "Submit your equipment" CTA.
<CategoryPage
  type="Hospital Bed"
  country="South Africa"
  title="Hospital Beds for Sale in South Africa"
  seoTitle="Hospital Beds for Sale in South Africa | New & Used | Johannesburg & Cape Town Delivery"
  seoDescription="New and used hospital beds for South African hospitals. Electric, manual and ICU beds from verified suppliers. Delivery to Johannesburg, Cape Town and Durban."
  seoCanonical="/hospital-beds-south-africa"
  internalLinks={[
    { name: 'Medical Equipment South Africa', path: '/refurbished-medical-equipment-south-africa' },
    { name: 'Suppliers Johannesburg', path: '/medical-equipment-suppliers-johannesburg' }
  ]}
/>
```

---

## 3. `CountryPage` Extensions

**File:** `src/CountryPage.tsx` — add three optional props.

```ts
city?: string;
// When set:
// - H1 becomes "Medical Equipment Suppliers in [city]"
// - Adds city intro paragraph
// - Adds "← Back to all [country] suppliers" link to country page
// - Listings still filter by country (city pages show country-level stock)

cityPageLinks?: { name: string; path: string }[];
// When set on a country page: renders "Find suppliers in your city" grid
// below the compliance block. Each item is a link card.

citySections?: { city: string; description: string; complianceNote?: string }[];
// When set: renders H2 sections within the page body, one per city.
// Used on Nigeria page for Lagos + Abuja sections.

relatedLinks?: { label: string; path: string }[];
// When set: renders a "Related resources" pill row beneath the hero.
// Used on Kenya page to link to pricing pages and lab equipment page.
```

### New routes using extended CountryPage (city pages)

```tsx
// /medical-equipment-suppliers-johannesburg
<CountryPage
  country="South Africa"
  city="Johannesburg"
  title="Medical Equipment Suppliers in Johannesburg"
  seoTitle="Medical Equipment Suppliers in Johannesburg | SAHPRA Compliant | Same-Day Quotes"
  seoDescription="Verified medical equipment suppliers in Johannesburg. CT scanners, MRI, ultrasound and lab equipment. SAHPRA compliant, Gauteng delivery."
  seoCanonical="/medical-equipment-suppliers-johannesburg"
  complianceNote="SAHPRA Section 21 compliant. Gauteng delivery available."
/>

// /medical-equipment-suppliers-pretoria
<CountryPage
  country="South Africa"
  city="Pretoria"
  title="Medical Equipment Suppliers in Pretoria"
  seoTitle="Medical Equipment Suppliers in Pretoria | SAHPRA Compliant | Tshwane Delivery"
  seoDescription="Verified medical equipment suppliers in Pretoria and Tshwane. CT scanners, MRI, ultrasound and lab equipment. SAHPRA compliant."
  seoCanonical="/medical-equipment-suppliers-pretoria"
  complianceNote="SAHPRA Section 21 compliant. Pretoria / Tshwane delivery available."
/>
```

---

## 4. New Standalone Pages

### `WholesaleKenyaPage.tsx`

**Route:** `/wholesale-medical-supplies-kenya`
**Target keyword:** "wholesale medical supplies kenya" (110/mo, $0.48 CPC)

Sections:
1. Hero — "Wholesale Medical Supplies in Kenya". Subtext: for hospitals, NGOs, government procurement teams.
2. "Who this is for" — 3 cards: Private hospitals / Government facilities / NGOs & aid organisations
3. "How it works" — 3-step process: Submit requirements → Receive verified quotes → Confirm and ship
4. Equipment categories available — grid of 6 equipment types with icons
5. Minimum order info — callout: "No minimum order for individual units. Volume pricing available for 5+ units of the same type."
6. CTA — uses existing `LeadForm` component. Pre-fill subject line "Wholesale enquiry — Kenya".
7. Internal links → Kenya country page, catalogue page

Schema: `Service` type, `BreadcrumbList`

---

### `SellEquipmentSAPage.tsx`

**Route:** `/sell-medical-equipment-south-africa`
**Target keyword:** "where to sell second hand medical equipment south africa" (70/mo, $1.00 CPC)

Sections:
1. Hero — "Sell Your Used Medical Equipment in South Africa". Subtext: "We connect sellers with verified buyers across Africa."
2. "What we accept" — list: imaging equipment, lab equipment, hospital beds, surgical equipment. Min condition: functional with documented service history.
3. "How to list" — 3 steps: Submit details → We verify & value → Listed to 500+ buyers
4. "Why list with us" — 3 trust points: verified buyer network, no upfront fees, pan-Africa reach
5. CTA — uses existing `LeadForm` component (no new form built). Pre-fill subject line "Sell equipment — South Africa".
6. Internal link → SA country page ("Looking to buy? →")

Schema: `Service` type, `BreadcrumbList`

---

## 5. Existing Page Enrichments

### Nigeria page (`/used-medical-equipment-nigeria-lagos-abuja`)

Add `citySections` prop:
```tsx
citySections={[
  {
    city: "Lagos",
    description: "Lagos is Nigeria's largest medical equipment market. Suppliers are concentrated in Ikeja, Lagos Island, and Victoria Island. Most verified suppliers offer same-day quotes for Lagos delivery.",
    complianceNote: "NAFDAC registration required for all medical devices imported through Lagos ports."
  },
  {
    city: "Abuja",
    description: "Abuja (FCT) is the primary procurement hub for government hospitals and federal health facilities. Suppliers serve Abuja directly from Lagos stock with 24–48 hour delivery.",
    complianceNote: "Federal procurement requires SONCAP pre-shipment certification."
  }
]}
```

### Kenya page (`/refurbished-medical-equipment-kenya-nairobi`)

Add `relatedLinks` prop — renders a "Related resources" row beneath the hero:
```tsx
relatedLinks={[
  { label: "Ultrasound prices in Kenya", path: "/ultrasound-machine-price-kenya" },
  { label: "X-ray machine prices", path: "/x-ray-machine-price-kenya" },
  { label: "MRI machine prices", path: "/mri-machine-price-kenya" },
  { label: "Lab equipment suppliers", path: "/laboratory-equipment-suppliers-kenya" }
]}
```

### SA country page (`/refurbished-medical-equipment-south-africa`)

Add `cityPageLinks` prop:
```tsx
cityPageLinks={[
  { name: "Johannesburg", path: "/medical-equipment-suppliers-johannesburg" },
  { name: "Pretoria", path: "/medical-equipment-suppliers-pretoria" }
]}
```

---

## 6. App.tsx — New Routes

9 new routes to add:

```tsx
<Route path="/ultrasound-machine-price-kenya" element={<EquipmentPricingPage ... />} />
<Route path="/x-ray-machine-price-kenya" element={<EquipmentPricingPage ... />} />
<Route path="/mri-machine-price-kenya" element={<EquipmentPricingPage ... />} />
<Route path="/laboratory-equipment-suppliers-kenya" element={<CategoryPage ... />} />
<Route path="/hospital-beds-south-africa" element={<CategoryPage ... />} />
<Route path="/medical-equipment-suppliers-johannesburg" element={<CountryPage ... />} />
<Route path="/medical-equipment-suppliers-pretoria" element={<CountryPage ... />} />
<Route path="/wholesale-medical-supplies-kenya" element={<WholesaleKenyaPage />} />
<Route path="/sell-medical-equipment-south-africa" element={<SellEquipmentSAPage />} />
```

---

## 7. Price Range Data

Price ranges to hard-code into `App.tsx` route props for the 3 pricing pages:

### Ultrasound Machine Prices Kenya
| Brand | Entry (refurb) | Mid (refurb) | Premium (refurb) | Note |
|---|---|---|---|---|
| Mindray | $4,000–$8,000 | $8,000–$15,000 | $15,000–$25,000 | Most common in Kenya |
| GE | $6,000–$12,000 | $12,000–$22,000 | $22,000–$40,000 | Wide range available |
| Philips | $7,000–$14,000 | $14,000–$25,000 | $25,000–$45,000 | Strong after-sales |
| Samsung | $4,500–$9,000 | $9,000–$16,000 | $16,000–$28,000 | Good mid-market value |

Refurbished discount: "50–65% less than new"

### X-Ray Machine Prices Kenya
| Brand | Entry (refurb) | Mid (refurb) | Premium (refurb) | Note |
|---|---|---|---|---|
| Mindray | $5,000–$9,000 | $9,000–$18,000 | $18,000–$30,000 | Digital DR systems |
| GE | $7,000–$14,000 | $14,000–$25,000 | $25,000–$45,000 | Fixed & mobile units |
| Siemens | $8,000–$16,000 | $16,000–$28,000 | $28,000–$50,000 | Premium build quality |
| Philips | $7,500–$15,000 | $15,000–$26,000 | $26,000–$48,000 | DR & CR systems |

Refurbished discount: "45–60% less than new"

### MRI Machine Prices Kenya
| Brand | Entry (refurb) | Mid (refurb) | Premium (refurb) | Note |
|---|---|---|---|---|
| GE | $80,000–$150,000 | $150,000–$250,000 | $250,000–$400,000 | 1.5T systems |
| Siemens | $90,000–$160,000 | $160,000–$280,000 | $280,000–$450,000 | 1.5T & 3T |
| Philips | $85,000–$155,000 | $155,000–$260,000 | $260,000–$420,000 | Wide bore options |

Refurbished discount: "40–55% less than new"

---

## 8. FAQ Data

### Ultrasound FAQs
1. Q: "How much does an ultrasound machine cost in Kenya?" A: "Refurbished ultrasound machines in Kenya range from $4,000 for entry-level portable units to $45,000 for premium console systems. The most popular mid-range systems (Mindray and Samsung) sell for $8,000–$16,000."
2. Q: "Is a refurbished ultrasound machine reliable?" A: "Yes — certified refurbished machines undergo full component inspection, probe testing and software updates. Our suppliers provide 12–24 month warranties and PPB-compliant documentation."
3. Q: "Can I get an ultrasound machine delivered to Nairobi?" A: "Yes. All verified suppliers offer delivery to Nairobi and major Kenyan towns. Installation and training are included."

### X-Ray FAQs
1. Q: "How much does an X-ray machine cost in Kenya?" A: "Refurbished digital X-ray machines in Kenya range from $5,000 for entry-level mobile units to $50,000 for premium fixed room systems. A standard digital DR room system costs $9,000–$18,000."
2. Q: "Do I need KNRA approval for an X-ray machine in Kenya?" A: "Yes — all X-ray equipment requires Kenya Nuclear Regulatory Authority (KNRA) radiation clearance. Our verified suppliers provide all documentation required for KNRA approval."
3. Q: "What is the difference between CR and DR X-ray?" A: "CR (Computed Radiography) uses cassette-based plates and is lower cost ($5,000–$12,000). DR (Digital Radiography) captures images directly to a flat panel detector and is faster and higher quality ($9,000–$50,000)."

### MRI FAQs
1. Q: "How much does an MRI machine cost in Kenya?" A: "Refurbished MRI machines in Kenya start at $80,000 for entry-level 1.5T systems and reach $450,000 for premium 3T systems. Most Kenyan facilities purchase 1.5T systems in the $150,000–$250,000 range."
2. Q: "What is included in the price of a refurbished MRI?" A: "Our prices include the system, shipping to Kenya, installation, site planning support, and a 12–24 month warranty. KNRA radiation clearance documentation is also provided."
3. Q: "How long does it take to install an MRI machine in Kenya?" A: "Installation typically takes 4–8 weeks from delivery. This includes site preparation, magnet energisation, shimming, and staff training."

---

## Cannibalization Guardrails (summary)

- Pricing pages: no supplier directory content, no H2 "suppliers in Kenya" — link TO category pages
- Category pages with `country` prop: no price range tables — link TO pricing pages via `priceLink`
- City pages (JHB/Pretoria): no "South Africa" country-level keywords as primary H1/H2
- Nigeria page: Lagos + Abuja as H2 sections only — no separate city pages
- Kenya page `relatedLinks`: navigation row only, no duplicated keyword content
- Full ownership map: `seo-audit/13-cannibalization-audit.md`

---

## Files Changed

| File | Change |
|---|---|
| `src/EquipmentPricingPage.tsx` | Create new |
| `src/WholesaleKenyaPage.tsx` | Create new |
| `src/SellEquipmentSAPage.tsx` | Create new |
| `src/CategoryPage.tsx` | Add `country?`, `priceLink?` props |
| `src/CountryPage.tsx` | Add `city?`, `cityPageLinks?`, `citySections?`, `relatedLinks?` props |
| `src/App.tsx` | Add 9 new routes, update 3 existing routes with new props |
