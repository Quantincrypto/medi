# UX & CTA Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve lead conversion by reducing form friction, clarifying CTA hierarchy, restructuring homepage flow, and adding social proof placeholders.

**Architecture:** Four focused edits across existing files — no new files, no new routes. LeadForm gains an optional `equipmentType` prop. ProductPage gains an inline toggle form. Layout loses the duplicate WhatsApp button. Home reorders sections and gains a social proof strip.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, React Router v7, Lucide React icons. No test framework — verify with `npm run lint` (tsc --noEmit) and `npm run dev`.

**Spec:** `docs/superpowers/specs/2026-03-23-ux-cta-improvements-design.md`

---

## File Map

| File | Change |
|---|---|
| `src/components/LeadForm.tsx` | Remove 4 fields, add optional `equipmentType` prop |
| `src/ProductPage.tsx` | Replace Link CTA with inline form toggle |
| `src/components/Layout.tsx` | Remove floating WhatsApp button, update mobile sticky bar |
| `src/Home.tsx` | Reorder sections, update hero CTAs, add social proof strip, remove Stats Strip, remove bottom form |

---

## Task 1: Shorten LeadForm and Add equipmentType Prop

**Files:**
- Modify: `src/components/LeadForm.tsx`

- [ ] **Step 1: Add `equipmentType` prop to LeadForm**

Replace the component signature at the top of `src/components/LeadForm.tsx`:

```tsx
// Old
export const LeadForm: React.FC = () => {

// New
interface LeadFormProps {
  equipmentType?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ equipmentType }) => {
```

- [ ] **Step 2: Remove the Job Title field**

Remove this block entirely (lines ~48–51):
```tsx
<div>
  <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Job Title</label>
  <input required type="text" className="w-full p-1.5 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors text-sm" placeholder="Chief Medical Officer" />
</div>
```

Also change the grid wrapping Full Name from `grid-cols-1 md:grid-cols-2` to a single full-width field — remove the `<div className="grid grid-cols-1 md:grid-cols-2 gap-2">` wrapper around Full Name + Job Title, keeping only Full Name as a standalone `<div>`.

- [ ] **Step 3: Pre-select Equipment Type from prop**

Find the Equipment Type `<select>` and add `defaultValue={equipmentType ?? ''}`:

```tsx
<select
  required
  defaultValue={equipmentType ?? ''}
  className="w-full p-1.5 rounded-lg border border-navy/10 focus:border-teal outline-none transition-colors bg-white text-sm"
>
  <option value="">Select Type</option>
  <option>CT Scanner</option>
  <option>MRI Machine</option>
  <option>Ultrasound</option>
  <option>X-Ray / C-Arm</option>
  <option>Lab Equipment</option>
</select>
```

- [ ] **Step 4: Remove Brand Preference and Budget Range fields**

Remove the entire grid block containing Brand Preference and Budget Range (lines ~85–100):
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
  <div>
    <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Brand Preference</label>
    <input type="text" ... />
  </div>
  <div>
    <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Budget Range</label>
    <select required ...>...</select>
  </div>
</div>
```

- [ ] **Step 5: Remove the Message / Specific Requirements field**

Remove this block entirely (lines ~102–110):
```tsx
<div>
  <label className="block text-[10px] font-bold uppercase text-navy/50 mb-1">Message / Specific Requirements</label>
  <textarea ...></textarea>
</div>
```

- [ ] **Step 6: Verify TypeScript compiles**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 7: Verify in browser — check form has exactly 5 fields**

```bash
npm run dev
```

Open `http://localhost:3000`. The hero form (desktop) should show: Full Name, Hospital Name, Country, Equipment Type, WhatsApp Number — nothing else.

- [ ] **Step 8: Commit**

```bash
git add src/components/LeadForm.tsx
git commit -m "feat: shorten lead form to 5 fields, add equipmentType prop"
```

---

## Task 2: Product Page — Inline Form Toggle

**Files:**
- Modify: `src/ProductPage.tsx`

- [ ] **Step 1: Add showForm state**

At the top of the `ProductPage` component body (after the existing `const relatedProducts` lines), add:

```tsx
const [showForm, setShowForm] = React.useState(false);
```

Note: `ProductPage.tsx` uses `import React from 'react'` (default import), so `React.useState` is correct here — no named import needed.

- [ ] **Step 2: Import LeadForm**

Add to the imports at the top of the file:

```tsx
import { LeadForm } from './components/LeadForm';
```

- [ ] **Step 3: Replace the CTA Link with a button + inline form**

Find the CTAs block (around line 205):

```tsx
{/* CTAs */}
<div className="flex flex-col sm:flex-row gap-4 mb-8">
  <Link
    to="/request-verified-pricing-medical-equipment"
    className="flex-1 bg-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal/90 transition-all shadow-xl shadow-teal/20 text-center"
  >
    Request Verified Data Room & Pricing →
  </Link>
  <a
    href={product.whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#25D366]/90 transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2"
  >
    <MessageSquare className="w-5 h-5" /> WhatsApp
  </a>
</div>
```

