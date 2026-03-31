# Keyword Cannibalization Prevention — Site Rebuild Guide

**Date:** 2026-03-27
**Applies to:** Full site rebuild or major restructure of medicalequipment.africa

---

## What Is Keyword Cannibalization?

Keyword cannibalization happens when two or more pages on the same site compete for the same keyword. Google gets confused about which page to rank, splits ranking signals between them, and both pages rank lower than one strong page would. For a directory site like medicalequipment.africa — with country pages, category pages, listing pages, and guide pages all covering related topics — this is a serious structural risk.

**Examples of cannibalization risk on this site:**
- Homepage AND a "Refurbished Medical Equipment Africa" hub page both targeting "refurbished medical equipment Africa"
- A Kenya country page AND a "How to Import Medical Equipment Kenya" guide both targeting "medical equipment Kenya"
- Multiple category pages and the catalogue page all targeting "medical equipment suppliers Africa"
- A product listing page AND a category page both targeting "refurbished ultrasound machine Kenya"

---

## Pre-Rebuild Cannibalization Audit Checklist

Before writing a single line of new code, run this audit:

### Step 1 — Map Every Page to One Primary Keyword
Create a spreadsheet with columns:
| URL | Page Type | Primary Keyword | Secondary Keywords | Canonical |

No two rows should share the same Primary Keyword. If they do — you have a cannibalization risk to resolve before building.

### Step 2 — Assign Keyword Ownership
Use this hierarchy to decide which page "owns" a keyword:

| Page Type | Keyword Ownership Rule |
|---|---|
| Homepage | Brand + root directory keywords only (`medical equipment directory Africa`, `medicalequipment.africa`) |
| Refurbished Hub Page | Root transactional keyword (`refurbished medical equipment Africa`) |
| Country pages | Country-specific transactional (`medical equipment suppliers Kenya`) |
| Category pages | Equipment-specific transactional (`refurbished ultrasound machines Africa`) |
| Import guides | Informational + country (`how to import medical equipment Kenya`) |
| Product pages | Brand + model + country (`Mindray DC-60 ultrasound Kenya`) |
| Blog/news posts | Long-tail informational (everything else) |

**Rule:** If a keyword fits more than one row above — the most specific page wins. Homepage should never compete with a country page. A category page should never compete with a product page.

### Step 3 — Run a Current Cannibalization Check (before rebuild)
In Google Search Console:
1. Go to Performance → Search Results
2. Filter by a keyword (e.g. "refurbished medical equipment Africa")
3. Check "Pages" tab — if 2+ pages are appearing for the same query, you have existing cannibalization to fix

In Semrush:
- Use Position Tracking → Cannibalization Report to identify conflicting pages automatically

---

## URL Structure Rules — Follow These Exactly During Rebuild

A clean URL structure is the foundation of cannibalization prevention. Every URL must signal exactly one topic to Google.

### Correct URL Patterns

```
Homepage:
/

Country pages (transactional):
/refurbished-medical-equipment-[country]-[city]
e.g. /refurbished-medical-equipment-kenya-nairobi
e.g. /refurbished-medical-equipment-nigeria-lagos-abuja

Category pages (equipment type):
/refurbished-[equipment-type]-africa
e.g. /refurbished-ct-scanners-africa
e.g. /refurbished-ultrasound-machines-africa
e.g. /used-mri-machines-africa

Product/listing pages (brand + model):
/equipment/[brand]-[model]-[type]-[country]
e.g. /equipment/philips-hd11xe-ultrasound-kenya

Import/regulatory guides (informational):
/how-to-import-medical-equipment-[country]
e.g. /how-to-import-medical-equipment-kenya

Content hub pages (informational):
/refurbished-medical-equipment-africa            ← root topic hub
/medical-equipment-tenders-africa               ← tender guide hub
/ngo-medical-equipment-procurement-africa       ← NGO buyer hub

Blog posts:
/blog/[topic-slug]
e.g. /blog/ppb-registration-timeline-kenya-2025
```

### Dangerous URL Patterns to AVOID

