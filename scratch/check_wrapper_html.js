const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const s2Start = html.indexOf('data-framer-name="AI development card"');
const containerStart = html.indexOf('framer-mmt41l-container', s2Start);
const divStart = html.lastIndexOf('<div', containerStart);
console.log("Box 2 Wrapper HTML:");
console.log(html.substring(divStart, html.indexOf('>', containerStart) + 1));

const s1Start = html.indexOf('data-framer-name="Strategy card"');
const containerStart1 = html.indexOf('framer-15bmlrg-container', s1Start);
const divStart1 = html.lastIndexOf('<div', containerStart1);
console.log("\nBox 1 Wrapper HTML:");
console.log(html.substring(divStart1, html.indexOf('>', containerStart1) + 1));
