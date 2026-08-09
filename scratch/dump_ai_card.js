const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v34.mjs', 'utf8');

const s2Start = code.indexOf('"data-framer-name": \`AI development card\`,');
const p2Start = code.indexOf('_(P, {', s2Start);
console.log(code.substring(p2Start, p2Start + 800));
