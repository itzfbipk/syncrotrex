const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetIdx = 24526;
console.log(code.substring(targetIdx - 3000, targetIdx + 1000).replace(/\n/g, ' '));
