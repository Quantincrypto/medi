import type { VercelRequest, VercelResponse } from '@vercel/node';

const SHEET_ID = '1gTCUhVZ9HCofyoLNVP60l0SPp-ShzY43';
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;
const BASE_URL = 'https://www.medicalequipment.africa';

const STATIC_PAGES = [
  { loc: '/',                                                          priority: '1.0', changefreq: 'weekly'  },
  { loc: '/refurbished-medical-equipment-catalogue-africa',           priority: '0.9', changefreq: 'weekly'  },
  { loc: '/why-refurbished-medical-equipment-africa',                 priority: '0.8', changefreq: 'monthly' },
  { loc: '/medical-equipment-guides-market-news-africa',              priority: '0.8', changefreq: 'weekly'  },
  { loc: '/verified-medical-equipment-suppliers-africa',              priority: '0.8', changefreq: 'monthly' },
  { loc: '/medical-equipment-import-regulations-africa',              priority: '0.7', changefreq: 'monthly' },
  { loc: '/faq-buying-refurbished-medical-equipment-africa',          priority: '0.7', changefreq: 'monthly' },
  { loc: '/about-medicalequipment-africa',                            priority: '0.6', changefreq: 'monthly' },
  { loc: '/request-verified-pricing-medical-equipment',               priority: '0.8', changefreq: 'monthly' },
  { loc: '/refurbished-ct-scanners-africa',                           priority: '0.9', changefreq: 'weekly'  },
  { loc: '/used-mri-machines-africa',                                 priority: '0.9', changefreq: 'weekly'  },
  { loc: '/refurbished-ultrasound-machines-africa',                   priority: '0.9', changefreq: 'weekly'  },
  { loc: '/used-digital-x-ray-systems-africa',                        priority: '0.9', changefreq: 'weekly'  },
  { loc: '/used-laboratory-equipment-africa',                         priority: '0.9', changefreq: 'weekly'  },
  { loc: '/refurbished-medical-equipment-kenya-nairobi',              priority: '0.8', changefreq: 'weekly'  },
  { loc: '/used-medical-equipment-nigeria-lagos-abuja',               priority: '0.8', changefreq: 'weekly'  },
  { loc: '/refurbished-medical-equipment-south-africa',               priority: '0.8', changefreq: 'weekly'  },
  { loc: '/used-medical-equipment-ghana-accra',                       priority: '0.8', changefreq: 'weekly'  },
  { loc: '/refurbished-medical-equipment-uganda-kampala',             priority: '0.8', changefreq: 'weekly'  },
  { loc: '/used-medical-equipment-rwanda-kigali',                     priority: '0.8', changefreq: 'weekly'  },
  { loc: '/ultrasound-machine-price-kenya',                           priority: '0.9', changefreq: 'monthly' },
  { loc: '/x-ray-machine-price-kenya',                                priority: '0.9', changefreq: 'monthly' },
  { loc: '/mri-machine-price-kenya',                                  priority: '0.9', changefreq: 'monthly' },
  { loc: '/laboratory-equipment-suppliers-kenya',                     priority: '0.8', changefreq: 'weekly'  },
  { loc: '/hospital-beds-south-africa',                               priority: '0.8', changefreq: 'weekly'  },
  { loc: '/medical-equipment-suppliers-johannesburg',                 priority: '0.8', changefreq: 'weekly'  },
  { loc: '/medical-equipment-suppliers-pretoria',                     priority: '0.8', changefreq: 'weekly'  },
  { loc: '/wholesale-medical-supplies-kenya',                         priority: '0.8', changefreq: 'monthly' },
  { loc: '/sell-medical-equipment-south-africa',                      priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/definitive-guide-importing-medical-equipment-kenya-ppb',      priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/ge-optima-ct660-vs-siemens-somatom-64-slice-comparison',     priority: '0.7', changefreq: 'monthly' },
  { loc: '/guides/uk-refurbishment-standard-iso-13485-explained',              priority: '0.7', changefreq: 'monthly' },
  { loc: '/guides/ct-scanner-procurement-framework-africa-2026',               priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/mri-field-strength-1-5t-vs-3t-guide-africa',                priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/pioneer-medical-supplies-kenya-alternatives',                priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/ultrasound-machine-buying-guide-africa',            priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/import-medical-equipment-nigeria-nafdac-soncap',   priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/medical-equipment-financing-leasing-kenya',        priority: '0.7', changefreq: 'monthly' },
  { loc: '/guides/medical-equipment-tenders-kenya-procurement',      priority: '0.7', changefreq: 'monthly' },
  { loc: '/guides/sahpra-section-21-medical-equipment-south-africa', priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/mri-machine-buying-guide-africa',                  priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/crown-healthcare-kenya-alternatives',              priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/importing-medical-equipment-nigeria-nafdac',       priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/nigeria-medical-device-market-2025',               priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/importing-medical-equipment-south-africa-sahpra',  priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/importing-medical-equipment-ghana-fda',            priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/importing-medical-equipment-ethiopia-efmhaca',     priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/importing-medical-equipment-tanzania-tmda',        priority: '0.8', changefreq: 'monthly' },
  { loc: '/guides/importing-medical-equipment-zimbabwe-mcaz',        priority: '0.8', changefreq: 'monthly' },
  { loc: '/dialysis-machines-africa',                                priority: '0.8', changefreq: 'weekly'  },
  { loc: '/patient-monitors-africa',                                 priority: '0.8', changefreq: 'weekly'  },
  { loc: '/ecg-machines-africa',                                     priority: '0.8', changefreq: 'weekly'  },
];

function extractSlugs(csv: string): string[] {
  const slugs: string[] = [];
  let col = '', inQuotes = false, colIndex = 0, isHeader = true;

  for (let i = 0; i < csv.length; i++) {
    const ch = csv[i], next = csv[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') { col += '"'; i++; }
      else inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      if (!isHeader && colIndex === 3) slugs.push(col.trim()); // col D = slug
      colIndex++; col = '';
    } else if ((ch === '\r' || ch === '\n') && !inQuotes) {
      if (ch === '\r' && next === '\n') i++;
      if (!isHeader && colIndex === 3) slugs.push(col.trim());
      col = ''; colIndex = 0; isHeader = false;
    } else {
      col += ch;
    }
  }
  return slugs.filter(Boolean);
}

function urlTag(loc: string, priority: string, changefreq: string): string {
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  let productSlugs: string[] = [];

  try {
    const response = await fetch(SHEET_CSV_URL);
    const text = await response.text();
    productSlugs = extractSlugs(text);
  } catch {
    // serve sitemap without products if sheet fetch fails
  }

  const staticXml = STATIC_PAGES.map(p => urlTag(`${BASE_URL}${p.loc}`, p.priority, p.changefreq)).join('\n');
  const productXml = productSlugs.map(s => urlTag(`${BASE_URL}/equipment/${s}`, '0.8', 'weekly')).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${staticXml}\n${productXml}\n</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
  res.status(200).send(xml);
}
