/**
 * MedicalEquipment.Africa SEO Audit — Word Document Generator
 * Uses the `docx` npm library to produce a professionally formatted .docx
 */

const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow,
  TableCell, WidthType, AlignmentType, BorderStyle, ShadingType,
  Header, Footer, PageNumber, Tab, NumberFormat, convertInchesToTwip,
  TableOfContents, PageBreak, ExternalHyperlink
} = require('docx');
const fs = require('fs');
const path = require('path');

// ─── Colours ──────────────────────────────────────────────────────────────────
const TEAL        = '1a7a7a';
const LIGHT_BLUE  = 'D6EAF8';
const GREY_ROW    = 'F2F3F4';
const WHITE       = 'FFFFFF';
const NAVY        = '1a2e44';
const CODE_BG     = 'F4F4F4';

// ─── Font sizes (half-points) ─────────────────────────────────────────────────
const PT = (n) => n * 2;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function h1(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_1,
    spacing: { before: PT(18), after: PT(8) },
    run: { bold: true, size: PT(18), color: NAVY, font: 'Arial' },
  });
}

function h2(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2,
    spacing: { before: PT(14), after: PT(6) },
    run: { bold: true, size: PT(14), color: NAVY, font: 'Arial' },
  });
}

function h3(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_3,
    spacing: { before: PT(10), after: PT(4) },
    run: { bold: true, size: PT(12), color: NAVY, font: 'Arial' },
  });
}

function body(text, opts = {}) {
  return new Paragraph({
    children: [new TextRun({ text, font: 'Arial', size: PT(11), ...opts })],
    spacing: { after: PT(6) },
  });
}

function bullet(text) {
  return new Paragraph({
    children: [new TextRun({ text, font: 'Arial', size: PT(11) })],
    bullet: { level: 0 },
    spacing: { after: PT(4) },
  });
}

function bold(text) {
  return new TextRun({ text, bold: true, font: 'Arial', size: PT(11) });
}

function code(text) {
  return new Paragraph({
    children: [new TextRun({ text, font: 'Courier New', size: PT(9), color: '333333' })],
    shading: { type: ShadingType.CLEAR, fill: CODE_BG },
    spacing: { after: PT(4) },
  });
}

function spacer() {
  return new Paragraph({ text: '', spacing: { after: PT(6) } });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function actionNeeded(text) {
  return new Paragraph({
    children: [
      new TextRun({ text: '[ACTION NEEDED] ', bold: true, color: 'CC0000', font: 'Arial', size: PT(11) }),
      new TextRun({ text, font: 'Arial', size: PT(11) }),
    ],
    spacing: { after: PT(6) },
  });
}

// ─── Table builder ────────────────────────────────────────────────────────────
function buildTable(headers, rows) {
  const headerRow = new TableRow({
    children: headers.map(h =>
      new TableCell({
        children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, font: 'Arial', size: PT(10), color: WHITE })] })],
        shading: { type: ShadingType.CLEAR, fill: TEAL },
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
      })
    ),
    tableHeader: true,
  });

  const dataRows = rows.map((row, ri) =>
    new TableRow({
      children: row.map(cell =>
        new TableCell({
          children: [new Paragraph({ children: [new TextRun({ text: cell, font: 'Arial', size: PT(9) })] })],
          shading: { type: ShadingType.CLEAR, fill: ri % 2 === 0 ? WHITE : GREY_ROW },
          margins: { top: 60, bottom: 60, left: 100, right: 100 },
        })
      ),
    })
  );

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [headerRow, ...dataRows],
  });
}

// ─── Document sections ────────────────────────────────────────────────────────

function coverPage() {
  return [
    spacer(), spacer(), spacer(), spacer(),
    new Paragraph({
      children: [new TextRun({ text: 'MedicalEquipment.Africa', bold: true, size: PT(28), font: 'Arial', color: NAVY })],
      alignment: AlignmentType.CENTER,
      spacing: { after: PT(8) },
    }),
    new Paragraph({
      children: [new TextRun({ text: 'SEO Audit & Content Strategy', bold: true, size: PT(22), font: 'Arial', color: TEAL })],
      alignment: AlignmentType.CENTER,
      spacing: { after: PT(8) },
    }),
    new Paragraph({
      children: [new TextRun({ text: 'Phase 1: Research & Findings', size: PT(16), font: 'Arial', color: '555555' })],
      alignment: AlignmentType.CENTER,
      spacing: { after: PT(8) },
    }),
    new Paragraph({
      children: [new TextRun({ text: '27 March 2026', size: PT(12), font: 'Arial', color: '888888' })],
      alignment: AlignmentType.CENTER,
      spacing: { after: PT(8) },
    }),
    new Paragraph({
      children: [new TextRun({ text: 'medicalequipment.africa', size: PT(11), font: 'Arial', color: TEAL })],
      alignment: AlignmentType.CENTER,
    }),
    pageBreak(),
  ];
}

