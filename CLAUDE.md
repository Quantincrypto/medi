# MedicalEquipment.Africa — Operating Manual

This file is the master reference for all work on this codebase. Read it before every session.

---

## What This Business Is

**MedicalEquipment.Africa** is a UK-based verified B2B directory connecting African hospitals and diagnostic centres with ISO 13485 certified suppliers of refurbished medical equipment. The business model is lead generation: buyers submit inquiries via the lead form, and verified suppliers pay for listed and sponsored placements.

**Core value proposition:** Trust. African healthcare buyers cannot easily verify foreign refurbishers. We are the trust layer — vetting suppliers, confirming certifications, and simplifying compliance for each country.

**Contact / WhatsApp:** +447777100397  
**Live site:** https://www.medicalequipment.africa (canonical is **www**)
**Vercel deployment** — push to `main` → auto-deploys. No manual build step needed.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | TailwindCSS v4 (no config file — uses `@tailwindcss/vite` plugin) |
| Routing | React Router v7 |
| SEO | react-helmet-async |
| Icons | lucide-react |
| CMS | Google Sheets (CSV fetch at runtime) |
| Hosting | Vercel |

**Run locally:**
```bash
npm install
# Add GEMINI_API_KEY to .env.local if using AI features
npm run dev        # runs on port 3000
npm run build      # production build
npm run lint       # TypeScript type-check only (tsc --noEmit)
```

---

## Data Architecture

### Listings (live data)
Listings are fetched at runtime from a public Google Sheet:
- **Sheet ID:** `144C6VfqcM-YaTr2dx01MHggYiDPE6Zd2qaDz9n9mMl4`
- **Fetch:** `src/data.ts → useListingsFetcher()` → `ListingsContext`
- **To add/edit listings:** update the Google Sheet directly. No code change needed.

**Sheet column mapping** (used in `rowToListing()`):

| Col | Index | Field |
|---|---|---|
| A | 0 | Brand |
| B | 1 | Model |
| D | 3 | Slug |
| E | 4 | Meta Title |
| F | 5 | Meta Description |
| G | 6 | WhatsApp / Request Quote URL |
| I | 8 | Description / Specs |
| J | 9 | City |
| K | 10 | Coordinates |
| L | 11 | Rating |
| M | 12 | Review Quote |
| N | 13 | Equipment Type |
| Q | 16 | Refurbishment Standard |
| R | 17 | Warranty |
| S | 18 | Compliance (comma-separated) |
| X | 23 | Country |
| AA | 26 | Featured (`Y` = featured on homepage) |

Product images are served from `/products/{brand-model}.png` (local files in `public/products/`).

### Blog Posts & Suppliers (static)
Defined directly in `src/data.ts` in the `blogPosts` and `suppliers` arrays. To add a new blog post, add an entry to `blogPosts` and create the corresponding guide component in `src/guides/`.

---

## Page Architecture

Every page follows one of these patterns:

### 1. CategoryPage (`/category/:typeSlug` or named routes)
For equipment type landing pages. Takes props: `type`, `title`, `seoTitle`, `seoDescription`, `seoCanonical`, `internalLinks`, optional `specTable`, `priceLink`, `country`.

**Named SEO category routes (in App.tsx):**
- `/refurbished-ct-scanners-africa`
- `/used-mri-machines-africa`
- `/refurbished-ultrasound-machines-africa`
- `/used-digital-x-ray-systems-africa`
- `/used-laboratory-equipment-africa`
- `/dialysis-machines-africa`
- `/patient-monitors-africa`
- `/ecg-machines-africa`
- `/hospital-beds-south-africa`
- `/laboratory-equipment-suppliers-kenya`

### 2. CountryPage
For country and city landing pages. Takes props: `country`, `city` (optional), `title`, `seoTitle`, `seoDescription`, `seoCanonical`, `complianceNote`, `relatedLinks`, `citySections`, `cityPageLinks`.

**Live country routes:**
- `/refurbished-medical-equipment-kenya-nairobi`
- `/used-medical-equipment-nigeria-lagos-abuja`
- `/refurbished-medical-equipment-south-africa`
- `/used-medical-equipment-ghana-accra`
- `/refurbished-medical-equipment-uganda-kampala`
- `/used-medical-equipment-rwanda-kigali`
- `/medical-equipment-suppliers-johannesburg`
- `/medical-equipment-suppliers-pretoria`

### 3. EquipmentPricingPage
For "price in [country]" keyword pages. Takes `equipmentType`, `seoTitle`, `seoDescription`, `seoCanonical`, `priceRanges`, `faqs`, `refurbishedDiscount`, `categoryLink`.

**Live pricing routes:**
- `/ultrasound-machine-price-kenya`
- `/x-ray-machine-price-kenya`
- `/mri-machine-price-kenya`

