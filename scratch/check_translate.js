const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

let idx = 0;
while ((idx = code.indexOf('translate', idx)) !== -1) {
    console.log(`Found 'translate' at index ${idx}:`);
    console.log(code.substring(idx - 100, idx + 100).replace(/\n/g, ' '));
    console.log('---');
    idx += 9;
}
