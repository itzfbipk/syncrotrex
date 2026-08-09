const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v35.mjs', 'utf8');

const s2Start = code.indexOf('"data-framer-name": \`AI development card\`,');
const containerStart = code.indexOf('className: \`framer-mmt41l-container\`', s2Start);
const rStart = code.lastIndexOf('_(R, {', containerStart);
const innerFramerFStart = code.indexOf('_(F, {', rStart);

console.log(code.substring(innerFramerFStart, innerFramerFStart + 1000));
