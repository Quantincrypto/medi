# Cannibalization Audit — Complete URL-to-Keyword Ownership Map
**Date:** 2026-03-28
**Based on:** `12-keyword-data-validated.md` + `11-cannibalization-prevention.md`
**Status:** 5 conflicts found and resolved. Use this as the master reference before building any page.

---

## Conflicts Found

### CONFLICT 1 — CRITICAL: Lagos/Abuja city pages vs Nigeria country page

**Problem:**
`12-keyword-data-validated.md` recommends creating two new pages:
- `/medical-equipment-suppliers-lagos` → "medical equipment suppliers in lagos nigeria" (140/mo)
- `/medical-equipment-suppliers-abuja` → "medical equipment suppliers in abuja" (70/mo)

But the existing Nigeria page URL is `/used-medical-equipment-nigeria-lagos-abuja` — it explicitly claims Lagos AND Abuja in the URL itself. Creating separate Lagos and Abuja city pages would create a three-way cannibalization between the Nigeria page, the Lagos page, and the Abuja page for the same queries.

**Resolution: DO NOT create separate Lagos or Abuja pages.**

Add dedicated Lagos and Abuja city sections within the existing Nigeria page instead:
- H2: "Medical Equipment Suppliers in Lagos"
- H2: "Medical Equipment Suppliers in Abuja / FCT"
- Each section gets its own supplier listings block and city-specific copy

The Nigeria page owns all of: "medical equipment suppliers in nigeria", "in lagos", "in abuja", "nigeria ikeja", and related terms. This is the correct architecture because the URL already signals this.

**Kill these proposed pages:** `/medical-equipment-suppliers-lagos`, `/medical-equipment-suppliers-abuja`

---

### CONFLICT 2 — MEDIUM: Equipment pricing pages vs existing equipment category pages

**Problem:**
Three new pricing pages are proposed alongside three existing category pages:

| New pricing page | Existing category page | Overlap risk |
|---|---|---|
| `/ultrasound-machine-price-kenya` (260/mo) | `/refurbished-ultrasound-machines-africa` | Both target ultrasound queries |
| `/x-ray-machine-price-kenya` (210/mo) | `/used-digital-x-ray-systems-africa` | Both target X-ray queries |
| `/mri-machine-price-kenya` (170/mo) | `/used-mri-machines-africa` | Both target MRI queries |

If both pages contain "ultrasound suppliers" content, Google will split ranking signals and neither will rank well.

**Resolution: Hard intent separation.**

Pricing pages own: price, cost, specifications, models, comparison, "how much does X cost"
Category pages own: where to buy, suppliers, verified sellers, browse listings

**Pricing page rules (apply to all three):**
- H1 must contain "price" or "cost" — e.g. "Ultrasound Machine Prices in Kenya 2026"
- Primary CTA: "Request a quote" — not "browse suppliers"
- Content: price ranges by brand/model, factors affecting price, new vs refurbished cost comparison
- Must NOT include a supplier directory listing or "suppliers in Kenya" H2
- Must include a link to the category page: e.g. "Browse verified ultrasound suppliers in Africa →"

**Category page rules:**
- H1 must contain "suppliers" or "for sale" — e.g. "Refurbished Ultrasound Machines for Sale in Africa"
- Must NOT contain a "prices in Kenya" section (that belongs on the pricing page)
- Link to the Kenya pricing page as a related resource

---

### CONFLICT 3 — MEDIUM: Lab equipment Kenya page vs lab equipment Africa category page

**Problem:**
- New: `/laboratory-equipment-suppliers-kenya` → "laboratory equipment suppliers kenya" (170/mo)
- Existing: `/used-laboratory-equipment-africa` → lab equipment category page (Africa-wide)

Both are supplier-intent pages about lab equipment. Unlike the pricing/supplier split above, these share the same intent — they just differ by geography. Google may rank either for "laboratory equipment suppliers kenya" and split the signal.

**Resolution: Geographic keyword ownership, clear internal linking hierarchy.**

`/laboratory-equipment-suppliers-kenya` owns:
- "laboratory equipment suppliers kenya" (primary)
- "laboratory equipment suppliers in kenya"
- "medical laboratory equipment suppliers in kenya"
- "medical laboratory equipment price list in kenya"
- All Kenya-specific lab terms

`/used-laboratory-equipment-africa` owns:
- "used laboratory equipment Africa" (primary)
- "lab equipment suppliers Africa"
- "refurbished laboratory equipment"
- Africa-wide terms — no Kenya-specific primary keywords

**Important:** Remove any H2 on the Africa lab page that says "Laboratory Equipment Suppliers in Kenya" and instead add a link block: "Looking for lab equipment specifically in Kenya? → See our Kenya lab equipment page."