Replace with:

```tsx
{/* CTAs */}
<div className="mb-8">
  {!showForm && (
    <button
      onClick={() => setShowForm(true)}
      className="w-full bg-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal/90 transition-all shadow-xl shadow-teal/20"
    >
      Request Verified Data Room & Pricing →
    </button>
  )}

  {showForm && (
    <div className="border-2 border-teal rounded-2xl overflow-hidden">
      <div className="bg-navy px-6 py-3 flex items-center justify-between">
        <span className="text-white font-bold text-sm">
          Request Pricing — {product.brand} {product.model}
        </span>
        <span className="text-teal text-xs font-bold uppercase tracking-widest">48h Response</span>
      </div>
      <div className="p-4">
        <LeadForm equipmentType={product.type} />
      </div>
    </div>
  )}

  <div className="mt-3 text-center">
    <a
      href={product.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-navy/50 hover:text-[#25D366] transition-colors font-medium"
    >
      or contact us on WhatsApp instead
    </a>
  </div>
</div>
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 5: Verify in browser — open a product page**

Open `http://localhost:3000/refurbished-medical-equipment-catalogue-africa`, click any listing. Confirm:
- "Request Verified Data Room & Pricing →" button is visible
- Clicking it reveals the inline form with Equipment Type pre-selected
- WhatsApp appears as a small text link below
- No page navigation occurs

- [ ] **Step 6: Commit**

```bash
git add src/ProductPage.tsx
git commit -m "feat: inline form toggle on product page, WhatsApp demoted to text link"
```

---

## Task 3: Layout — Clean Up Mobile CTAs

**Files:**
- Modify: `src/components/Layout.tsx`

- [ ] **Step 1: Remove the floating WhatsApp button**

Find and delete this block entirely (around line 193):

```tsx
{/* Floating WhatsApp */}
<a
  href="https://wa.me/447777100397"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-24 lg:bottom-8 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
>
  <MessageSquare className="w-6 h-6" />
</a>
```

- [ ] **Step 2: Update the mobile sticky bar**

Find the mobile sticky bar block (around line 204):

```tsx
{/* Mobile Sticky Bottom Bar */}
<div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-navy/5 p-3 flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
  <a
    href="https://wa.me/447777100397"
    className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm"
  >
    <Phone className="w-4 h-4" /> WhatsApp
  </a>
  <Link
    to="/request-verified-pricing-medical-equipment"
    className="flex-1 bg-teal text-white flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm"
  >
    Request Pricing
  </Link>
</div>
```

Replace with:

```tsx
{/* Mobile Sticky Bottom Bar */}
<div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-navy/5 p-3 flex gap-2 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
  <Link
    to="/request-verified-pricing-medical-equipment"
    className="flex-1 bg-teal text-white flex items-center justify-center py-3 rounded-lg font-bold text-sm shadow-lg shadow-teal/20"
  >
    Request Verified Pricing →
  </Link>
  <a
    href="https://wa.me/447777100397"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 bg-gray-100 text-[#25D366] flex items-center justify-center rounded-lg border border-gray-200"
  >
    <MessageSquare className="w-5 h-5" />
  </a>
</div>
```

- [ ] **Step 3: Remove unused Phone import if no longer needed**

Check the imports at the top. If `Phone` is no longer used anywhere in Layout.tsx, remove it from the import line:

```tsx
// Remove Phone from this line if unused:
import { Menu, X, ChevronDown, Phone, MessageSquare, Shield, Award, CheckCircle } from 'lucide-react';
// becomes:
import { Menu, X, ChevronDown, MessageSquare, Shield, Award, CheckCircle } from 'lucide-react';
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 5: Verify in browser on mobile viewport**

In browser DevTools, switch to a mobile viewport (e.g. iPhone 12, 390px wide). Confirm:
- Only one sticky bar at the bottom
- Large teal "Request Verified Pricing →" button takes most of the width
- Small WhatsApp icon button on the right
- No floating WhatsApp bubble above the bar

- [ ] **Step 6: Commit**

```bash
git add src/components/Layout.tsx
git commit -m "feat: remove duplicate WhatsApp button, clarify mobile sticky bar hierarchy"
```

---

## Task 4: Homepage — Reorder Sections, Update Hero CTAs, Add Social Proof

**Files:**
- Modify: `src/Home.tsx`

- [ ] **Step 1: Update hero CTA buttons**

Find the two hero Link buttons (around line 87–93):

```tsx
<div className="flex flex-wrap gap-4">
  <Link to="/refurbished-medical-equipment-catalogue-africa" className="bg-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal/90 transition-all shadow-xl shadow-teal/20">
    Browse Verified Listings
  </Link>
  <Link to="/verified-medical-equipment-suppliers-africa" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
    View Suppliers
  </Link>
