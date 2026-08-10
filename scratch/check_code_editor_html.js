const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const s2Start = html.indexOf('data-framer-name="AI development card"');
const containerStart = html.indexOf('framer-mmt41l-container', s2Start);
const codeStart = html.indexOf('data-framer-name="Code"', containerStart);
const codeStartDiv = html.lastIndexOf('<div', codeStart);

console.log(html.substring(codeStartDiv, codeStartDiv + 200));
