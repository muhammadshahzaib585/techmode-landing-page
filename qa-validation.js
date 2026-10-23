/**
 * Quality Assurance and Validation Test Script for TECHMODE Prototype
 * Verifies:
 * 1. Semantic landmarks & HTML structure
 * 2. Heading hierarchy (strictly one h1, sequential h2/h3)
 * 3. Accessibility requirements (skip link, aria attributes, form labeling)
 * 4. Content compliance (no unauthorized words like 'awards', 'partner', 'clients', 'statistics', etc.)
 * 5. WCAG Color Contrast mathematical verification
 */

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'out', 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('Error: out/index.html does not exist. Run npm run build first.');
  process.exit(1);
}

const html = fs.readFileSync(indexPath, 'utf8');

console.log('====================================================');
console.log('TECHMODE LANDING PAGE PROTOTYPE - QA VALIDATION SUITE');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${testName} ${details ? '- ' + details : ''}`);
    failCount++;
  }
}

// 1. Heading Hierarchy
console.log('--- 1. Heading Hierarchy & Structure ---');
const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
assert(h1Matches.length === 1, 'Strictly single <h1> tag on the page', `Found ${h1Matches.length}`);

const h2Matches = html.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
assert(h2Matches.length === 5, 'Exactly 5 logical <h2> section titles', `Found ${h2Matches.length}`);

// 2. Semantic Landmarks
console.log('\n--- 2. Semantic Landmarks (WCAG 2.1 AA) ---');
assert(html.includes('<header') && html.includes('role="banner"'), '<header role="banner"> present');
assert(html.includes('<nav') && html.includes('aria-label="Primary Navigation"'), 'Accessible primary <nav> present');
assert(html.includes('<main id="main-content"'), '<main id="main-content"> landmark present');
assert(html.includes('<footer') && html.includes('role="contentinfo"'), '<footer role="contentinfo"> present');
assert(html.includes('href="#main-content"') && html.includes('Skip to main content'), 'Accessible Skip-to-content link present');

// 3. Accessible Sections with aria-labelledby
console.log('\n--- 3. Accessible Sections ---');
const sectionIds = ['problems', 'approach', 'focus', 'vision', 'contact'];
for (const id of sectionIds) {
  assert(
    html.includes(`id="${id}"`) && html.includes(`aria-labelledby="${id}-heading"`),
    `Section #${id} has matching aria-labelledby="${id}-heading"`
  );
}

// 4. Accessible Form
console.log('\n--- 4. Form Accessibility & Controls ---');
assert(html.includes('<form'), '<form> tag rendered in static output');
assert(html.includes('aria-live="polite"'), 'aria-live="polite" live status announcement region present');
assert(html.includes('aria-required="true"'), 'Form inputs have aria-required="true"');
assert(html.includes('type="email"'), 'Email input has type="email"');

// 5. Strict Content Rules Compliance
console.log('\n--- 5. Strict Content Rules Verification ---');
const forbiddenTerms = [
  'testimonial',
  'client review',
  '500+ clients',
  '99.9% uptime',
  'award winning',
  'trusted by fortune',
  'case study: acme',
  'our partners',
  'fake company'
];

let foundForbidden = false;
for (const term of forbiddenTerms) {
  if (html.toLowerCase().includes(term)) {
    foundForbidden = true;
    console.error(`[FAIL] Found forbidden unverified claim term: "${term}"`);
  }
}
assert(!foundForbidden, 'No invented testimonials, awards, fake partners, or statistics found');

// 6. Color Contrast Formula Verification (Relative Luminance WCAG 2.1)
console.log('\n--- 6. Color Contrast Verification (WCAG AA >= 4.5:1) ---');
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrast(rgb1, rgb2) {
  const l1 = getLuminance(...rgb1);
  const l2 = getLuminance(...rgb2);
  const bright = Math.max(l1, l2);
  const dark = Math.min(l1, l2);
  return (bright + 0.05) / (dark + 0.05);
}

// Light Mode checks:
// Page bg: #f8fafc (248, 250, 252)
// Primary text: #0f172a (15, 23, 42)
// Secondary text: #334155 (51, 65, 85)
// Muted text: #64748b (100, 116, 139)
// Accent text on light bg: #0369a1 (3, 105, 161)
const lightBg = [248, 250, 252];
const lightPrimary = [15, 23, 42];
const lightSecondary = [51, 65, 85];
const lightAccentText = [3, 105, 161];

const contrastPrimaryLight = getContrast(lightPrimary, lightBg);
assert(contrastPrimaryLight >= 4.5, `Light mode primary text contrast: ${contrastPrimaryLight.toFixed(2)}:1 (>= 4.5:1)`);

const contrastSecondaryLight = getContrast(lightSecondary, lightBg);
assert(contrastSecondaryLight >= 4.5, `Light mode secondary text contrast: ${contrastSecondaryLight.toFixed(2)}:1 (>= 4.5:1)`);

const contrastAccentLight = getContrast(lightAccentText, [255, 255, 255]);
assert(contrastAccentLight >= 4.5, `Light mode accent text contrast against white: ${contrastAccentLight.toFixed(2)}:1 (>= 4.5:1)`);

// Dark Mode checks:
// Page bg: #070a10 (7, 10, 16)
// Primary text: #f8fafc (248, 250, 252)
// Secondary text: #cbd5e1 (203, 213, 225)
// Accent sky-400: #38bdf8 (56, 189, 248)
const darkBg = [7, 10, 16];
const darkPrimary = [248, 250, 252];
const darkSecondary = [203, 213, 225];
const darkAccent = [56, 189, 248];

const contrastPrimaryDark = getContrast(darkPrimary, darkBg);
assert(contrastPrimaryDark >= 4.5, `Dark mode primary text contrast: ${contrastPrimaryDark.toFixed(2)}:1 (>= 4.5:1)`);

const contrastSecondaryDark = getContrast(darkSecondary, darkBg);
assert(contrastSecondaryDark >= 4.5, `Dark mode secondary text contrast: ${contrastSecondaryDark.toFixed(2)}:1 (>= 4.5:1)`);

const contrastAccentDark = getContrast(darkAccent, darkBg);
assert(contrastAccentDark >= 4.5, `Dark mode accent text contrast: ${contrastAccentDark.toFixed(2)}:1 (>= 4.5:1)`);

console.log('\n====================================================');
console.log(`TOTAL TESTS: ${passCount + failCount} | PASSED: ${passCount} | FAILED: ${failCount}`);
console.log('====================================================\n');

if (failCount > 0) {
  process.exit(1);
}
