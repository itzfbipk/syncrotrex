const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v29.mjs', 'utf8');

const step2Start = code.indexOf('"data-framer-name": \`AI development card\`,');
const containerStart = code.indexOf('className: \`framer-mmt41l-container\`', step2Start);
const rStart = code.lastIndexOf('_(R, {', containerStart);
console.log(code.substring(rStart, rStart + 100));
