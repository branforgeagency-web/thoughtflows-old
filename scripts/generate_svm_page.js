const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '../build');
const indexHtmlPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('build/index.html not found! Please run build first.');
  process.exit(1);
}

const html = fs.readFileSync(indexHtmlPath, 'utf8');

// ==========================================
// 1. Saravanampatti (SVM) Landing Page
// ==========================================
const svmUrl = 'https://www.thoughtflows.in/medical-coding-institute-saravanampatti-coimbatore';
const svmTitle = 'Medical Coding Institute in Coimbatore – Saravanampatti';
const svmDesc = 'Enrol in a medical coding course in Saravanampatti, Coimbatore. AAPC CPC training with placement support at ThoughtFlows. Call or visit the branch today.';

const svmSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": `${svmUrl}#branch`,
  "name": "ThoughtFlows Medical Coding Academy",
  "url": svmUrl,
  "description": "Medical coding training academy in Saravanampatti, Coimbatore offering CPC certification preparation, online and offline classes, and placement assistance.",
  "telephone": "+91-9384576852",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No-171/2A, 1st Promenade, Tower, Sathy Rd, Saravanampatti",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641035",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.078158,
    "longitude": 77.003236
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "areaServed": { "@type": "City", "name": "Coimbatore" },
  "parentOrganization": { "@id": "https://www.thoughtflows.in/#organization" }
};

const svmSchemaTag = `\n  <script type="application/ld+json">\n${JSON.stringify(svmSchema, null, 2)}\n  </script>\n`;

let svmHtml = html;
svmHtml = svmHtml.replace(/<title>.*?<\/title>/i, `<title>${svmTitle}</title>`);
svmHtml = svmHtml.replace(/<meta name="description" content=".*?"\/>/i, `<meta name="description" content="${svmDesc}"/>`);
svmHtml = svmHtml.replace(/<meta property="og:title" content=".*?"\/>/i, `<meta property="og:title" content="${svmTitle}"/>`);
svmHtml = svmHtml.replace(/<meta property="og:description" content=".*?"\/>/i, `<meta property="og:description" content="${svmDesc}"/>`);
svmHtml = svmHtml.replace(/<meta property="og:url" content=".*?"\/>/i, `<meta property="og:url" content="${svmUrl}"/>`);
svmHtml = svmHtml.replace(/<meta name="twitter:title" content=".*?"\/>/i, `<meta name="twitter:title" content="${svmTitle}"/>`);
svmHtml = svmHtml.replace(/<meta name="twitter:description" content=".*?"\/>/i, `<meta name="twitter:description" content="${svmDesc}"/>`);

const svmHeadInsert = `  <link rel="canonical" href="${svmUrl}" />${svmSchemaTag}`;
svmHtml = svmHtml.replace('</head>', `${svmHeadInsert}</head>`);

const svmRoutes = [
  'medical-coding-institute-saravanampatti-coimbatore'
];

svmRoutes.forEach((route) => {
  const targetDir = path.join(buildDir, route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'index.html'), svmHtml, 'utf8');
  console.log(`Generated SVM landing page HTML at build/${route}/index.html`);
});

// ==========================================
// 2. Coimbatore Main Landing Page
// ==========================================
const cbeTitle = 'Medical Coding Training in Coimbatore | ThoughtFlows';
const cbeDesc = 'Medical coding classes in Coimbatore with AAPC CPC training, placement support and 3 branches: Gandhipuram, Hopes and Saravanampatti. Enquire today.';
const cbeUrl = 'https://www.thoughtflows.in/medical-coding-training-coimbatore';

let cbeHtml = html;
cbeHtml = cbeHtml.replace(/<title>.*?<\/title>/i, `<title>${cbeTitle}</title>`);
cbeHtml = cbeHtml.replace(/<meta name="description" content=".*?"\/>/i, `<meta name="description" content="${cbeDesc}"/>`);

// Update OpenGraph and Twitter tags
cbeHtml = cbeHtml.replace(/<meta property="og:title" content=".*?"\/>/i, `<meta property="og:title" content="${cbeTitle}"/>`);
cbeHtml = cbeHtml.replace(/<meta property="og:description" content=".*?"\/>/i, `<meta property="og:description" content="${cbeDesc}"/>`);
cbeHtml = cbeHtml.replace(/<meta property="og:url" content=".*?"\/>/i, `<meta property="og:url" content="${cbeUrl}"/>`);
cbeHtml = cbeHtml.replace(/<meta name="twitter:title" content=".*?"\/>/i, `<meta name="twitter:title" content="${cbeTitle}"/>`);
cbeHtml = cbeHtml.replace(/<meta name="twitter:description" content=".*?"\/>/i, `<meta name="twitter:description" content="${cbeDesc}"/>`);

const cbeHeadInsert = `  <link rel="canonical" href="${cbeUrl}" />\n`;
cbeHtml = cbeHtml.replace('</head>', `${cbeHeadInsert}</head>`);

const cbeRoutes = [
  'medical-coding-training-coimbatore'
];

cbeRoutes.forEach((route) => {
  const targetDir = path.join(buildDir, route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'index.html'), cbeHtml, 'utf8');
  console.log(`Generated Coimbatore landing page HTML at build/${route}/index.html`);
});