```
❌ /kenya                       (too vague — what is this page about?)
❌ /ultrasound                  (no geo signal — competes with itself globally)
❌ /catalogue/kenya/ultrasound  (nested structure creates overlap with /kenya and /ultrasound pages)
❌ /medical-equipment-kenya     (missing "refurbished" — doesn't match search query intent)
❌ /suppliers/kenya             (could overlap with country page and supplier directory)
```

---

## Page Hierarchy — The "One Page Per Intent" Rule

During rebuild, enforce this rule:

**Each unique combination of [topic] + [intent] gets exactly ONE page.**

| Topic | Transactional page | Informational page |
|---|---|---|
| Medical equipment Kenya | `/refurbished-medical-equipment-kenya-nairobi` | `/how-to-import-medical-equipment-kenya` |
| Medical equipment Nigeria | `/used-medical-equipment-nigeria-lagos-abuja` | `/how-to-import-medical-equipment-nigeria` (future) |
| Ultrasound Africa | `/refurbished-ultrasound-machines-africa` | Section on refurbished hub page — NOT a separate page |
| CT Scanners Africa | `/refurbished-ct-scanners-africa` | Section on refurbished hub page — NOT a separate page |
| Refurbished equipment (general) | `/refurbished-medical-equipment-africa` | Same page — hub covers both intents |
| Government procurement | `/medical-equipment-tenders-africa` | Same page |

**The trap to avoid:** Creating both a category page `/refurbished-ultrasound-machines-africa` AND a blog post titled "Best Refurbished Ultrasound Machines in Africa." They will cannibalize each other. Instead: the blog post covers a NARROWER sub-topic (e.g. "portable ultrasound for rural clinics Kenya") that the category page doesn't target.

---

## Canonical Tag Strategy

Canonical tags tell Google which version of a page is the "master" when similar content exists.

### Rules for this site:

**1. Self-referencing canonicals on all pages (already implemented — keep this)**
Every page should have `<link rel="canonical" href="https://medicalequipment.africa/[exact-url]" />`

**2. www vs non-www**
Pick one: `medicalequipment.africa` OR `www.medicalequipment.africa`. Use it everywhere. Set a 301 redirect from the other version. Canonical should always point to your chosen version.
- Current: `vercel.json` handles this — verify it's consistently non-www or www across all pages

**3. Trailing slash consistency**
`/refurbished-medical-equipment-kenya-nairobi` and `/refurbished-medical-equipment-kenya-nairobi/` are two different URLs to Google. Pick one pattern (recommended: no trailing slash) and stick to it everywhere.

**4. Paginated catalogue pages**
If the catalogue page paginates (page 2, 3...), the canonical on page 2 should point to page 1. Do NOT use canonical on paginated pages to point to themselves.

**5. Filter/sort URLs**
If the catalogue allows filtering (by country, type, price), filtered URLs like `/catalogue?country=kenya` must either:
- Have a canonical pointing back to `/refurbished-medical-equipment-catalogue-africa`
- OR be `rel="noindex"` to prevent them competing with the Kenya country page

---

## Internal Linking Rules to Prevent Cannibalization

Internal links pass ranking signals. Pointing too many links to the wrong page splits your authority.

### Rule 1 — One Page = One Anchor Text Theme
When linking to the Kenya country page, always use keyword-consistent anchor text:
- ✅ "medical equipment suppliers Kenya"
- ✅ "refurbished medical equipment Kenya"
- ❌ "click here" (wastes link signal)
- ❌ "Kenya page" (generic, no keyword)

### Rule 2 — The Homepage Should Not Compete with Interior Pages
The homepage should NOT have a block of text targeting "medical equipment suppliers Kenya." That keyword belongs to the Kenya country page. The homepage should link TO country pages but not target their keywords directly.

### Rule 3 — Hub-and-Spoke Internal Linking
Use a hub-and-spoke model:
```
Homepage
    ↓ links to
Refurbished Hub Page (/refurbished-medical-equipment-africa)
    ↓ links to (spokes)
    → Kenya country page
    → Nigeria country page
    → Ultrasound category page
    → CT Scanner category page
    → Kenya import guide
```
Each spoke page links back to the hub. This concentrates authority on the hub (your most important page) and creates clear topical clustering.

