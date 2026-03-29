// 14-content-gap-keywords.mjs
// Content gap keyword research — MedicalEquipment.Africa
// Targets: Nigeria/SA pricing, brand searches, adjacent categories
// Run: node 14-content-gap-keywords.mjs

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const AUTH = Buffer.from('zk0ew6c76h@bwmyga.com:b5d82fac4301b02b').toString('base64');
const BASE_URL = 'https://api.dataforseo.com';

const MARKETS = [
  { name: 'Kenya',        code: 2404 },
  { name: 'Nigeria',      code: 2566 },
  { name: 'South Africa', code: 2710 },
  { name: 'Ghana',        code: 2288 },
];

const CATEGORIES = {
  'Nigeria Equipment Pricing': [
    'ultrasound machine price in nigeria',
    'x ray machine price in nigeria',
    'mri machine price in nigeria',
    'ct scan machine price in nigeria',
    'medical equipment prices in nigeria',
    'hospital equipment prices nigeria',
    'cost of ultrasound machine in nigeria',
    'portable ultrasound price nigeria',
  ],
  'SA Equipment Pricing': [
    'ultrasound machine price south africa',
    'x ray machine price south africa',
    'mri machine price south africa',
    'ct scanner price south africa',
    'medical equipment prices south africa',
    'hospital equipment price south africa',
    'portable ultrasound price south africa',
    'defibrillator price south africa',
  ],
  'Brand Searches Kenya': [
    'pioneer medical supplies kenya',
    'crown healthcare kenya',
    'pioneer medical kenya catalogue',
    'crown healthcare kenya catalogue',
    'medserve kenya',
    'africa medical equipment nairobi',
    'ge medical equipment kenya',
    'siemens medical equipment kenya',
    'philips medical equipment kenya',
  ],
  'Brand Searches Nigeria': [
    'crown healthcare nigeria',
    'jiji medical equipment nigeria',
    'konga medical equipment nigeria',
    'ge medical equipment nigeria',
    'mindray nigeria',
    'medicore nigeria',
  ],
  'Financing & Leasing': [
    'medical equipment financing kenya',
    'medical equipment leasing kenya',
    'medical equipment loan kenya',
    'hospital equipment financing africa',
    'medical equipment financing nigeria',
    'medical equipment financing south africa',
    'lease medical equipment south africa',
  ],
  'Tenders & Procurement': [
    'medical equipment tenders kenya 2026',
    'kemsa tender medical equipment',
    'government hospital equipment procurement kenya',
    'ngo medical equipment procurement africa',
    'medical equipment tender nigeria',
    'nhls tender south africa medical',
    'medical supplies tender africa',
  ],
  'Specific Equipment Nigeria': [
    'laboratory equipment suppliers nigeria',
    'hospital beds nigeria',
    'hospital beds price nigeria',
    'ecg machine price nigeria',
    'dialysis machine price nigeria',
    'ventilator price nigeria',
    'oxygen concentrator price nigeria',
  ],
  'Specific Equipment SA': [
    'laboratory equipment suppliers south africa',
    'ecg machine price south africa',
    'dialysis machine south africa',
    'ventilator price south africa',
    'oxygen concentrator price south africa',
    'hospital beds price south africa',
    'defibrillator suppliers south africa',
  ],
  'Refurbished Hub Keywords': [
    'refurbished medical equipment africa',
    'second hand medical equipment africa',
    'used medical equipment for sale africa',
    'certified refurbished medical equipment',
    'is refurbished medical equipment safe',
    'refurbished vs new medical equipment',
    'buy refurbished medical equipment',
    'refurbished medical equipment suppliers',
  ],
};

async function fetchSuggestions(seed, locationCode) {
  const res = await fetch(`${BASE_URL}/v3/dataforseo_labs/google/keyword_suggestions/live`, {
    method: 'POST',
    headers: { Authorization: `Basic ${AUTH}`, 'Content-Type': 'application/json' },
    body: JSON.stringify([{ keyword: seed, location_code: locationCode, language_code: 'en', limit: 40 }]),
  });
  if (!res.ok) return [];
  const json = await res.json();
  return (json?.tasks?.[0]?.result?.[0]?.items || [])
    .filter(i => (i.keyword_info?.search_volume || 0) > 0)
    .map(i => ({
      keyword: i.keyword,
      volume: i.keyword_info?.search_volume || 0,
      cpc: i.keyword_info?.cpc || 0,
      kd: i.keyword_properties?.keyword_difficulty ?? null,
      intent: i.search_intent_info?.main_intent || null,
    }));
}

