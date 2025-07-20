import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: object;
}

export function SEO({
  title = "PAYZIO - Simple Financial Management for Self-Employed Professionals",
  description = "Streamline your business finances with PAYZIO. Track income, expenses, and mileage in one intuitive platform. Perfect for freelancers, contractors, and small business owners. Start your 7-day trial for $1.99.",
  keywords = "financial management, expense tracking, invoice creation, mileage tracking, freelancer tools, small business accounting, self-employed, contractor finances, business expenses, income tracking",
  image = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
  url = "https://payzio.io",
  type = "website",
  author = "PAYZIO Team",
  publishedTime,
  modifiedTime,
  structuredData
}: SEOProps) {
  const fullTitle = title.includes('PAYZIO') ? title : `${title} | PAYZIO`;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PAYZIO",
    "description": description,
    "url": url,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "15",
      "priceCurrency": "CAD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "description": "Monthly subscription to PAYZIO financial management platform"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "creator": {
      "@type": "Organization",
      "name": "PAYZIO",
      "url": "https://payzio.io"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="PAYZIO" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@payzio" />
      <meta name="twitter:creator" content="@payzio" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="language" content="en" />
      <meta name="geo.region" content="CA" />
      <meta name="geo.placename" content="Canada" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Mobile and Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2f68b4" />
      
      {/* Article specific tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://i.postimg.cc" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//app.payzio.io" />
      <link rel="dns-prefetch" href="//analytics.google.com" />
      
      {/* Additional Performance Optimizations */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Favicon and App Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="https://i.imgur.com/MsVM8ey.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://i.imgur.com/MsVM8ey.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://i.imgur.com/MsVM8ey.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#2f68b4" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Helmet>
  );
}