function executiveSummary() {
  return [
    h1('1. Executive Summary'),
    body('This document presents the findings from Phase 1 of the SEO audit for MedicalEquipment.Africa — a verified B2B directory for refurbished medical equipment serving 20+ African markets.'),
    spacer(),
    h3('Top 3 Priority Actions'),
    bullet('Publish the Refurbished Medical Equipment Hub Page — the root keyword for the business has zero competitor coverage and is the single highest-impact missing page.'),
    bullet('Add SearchAction schema and FAQPage schema to country pages — two code changes that unlock Google rich results (Sitelinks Searchbox, People Also Ask) within 4–8 weeks.'),
    bullet('Fix title tag length and meta description CTAs — all homepage and country page titles exceed 60 characters; meta descriptions lack calls-to-action.'),
    spacer(),
    h3('Key Strengths vs Competitors'),
    bullet('Only directory with dedicated country pages (6 markets)'),
    bullet('Only platform with supplier verification and ISO 13485/PPB/NAFDAC/SAHPRA badge display'),
    bullet('Strongest schema implementation of all competitors (Product, BreadcrumbList, FAQPage, CollectionPage)'),
    bullet('Exact-match keyword domain — medicalequipment.africa — major organic ranking advantage'),
    bullet('Mobile-first responsive design — competitors use dated, non-mobile layouts'),
    spacer(),
    h3('Key Gaps vs Competitors'),
    bullet('No refurbished equipment hub page — core keyword unaddressed'),
    bullet('No import/regulatory guide content for any country'),
    bullet('No government/NGO procurement content'),
    bullet('No buying guides on category pages — competitors also lack this but it is a gap to fill first'),
    bullet('No blog or news section — competitors have this, generating fresh crawl signals'),
    pageBreak(),
  ];
}

function processOverview() {
  return [
    h1('2. Process Overview'),
    body('This SEO audit follows a 5-phase process. Phase 1 is now complete.'),
    spacer(),
    buildTable(
      ['Phase', 'Description', 'Status'],
      [
        ['1. Research & Audit', 'Competitor discovery, gap analysis, keyword mapping, schema audit, technical SEO', '✅ COMPLETE'],
        ['2. Validate', 'Plug keywords into Semrush/Keywords Everywhere, confirm volumes, score difficulty', 'Pending'],
        ['3. Document', 'Master findings report, competitor profiles, keyword master list, content priority matrix', 'Builds during Phase 1'],
        ['4. Content Creation', 'Write priority pages using briefs, implement schema, schedule GBP posts', 'Pending'],
        ['5. Track & Iterate', 'Rank tracking setup, monthly reporting, content gap refills', 'Pending'],
      ]
    ),
    pageBreak(),
  ];
}

function competitorLandscape() {
  return [
    h1('3. Competitor Landscape'),
    spacer(),
    h2('3.1 Competitor Profiles'),
    spacer(),
    h3('Competitor 1: Medhospafrica (medhospafrica.com) — Threat Level: MEDIUM'),
    bullet('WordPress-based directory for African medical importers and distributors'),
    bullet('Focuses on Tanzania, Kenya, Malawi — lacks Nigeria, Ghana, South Africa pages'),
    bullet('Has news/blog section (generates fresh content) but no buying guides'),
    bullet('No supplier verification, no refurbished equipment focus'),
    bullet('Weakness: No country-specific landing pages, no buyer content, dated UI'),
    spacer(),
    h3('Competitor 2: Afrotrade Medical (medical.afrotrade.net) — Threat Level: LOW'),
    bullet('Sub-domain of a general African B2B trade catalogue'),
    bullet('Connects international manufacturers with African buyers — advertiser-funded model'),
    bullet('Static HTML, no mobile optimisation, no search/filter capability'),
    bullet('Zero schema markup, no meta descriptions, extremely dated design'),
    bullet('Weakness: Technically broken from an SEO perspective — easily outranked'),
    spacer(),
    h3('Competitor 3: AMSP Africa (amsp.africa) — Threat Level: NICHE'),
    bullet('Emergency/frontline medical procurement platform, AU-supported'),
    bullet('Closed/members-only model — not accessible to general public'),
    bullet('Focuses on PPE and consumables, not capital equipment'),
    bullet('Weakness: Membership model means zero organic content rankings'),
    spacer(),
    h2('3.2 Side-by-Side Comparison'),
    spacer(),
    buildTable(
      ['Factor', 'MedicalEquipment.Africa', 'Medhospafrica', 'Afrotrade Medical', 'AMSP Africa'],
      [
        ['Country pages', '✅ 6 pages', '❌ None', '❌ None', '❌ None'],
        ['Category pages', '✅ 5 pages', '❌ None', '⚠️ Basic', '❌ None'],
        ['Buyer guides', '❌ Missing', '❌ Missing', '❌ Missing', '❌ Missing'],
        ['Schema markup', '✅ Strong', '⚠️ Basic', '❌ None', '❌ None'],
        ['Mobile-friendly', '✅ Yes', '✅ Yes', '❌ No', '✅ Yes'],
        ['Supplier verification', '✅ Yes', '❌ No', '❌ No', '❌ No'],
        ['Refurbished focus', '✅ Core', '❌ No', '❌ No', '❌ No'],
        ['Import/regulatory guides', '⚠️ Partial', '❌ None', '❌ None', '❌ None'],
        ['Blog / news', '❌ Missing', '✅ Active', '⚠️ Infrequent', '❌ None'],
      ]
    ),
    pageBreak(),
  ];
}