### 4. BlogPostPage + guide components
Each guide in `src/guides/` is a full React component. `BlogPostPage` renders the correct guide based on slug. Blog metadata lives in `blogPosts` array in `data.ts`.

**Live guides (13 total):** See `src/guides/` directory.

### 5. Static content pages
`SuppliersPage`, `CompliancePage`, `FAQPage`, `AboutPage`, `RequestPricingPage`, `WhyRefurbishedPage`, `WholesaleKenyaPage`, `SellEquipmentSAPage`, `CataloguePage`, `PrivacyPolicyPage`, `TermsOfServicePage`.

---

## SEO Rules — Follow Every Time

Every page must have:

1. **`<SEO>` component** with `title`, `description`, `canonical`, and `schema` props
2. **Canonical URL** — always relative path (e.g. `"/refurbished-ct-scanners-africa"`)
3. **Schema.org JSON-LD** — at minimum `BreadcrumbList`. Use `WebPage`/`Article`/`FAQPage`/`ItemList` as appropriate
4. **`<h1>`** — exactly one per page, includes the primary keyword
5. **Internal links** — every page links to at least 2 related pages

**SEO title pattern:** `[Keyword] | [Secondary Keyword] | [Trust Signal]`
Example: `"Refurbished CT Scanners for Sale Africa | 16–128 Slice | GE, Siemens, Philips | ISO 13485"`

**URL slug conventions:**
- Equipment category: `/refurbished-{type}-africa` or `/used-{type}-africa`
- Country: `/refurbished-medical-equipment-{country}-{city}`
- Pricing: `/{equipment-type}-price-{country}`
- City supplier: `/medical-equipment-suppliers-{city}`
- Guide: descriptive slug matching the blog post title

**Never duplicate canonical URLs.** Each page must have a unique canonical. Check `App.tsx` before adding a new route.

---

## Brand & Design System

**Colour tokens (Tailwind):**
- `navy` — primary dark text/backgrounds (`bg-navy`, `text-navy`)
- `teal` — primary accent/CTA colour (`bg-teal`, `text-teal`)
- `gold` — badge/premium accent (`text-gold`, `bg-gold/10`)
- `clinical` — light background for sections (`bg-clinical`)

**Typography:**
- Section headings: `font-black uppercase tracking-tight`
- Body: `text-navy/70` for secondary text
- Labels/badges: `text-[10px] font-bold uppercase tracking-widest`

**Components to always use:**
- `<Layout>` — wraps every page (handles nav + footer)
- `<SEO>` — handles `<head>` meta tags and schema
- `<LeadForm>` — primary conversion element, include on every high-intent page
- `<ListingCard>` — for rendering individual equipment listings

**Trust signals to include on commercial pages:**
ISO 13485, CE Mark, FDA, PPB Kenya, NAFDAC Nigeria, SAHPRA South Africa

**Primary CTA text:** "Request Verified Pricing →" → links to `/request-verified-pricing-medical-equipment`  
**Secondary CTA:** WhatsApp `https://wa.me/447777100397`

---

## Regulatory Compliance by Country

This is core content — always include the correct regulatory body and requirements on country/category pages.

| Country | Regulatory Body | Key Requirements | Import Timeline |
|---|---|---|---|
| Kenya | PPB (Pharmacy & Poisons Board) | ISO 13485, CE Mark, PVoC Inspection | 4–6 weeks |
| Kenya (radiation) | KNRA (Kenya Nuclear Regulatory Authority) | Radiation clearance for X-ray/CT/MRI | Additional 2–4 weeks |
| Nigeria | NAFDAC | Product registration + SONCAP pre-shipment cert | 8–12 weeks |
| South Africa | SAHPRA | Section 21 authorisation, Medical Device Licence, ISO 13485 | 6–8 weeks |
| Ghana | Ghana FDA | Product Registration, Certificate of Free Sale | 4–8 weeks |
| Uganda | NDA Uganda | Import Permit, GMP Evidence | 4–6 weeks |
| Rwanda | Rwanda FDA | Market Authorisation, ISO 13485 | 4–6 weeks |

---

## Equipment Categories & Price Ranges

Use these verified ranges when writing pricing pages or content:

