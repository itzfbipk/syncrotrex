const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v34.mjs', 'utf8');

const s1Start = code.indexOf('"data-framer-name": \`Strategy card\`,');
const s2Start = code.indexOf('"data-framer-name": \`AI development card\`,');

console.log("Strategy card P override:");
const p1Start = code.indexOf('_(P, {', s1Start);
console.log(code.substring(p1Start, code.indexOf('children:', p1Start) + 15));

console.log("\nAI development card P override:");
const p2Start = code.indexOf('_(P, {', s2Start);
console.log(code.substring(p2Start, code.indexOf('children:', p2Start) + 15));