function technicalSEO() {
  return [
    h1('4. Technical SEO Audit'),
    spacer(),
    buildTable(
      ['Check', 'Status', 'Fix Required'],
      [
        ['Title tag', '⚠️ WEAK', 'Shorten homepage title to under 60 chars (currently 77 chars)'],
        ['Meta description', '⚠️ WEAK', 'Shorten to 150-160 chars and add CTA phrase'],
        ['H1 tag', '✅ PASS', 'None'],
        ['H2 tags', '✅ PASS', 'Consider adding keywords to H2 text'],
        ['Image alt tags', '⚠️ WEAK', 'Update category icon alt text to be descriptive'],
        ['Canonical tag', '✅ PASS', 'None'],
        ['robots.txt', '✅ PASS', 'None'],
        ['Sitemap.xml', '✅ PASS', 'Add individual product pages (currently missing)'],
        ['Open Graph tags', '✅ PASS', 'Verify og-image.jpg exists and is 1200x630px'],
        ['Mobile viewport', '✅ PASS', 'None'],
        ['HTTPS', '✅ PASS', 'None'],
        ['Page speed', '⚠️ WEAK', 'SPA/CSR — consider pre-rendering key landing pages'],
        ['Internal links', '✅ PASS', 'Add FAQ and blog links to homepage navigation'],
      ]
    ),
    spacer(),
    body('Score: 8 Pass / 4 Weak / 0 Fail', { bold: true }),
    pageBreak(),
  ];
}

function schemaAudit() {
  return [
    h1('5. Schema Audit'),
    spacer(),
    buildTable(
      ['Schema Type', 'Page', 'Verdict', 'Notes'],
      [
        ['WebSite', 'Homepage', '⚠️ WEAK', 'Missing SearchAction (Sitelinks Searchbox)'],
        ['Organization', 'Homepage', '⚠️ WEAK', 'Missing sameAs, address, foundingDate'],
        ['CollectionPage', 'Category & Country pages', '✅ USEFUL', 'Correctly applied'],
        ['BreadcrumbList', 'Category, Country, Product', '✅ USEFUL', 'Correctly structured'],
        ['ItemList + Product', 'Category & Country pages', '✅ USEFUL', 'Good directory pattern'],
        ['Product', 'Product pages', '⚠️ WEAK', 'Missing Offer (no price, condition, availability)'],
        ['FAQPage', 'FAQ page', '✅ USEFUL', 'Correctly structured'],
        ['LocalBusiness', 'Nowhere', '❌ MISSING', 'HIGH PRIORITY — no address or location signals'],
        ['SearchAction', 'Nowhere', '❌ MISSING', 'HIGH PRIORITY — enables Sitelinks Searchbox'],
        ['OfferCatalog', 'Nowhere', '❌ MISSING', 'Would strengthen marketplace positioning'],
      ]
    ),
    spacer(),
    h3('Priority Schema to Implement'),
    bullet('1. SearchAction on WebSite schema — 30-minute code change, Sitelinks Searchbox within 2-4 weeks'),
    bullet('2. LocalBusiness schema — requires physical address data (see ACTION NEEDED items)'),
    bullet('3. Offer on Product pages — requires price data from suppliers'),
    bullet('4. OfferCatalog on Homepage — static data, low effort'),
    bullet('5. sameAs on Organization — add social media URLs once confirmed'),
    pageBreak(),
  ];
}

function contentGaps() {
  return [
    h1('6. Content Gap Analysis'),
    spacer(),
    buildTable(
      ['Gap', 'Missing Content', 'Priority', 'New Pages Required'],
      [
        ['1. Country pages (enrichment)', 'Buying guides, import process, regulatory info on existing 6 pages', 'HIGH', '0 new + 3 missing markets'],
        ['2. Category buying guides', 'Specs tables, comparison guides, buyer checklists on existing 5 pages', 'HIGH', '0 new + 2 new categories (ICU, Surgical)'],
        ['3. Government/NGO procurement', 'Tender guides, NGO procurement pages, ministry contacts', 'MEDIUM', '2-3 new pages'],
        ['4. Refurbished hub page', 'Root keyword hub: what refurbished means, safety, cost comparison, checklist', 'VERY HIGH', '1 new hub page'],
        ['5. Import/regulatory guides', 'Country-by-country step-by-step import guides with HowTo schema', 'HIGH', '5-6 new pages'],
      ]
    ),
    pageBreak(),
  ];
}

