const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v35.mjs', 'utf8');

const s1Start = code.indexOf('"data-framer-name": \`Strategy card\`,');
const s2Start = code.indexOf('"data-framer-name": \`AI development card\`,');

console.log("Box 1 container props:");
const s1Props = code.substring(s1Start - 100, s1Start + 300);
console.log(s1Props);

console.log("\nBox 2 container props:");
const s2Props = code.substring(s2Start - 100, s2Start + 300);
console.log(s2Props);
