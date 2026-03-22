
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
}

export const listings: Listing[] = [
  {
    id: '1',
    brand: 'GE',
    model: 'Revolution EVO 128-Slice',
    type: 'CT Scanner',
    specs: '0.35s rotation, 40mm coverage, ASiR-V reconstruction',
    refurbishedStandard: 'OEM Certified Gold Seal',
    warranty: '12 Months Full Parts & Labor',
    compliance: ['CE', 'FDA', 'PPB', 'NAFDAC'],
    country: 'Kenya',
    city: 'Nairobi',
    coordinates: '-1.2921, 36.8219',
    rating: 4.9,
    reviewQuote: "The Revolution EVO has significantly improved our patient throughput and diagnostic confidence.",
    featured: true,
    image: 'https://picsum.photos/seed/ct1/800/600',
    slug: 'ge-revolution-evo-128-slice-nairobi-ppb-kenya-ce-refurbished',
    metaTitle: 'Refurbished GE Revolution EVO 128-Slice CT Scanner | Nairobi, Kenya',
    metaDescription: 'Buy a certified refurbished GE Revolution EVO 128-Slice CT Scanner in Nairobi, Kenya. OEM Certified Gold Seal with 12 months warranty and PPB/CE compliance.',
    whatsappUrl: 'https://wa.me/447777100397?text=I am interested in the GE Revolution EVO 128-Slice CT Scanner'
  },
  {
    id: '2',
    brand: 'Siemens',
    model: 'Magnetom Aera 1.5T',
    type: 'MRI',
    specs: '70cm Open Bore, Tim+Dot technology, 48 channels',
    refurbishedStandard: 'ISO 13485 Certified Refurbishment',
    warranty: '12 Months Full Warranty',
    compliance: ['CE', 'FDA', 'SAHPRA'],
    country: 'South Africa',
    city: 'Johannesburg',
    coordinates: '-26.2041, 28.0473',
    rating: 4.8,
    reviewQuote: "The Magnetom Aera provides exceptional image quality and patient comfort.",
    featured: true,
    image: 'https://picsum.photos/seed/mri1/800/600',
    slug: 'siemens-magnetom-aera-1.5t-johannesburg-sahpra-ce-refurbished',
    metaTitle: 'Refurbished Siemens Magnetom Aera 1.5T MRI | Johannesburg, South Africa',
    metaDescription: 'Certified refurbished Siemens Magnetom Aera 1.5T MRI for sale in Johannesburg. ISO 13485 certified with SAHPRA/CE compliance.',
    whatsappUrl: 'https://wa.me/447777100397?text=I am interested in the Siemens Magnetom Aera 1.5T MRI'
  },
  {
    id: '3',
    brand: 'Philips',
    model: 'Affiniti 70',
    type: 'Ultrasound',
    specs: 'PureWave transducers, Precision beamforming',
    refurbishedStandard: 'Factory Refurbished',
    warranty: '24 Months Warranty',
    compliance: ['CE', 'FDA', 'NAFDAC'],
    country: 'Nigeria',
    city: 'Lagos',
    coordinates: '6.5244, 3.3792',
    rating: 4.7,
    reviewQuote: "The Affiniti 70 is a versatile and reliable ultrasound system for our busy clinic.",
    featured: true,
    image: 'https://picsum.photos/seed/ultrasound1/800/600',
    slug: 'philips-affiniti-70-lagos-nafdac-ce-refurbished',
    metaTitle: 'Refurbished Philips Affiniti 70 Ultrasound | Lagos, Nigeria',
    metaDescription: 'Get a factory refurbished Philips Affiniti 70 Ultrasound in Lagos, Nigeria. 24 months warranty and NAFDAC/CE compliance.',
    whatsappUrl: 'https://wa.me/447777100397?text=I am interested in the Philips Affiniti 70 Ultrasound'
  },
  {
    id: '4',
    brand: 'Samsung',
    model: 'HS50',
    type: 'Ultrasound',
    specs: 'S-Harmonic, ClearVision, MultiVision',
    refurbishedStandard: 'Certified Pre-Owned',
    warranty: '12 Months Warranty',
    compliance: ['CE', 'FDA', 'FDA Ghana'],
    country: 'Ghana',
    city: 'Accra',
    coordinates: '5.6037, -0.1870',
    rating: 4.6,
    reviewQuote: "The HS50 offers great value and performance for our diagnostic needs.",
    image: 'https://picsum.photos/seed/ultrasound2/800/600',
    slug: 'samsung-hs50-accra-fda-ghana-ce-refurbished',
    metaTitle: 'Refurbished Samsung HS50 Ultrasound | Accra, Ghana',
    metaDescription: 'Certified pre-owned Samsung HS50 Ultrasound for sale in Accra, Ghana. 12 months warranty and FDA Ghana/CE compliance.',
    whatsappUrl: 'https://wa.me/447777100397?text=I am interested in the Samsung HS50 Ultrasound'
  },
  {
    id: '5',
    brand: 'GE',
    model: 'OEC Elite CFD',
    type: 'C-Arm',
    specs: 'CMOS Flat Detector, 31cm x 31cm detector',
    refurbishedStandard: 'OEM Certified',
    warranty: '12 Months Warranty',
    compliance: ['CE', 'FDA', 'NDA Uganda'],
    country: 'Uganda',
    city: 'Kampala',
    coordinates: '0.3476, 32.5825',
    rating: 4.9,
    reviewQuote: "The OEC Elite CFD provides outstanding image clarity for our surgical procedures.",
    image: 'https://picsum.photos/seed/carm1/800/600',
    slug: 'ge-oec-elite-cfd-kampala-nda-uganda-ce-refurbished',
    metaTitle: 'Refurbished GE OEC Elite CFD C-Arm | Kampala, Uganda',
    metaDescription: 'OEM certified refurbished GE OEC Elite CFD C-Arm in Kampala, Uganda. 12 months warranty and NDA Uganda/CE compliance.',
    whatsappUrl: 'https://wa.me/447777100397?text=I am interested in the GE OEC Elite CFD C-Arm'
  },
  {
    id: '6',
    brand: 'Mindray',
    model: 'BC-5300',
    type: 'Lab Equipment',
    specs: '5-part differentiation, 60 samples/hour',
    refurbishedStandard: 'Certified Refurbished',
    warranty: '12 Months Warranty',
    compliance: ['CE', 'Rwanda FDA'],
    country: 'Rwanda',
    city: 'Kigali',
    coordinates: '-1.9441, 30.0619',
    rating: 4.5,
    reviewQuote: "The BC-5300 is a reliable and efficient hematology analyzer for our lab.",
    image: 'https://picsum.photos/seed/lab1/800/600',
    slug: 'mindray-bc-5300-kigali-rwanda-fda-ce-refurbished',
    metaTitle: 'Refurbished Mindray BC-5300 Lab Equipment | Kigali, Rwanda',
    metaDescription: 'Certified refurbished Mindray BC-5300 hematology analyzer in Kigali, Rwanda. 12 months warranty and Rwanda FDA/CE compliance.',
    whatsappUrl: 'https://wa.me/447777100397?text=I am interested in the Mindray BC-5300 Lab Equipment'
  },
  {
    id: '7',
    brand: 'Siemens',
    model: 'Somatom Definition AS',
    type: 'CT Scanner',
    specs: '64-slice, Adaptive Dose Shield',
    refurbishedStandard: 'ISO 13485 Certified',
    warranty: '12 Months Warranty',
    compliance: ['CE', 'FDA', 'NAFDAC'],
    country: 'Nigeria',
    city: 'Abuja',
    coordinates: '9.0765, 7.3986',
    rating: 4.8,
    reviewQuote: "The Somatom Definition AS is a workhorse for our diagnostic imaging center.",
    image: 'https://picsum.photos/seed/ct2/800/600',
    slug: 'siemens-somatom-definition-as-abuja-nafdac-ce-refurbished',
    metaTitle: 'Refurbished Siemens Somatom Definition AS CT | Abuja, Nigeria',
    metaDescription: 'ISO 13485 certified refurbished Siemens Somatom Definition AS CT scanner in Abuja, Nigeria. 12 months warranty and NAFDAC/CE compliance.',
    whatsappUrl: 'https://wa.me/447777100397?text=I am interested in the Siemens Somatom Definition AS CT Scanner'
  },
  {
    id: '8',
    brand: 'Canon',
    model: 'Aquilion Prime',
    type: 'CT Scanner',
    specs: '80-row detector, AIDR 3D Enhanced',
    refurbishedStandard: 'Certified Pre-Owned',
    warranty: '12 Months Warranty',
    compliance: ['CE', 'FDA', 'PPB'],
    country: 'Kenya',
    city: 'Mombasa',
    coordinates: '-4.0435, 39.6682',
    rating: 4.7,
    reviewQuote: "The Aquilion Prime offers excellent image quality and low dose for our patients.",
    image: 'https://picsum.photos/seed/ct3/800/600',
    slug: 'canon-aquilion-prime-mombasa-ppb-kenya-ce-refurbished',
    metaTitle: 'Refurbished Canon Aquilion Prime CT | Mombasa, Kenya',
    metaDescription: 'Certified pre-owned Canon Aquilion Prime CT scanner for sale in Mombasa, Kenya. 12 months warranty and PPB/CE compliance.',
    whatsappUrl: 'https://wa.me/447777100397?text=I am interested in the Canon Aquilion Prime CT Scanner'
  }
];