The Kenya lab page is a child page of the Africa lab page. It links up to the Africa page. The Africa page links down to the Kenya page as a regional sub-page.

---

### CONFLICT 4 — LOW: SA city pages vs SA country page

**Problem:**
- New: `/medical-equipment-suppliers-johannesburg` (170/mo)
- New: `/medical-equipment-suppliers-pretoria` (170/mo)
- Existing: `/refurbished-medical-equipment-south-africa`

The SA country page might target Johannesburg or Pretoria terms if it mentions these cities prominently.

**Resolution: City-level keyword isolation.**

`/refurbished-medical-equipment-south-africa` owns:
- "medical equipment suppliers south africa" (country-level)
- "medical equipment manufacturers south africa"
- "medical equipment distributors in south africa"
- "used/second hand medical equipment south africa"
- "medical equipment in south africa"
- Does NOT primary-target "in johannesburg" or "in pretoria"
- May mention these cities briefly with links to the dedicated city pages

`/medical-equipment-suppliers-johannesburg` owns:
- "medical equipment suppliers in johannesburg" (primary, 170/mo)
- Johannesburg-specific listings, neighbourhoods (Sandton, Midrand, etc.)

`/medical-equipment-suppliers-pretoria` owns:
- "medical equipment suppliers pretoria" (primary, 170/mo)
- Pretoria-specific listings

**Internal linking:** SA country page has a "Find suppliers in your city" section linking to Johannesburg and Pretoria pages. City pages link back to the SA country page.

---

### CONFLICT 5 — LOW: "medical equipment prices in kenya" assigned to two pages

**Problem:**
In `12-keyword-data-validated.md`, keyword #39 "medical equipment prices in kenya" (50/mo) is assigned to BOTH `/ultrasound-machine-price-kenya` AND the catalogue page. A keyword can only have one owner.

**Resolution:** Assign "medical equipment prices in kenya" to the catalogue page (`/refurbished-medical-equipment-catalogue-africa`). The catalogue is the most logical home — it shows all equipment types and prices. The ultrasound pricing page targets ultrasound-specific pricing only.

---

## Master URL-to-Keyword Ownership Map

Every URL owns exactly one primary keyword. No two rows below share a primary keyword.

### Existing Pages

| URL | Primary Keyword | Secondary Keywords (max 3) | Page Type |
|---|---|---|---|
| `/` | medicalequipment.africa (brand) | medical equipment directory Africa, medical equipment suppliers near me (GBP) | Homepage |
| `/refurbished-medical-equipment-africa` | refurbished medical equipment Africa | second hand hospital equipment Africa, used medical equipment Africa | Hub page |
| `/refurbished-medical-equipment-catalogue-africa` | medical supplies price list | list of medical equipment, medical equipment prices in kenya | Catalogue |
| `/verified-medical-equipment-suppliers-africa` | verified medical equipment suppliers Africa | medical equipment directory Africa | Supplier directory |
| `/faq-buying-refurbished-medical-equipment-africa` | buying refurbished medical equipment FAQ | refurbished medical equipment guide | FAQ |
| `/import-regulations-medical-equipment-africa` | import regulations medical equipment Africa | how to import medical equipment Kenya (secondary) | Regulatory guide |
| `/refurbished-ct-scanners-africa` | refurbished CT scanners Africa | used CT scanner for sale Africa | Category |
| `/used-mri-machines-africa` | used MRI machines Africa | refurbished MRI machine Africa | Category |
| `/refurbished-ultrasound-machines-africa` | refurbished ultrasound machines Africa | ultrasound machine suppliers Africa | Category |
| `/used-digital-x-ray-systems-africa` | used digital x-ray systems Africa | X-ray machine suppliers Africa | Category |
| `/used-laboratory-equipment-africa` | used laboratory equipment Africa | lab equipment suppliers Africa | Category |
| `/refurbished-medical-equipment-kenya-nairobi` | medical equipment suppliers in kenya | medical equipment suppliers nairobi, list of medical equipment suppliers in kenya | Country |
| `/used-medical-equipment-nigeria-lagos-abuja` | medical equipment suppliers in nigeria | medical equipment suppliers in lagos, medical equipment suppliers in abuja, medical equipment dealers in nigeria | Country |
| `/refurbished-medical-equipment-south-africa` | medical equipment suppliers south africa | medical equipment manufacturers south africa, used medical equipment south africa | Country |
| `/used-medical-equipment-ghana-accra` | medical equipment suppliers in ghana | medical equipment distributors in ghana, medical equipment companies in ghana | Country |
| `/refurbished-medical-equipment-uganda-kampala` | medical equipment suppliers Uganda | medical equipment Uganda | Country |
| `/used-medical-equipment-rwanda-kigali` | medical equipment suppliers Rwanda | medical equipment Rwanda | Country |

---

### New Pages — Approved to Build