function keywordList() {
  return [
    h1('7. Keyword Master List'),
    body('22 keywords mapped. Volumes to be validated in Phase 2 via Semrush.', { italics: true }),
    spacer(),
    buildTable(
      ['#', 'Keyword', 'Intent', 'Priority', 'Target Page'],
      [
        ['1', 'refurbished medical equipment Africa', 'Trans+Info', 'HIGH', '/refurbished-medical-equipment-africa (new)'],
        ['2', 'medical equipment suppliers Nigeria', 'Transactional', 'HIGH', '/used-medical-equipment-nigeria-lagos-abuja'],
        ['3', 'medical equipment suppliers Kenya', 'Transactional', 'HIGH', '/refurbished-medical-equipment-kenya-nairobi'],
        ['4', 'buy hospital equipment Nigeria', 'Transactional', 'HIGH', '/used-medical-equipment-nigeria-lagos-abuja'],
        ['5', 'ultrasound machine suppliers Africa', 'Transactional', 'HIGH', '/refurbished-ultrasound-machines-africa'],
        ['6', 'medical equipment directory Africa', 'Navigational', 'HIGH', 'Homepage /'],
        ['7', 'ICU equipment suppliers Africa', 'Transactional', 'HIGH', '/icu-equipment-africa (new)'],
        ['8', 'how to import medical equipment Kenya', 'Informational', 'HIGH', '/how-to-import-medical-equipment-kenya (new)'],
        ['9', 'second hand hospital equipment Africa', 'Transactional', 'HIGH', '/refurbished-medical-equipment-africa (hub)'],
        ['10', 'medical equipment suppliers Ghana', 'Transactional', 'HIGH', '/used-medical-equipment-ghana-accra'],
        ['11', 'verified medical equipment suppliers Ghana', 'Transactional', 'HIGH', '/used-medical-equipment-ghana-accra'],
        ['12', 'X-ray machine suppliers Nigeria', 'Transactional', 'HIGH', '/used-digital-x-ray-systems-africa'],
        ['13', 'NAFDAC approved medical equipment Nigeria', 'Transactional', 'HIGH', '/used-medical-equipment-nigeria-lagos-abuja'],
        ['14', 'SAHPRA approved medical device suppliers', 'Transactional', 'HIGH', '/refurbished-medical-equipment-south-africa'],
        ['15', 'medical equipment tender Africa 2025', 'Informational', 'HIGH', '/medical-equipment-tenders-africa (new)'],
        ['16', 'medical device importers East Africa', 'Trans+Info', 'HIGH', '/refurbished-medical-equipment-africa (hub)'],
        ['17', 'where to buy surgical equipment Africa', 'Transactional', 'MEDIUM', '/surgical-equipment-africa (new)'],
        ['18', 'NGO medical equipment procurement Africa', 'Informational', 'MEDIUM', '/ngo-medical-equipment-procurement-africa (new)'],
        ['19', 'cheapest medical equipment suppliers Africa', 'Transactional', 'MEDIUM', '/refurbished-medical-equipment-africa (hub)'],
        ['20', 'diagnostic equipment Africa suppliers', 'Transactional', 'MEDIUM', '/refurbished-medical-equipment-catalogue-africa'],
        ['21', 'hospital bed suppliers South Africa', 'Transactional', 'MEDIUM', 'New page if listings exist'],
        ['22', 'physiotherapy equipment suppliers Africa', 'Transactional', 'LOW', 'New page if listings exist'],
      ]
    ),
    pageBreak(),
  ];
}

