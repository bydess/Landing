import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '..', 'dist');

// Routes that need to be handled by the SPA
const spaRoutes = [
  '/about',
  '/pricing', 
  '/features',
  '/security',
  '/privacy',
  '/terms',
  '/cookies',
  '/login',
  '/create-account'
];

// Read the main index.html
const indexPath = path.join(distDir, 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf-8');

// Create directories and copy index.html for each route
spaRoutes.forEach(route => {
  const routeDir = path.join(distDir, route);
  const routeIndexPath = path.join(routeDir, 'index.html');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  // Copy index.html to route directory
  fs.writeFileSync(routeIndexPath, indexContent);
  console.log(`Created ${route}/index.html`);
});

// Generate additional SEO files
const seoFiles = {
  'robots.txt': `User-agent: *
Allow: /

# Sitemap
Sitemap: https://payzio.io/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block access to admin areas (if any)
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$

# Allow important pages
Allow: /
Allow: /about
Allow: /pricing
Allow: /features
Allow: /security
Allow: /privacy
Allow: /terms
Allow: /cookies`,

  'sitemap.xml': `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    
    <url>
        <loc>https://payzio.io/</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}T00:00:00+00:00</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    
    <url>
        <loc>https://payzio.io/about</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}T00:00:00+00:00</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    
    <url>
        <loc>https://payzio.io/pricing</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}T00:00:00+00:00</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    
    <url>
        <loc>https://payzio.io/features</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}T00:00:00+00:00</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    
    <url>
        <loc>https://payzio.io/security</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}T00:00:00+00:00</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    
    <url>
        <loc>https://payzio.io/privacy</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}T00:00:00+00:00</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.5</priority>
    </url>
    
    <url>
        <loc>https://payzio.io/terms</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}T00:00:00+00:00</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.5</priority>
    </url>
    
    <url>
        <loc>https://payzio.io/cookies</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}T00:00:00+00:00</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.4</priority>
    </url>
    
</urlset>`
};

// Write SEO files to dist directory
Object.entries(seoFiles).forEach(([filename, content]) => {
  const filePath = path.join(distDir, filename);
  fs.writeFileSync(filePath, content);
  console.log(`Generated ${filename}`);
});

console.log('Post-build SSG setup completed!');