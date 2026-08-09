const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v34.mjs', 'utf8');

const step2Start = code.indexOf('"data-framer-name": \`AI development card\`,');
const containerStart = code.indexOf('className: \`framer-mmt41l-container\`', step2Start);
const rStart = code.lastIndexOf('_(R, {', containerStart);
console.log(code.substring(rStart, rStart + 100));

const step3Start = code.indexOf('"data-framer-name": \`Integration card\`,');
const rStart3 = code.lastIndexOf('_(R, {', code.indexOf('className: \`framer-s8x53b-container\`', step3Start));
console.log(code.substring(rStart3, rStart3 + 100));

const step4Start = code.indexOf('"data-framer-name": \`Optimization card\`,');
const rStart4 = code.lastIndexOf('_(R, {', code.indexOf('className: \`framer-m27r05-container\`', step4Start));
console.log(code.substring(rStart4, rStart4 + 100));

const step1Start = code.indexOf('"data-framer-name": \`Strategy card\`,');
const rStart1 = code.lastIndexOf('_(R, {', code.indexOf('className: \`framer-15bmlrg-container\`', step1Start));
console.log(code.substring(rStart1, rStart1 + 100));
