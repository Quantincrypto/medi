// 15-equipment-gaps-all-markets.mjs
// Search volume for uncovered equipment types across all African markets
// Run: node 15-equipment-gaps-all-markets.mjs

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const AUTH = Buffer.from('zk0ew6c76h@bwmyga.com:b5d82fac4301b02b').toString('base64');
const BASE_URL = 'https://api.dataforseo.com';

const MARKETS = [
  { name: 'Kenya',        code: 2404 },
  { name: 'South Africa', code: 2710 },
  { name: 'Ghana',        code: 2288 },
  { name: 'Uganda',       code: 2800 },
  { name: 'Tanzania',     code: 2834 },
  { name: 'Ethiopia',     code: 2231 },
  { name: 'Zimbabwe',     code: 2716 },
];

const CATEGORIES = {
  'Oxygen Concentrator': [
    'oxygen concentrator price in kenya',
    'oxygen concentrator price south africa',
    'oxygen concentrator suppliers kenya',
    'oxygen concentrator suppliers south africa',
    'buy oxygen concentrator kenya',
    'oxygen concentrator price ghana',
    'portable oxygen concentrator price africa',
    'oxygen concentrator suppliers africa',
  ],
  'Ventilator': [
    'ventilator price in kenya',
    'ventilator price south africa',
    'medical ventilator suppliers kenya',
    'ventilator suppliers south africa',
    'buy ventilator kenya',
    'icu ventilator price africa',
    'ventilator machine price kenya',
    'ventilator suppliers africa',
  ],
  'Dialysis Machine': [
    'dialysis machine price kenya',
    'dialysis machine price south africa',
    'dialysis machine suppliers kenya',
    'dialysis equipment south africa',
    'kidney dialysis machine price africa',
    'haemodialysis machine price kenya',
  ],
  'ECG Machine': [
    'ecg machine price in kenya',
    'ecg machine price south africa',
    'ecg machine suppliers kenya',
    'electrocardiogram machine price kenya',
    'ecg machine suppliers south africa',
    'portable ecg machine price kenya',
  ],
  'Defibrillator': [
    'defibrillator price kenya',
    'aed price south africa',
    'defibrillator suppliers kenya',
    'defibrillator suppliers south africa',
    'automated external defibrillator kenya',
    'defibrillator price africa',
  ],
  'Anaesthesia Machine': [
    'anaesthesia machine price kenya',
    'anesthesia machine price south africa',
    'anaesthesia machine suppliers kenya',
    'anaesthesia equipment suppliers africa',
    'anaesthetic machine price kenya',
  ],
  'Patient Monitor': [
    'patient monitor price in kenya',
    'patient monitor price south africa',
    'patient monitoring equipment kenya',
    'bedside monitor price kenya',
    'multiparameter monitor price kenya',
    'patient monitor suppliers south africa',
  ],
  'Surgical Equipment': [
    'surgical equipment suppliers kenya',
    'surgical equipment suppliers south africa',
    'laparoscopy equipment price kenya',
    'surgical instruments suppliers africa',
    'operating theatre equipment kenya',
    'surgical equipment price africa',
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
  console.log('MedicalEquipment.Africa — Uncovered Equipment Types, All Markets\n');
  const categoryResults = {};

  for (const [category, seeds] of Object.entries(CATEGORIES)) {
    console.log(`\n=== ${category} ===`);
    const allForCategory = [];

    for (const market of MARKETS) {
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

    const map = new Map();
    for (const r of allForCategory) {
      const key = `${r.keyword}__${r.market}`;
      if (!map.has(key) || map.get(key).volume < r.volume) map.set(key, r);
    }
    const deduped = [...map.values()].sort((a, b) => b.volume - a.volume);
    categoryResults[category] = deduped;

    const total = deduped.reduce((s, r) => s + r.volume, 0);
    const top = deduped[0];
    console.log(`  → ${deduped.length} kws, ${total.toLocaleString()} total vol. Top: "${top?.keyword}" (${top?.volume}/mo, ${top?.market})`);
  }

  console.log('\n\n=== DECISION TABLE ===');
  console.log('Category             | KWs | Total Vol  | Top keyword                          | Top Market   | Verdict');
  console.log('---------------------|-----|------------|--------------------------------------|--------------|--------');

  for (const [cat, kws] of Object.entries(categoryResults)) {
    const total = kws.reduce((s, r) => s + r.volume, 0);
    const top = kws[0];
    const verdict = total >= 200 ? 'BUILD PAGE' : total >= 80 ? 'ADD TO EXISTING' : 'SKIP';
    const topStr = top ? `${top.keyword} (${top.volume})` : 'none';
    console.log(`${cat.padEnd(20)} | ${String(kws.length).padEnd(3)} | ${String(total).padEnd(10)} | ${topStr.substring(0, 36).padEnd(36)} | ${(top?.market||'').padEnd(12)} | ${verdict}`);
  }

  let md = `# Uncovered Equipment Types — All Markets (excl. Nigeria)\n`;
  md += `**Date:** ${new Date().toISOString().split('T')[0]}\n`;
  md += `**Markets:** Kenya, South Africa, Ghana, Uganda, Tanzania, Ethiopia, Zimbabwe\n\n---\n\n`;

  md += `## Decision Summary\n\n`;
  md += `| Category | KWs | Total Vol/mo | Top Keyword | Top Market | Verdict |\n`;
  md += `|----------|-----|--------------|-------------|------------|--------|\n`;
  for (const [cat, kws] of Object.entries(categoryResults)) {
    const total = kws.reduce((s, r) => s + r.volume, 0);
    const top = kws[0];
    const verdict = total >= 200 ? '**BUILD PAGE**' : total >= 80 ? '**ADD TO EXISTING**' : 'Skip';
    const topStr = top ? `${top.keyword} (${top.volume}/mo)` : 'none';
    md += `| ${cat} | ${kws.length} | ${total.toLocaleString()} | ${topStr} | ${top?.market || '—'} | ${verdict} |\n`;
  }
  md += `\n`;

  for (const [cat, kws] of Object.entries(categoryResults)) {
    if (kws.length === 0) continue;
    md += `## ${cat}\n\n`;
    md += `| Keyword | Vol/mo | CPC | KD | Intent | Market |\n`;
    md += `|---------|--------|-----|----|---------|---------|\n`;
    for (const r of kws.slice(0, 35)) {
      md += `| ${r.keyword} | ${r.volume} | $${(r.cpc||0).toFixed(2)} | ${r.kd ?? '—'} | ${r.intent || '—'} | ${r.market} |\n`;
    }
    md += `\n`;
  }

  writeFileSync(join(__dirname, '15-equipment-gaps-all-markets.md'), md);
  console.log('\nSaved to: 15-equipment-gaps-all-markets.md');
}

main().catch(console.error);