| URL | Primary Keyword | Secondary Keywords | Vol/mo | Conflict check |
|---|---|---|---|---|
| `/ultrasound-machine-price-kenya` | ultrasound machine price in kenya | portable ultrasound machine price in kenya, cost of ultrasound machine in kenya, ge ultrasound machine price in kenya | 260 | ✅ Safe — pricing intent, distinct from `/refurbished-ultrasound-machines-africa` (supplier intent) |
| `/x-ray-machine-price-kenya` | x ray machine price in kenya | x-ray machine cost kenya, digital x-ray price kenya | 210 | ✅ Safe — pricing intent, distinct from `/used-digital-x-ray-systems-africa` (supplier intent) |
| `/mri-machine-price-kenya` | mri machine price in kenya | MRI scanner price kenya, cost of MRI machine kenya | 170 | ✅ Safe — pricing intent, distinct from `/used-mri-machines-africa` (supplier intent) |
| `/laboratory-equipment-suppliers-kenya` | laboratory equipment suppliers kenya | medical laboratory equipment suppliers in kenya, lab equipment kenya, medical laboratory equipment price list in kenya | 170 | ✅ Safe — Kenya geo, distinct from `/used-laboratory-equipment-africa` (Africa-wide). See Conflict 3 rules. |
| `/medical-equipment-suppliers-johannesburg` | medical equipment suppliers in johannesburg | medical equipment johannesburg, hospital equipment johannesburg | 170 | ✅ Safe — city level, SA page owns country level |
| `/medical-equipment-suppliers-pretoria` | medical equipment suppliers pretoria | medical equipment pretoria, hospital supplies pretoria | 170 | ✅ Safe — city level, SA page owns country level |
| `/hospital-beds-south-africa` | hospital beds south africa | hospital beds for sale south africa, used hospital beds south africa, hospital beds suppliers south africa | 50 | ✅ Safe — product-type page, SA country page owns general medical equipment |
| `/wholesale-medical-supplies-kenya` | wholesale medical supplies kenya | bulk medical supplies kenya, medical supplies procurement kenya | 110 | ✅ Safe — bulk/wholesale intent, Kenya country page owns general supplier discovery |
| `/sell-medical-equipment-south-africa` | where to sell medical equipment south africa | sell used medical equipment south africa, second hand medical equipment buyers south africa | 70 | ✅ Safe — unique reverse-funnel intent, no conflict with any buy-intent page |

---

### New Pages — BLOCKED (cannibalization risk)

| Proposed URL | Why blocked | Use instead |
|---|---|---|
| `/medical-equipment-suppliers-lagos` | Directly cannibalises `/used-medical-equipment-nigeria-lagos-abuja` | Add Lagos H2 section to Nigeria page |
| `/medical-equipment-suppliers-abuja` | Directly cannibalises `/used-medical-equipment-nigeria-lagos-abuja` | Add Abuja H2 section to Nigeria page |

---

## Content Rules Per Page Type (Anti-Cannibalization)

### Equipment Pricing Pages (`/ultrasound-machine-price-kenya`, `/x-ray-machine-price-kenya`, `/mri-machine-price-kenya`)

**✅ Include:**
- Price ranges by brand (e.g. GE, Mindray, Philips, Samsung)
- New vs refurbished price comparison table
- Factors affecting price (age, condition, warranty, shipping)
- Price trend over time
- "Request a quote" CTA
- FAQ: "How much does X cost in Kenya?"
- Internal link to the corresponding Africa category page