function contentBriefsSection() {
  return [
    h1('8. Content Briefs (Priority Pages)'),
    body('Five full content briefs have been produced. Detailed files are in /seo-audit/07-content-briefs/. Summaries below.'),
    spacer(),

    h3('Brief 1: Kenya Medical Equipment Suppliers Directory Page'),
    bullet('Primary keyword: medical equipment suppliers Kenya'),
    bullet('URL: /refurbished-medical-equipment-kenya-nairobi (existing — needs enrichment)'),
    bullet('Target: Hospital procurement managers, biomedical engineers in Kenya'),
    bullet('Key add: PPB compliance section, import process, 4-5 FAQ with FAQPage schema'),
    actionNeeded('List of Kenyan hospital customers, PPB permit fee and processing time, delivery lead times'),
    spacer(),

    h3('Brief 2: Nigeria Medical Equipment Suppliers Directory Page'),
    bullet('Primary keyword: medical equipment suppliers Nigeria'),
    bullet('URL: /used-medical-equipment-nigeria-lagos-abuja (existing — needs enrichment)'),
    bullet('Target: Hospital admins, procurement officers in Lagos, Abuja, Port Harcourt'),
    bullet('Key add: NAFDAC compliance section, cost savings panel, government procurement angle'),
    actionNeeded('Nigerian hospital customer names/quotes, NAFDAC registration fee and timeline, Lagos port agent contacts'),
    spacer(),

    h3('Brief 3: Refurbished Medical Equipment Africa — Hub Page'),
    bullet('Primary keyword: refurbished medical equipment Africa'),
    bullet('URL: /refurbished-medical-equipment-africa (NEW PAGE — highest priority)'),
    bullet('Target: Decision-makers evaluating refurbished equipment for the first time'),
    bullet('Key content: Definition, cost comparison, safety standards, 7-point supplier checklist'),
    actionNeeded('Price ranges for refurbished CT/MRI/Ultrasound vs new, regulatory engagement letters, PDF checklist for lead magnet'),
    spacer(),

    h3('Brief 4: How to Import Medical Equipment into Kenya — Regulatory Guide'),
    bullet('Primary keyword: how to import medical equipment Kenya'),
    bullet('URL: /how-to-import-medical-equipment-kenya (NEW PAGE)'),
    bullet('Target: Procurement officers, import agents, government buyers in Kenya'),
    bullet('Key content: PPB step-by-step process, HS codes, customs duties, HowTo schema'),
    actionNeeded('PPB device classification for refurbished imaging, current duty rates, recommended clearing agent'),
    spacer(),

    h3('Brief 5: Ultrasound Machines Africa — Category Page (Template)'),
    bullet('Primary keyword: refurbished ultrasound machines Africa'),
    bullet('URL: /refurbished-ultrasound-machines-africa (existing — needs enrichment)'),
    bullet('Target: Radiologists, obstetricians, clinic owners across Africa'),
    bullet('Key add: Portable vs cart-based comparison table, specs guide, buyer checklist, 5 FAQ'),
    bullet('This brief serves as the template for ALL equipment category pages'),
    actionNeeded('Price ranges for portable vs cart-based ultrasound, brands carried by verified suppliers, warranty terms'),
    pageBreak(),
  ];
}

function gbpSection() {
  return [
    h1('9. Google Business Profile Posts'),
    body('10 posts produced covering all required angles. Full post text in /seo-audit/08-gbp-posts.md. Post summaries and schedule below.'),
    spacer(),
    buildTable(
      ['Post #', 'Angle', 'Key Keyword', 'CTA'],
      [
        ['1', 'General directory awareness', 'medical equipment Africa', 'Browse the full directory'],
        ['2', 'Cost savings — refurbished angle', 'certified refurbished medical equipment', 'See refurbished equipment now'],
        ['3', 'Kenya focus', 'medical equipment suppliers Kenya Nairobi', 'Find a verified supplier in Kenya'],
        ['4', 'Nigeria focus', 'medical equipment suppliers Nigeria Lagos', 'Browse Nigeria-ready suppliers'],
        ['5', 'East Africa regional', 'medical equipment East Africa', 'Find a verified East Africa supplier'],
        ['6', 'West Africa regional', 'medical equipment West Africa Ghana', 'Browse West Africa listings'],
        ['7', 'Supplier listing CTA', 'verified medical equipment supplier', 'Submit your company today'],
        ['8', 'Government/NGO procurement', 'NGO medical equipment procurement Africa', 'Start your verified procurement search'],
        ['9', 'Ultrasound spotlight', 'refurbished ultrasound machines Africa', 'Browse verified ultrasound listings'],
        ['10', 'Trust/verification angle', 'verified medical equipment suppliers', 'Browse only verified suppliers'],
      ]
    ),
    spacer(),
    body('Scheduling recommendation: post one per week, rotate monthly. See full scheduling table in 08-gbp-posts.md.'),
    pageBreak(),
  ];
}

function strategicAdvantages() {
  return [
    h1('10. Strategic Advantages — 3 Immediate Wins'),
    spacer(),

    h2('Win 1 — Publish the Refurbished Medical Equipment Hub Page'),
    bullet('Action: Create /refurbished-medical-equipment-africa — 2,000-word hub page'),
    bullet('Root keyword for the business — zero competitor coverage'),
    bullet('Exact-match domain gives ranking head-start'),
    bullet('Attracts backlinks from NGOs, health policy organisations, trade publications'),
    bullet('Expected result: Ranking within 60-90 days, long-term domain authority growth'),
    spacer(),

    h2('Win 2 — Add SearchAction Schema + FAQPage Schema to Country Pages'),
    bullet('Action: 2 code changes in Home.tsx and CountryPage.tsx (JSON-LD already written in schema audit)'),
    bullet('SearchAction → triggers Google Sitelinks Searchbox for branded queries'),
    bullet('FAQPage schema → unlocks People Also Ask rich results for country page keywords'),
    bullet('30 minutes of development time'),
    bullet('Expected result: Rich results within 4-8 weeks'),
    spacer(),

    h2('Win 3 — Fix Title Tags and Meta Description CTAs'),
    bullet('Action: Edit title and description props in Home.tsx and all CountryPage instances'),
    bullet('All current homepage/country titles exceed 60 characters (Google truncates them)'),
    bullet('Meta descriptions lack calls-to-action — wasting the highest-read Google snippet real estate'),
    bullet('Recommended homepage title: "Refurbished Medical Equipment Africa | Verified Suppliers" (56 chars)'),
    bullet('Expected result: Improved CTR within 24-72 hours of re-crawl'),
    pageBreak(),
  ];
}

