import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to pre-render
const routes = [
  { path: '/', file: 'index.html' },
  { path: '/about', file: 'about.html' },
  { path: '/pricing', file: 'pricing.html' },
  { path: '/features', file: 'features.html' },
  { path: '/security', file: 'security.html' },
  { path: '/privacy', file: 'privacy.html' },
  { path: '/terms', file: 'terms.html' },
  { path: '/cookies', file: 'cookies.html' }
];

// Base HTML template
const baseTemplate = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="https://i.imgur.com/MsVM8ey.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PAYZIO</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

// Generate HTML files for each route
routes.forEach(route => {
  if (route.file !== 'index.html') {
    const filePath = path.join(__dirname, '..', route.file);
    fs.writeFileSync(filePath, baseTemplate);
    console.log(`Generated ${route.file} for route ${route.path}`);
  }
});

console.log('Static HTML files generated successfully!');