</div>
```

Replace with:

```tsx
<div className="flex flex-wrap items-center gap-4">
  <Link to="/request-verified-pricing-medical-equipment" className="bg-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal/90 transition-all shadow-xl shadow-teal/20">
    Request Verified Pricing →
  </Link>
  <Link to="/refurbished-medical-equipment-catalogue-africa" className="text-white/60 font-semibold text-base hover:text-white underline underline-offset-4 transition-colors">
    Browse Listings
  </Link>
</div>
```

- [ ] **Step 2: Move "How It Works" section up and remove Stats Strip**

Cut the entire "How It Works" `<section>` block (currently near the bottom, the navy background section) and paste it immediately after the Trust Badge Bar `<div>`.

Then **delete the Stats Strip `<section>` entirely** — it currently reads "49+ Listings / 6 Markets / 3 Continents". Its role is replaced by the new Social Proof Strip's stat tiles in Step 3.

The order after this step should be:
1. Hero section
2. Trust Badge Bar div
3. How It Works section ← moved here
4. Categories Grid section ← Stats Strip is gone
5. (rest unchanged for now)

- [ ] **Step 3: Add Social Proof Strip section after How It Works**

Paste this new section between How It Works and the Categories Grid:

```tsx
{/* Social Proof Strip */}
<section className="py-16 bg-white border-b border-navy/5">
  <div className="max-w-7xl mx-auto px-4">
    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {[
        { value: '48h', label: 'Response Guarantee' },
        { value: 'ISO', label: '13485 Certified' },
        { value: '20+', label: 'African Markets' },
        { value: '100%', label: 'Verified Suppliers' },
      ].map(({ value, label }) => (
        <div key={label} className="text-center p-6 bg-clinical rounded-2xl border border-navy/5">
          <div className="text-3xl font-black text-navy mb-1">{value}</div>
          <div className="text-xs font-bold text-navy/40 uppercase tracking-widest">{label}</div>
        </div>
      ))}
    </div>

    {/* Testimonial */}
    <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-8 mb-10 max-w-3xl mx-auto">
      <p className="text-navy/80 italic text-base leading-relaxed mb-4">
        "[Placeholder] We procured a Siemens CT scanner through MedicalEquipment.Africa and had it installed within 6 weeks. The compliance documentation saved us months of regulatory back-and-forth."
      </p>
      <p className="text-blue-600 font-bold text-sm">— Chief Radiologist, [Hospital Name], Kenya</p>
    </div>

    {/* Logo strip */}
    <div className="text-center">
      <p className="text-[10px] font-bold text-navy/30 uppercase tracking-widest mb-6">Trusted by hospitals across Africa</p>
      <div className="flex justify-center gap-6 flex-wrap">
        {['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4'].map((logo) => (
          <div key={logo} className="w-24 h-10 bg-clinical rounded-lg border border-navy/5 flex items-center justify-center text-[10px] font-bold text-navy/30 uppercase tracking-widest">
            {logo}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Remove the mobile-only LeadForm section at the bottom**

Find and delete this block (currently the last section before `</Layout>`):

```tsx
{/* Lead Form Section for Mobile */}
<section className="py-20 bg-clinical lg:hidden">
  <div className="max-w-xl mx-auto px-4">
    <LeadForm />
  </div>
</section>
```

- [ ] **Step 5: Verify TypeScript compiles**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 6: Verify in browser — full homepage scroll**

Open `http://localhost:3000`. Scroll top to bottom and confirm order:
1. Hero — "Request Verified Pricing →" is dominant, "Browse Listings" is a plain text link
2. Trust Badge Bar
3. How It Works (3 steps)
4. Social Proof Strip (4 stats, quote, logo placeholders)
5. Browse by Category
6. Featured Equipment
7. Sponsored Suppliers
8. Browse by Country
9. *(no Stats Strip, no form section at the bottom)*

- [ ] **Step 7: Commit**

```bash
git add src/Home.tsx
git commit -m "feat: reorder homepage sections, update hero CTAs, add social proof strip"
```

---

## Final Check

- [ ] **Run lint one more time across all changed files**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Full site smoke test**

Open `http://localhost:3000` and spot-check:
- Homepage flows correctly top to bottom
- Hero "Request Verified Pricing →" goes to `/request-verified-pricing-medical-equipment`
- "Browse Listings" text link goes to `/refurbished-medical-equipment-catalogue-africa`
- A product page shows inline form on button click, WhatsApp as text link
- Mobile viewport: one sticky bar, large teal button, small WA icon, no floating bubble
- All existing URLs in nav and footer still work

- [ ] **Final commit if any cleanup needed**

```bash
git add -A
git commit -m "chore: UX CTA improvements complete"
```