function phase2Section() {
  return [
    h1('11. Phase 2 Next Steps'),
    body('Full checklist in /seo-audit/10-phase2-checklist.md. Summary below.'),
    spacer(),
    h3('Keywords to Validate First (Top 10 by Priority)'),
    buildTable(
      ['Priority', 'Keyword', 'Target Page'],
      [
        ['1', 'refurbished medical equipment Africa', 'New hub page'],
        ['2', 'medical equipment suppliers Nigeria', 'Nigeria page'],
        ['3', 'medical equipment suppliers Kenya', 'Kenya page'],
        ['4', 'buy hospital equipment Nigeria', 'Nigeria page'],
        ['5', 'ultrasound machine suppliers Africa', 'Ultrasound category page'],
        ['6', 'medical equipment directory Africa', 'Homepage'],
        ['7', 'ICU equipment suppliers Africa', 'New page'],
        ['8', 'how to import medical equipment Kenya', 'New import guide'],
        ['9', 'NAFDAC approved medical equipment Nigeria', 'Nigeria page'],
        ['10', 'second hand hospital equipment Africa', 'Refurbished hub'],
      ]
    ),
    spacer(),
    h3('Metrics to Capture'),
    bullet('Monthly search volume (note: African markets under-indexed in Semrush)'),
    bullet('Keyword difficulty (KD) — target under 30 for quick wins'),
    bullet('CPC — high CPC = high commercial intent'),
    bullet('SERP features present (Featured Snippet, PAA, Local Pack)'),
    bullet('Current site ranking position'),
    bullet('Competitor domain authority (DA/DR)'),
    spacer(),
    h3('Domain Authority Benchmark'),
    body('Target: medicalequipment.africa DR 30+ within 12 months. Medhospafrica estimated DR 25-35, Afrotrade sub-domain estimated DR 15-25.'),
    pageBreak(),
  ];
}

function actionNeededSection() {
  return [
    h1('13. [ACTION NEEDED] — Consolidated Client Input Required'),
    body('All items below require information that only the site owner can provide. These are blocking items for content creation.'),
    spacer(),

    h3('Schema & Technical'),
    actionNeeded('Confirm physical business address for LocalBusiness schema (street, city, country)'),
    actionNeeded('Provide social media profile URLs for sameAs in Organization schema (LinkedIn, Facebook, Twitter/X)'),
    actionNeeded('Verify /logo.png exists at the root domain (used in Organization schema)'),
    actionNeeded('Verify /og-image.jpg exists and is 1200x630px (used for Open Graph social sharing)'),
    actionNeeded('Confirm or add ?q= search parameter to catalogue URL for SearchAction'),
    spacer(),

    h3('Kenya Content'),
    actionNeeded('Names of any Kenyan hospital/clinic customers (for testimonial snippets — can be anonymised)'),
    actionNeeded('Current PPB import permit fee and average processing time for medical devices'),
    actionNeeded('Specific delivery lead time to Nairobi vs upcountry Kenya'),
    actionNeeded('Any Kenya-based biomedical engineer partners for local installation'),
    spacer(),

    h3('Nigeria Content'),
    actionNeeded('Names or quotes from Nigerian hospital customers'),
    actionNeeded('NAFDAC medical device registration fee and typical processing timeline'),
    actionNeeded('Lagos port customs clearance agent contact (if you have a vetted partner)'),
    actionNeeded('Any state government hospital procurement programs you\'ve engaged with'),
    spacer(),

    h3('Refurbished Hub Page'),
    actionNeeded('Price ranges for refurbished vs new equipment (CT: $X-$Y refurbished vs $Z new, etc.)'),
    actionNeeded('Have you engaged directly with any African regulatory body (PPB, NAFDAC, SAHPRA)?'),
    actionNeeded('Do you have a downloadable supplier checklist or datasheet that could serve as a lead magnet?'),
    actionNeeded('Any NGO or government tender wins to reference (even anonymised)'),
    spacer(),

    h3('Kenya Import Guide'),
    actionNeeded('PPB device classification for refurbished imaging equipment (CT, MRI, Ultrasound) — Class A/B/C/D'),
    actionNeeded('Current KRA import duty rate for medical equipment and VAT exemption status for hospitals'),
    actionNeeded('Recommended Kenya customs broker / clearing agent'),
    spacer(),

    h3('Ultrasound Category Page'),
    actionNeeded('Price ranges for portable POCUS units vs full cart-based colour Doppler systems'),
    actionNeeded('Which ultrasound brands do verified suppliers carry? (GE, Siemens, Philips, Mindray, SonoScape?)'),
    actionNeeded('Is application training for radiographers included in standard procurement packages?'),
  ];
}

