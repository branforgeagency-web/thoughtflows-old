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
const svmSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": "https://www.thoughtflows.in/Top-Medical-Coding-Training-Saravanampatti#branch",
  "name": "ThoughtFlows Medical Coding Academy",
  "url": "https://www.thoughtflows.in/Top-Medical-Coding-Training-Saravanampatti",
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
svmHtml = svmHtml.replace(
  /<title>.*?<\/title>/i,
  '<title>Medical Coding Training in Saravanampatti | ThoughtFlows</title>'
);
svmHtml = svmHtml.replace(
  /<meta name="description" content=".*?"\/>/i,
  '<meta name="description" content="Medical coding training in Saravanampatti, Coimbatore — CPC & CCS certification with AAPC-certified trainers, live chart practice and placement support."/>'
);

const svmHeadInsert = `  <link rel="canonical" href="https://www.thoughtflows.in/Top-Medical-Coding-Training-Saravanampatti" />${svmSchemaTag}`;
svmHtml = svmHtml.replace('</head>', `${svmHeadInsert}</head>`);

const svmRoutes = [
  'Top-Medical-Coding-Training-Saravanampatti',
  'medical-coding-course-in-saravanampatti'
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
// 2. Coimbatore Main Landing Page (/coimbatore)
// ==========================================
const cbeTitle = 'Medical Coding Classes in Coimbatore | ThoughtFlows';
const cbeDesc = 'Looking for a medical coding course in Coimbatore? Join ThoughtFlows for CPC & CCS training, practical coding sessions and placement support. Book a free demo!';
const cbeUrl = 'https://www.thoughtflows.in/coimbatore';

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
  'coimbatore',
  'medical-coding-course-coimbatore'
];

cbeRoutes.forEach((route) => {
  const targetDir = path.join(buildDir, route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'index.html'), cbeHtml, 'utf8');
  console.log(`Generated Coimbatore landing page HTML at build/${route}/index.html`);
});
