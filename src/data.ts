import { createContext, useContext, useState, useEffect } from 'react';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface Listing {
  id: string;
  brand: string;
  model: string;
  type: 'CT Scanner' | 'MRI' | 'Ultrasound' | 'X-Ray' | 'C-Arm' | 'Lab Equipment' | 'SPECT/CT' | 'Angiography';
  specs: string;
  refurbishedStandard: string;
  warranty: string;
  compliance: string[];
  country: string;
  city: string;
  coordinates: string;
  rating: number;
  reviewQuote: string;
  featured?: boolean;
  image: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  whatsappUrl: string;
}

export interface Supplier {
  id: string;
  name: string;
  origin: string;
  certifications: string[];
  equipmentTypes: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: 'Guide' | 'Market News' | 'Technical';
  image: string;
  slug: string;
  readLabel: string;
}

// ─── Google Sheet CSV Fetch ──────────────────────────────────────────────────

const SHEET_ID = '1gTCUhVZ9HCofyoLNVP60l0SPp-ShzY43';
export const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

function parseCSVRow(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

function brandModelKey(brand: string, model: string): string {
  return `${brand}-${model}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

export function rowToListing(row: string[], index: number): Listing {
  // New sheet column layout (A=0 … AA=26):
  // A(0) Brand  B(1) Model  C(2) Website  D(3) Slug  E(4) meta-title
  // F(5) meta-description  G(6) Request Quote (whatsapp/CTA URL)
  // H(7) Telephone  I(8) Description  J(9) City  K(10) Coordinates
  // L(11) Rating  M(12) Reviews  N(13) Equipment Type
  // O(14) Installation Support  P(15) Key Specs  Q(16) Refurb Standard
  // R(17) Warranty  S(18) Compliance  T(19) Supplier  U(20) Merchant contact
  // V(21) Working Hours  W(22) Closed  X(23) Country  Y(24) Logo
  // Z(25) Image (ignored — using local files)  AA(26) og-image
  const slug = row[3]?.trim() ?? '';
  return {
    id: String(index + 1),
    brand: row[0]?.trim() ?? '',                                          // A
    model: row[1]?.trim() ?? '',                                          // B
    slug,                                                                  // D
    metaTitle: row[4]?.trim() ?? '',                                      // E
    metaDescription: row[5]?.trim() ?? '',                                // F
    whatsappUrl: row[6]?.trim() ?? '',                                    // G
    specs: row[8]?.trim() ?? '',                                          // I
    city: row[9]?.trim() ?? '',                                           // J
    coordinates: row[10]?.trim() ?? '',                                   // K
    rating: parseFloat(row[11]) || 0,                                     // L
    reviewQuote: row[12]?.trim() ?? '',                                   // M
    type: (row[13]?.trim() ?? '') as Listing['type'],                     // N
    refurbishedStandard: row[16]?.trim() ?? '',                           // Q
    warranty: row[17]?.trim() ?? '',                                      // R
    compliance: (row[18] ?? '').split(',').map(s => s.trim()).filter(Boolean), // S
    country: row[23]?.trim() ?? '',                                       // X
    image: `/products/${brandModelKey(row[0]?.trim() ?? '', row[1]?.trim() ?? '')}.png`, // local file
    featured: false,
  };
}

export function parseCSV(text: string): Listing[] {
  const lines = text.split('\n').filter(l => l.trim());
  return lines
    .slice(1) // skip header row
    .map((line, i) => rowToListing(parseCSVRow(line), i))
    .filter(l => l.brand && l.slug);
}

// ─── Listings Context ────────────────────────────────────────────────────────

export interface ListingsState {
  listings: Listing[];
  loading: boolean;
  error: string | null;
}

export const ListingsContext = createContext<ListingsState>({
  listings: [],
  loading: true,
  error: null,
});

export function useListings(): ListingsState {
  return useContext(ListingsContext);
}

export function useListingsFetcher(): ListingsState {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then(text => {
        setListings(parseCSV(text));
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { listings, loading, error };
}

// ─── Static Data (Suppliers & Blog) ─────────────────────────────────────────

export const suppliers: Supplier[] = [
  {
    id: 's1',
    name: 'Global Med Solutions (USA)',
    origin: 'USA',
    certifications: ['ISO 13485', 'FDA Registered'],
    equipmentTypes: ['CT Scanner', 'MRI', 'Ultrasound'],
    image: '/suppliers/global-med-solutions.svg'
  },
  {
    id: 's2',
    name: 'EuroScan Diagnostics (Germany)',
    origin: 'Germany',
    certifications: ['CE Mark', 'ISO 9001'],
    equipmentTypes: ['MRI', 'X-Ray', 'Lab Equipment'],
    image: '/suppliers/euroscan-diagnostics.svg'
  },
  {
    id: 's3',
    name: 'Anatolia Med (Türkiye)',
    origin: 'Türkiye',
    certifications: ['CE Mark', 'ISO 13485'],
    equipmentTypes: ['Ultrasound', 'C-Arm', 'X-Ray'],
    image: '/suppliers/anatolia-med.svg'
  },
  {
    id: 's4',
    name: 'MedTech Nordic (Sweden)',
    origin: 'Sweden',
    certifications: ['ISO 13485', 'CE Mark'],
    equipmentTypes: ['Lab Equipment', 'Ultrasound'],
    image: '/suppliers/medtech-nordic.svg'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Definitive Guide to Importing to Kenya (PPB)',
    excerpt: 'A strategic roadmap covering Regulatory Compliance (PPB), documentation requirements, and site readiness for diagnostic imaging systems.',
    date: 'March 15, 2026',
    author: 'MedicalEquipment.Africa',
    category: 'Guide',
    image: '/blog/cover-kenya-ppb.svg',
    slug: 'definitive-guide-importing-medical-equipment-kenya-ppb',
    readLabel: 'Read the Kenya Import Guide'
  },
  {
    id: 'b2',
    title: 'GE Optima CT660 vs Siemens Somatom: 64-Slice Comparison',
    excerpt: 'A side-by-side technical comparison of the two most popular refurbished CT scanners in the African market. We analyze parts availability and total cost of ownership.',
    date: 'March 10, 2026',
    author: 'MedicalEquipment.Africa',
    category: 'Technical',
    image: '/blog/cover-ct-comparison.svg',
    slug: 'ge-optima-ct660-vs-siemens-somatom-64-slice-comparison',
    readLabel: 'Read the Comparison Analysis'
  },
  {
    id: 'b3',
    title: 'The UK Refurbishment Standard: What ISO 13485 Means',
    excerpt: 'What does "Certified Refurbished" actually mean? We pull back the curtain on the technical testing and overhaul process performed in the UK.',
    date: 'March 5, 2026',
    author: 'MedicalEquipment.Africa',
    category: 'Technical',
    image: '/blog/cover-iso-13485.svg',
    slug: 'uk-refurbishment-standard-iso-13485-explained',
    readLabel: 'Read the Refurbishment Standard'
  },
  {
    id: 'b4',
    title: 'The Definitive CT Procurement Framework (2026)',
    excerpt: 'Our 2,800-word authority guide on selecting 16 to 128-slice systems. Includes ROI models, electrical specifications, and revenue projections for African clinics.',
    date: 'February 28, 2026',
    author: 'MedicalEquipment.Africa',
    category: 'Guide',
    image: '/blog/cover-ct-framework.svg',
    slug: 'ct-scanner-procurement-framework-africa-2026',
    readLabel: 'Read the Full CT Framework'
  },
  {
    id: 'b5',
    title: 'MRI Field Strength: 1.5T vs 3.0T Guide',
    excerpt: 'Understand why 1.5T remains the gold standard for private practice in Africa and how to evaluate the power and cryogen requirements for your facility.',
    date: 'February 20, 2026',
    author: 'MedicalEquipment.Africa',
    category: 'Guide',
    image: '/blog/cover-mri-guide.svg',
    slug: 'mri-field-strength-1-5t-vs-3t-guide-africa',
    readLabel: 'Read the MRI Guide'
  }
];