export const suppliers: Supplier[] = [
  {
    id: 's1',
    name: 'Global Med Solutions (USA)',
    origin: 'USA',
    certifications: ['ISO 13485', 'FDA Registered'],
    equipmentTypes: ['CT Scanner', 'MRI', 'Ultrasound'],
    image: 'https://picsum.photos/seed/supplier1/400/300'
  },
  {
    id: 's2',
    name: 'EuroScan Diagnostics (Germany)',
    origin: 'Germany',
    certifications: ['CE Mark', 'ISO 9001'],
    equipmentTypes: ['MRI', 'X-Ray', 'Lab Equipment'],
    image: 'https://picsum.photos/seed/supplier2/400/300'
  },
  {
    id: 's3',
    name: 'Anatolia Med (Türkiye)',
    origin: 'Türkiye',
    certifications: ['CE Mark', 'ISO 13485'],
    equipmentTypes: ['Ultrasound', 'C-Arm', 'X-Ray'],
    image: 'https://picsum.photos/seed/supplier3/400/300'
  },
  {
    id: 's4',
    name: 'MedTech Nordic (Sweden)',
    origin: 'Sweden',
    certifications: ['ISO 13485', 'CE Mark'],
    equipmentTypes: ['Lab Equipment', 'Ultrasound'],
    image: 'https://picsum.photos/seed/supplier4/400/300'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: '5 Things to Check Before Buying a Refurbished CT Scanner',
    excerpt: 'A comprehensive guide for hospital administrators on verifying tube life, software versions, and service history.',
    date: 'March 15, 2026',
    author: 'Dr. Sarah Chen',
    category: 'Guide',
    image: 'https://picsum.photos/seed/blog1/800/400',
    slug: 'buying-refurbished-ct-scanner-guide'
  },
  {
    id: 'b2',
    title: 'The Rise of Diagnostic Imaging in East Africa',
    excerpt: 'How affordable refurbished equipment is transforming healthcare access in Kenya, Uganda, and Rwanda.',
    date: 'March 10, 2026',
    author: 'James Mwangi',
    category: 'Market News',
    image: 'https://picsum.photos/seed/blog2/800/400',
    slug: 'diagnostic-imaging-east-africa'
  },
  {
    id: 'b3',
    title: 'Understanding ISO 13485 in Medical Refurbishment',
    excerpt: 'Why international quality standards are the bedrock of safe and reliable medical equipment procurement.',
    date: 'March 5, 2026',
    author: 'Eng. Robert Schmidt',
    category: 'Technical',
    image: 'https://picsum.photos/seed/blog3/800/400',
    slug: 'iso-13485-medical-refurbishment'
  }
];