### Rule 4 — Never Duplicate H1s Across Pages
If two pages have the same H1, they will cannibalize. During rebuild, maintain a spreadsheet of every H1 — no two should match.

---

## Redirect Map — Preserve Rankings During Rebuild

If any URLs change during the rebuild, every old URL must 301 redirect to the new URL. Missing redirects = lost rankings.

**Create this spreadsheet BEFORE going live:**

| Old URL | New URL | Redirect Type | Status |
|---|---|---|---|
| (list every current URL) | (new URL if changed) | 301 | ⬜ Done |

**Current URLs to preserve (from sitemap):**

| URL | Status |
|---|---|
| `/` | Keep |
| `/refurbished-medical-equipment-catalogue-africa` | Keep |
| `/verified-medical-equipment-suppliers-africa` | Keep |
| `/faq-buying-refurbished-medical-equipment-africa` | Keep |
| `/import-regulations-medical-equipment-africa` | Keep |
| `/refurbished-ct-scanners-africa` | Keep |
| `/used-mri-machines-africa` | Keep |
| `/refurbished-ultrasound-machines-africa` | Keep |
| `/used-digital-x-ray-systems-africa` | Keep |
| `/used-laboratory-equipment-africa` | Keep |
| `/refurbished-medical-equipment-kenya-nairobi` | Keep |
| `/used-medical-equipment-nigeria-lagos-abuja` | Keep |
| `/refurbished-medical-equipment-south-africa` | Keep |
| `/used-medical-equipment-ghana-accra` | Keep |
| `/refurbished-medical-equipment-uganda-kampala` | Keep |
| `/used-medical-equipment-rwanda-kigali` | Keep |
| All `/equipment/[slug]` product pages | Keep (add to sitemap) |

**Rule: Never delete a URL that has ever been indexed by Google without replacing it with a 301 redirect.**

---

## New Pages — Cannibalization Risk Assessment

Before creating any new page during or after the rebuild, run this check:

**Question 1:** Does a page already exist that targets this keyword?
- Yes → enrich the existing page, don't create a new one

**Question 2:** Does the new page's primary keyword appear as a secondary keyword on any existing page?
- Yes → either consolidate (merge content) or clearly differentiate by narrowing the new page's focus

**Question 3:** Would Google need to choose between two pages to rank for this query?
- Yes → you have a cannibalization problem. Resolve it with a canonical or a 301 before publishing.

---

## Content Consolidation — When to Merge Pages

If during the rebuild you discover two weak pages targeting the same keyword, consolidate them:

1. Identify the stronger page (more backlinks, higher ranking, more content)
2. Merge all content from the weaker page into the stronger page
3. 301 redirect the weaker page's URL to the stronger page
4. Update all internal links pointing to the old URL
5. Submit the new URL to Google Search Console for re-indexing

**Specific consolidation risk on this site:**
- The FAQ page (`/faq-buying-refurbished-medical-equipment-africa`) covers some of the same ground as the planned Refurbished Hub page. **Solution:** The FAQ page handles question-format queries. The hub page handles commercial/informational intent. Ensure their H1s and primary keywords are completely different. Use the FAQ page's questions as the FAQPage schema on the hub page (referenced, not duplicated).

---

## Pre-Launch Cannibalization QA Checklist

Run this before going live with any rebuilt version:

- [ ] Every page has a unique Primary Keyword — no two pages share the same target
- [ ] Every page has a self-referencing canonical tag
- [ ] www/non-www redirect is set consistently in `vercel.json`
- [ ] Trailing slash usage is consistent across all URLs
- [ ] All filter/sort query string URLs are canonicalised or noindexed
- [ ] A redirect map exists for every URL that changed (minimum 301 for all old URLs)
- [ ] No two pages have the same H1 tag
- [ ] Hub-and-spoke internal linking structure is implemented
- [ ] Anchor text for internal links matches the target page's primary keyword
- [ ] Product page URLs are included in `sitemap.xml`
- [ ] Google Search Console is connected and the new sitemap is submitted immediately after launch
- [ ] Run Semrush Cannibalization Report within 30 days of launch to catch any issues