function cannibalizationSection() {
  return [
    h1('12. Keyword Cannibalization Prevention — Site Rebuild Guide'),
    body('Keyword cannibalization occurs when two or more pages on the same site compete for the same keyword. Google splits ranking signals between them and both rank lower than one strong, focused page would. For a directory site with country pages, category pages, product pages, and guide pages all covering related topics, this is a structural risk that must be designed out before the rebuild begins.'),
    spacer(),

    h2('12.1 The "One Page Per Intent" Rule'),
    body('Every unique combination of [topic] + [search intent] gets exactly one page. No exceptions.'),
    spacer(),
    buildTable(
      ['Page Type', 'Keyword Ownership', 'Example'],
      [
        ['Homepage', 'Brand + root directory queries only', 'medical equipment directory Africa'],
        ['Refurbished Hub Page', 'Root transactional keyword', 'refurbished medical equipment Africa'],
        ['Country pages', 'Country-specific transactional', 'medical equipment suppliers Kenya'],
        ['Category pages', 'Equipment-specific transactional', 'refurbished ultrasound machines Africa'],
        ['Import guides', 'Informational + country', 'how to import medical equipment Kenya'],
        ['Product pages', 'Brand + model + country', 'Mindray DC-60 ultrasound Kenya'],
        ['Blog posts', 'Long-tail informational only', 'portable ultrasound for rural clinics Kenya'],
      ]
    ),
    spacer(),
    body('Rule: If a keyword fits more than one row above — the most specific page wins. The homepage must never compete with a country page. A category page must never compete with a product page.', { italics: true }),
    spacer(),

    h2('12.2 URL Structure Rules — Follow Exactly'),
    body('A clean URL structure is the foundation of cannibalization prevention. Every URL must signal exactly one topic.'),
    spacer(),
    h3('Correct URL Patterns'),
    code('Country pages:   /refurbished-medical-equipment-[country]-[city]'),
    code('                  e.g. /refurbished-medical-equipment-kenya-nairobi'),
    code('Category pages:  /refurbished-[equipment-type]-africa'),
    code('                  e.g. /refurbished-ultrasound-machines-africa'),
    code('Product pages:   /equipment/[brand]-[model]-[type]-[country]'),
    code('Import guides:   /how-to-import-medical-equipment-[country]'),
    code('Hub pages:       /refurbished-medical-equipment-africa'),
    code('Blog:            /blog/[topic-slug]'),
    spacer(),
    h3('URL Patterns to AVOID'),
    code('❌ /kenya                        — too vague, no topic signal'),
    code('❌ /ultrasound                   — no geo, competes with itself globally'),
    code('❌ /catalogue/kenya/ultrasound   — nested, overlaps with country + category pages'),
    code('❌ /medical-equipment-kenya      — missing "refurbished", wrong intent match'),
    spacer(),

    h2('12.3 Canonical Tag Strategy'),
    spacer(),
    buildTable(
      ['Scenario', 'Canonical Rule'],
      [
        ['Standard pages', 'Self-referencing canonical on every page (already implemented — keep)'],
        ['www vs non-www', 'Pick one and enforce with 301 redirect + consistent canonical'],
        ['Trailing slash', 'Pick no-trailing-slash and apply consistently to all URLs'],
        ['Filtered catalogue URLs (?country=kenya)', 'Canonical → /refurbished-medical-equipment-catalogue-africa OR noindex'],
        ['Paginated pages (page 2, 3...)', 'Canonical on page 2+ → points to page 1'],
      ]
    ),
    spacer(),

    h2('12.4 Internal Linking Rules'),
    bullet('One anchor text theme per target page — always use the target page\'s primary keyword as anchor text'),
    bullet('Homepage links TO country pages but does NOT contain keyword blocks targeting country queries'),
    bullet('Hub-and-spoke structure: Refurbished Hub → links to all country + category pages → each spoke links back to hub'),
    bullet('No two pages should share the same H1 — maintain a unique H1 register during rebuild'),
    spacer(),

    h2('12.5 Redirect Map — Preserve All Rankings'),
    body('Before going live with the rebuild, every URL that changes must have a 301 redirect from old to new. Missing redirects = lost rankings permanently.'),
    spacer(),
    body('Current URLs to preserve (from sitemap — do NOT change these slugs):', { bold: true }),
    bullet('/refurbished-medical-equipment-catalogue-africa'),
    bullet('/verified-medical-equipment-suppliers-africa'),
    bullet('/faq-buying-refurbished-medical-equipment-africa'),
    bullet('/import-regulations-medical-equipment-africa'),
    bullet('/refurbished-ct-scanners-africa'),
    bullet('/used-mri-machines-africa'),
    bullet('/refurbished-ultrasound-machines-africa'),
    bullet('/used-digital-x-ray-systems-africa'),
    bullet('/used-laboratory-equipment-africa'),
    bullet('/refurbished-medical-equipment-kenya-nairobi'),
    bullet('/used-medical-equipment-nigeria-lagos-abuja'),
    bullet('/refurbished-medical-equipment-south-africa'),
    bullet('/used-medical-equipment-ghana-accra'),
    bullet('/refurbished-medical-equipment-uganda-kampala'),
    bullet('/used-medical-equipment-rwanda-kigali'),
    bullet('All /equipment/[slug] product pages (add to sitemap.xml)'),
    spacer(),

    h2('12.6 New Page Cannibalization Check'),
    body('Before creating any new page, ask these three questions:'),
    bullet('1. Does a page already exist targeting this keyword? → If yes: enrich the existing page, do not create a new one.'),
    bullet('2. Does the new page\'s primary keyword appear as a secondary keyword on any existing page? → If yes: consolidate or clearly differentiate.'),
    bullet('3. Would Google need to choose between two pages for this query? → If yes: resolve with canonical or 301 before publishing.'),
    spacer(),

    h2('12.7 FAQ Page vs Refurbished Hub Page — Specific Risk'),
    body('The existing FAQ page (/faq-buying-refurbished-medical-equipment-africa) overlaps topically with the planned Refurbished Hub page. To prevent cannibalization:'),
    bullet('FAQ page primary keyword: "buying refurbished medical equipment Africa" (question/informational intent)'),
    bullet('Hub page primary keyword: "refurbished medical equipment Africa" (transactional/commercial intent)'),
    bullet('Hub page should NOT have a duplicate FAQ section — instead link to the FAQ page'),
    bullet('FAQ page\'s questions can be referenced in Hub page FAQPage schema via the FAQ page URL, not repeated verbatim'),
    spacer(),

    h2('12.8 Pre-Launch QA Checklist'),
    bullet('[ ] Every page has a unique Primary Keyword — no two pages share the same target'),
    bullet('[ ] Every page has a self-referencing canonical tag'),
    bullet('[ ] www/non-www redirect enforced consistently in vercel.json'),
    bullet('[ ] Trailing slash usage consistent across all URLs'),
    bullet('[ ] All filter/sort query string URLs are canonicalised or noindexed'),
    bullet('[ ] Redirect map complete — every changed URL has a 301 redirect'),
    bullet('[ ] No two pages share the same H1 tag'),
    bullet('[ ] Hub-and-spoke internal linking implemented'),
    bullet('[ ] Anchor text matches target page primary keyword throughout'),
    bullet('[ ] All product pages added to sitemap.xml'),
    bullet('[ ] Google Search Console connected + new sitemap submitted on launch day'),
    bullet('[ ] Semrush Cannibalization Report run within 30 days of launch'),
    pageBreak(),
  ];
}

