# UX & CTA Improvements Design

**Date:** 2026-03-23
**Approach:** B — Homepage Reorder + Fix CTAs
**Scope:** Homepage, LeadForm, ProductPage, Layout (mobile)

---

## Goals

- Make the lead form the dominant conversion action everywhere
- Reduce form friction to increase completion rates
- Give buyers context (how the process works) before they browse
- Add social proof placeholders to build trust
- Clean up mobile CTA hierarchy — one dominant action, WhatsApp secondary
- Keep all existing URLs unchanged

---

## 1. Homepage Section Reorder

**Current order:**
1. Hero
2. Trust Badge Bar
3. Stats Strip
4. Browse by Category
5. Featured Equipment
6. Sponsored Suppliers
7. Browse by Country
8. How It Works ← buried
9. Lead Form (mobile only) ← nobody scrolls this far

**Proposed order:**
1. Hero (revised CTAs + shortened form)
2. Trust Badge Bar
3. How It Works ← moved up, before browsing
4. Social Proof Strip ← new section
5. Browse by Category
6. Featured Equipment
7. Sponsored Suppliers
8. Browse by Country

The mobile-only `<LeadForm />` section at the bottom is removed entirely. Mobile users are handled by the sticky bottom bar.

---

## 2. Lead Form — Shortened to 5 Fields

**Remove from form:**
- Job Title (collect on follow-up)
- Brand Preference (collect on follow-up)
- Budget Range (collect on follow-up)
- Message / Specific Requirements (removed entirely from the form)

**Keep:**
- Full Name (required)
- Hospital / Diagnostic Centre Name (required)
- Country (required, select)
- Equipment Type (required, select)
- WhatsApp Number (required)

The `LeadForm` component is used in two places: the hero (desktop) and the standalone `RequestPricingPage`. Both get the shortened version.

---

## 3. Hero CTA Hierarchy

**Current:** Two equal-weight solid buttons — "Browse Verified Listings" + "View Suppliers"

**Proposed:**
- Primary: `bg-teal` solid button — "Request Verified Pricing →"
- Secondary: plain underlined text link — "Browse Listings" (no button styling)

The lead form on desktop remains in the hero right column. No layout change, just button styling.

---

## 4. Social Proof Strip (New Section)

A new section inserted after "How It Works" on the homepage. All content is placeholder — designed to be swapped with real data.

**Contains:**
- 4 stat tiles: "48h Response Guarantee", "ISO 13485 Certified", "20+ African Markets", "100% Verified Suppliers"
- One testimonial quote block with placeholder text and attribution
- A logo strip row with 4 placeholder logo boxes labelled "Logo 1–4" with caption "Trusted by hospitals across Africa"

**Stats rationale:** Replace "49+ listings / 6 markets / 3 continents" (which reads as small) with process-oriented and quality-oriented stats that are credible regardless of catalogue size.

---

## 5. Product Page — Inline Enquiry Form

**Current:** "Request Verified Data Room & Pricing →" is a `<Link>` to `/request-verified-pricing-medical-equipment`. Buyer leaves the product page.

**Proposed:** Button toggles an inline collapsible form panel directly beneath the CTAs. The form is the same 5-field form, with Equipment Type pre-populated from the product's `type` field.

- URL does not change (no navigation on click)
- WhatsApp link is demoted to a small text link beneath the inline form ("or WhatsApp us instead")
- The full standalone `RequestPricingPage` still exists and is still linked from nav/footer

**Implementation:** Add a `useState(false)` toggle `showForm` in `ProductPage`. Clicking "Request Verified Data Room & Pricing" sets `showForm` to `true` — the form does not toggle back off (once opened, it stays open). Render a `<LeadForm equipmentType={product.type} />` panel inline when `showForm` is true. Add an optional `equipmentType` prop to `LeadForm` that pre-selects the Equipment Type dropdown.

---

## 6. Mobile Sticky Bar — Cleaned Up

**Current:**
- Floating WhatsApp button (fixed, `bottom-24 right-6`)
- Sticky bottom bar with two equal buttons: WhatsApp (green) + Request Pricing (teal)

**Proposed:**
- Remove the floating WhatsApp button entirely
- Sticky bottom bar: one full-width teal "Request Verified Pricing →" button + a small square WhatsApp icon button on the right (no label text)

---

## Files to Change

| File | Change |
|---|---|
| `src/Home.tsx` | Reorder sections, add Social Proof section, remove bottom LeadForm section |
| `src/components/LeadForm.tsx` | Remove 3 fields, add optional `equipmentType` prop |
| `src/ProductPage.tsx` | Replace Link CTA with toggle + inline LeadForm |
| `src/components/Layout.tsx` | Remove floating WhatsApp button, update mobile sticky bar |

No new files required. No URL or routing changes.

---

## Out of Scope

- Multi-step form wizard (decided against in favour of shorter single form)
- Category/country page CTA strips (Approach C — deferred)
- Exit-intent or scroll-triggered nudges (deferred)
- Real testimonial or logo content (placeholder structure only)
