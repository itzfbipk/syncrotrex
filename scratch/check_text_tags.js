const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v35.mjs', 'utf8');

const s2Start = code.indexOf('"data-framer-name": \`AI development card\`,');
const pStart2 = code.indexOf('We design the experience', s2Start);
console.log("Box 2 text:");
console.log(code.substring(Math.max(0, pStart2 - 200), pStart2 + 100));

const s1Start = code.indexOf('"data-framer-name": \`Strategy card\`,');
const pStart1 = code.indexOf('We learn how your business', s1Start);
console.log("\nBox 1 text:");
console.log(code.substring(Math.max(0, pStart1 - 200), pStart1 + 100));

