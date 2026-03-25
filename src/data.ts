import { createContext, useContext, useState, useEffect } from 'react';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface Listing {
  id: string;
  brand: string;
  model: string;
  type: 'CT Scanner' | 'MRI' | 'Ultrasound' | 'X-Ray' | 'C-Arm' | 'Lab Equipment';
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

const SHEET_ID = '1KMsBwk_K0kq_sY8KgXlhK02YOn1NXtH6of0WNUlQuJo';
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

export function rowToListing(row: string[], index: number): Listing {
  return {
    id: String(index + 1),
    brand: row[0]?.trim() ?? '',         // A
    model: row[1]?.trim() ?? '',         // B
    type: (row[2]?.trim() ?? '') as Listing['type'], // C
    specs: row[3]?.trim() ?? '',         // D
    refurbishedStandard: row[4]?.trim() ?? '', // E
    warranty: row[5]?.trim() ?? '',      // F
    compliance: (row[6] ?? '').split(',').map(s => s.trim()).filter(Boolean), // G
    country: row[7]?.trim() ?? '',       // H
    city: row[8]?.trim() ?? '',          // I
    coordinates: row[9]?.trim() ?? '',   // J
    rating: parseFloat(row[10]) || 0,   // K
    reviewQuote: row[11]?.trim() ?? '',  // L
    image: row[12]?.trim() ?? '',        // M
    slug: row[13]?.trim() ?? '',         // N
    metaTitle: row[14]?.trim() ?? '',    // O
    metaDescription: row[15]?.trim() ?? '', // P
    whatsappUrl: row[16]?.trim() ?? '',  // Q
    featured: row[17]?.trim().toUpperCase() === 'TRUE', // R
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