// ─── Assemble document ────────────────────────────────────────────────────────

const doc = new Document({
  title: 'MedicalEquipment.Africa SEO Audit',
  description: 'Phase 1 Research & Findings',
  styles: {
    default: {
      document: {
        run: { font: 'Arial', size: PT(11) },
      },
    },
    paragraphStyles: [
      {
        id: 'Heading1',
        name: 'Heading 1',
        run: { bold: true, size: PT(18), color: NAVY, font: 'Arial' },
        paragraph: { spacing: { before: PT(18), after: PT(8) } },
      },
      {
        id: 'Heading2',
        name: 'Heading 2',
        run: { bold: true, size: PT(14), color: NAVY, font: 'Arial' },
        paragraph: { spacing: { before: PT(14), after: PT(6) } },
      },
      {
        id: 'Heading3',
        name: 'Heading 3',
        run: { bold: true, size: PT(12), color: NAVY, font: 'Arial' },
        paragraph: { spacing: { before: PT(10), after: PT(4) } },
      },
    ],
  },
  sections: [
    // Cover page — no header/footer
    {
      properties: {},
      children: coverPage(),
    },
    // All other pages — with header and footer
    {
      properties: {},
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: 'medicalequipment.africa', font: 'Arial', size: PT(9), color: '888888', italics: true }),
              ],
              alignment: AlignmentType.RIGHT,
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: 'MedicalEquipment.Africa SEO Audit — Phase 1    |    Page ', font: 'Arial', size: PT(9), color: '888888' }),
                new TextRun({ children: [PageNumber.CURRENT], font: 'Arial', size: PT(9), color: '888888' }),
              ],
              alignment: AlignmentType.CENTER,
            }),
          ],
        }),
      },
      children: [
        ...executiveSummary(),
        ...processOverview(),
        ...competitorLandscape(),
        ...technicalSEO(),
        ...schemaAudit(),
        ...contentGaps(),
        ...keywordList(),
        ...contentBriefsSection(),
        ...gbpSection(),
        ...strategicAdvantages(),
        ...phase2Section(),
        ...cannibalizationSection(),
        ...actionNeededSection(),
      ],
    },
  ],
});

// ─── Write file ───────────────────────────────────────────────────────────────
const outputPath = path.join(__dirname, 'medicalequipment-africa-seo-audit.docx');

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`✅ Word document saved: ${outputPath}`);
}).catch((err) => {
  console.error('❌ Error generating document:', err);
});
