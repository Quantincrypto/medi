# Schema Audit — MedicalEquipment.Africa

**Date:** 2026-03-27
**Source:** Code audit of `/src` (React SPA, schema injected via `react-helmet-async`)

---

## 1. Schema Types Found — Verdict

| Schema Type | Page(s) | Verdict | Notes |
|---|---|---|---|
| `WebSite` | Homepage | ⚠️ WEAK | Present. Missing `SearchAction` (sitelinks search box) |
| `Organization` | Homepage | ⚠️ WEAK | Present. Missing `sameAs`, `address`, `foundingDate` |
| `CollectionPage` | Category pages, Country pages | ✅ USEFUL | Correctly applied to listing pages |
| `BreadcrumbList` | Category, Country, Product pages | ✅ USEFUL | Correctly structured, 2–3 levels deep |
| `ItemList` + `Product` (nested) | Category & Country pages | ✅ USEFUL | Products listed inside ItemList — good directory pattern |
| `Product` | Individual product pages | ⚠️ WEAK | Present but missing `Offer` (no price, condition, availability) |
| `FAQPage` | FAQ page | ✅ USEFUL | Correctly structured with Question/Answer pairs |
| `LocalBusiness` | Nowhere | ❌ MISSING | HIGH PRIORITY — no address, telephone, or location signals |
| `SearchAction` on WebSite | Nowhere | ❌ MISSING | HIGH PRIORITY — enables Google Sitelinks search box |
| `OfferCatalog` | Nowhere | ❌ MISSING | Would strengthen directory/marketplace positioning |
| `HowTo` | Nowhere | ❌ MISSING | "How It Works" section on homepage is a natural fit |
| `ItemList` on Homepage | Nowhere | ❌ MISSING | Homepage lists categories and countries — not wrapped in schema |

---

## 2. Detailed Findings

### WebSite (Homepage) — WEAK
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://medicalequipment.africa/#website",
  "url": "https://medicalequipment.africa",
  "name": "MedicalEquipment.Africa",
  "description": "Africa's verified B2B directory for ISO 13485 certified refurbished medical equipment"
}
```
**Issue:** Missing `potentialAction` (SearchAction). Google uses this for Sitelinks Searchbox in SERPs.

### Organization (Homepage) — WEAK
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://medicalequipment.africa/#organization",
  "name": "MedicalEquipment.Africa",
  "url": "https://medicalequipment.africa",
  "logo": "https://medicalequipment.africa/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+447777100397",
    "contactType": "sales",
    "areaServed": "Africa"
  }
}
```
**Issues:**
- No `sameAs` links (LinkedIn, Facebook, Twitter/X)
- No physical `address` (PostalAddress)
- No `foundingDate`
- Logo path `/logo.png` — verify this file exists

### Product (ProductPage) — WEAK
Missing `Offer` sub-schema. Google cannot generate price rich results without it.

---

## 3. HIGH PRIORITY Missing Schema — JSON-LD Code

### 3a. WebSite with SearchAction (add to Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://medicalequipment.africa/#website",
  "url": "https://medicalequipment.africa",
  "name": "MedicalEquipment.Africa",
  "description": "Africa's verified B2B directory for ISO 13485 certified refurbished medical equipment",
  "publisher": { "@id": "https://medicalequipment.africa/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://medicalequipment.africa/refurbished-medical-equipment-catalogue-africa?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### 3b. LocalBusiness (add to Homepage)
**[ACTION NEEDED]** — fill in your registered business address, opening hours, and social media profile URLs.
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalOrganization"],
  "@id": "https://medicalequipment.africa/#localbusiness",
  "name": "MedicalEquipment.Africa",
  "url": "https://medicalequipment.africa",
  "telephone": "+447777100397",
  "email": "[ACTION NEEDED: your contact email]",
  "description": "Africa's verified B2B directory for ISO 13485 certified refurbished medical equipment",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[ACTION NEEDED]",
    "addressLocality": "[ACTION NEEDED: city]",
    "addressCountry": "[ACTION NEEDED: country code, e.g. GB or KE]"
  },
  "areaServed": {
    "@type": "Continent",
    "name": "Africa"
  },
  "sameAs": [
    "[ACTION NEEDED: LinkedIn URL]",
    "[ACTION NEEDED: Facebook URL]",
    "[ACTION NEEDED: Twitter/X URL]"
  ]
}
```

### 3c. Offer on Product pages (add to ProductPage.tsx)
Add inside the existing `Product` schema block:
```json
"offers": {
  "@type": "Offer",
  "availability": "https://schema.org/InStock",
  "itemCondition": "https://schema.org/RefurbishedCondition",
  "priceCurrency": "USD",
  "price": "[ACTION NEEDED: price or price range]",
  "seller": {
    "@type": "Organization",
    "name": "MedicalEquipment.Africa"
  }
}
```

### 3d. OfferCatalog on Homepage
```json
{
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Refurbished Medical Equipment Africa",
  "description": "Verified refurbished medical equipment for African hospitals — CT scanners, MRI, ultrasound, X-ray and lab equipment",
  "url": "https://medicalequipment.africa/refurbished-medical-equipment-catalogue-africa",
  "numberOfItems": 28,
  "itemListElement": [
    { "@type": "OfferCatalog", "name": "CT Scanners", "url": "https://medicalequipment.africa/refurbished-ct-scanners-africa" },
    { "@type": "OfferCatalog", "name": "MRI Machines", "url": "https://medicalequipment.africa/used-mri-machines-africa" },
    { "@type": "OfferCatalog", "name": "Ultrasound", "url": "https://medicalequipment.africa/refurbished-ultrasound-machines-africa" },
    { "@type": "OfferCatalog", "name": "X-Ray Systems", "url": "https://medicalequipment.africa/used-digital-x-ray-systems-africa" },
    { "@type": "OfferCatalog", "name": "Laboratory Equipment", "url": "https://medicalequipment.africa/used-laboratory-equipment-africa" }
  ]
}
```

---

## 4. Priority Implementation Order

| Priority | Schema | Impact | Effort |
|---|---|---|---|
| 1 | SearchAction on WebSite | Enables Sitelinks Searchbox in Google SERPs | Low — 1 code change |
| 2 | LocalBusiness | Improves local/geo relevance signals | Low — needs address data |
| 3 | Offer on Product pages | Unlocks price rich results | Medium — needs price data |
| 4 | OfferCatalog on Homepage | Reinforces marketplace positioning | Low — static data |
| 5 | sameAs on Organization | Strengthens entity recognition | Low — needs social URLs |

---

*Schema implementation file: `/src/components/SEO.tsx` — inject via the `schema` prop on the `<SEO>` component in `Home.tsx` and `ProductPage.tsx`.*
