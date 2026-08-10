const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetIdx = 14634;
console.log(code.substring(targetIdx - 2000, targetIdx).replace(/\n/g, ' '));
