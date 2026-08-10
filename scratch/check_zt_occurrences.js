const fs = require('fs');

const code = fs.readFileSync('scripts/main-v25.mjs', 'utf8');

// Find all matches for "var zt" or "let zt" or "const zt"
let idx = 0;
while ((idx = code.indexOf('zt', idx)) !== -1) {
    console.log(`Found 'zt' at index ${idx}:`);
    console.log(code.substring(idx - 100, idx + 100).replace(/\n/g, ' '));
    console.log('---');
    idx += 2;
}