async function main() {
  console.log('MedicalEquipment.Africa — Content Gap Keyword Research\n');
  const categoryResults = {};

  for (const [category, seeds] of Object.entries(CATEGORIES)) {
    console.log(`\n=== ${category} ===`);
    const allForCategory = [];

    // Pick most relevant market(s) per category
    const marketsToQuery = category.includes('Nigeria') ? [MARKETS[1]] :
                           category.includes(' SA') || category.includes('SA ') ? [MARKETS[2]] :
                           category.includes('Kenya') ? [MARKETS[0]] :
                           MARKETS;

    for (const market of marketsToQuery) {
      for (const seed of seeds) {
        process.stdout.write(`  [${market.name}] ${seed}... `);
        try {
          const kws = await fetchSuggestions(seed, market.code);
          kws.forEach(k => k.market = market.name);
          allForCategory.push(...kws);
          console.log(`${kws.length}`);
          await new Promise(r => setTimeout(r, 350));
        } catch (e) {
          console.log(`ERR: ${e.message}`);
        }
      }
    }

    // Deduplicate per keyword+market
    const map = new Map();
    for (const r of allForCategory) {
      const key = `${r.keyword}__${r.market}`;
      if (!map.has(key) || map.get(key).volume < r.volume) map.set(key, r);
    }
    const deduped = [...map.values()].sort((a, b) => b.volume - a.volume);
    categoryResults[category] = deduped;

    const total = deduped.reduce((s, r) => s + r.volume, 0);
    const top = deduped[0];
    console.log(`  → ${deduped.length} keywords, ${total.toLocaleString()} total vol. Top: "${top?.keyword}" (${top?.volume}/mo)`);
  }

  // Decision table
  console.log('\n\n=== DECISION TABLE ===');
  console.log('Category                    | KWs | Total Vol  | Top keyword                          | Verdict');
  console.log('----------------------------|-----|------------|--------------------------------------|--------');

  for (const [cat, kws] of Object.entries(categoryResults)) {
    const total = kws.reduce((s, r) => s + r.volume, 0);
    const top = kws[0];
    const verdict = total >= 300 ? 'BUILD PAGE(S)' : total >= 100 ? 'ADD TO EXISTING' : 'SKIP';
    const topStr = top ? `${top.keyword} (${top.volume})` : 'none';
    console.log(`${cat.padEnd(27)} | ${String(kws.length).padEnd(3)} | ${String(total).padEnd(10)} | ${topStr.substring(0, 36).padEnd(36)} | ${verdict}`);
  }

  // Build report
  let md = `# MedicalEquipment.Africa — Content Gap Keywords\n`;
  md += `**Date:** ${new Date().toISOString().split('T')[0]}\n`;
  md += `**Source:** DataForSEO Labs Keyword Suggestions (live)\n\n---\n\n`;

  md += `## Decision Summary\n\n`;
  md += `| Category | Keywords | Total Vol/mo | Top Keyword | Verdict |\n`;
  md += `|----------|----------|--------------|-------------|--------|\n`;
  for (const [cat, kws] of Object.entries(categoryResults)) {
    const total = kws.reduce((s, r) => s + r.volume, 0);
    const top = kws[0];
    const verdict = total >= 300 ? '**BUILD PAGE(S)**' : total >= 100 ? '**ADD TO EXISTING**' : 'Skip';
    const topStr = top ? `${top.keyword} (${top.volume}/mo)` : 'none';
    md += `| ${cat} | ${kws.length} | ${total.toLocaleString()} | ${topStr} | ${verdict} |\n`;
  }
  md += `\n`;

  for (const [cat, kws] of Object.entries(categoryResults)) {
    if (kws.length === 0) continue;
    md += `## ${cat}\n\n`;
    md += `| Keyword | Vol/mo | CPC | KD | Intent | Market |\n`;
    md += `|---------|--------|-----|----|---------|---------|\n`;
    for (const r of kws.slice(0, 40)) {
      md += `| ${r.keyword} | ${r.volume} | $${(r.cpc||0).toFixed(2)} | ${r.kd ?? '—'} | ${r.intent || '—'} | ${r.market} |\n`;
    }
    md += `\n`;
  }

  writeFileSync(join(__dirname, '14-content-gap-keywords.md'), md);
  console.log('\nSaved to: 14-content-gap-keywords.md');
}

main().catch(console.error);