**❌ Do NOT include:**
- A directory of suppliers (that's the category page)
- H2: "Ultrasound machine suppliers in Kenya" (cannibalization with `/refurbished-ultrasound-machines-africa`)
- Content about other countries' prices (keep Kenya-focused)

---

### Nigeria Country Page (`/used-medical-equipment-nigeria-lagos-abuja`)

**✅ Include:**
- H2: "Medical Equipment Suppliers in Lagos"
- H2: "Medical Equipment Suppliers in Abuja"
- H2: "Medical Equipment Suppliers in Ikeja"
- NAFDAC compliance section
- Supplier listings for Lagos and Abuja

**❌ Do NOT include:**
- A separate "Lagos page" or "Abuja page" — these live within this page
- "Buy ultrasound machine Nigeria" content — that belongs on the ultrasound category page

---

### Kenya Country Page (`/refurbished-medical-equipment-kenya-nairobi`)

**✅ Include:**
- H2: "Medical Equipment Suppliers in Nairobi"
- H2: "Medical Equipment Suppliers in Nairobi CBD"
- General medical equipment supplier directory for Kenya
- PPB registration info
- Link to lab equipment Kenya page
- Link to ultrasound price Kenya page (related resource)

**❌ Do NOT include:**
- "Laboratory equipment suppliers Kenya" as a primary H2 (that's the lab page's keyword)
- "Ultrasound machine price in Kenya" as a primary H2 (that's the pricing page's keyword)
- Content about Johannesburg or Pretoria

---

### SA Country Page (`/refurbished-medical-equipment-south-africa`)

**✅ Include:**
- Country-level supplier directory for SA
- SAHPRA/regulatory compliance section
- "Find suppliers in your city" → links to Johannesburg and Pretoria pages
- Mention of Gauteng region (not a dedicated section — avoids triggering cannibalization with Gauteng city page if created later)

**❌ Do NOT include:**
- "Medical equipment suppliers in Johannesburg" as a primary H2 (that's the JHB page)
- "Medical equipment suppliers in Pretoria" as a primary H2 (that's the Pretoria page)
- "Hospital beds South Africa" as a primary H2 (that's the hospital beds page)

---

### Lab Equipment Kenya Page (`/laboratory-equipment-suppliers-kenya`)

**✅ Include:**
- Laboratory equipment supplier listings in Kenya
- Lab equipment price list
- KEBS/PPB requirements for lab imports
- Link back to `/used-laboratory-equipment-africa`

**❌ Do NOT include:**
- Nigeria or SA lab equipment content (those belong on country pages)
- "Medical equipment suppliers Kenya" as a primary term (that's the Kenya country page)

---

## H1 Uniqueness Check

No two pages may share the same H1. Proposed H1s for new pages:

| URL | H1 (must be unique) |
|---|---|
| `/ultrasound-machine-price-kenya` | Ultrasound Machine Prices in Kenya 2026 |
| `/x-ray-machine-price-kenya` | X-Ray Machine Prices in Kenya 2026 |
| `/mri-machine-price-kenya` | MRI Machine Prices in Kenya 2026 |
| `/laboratory-equipment-suppliers-kenya` | Laboratory Equipment Suppliers in Kenya |
| `/medical-equipment-suppliers-johannesburg` | Medical Equipment Suppliers in Johannesburg |
| `/medical-equipment-suppliers-pretoria` | Medical Equipment Suppliers in Pretoria |
| `/hospital-beds-south-africa` | Hospital Beds for Sale in South Africa |
| `/wholesale-medical-supplies-kenya` | Wholesale Medical Supplies in Kenya |
| `/sell-medical-equipment-south-africa` | Sell Your Used Medical Equipment in South Africa |

None of these match any existing page H1. ✅

---

## Internal Linking Map

```
Homepage (/)
  └─ Refurbished Hub (/refurbished-medical-equipment-africa)
       ├─ Kenya page (/refurbished-medical-equipment-kenya-nairobi)
       │    ├─ Lab equipment Kenya (/laboratory-equipment-suppliers-kenya)
       │    │    └─ Africa lab page (/used-laboratory-equipment-africa)
       │    ├─ Ultrasound price Kenya (/ultrasound-machine-price-kenya)
       │    │    └─ Ultrasound category (/refurbished-ultrasound-machines-africa)
       │    ├─ X-ray price Kenya (/x-ray-machine-price-kenya)
       │    │    └─ X-ray category (/used-digital-x-ray-systems-africa)
       │    └─ MRI price Kenya (/mri-machine-price-kenya)
       │         └─ MRI category (/used-mri-machines-africa)
       │
       ├─ Nigeria page (/used-medical-equipment-nigeria-lagos-abuja)
       │    ├─ [Lagos section — H2, not separate page]
       │    └─ [Abuja section — H2, not separate page]
       │
       ├─ South Africa page (/refurbished-medical-equipment-south-africa)
       │    ├─ Johannesburg page (/medical-equipment-suppliers-johannesburg)
       │    ├─ Pretoria page (/medical-equipment-suppliers-pretoria)
       │    └─ Hospital beds SA (/hospital-beds-south-africa)
       │
       └─ Ghana page (/used-medical-equipment-ghana-accra)

Catalogue (/refurbished-medical-equipment-catalogue-africa)
  ├─ All category pages (ultrasound, X-ray, MRI, CT, lab)
  └─ Wholesale Kenya (/wholesale-medical-supplies-kenya)

Reverse funnel:
  └─ Sell equipment SA (/sell-medical-equipment-south-africa)
       └─ SA country page (link to buy-side)
```

---

## Pre-Build QA Checklist

Before building any new page, answer these three questions:

1. **Is the primary keyword already owned by an existing page?**
   - Check the master ownership table above. If yes → enrich the existing page instead.

2. **Does this page's primary keyword appear as a secondary keyword on another page?**
   - If yes → consolidate or narrow the new page's focus so it's clearly the more specific, deeper page.

3. **Would Google need to choose between two pages for the same query?**
   - If yes → resolve with a canonical tag or 301 redirect before publishing.

