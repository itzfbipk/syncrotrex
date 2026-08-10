const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v37.mjs', 'utf8');

const s2Start = code.indexOf('"data-framer-name": \`AI development card\`,');
const containerStart = code.indexOf('className: \`framer-mmt41l-container\`,', s2Start);
const childrenStart = code.indexOf('children: _(', containerStart);

console.log(code.substring(containerStart - 100, childrenStart + 200));
