const fs = require('fs');

const code = fs.readFileSync('scripts/main-v25.mjs', 'utf8');

const targetIdx = 69960;
console.log(code.substring(targetIdx - 600, targetIdx + 400).replace(/\n/g, ' '));
