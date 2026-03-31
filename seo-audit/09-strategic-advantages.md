# Strategic Advantages — 3 Immediate Wins

**Date:** 2026-03-27

*These are the three highest-impact, lowest-effort actions that can be taken immediately — within the next 2–4 weeks — to generate measurable SEO results based on the audit findings.*

---

## Win 1 — Publish the Refurbished Medical Equipment Hub Page

**What to do:** Create a new page at `/refurbished-medical-equipment-africa` — a 2,000-word hub page covering: what certified refurbished means, safety standards, cost comparisons, regulatory compliance, and a supplier evaluation checklist.

**Why now:**
- "Refurbished medical equipment Africa" is the exact root keyword for the entire business
- Zero competitors have this page — it is completely uncontested in search
- The exact-match domain (`medicalequipment.africa`) gives a significant ranking head-start for this keyword
- The page will attract backlinks from NGOs, health policy organisations, and trade publications — the most valuable long-term SEO asset

**Effort required:** 1 new page (2,000 words + specs) + `HowTo` schema + `FAQPage` schema. Content brief is in `07-content-briefs/refurbished-hub-page.md`.

**Expected result:** Ranking for "refurbished medical equipment Africa" and related queries within 60–90 days. Immediate improvement in topical authority.

---

## Win 2 — Add SearchAction to WebSite Schema and FAQPage Schema to Country Pages

**What to do:**
1. Add `potentialAction: SearchAction` to the WebSite JSON-LD on the homepage (`src/Home.tsx`)
2. Add FAQPage schema to the Kenya and Nigeria country pages (4–5 Q&As each)

**Why now:**
- The SearchAction triggers Google's Sitelinks Searchbox — your brand name searches may start showing a search box directly in Google, which dramatically increases CTR for branded queries
- FAQPage schema on country pages can unlock "People Also Ask" rich results — free additional SERP real estate for keywords like "medical equipment suppliers Kenya"
- These are code changes that take less than 30 minutes to implement
- The JSON-LD code is already written in `02-schema-audit.md` — it just needs to be added to the component

**Effort required:** 2 code changes in `src/Home.tsx` and `src/CountryPage.tsx`. Schema code already provided in `02-schema-audit.md`.

**Expected result:** Sitelinks Searchbox may appear within 2–4 weeks. FAQ rich results for country pages within 4–8 weeks.

---

## Win 3 — Fix Title Tag Length and Add CTAs to Meta Descriptions

**What to do:** Update the `<SEO>` component title and description for the homepage and all 6 country pages:
- Homepage title → max 60 chars, primary keyword first
- All meta descriptions → 150–160 chars, end with a CTA ("Browse listings", "Find a supplier today")
- Example homepage title: `"Refurbished Medical Equipment Africa | Verified Suppliers"` (56 chars)
- Example homepage description: `"Browse Africa's verified directory for refurbished CT scanners, MRI, ultrasound & lab equipment. ISO 13485 certified suppliers in Kenya, Nigeria & 20+ markets. Browse now."` (158 chars)

**Why now:**
- Title tags over 60 chars are truncated in Google SERPs — buyers see an incomplete, cut-off headline that looks unprofessional
- Meta descriptions without CTAs waste the most-read snippet of real estate in Google's results
- This is the highest-impact 30-minute code fix on the entire site — every page that ranks benefits immediately

**Effort required:** Edit `title` and `description` props in `Home.tsx`, and each `CountryPage` instantiation in `App.tsx`. No new pages, no new content.

**Expected result:** Improved click-through rates within days of re-crawling. Google typically re-crawls active SPA sites within 24–72 hours of deployment.
