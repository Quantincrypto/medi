import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: object | object[];
}

const BASE_URL = 'https://medicalequipment.africa';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  schema,
}) => {
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="MedicalEquipment.Africa" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schema(s) */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

// ─── Shared schema fragments ──────────────────────────────────────────────────

export const orgSchema = {
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'MedicalEquipment.Africa',
  url: BASE_URL,
  description: "Africa's verified B2B directory for ISO 13485 certified refurbished medical equipment",
  areaServed: 'Africa',
  knowsAbout: ['Refurbished CT Scanners', 'Refurbished MRI Machines', 'Medical Equipment Africa', 'ISO 13485'],
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'MedicalEquipment.Africa',
  publisher: { '@id': `${BASE_URL}/#organization` },
};

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${BASE_URL}${c.path}`,
    })),
  };
}