| Equipment | Entry (Refurbished) | Mid | Premium | Common Brands |
|---|---|---|---|---|
| Ultrasound | $4,000–$8,000 | $8,000–$16,000 | $25,000–$45,000 | Mindray, GE, Philips, Samsung |
| X-Ray (DR) | $5,000–$9,000 | $9,000–$18,000 | $28,000–$50,000 | Mindray, GE, Siemens, Philips |
| CT Scanner (16–64 slice) | — | $80,000–$200,000 | $200,000–$400,000 | GE, Siemens, Philips |
| MRI 1.5T | $80,000–$150,000 | $150,000–$250,000 | $250,000–$400,000 | GE, Siemens, Philips |
| MRI 3T | — | $280,000–$450,000 | $450,000+ | Siemens, GE, Philips |
| Dialysis (Fresenius) | $8,000 | $12,000–$20,000 | $25,000+ | Fresenius, Nipro |
| Patient Monitor | $800–$2,000 | $2,000–$5,000 | $5,000–$12,000 | Mindray, Philips |
| ECG Machine | $1,200–$3,000 | $3,000–$6,000 | $6,000+ | Schiller, GE, Mindray |
| Lab (Haematology) | $3,000–$8,000 | $8,000–$20,000 | $20,000+ | Mindray, Sysmex, Roche |

Refurbished discount vs new: typically **40–65% less than new**.

---

## Growth Priorities

When adding new content, focus in this order:

1. **More EquipmentPricingPage routes** — high purchase-intent keyword traffic
   - Pattern: `/{equipment-type}-price-{country}` e.g. `/ct-scanner-price-kenya`, `/ultrasound-machine-price-nigeria`

2. **More CountryPage city routes** — local SEO
   - Pattern: `/medical-equipment-suppliers-{city}` e.g. `/medical-equipment-suppliers-lagos`, `/medical-equipment-suppliers-accra`

3. **New country pages** — expanding markets
   - Tanzania, Ethiopia, Côte d'Ivoire, Cameroon, Senegal, Zimbabwe, Zambia

4. **New category pages** — more equipment types
   - Ventilators, Surgical Tables, Sterilisation Equipment, Dental Equipment

5. **Guide content** — authority building
   - Country import guides, equipment comparison articles, buyer's guides

6. **Listings** — add to the Google Sheet (no code changes needed)

---

## How to Add a New Page

### New EquipmentPricingPage
1. Add route in `App.tsx` with the canonical URL as the path
2. Copy an existing `EquipmentPricingPage` route block
3. Fill in: `equipmentType`, `seoTitle`, `seoDescription`, `seoCanonical`, `priceRanges`, `faqs`, `refurbishedDiscount`, `categoryLink`
4. Use price ranges from the table above
5. Write 3 FAQs targeting the most common buyer questions

### New CountryPage
1. Add route in `App.tsx`
2. Props: `country`, optional `city`, `title`, `seoTitle`, `seoDescription`, `seoCanonical`, `complianceNote`
3. Use the correct regulatory body from the compliance table above
4. Add `relatedLinks` pointing to relevant pricing and category pages

### New CategoryPage (named route)
1. Add route in `App.tsx` with a named path (not just `/category/:typeSlug`)
2. Include `specTable` for imaging equipment (CT, MRI, X-Ray, Ultrasound)
3. Add `internalLinks` to 2 related category or country pages

### New Blog Guide
1. Create component in `src/guides/YourGuide.tsx`
2. Add entry to `blogPosts` array in `src/data.ts` with matching `slug`
3. Add case to `BlogPostPage.tsx` to render the new guide on that slug
4. Guide must be minimum 1,500 words, include internal links, and have Article schema

---

## Known Issues & Tech Debt

- **Lead form does not submit data** — `LeadForm.tsx` only sets `submitted: true` locally. No data is sent anywhere. Every lead is currently lost. Needs a backend (Vercel serverless function or Google Apps Script webhook).
- **Lead form does not submit data** — `LeadForm.tsx` only sets `submitted: true` locally. No data is sent anywhere. Every lead is currently lost. Needs a backend (Vercel serverless function or Google Apps Script webhook).

## URL Redirects

Old URLs that Google indexed from a previous version of the site. 301 redirects are configured in `vercel.json`:

| Old URL | Redirects To |
|---|---|
| `/about_us` | `/about-medicalequipment-africa` |
| `/FAQ` | `/faq-buying-refurbished-medical-equipment-africa` |
| `/equipment_listing` | `/refurbished-medical-equipment-catalogue-africa` |
| `/ct-scanner` | `/refurbished-ct-scanners-africa` |
| `/blogs/:path*` | `/medical-equipment-guides-market-news-africa` |

Do not reuse these old URL patterns for any new pages.

---

## What Not to Do

- **Do not** add pages without `<SEO>` and schema markup
- **Do not** create duplicate canonical URLs — check `App.tsx` first
- **Do not** hardcode listings data — all listings come from the Google Sheet
- **Do not** change the TailwindCSS v4 setup — it uses `@tailwindcss/vite`, there is no `tailwind.config.js`
- **Do not** add TypeScript `any` types without justification
- **Do not** add new npm dependencies without a clear reason — the bundle is already sufficient for the site's needs
- **Do not** remove the `<HelmetProvider>` or `<ListingsProvider>` wrappers in `App.tsx`
