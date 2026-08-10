const fs = require('fs');

const code = fs.readFileSync('scripts/xELU-v38.mjs', 'utf8');

let idx = 0;
while ((idx = code.indexOf('framer-diqy4o-container', idx)) !== -1) {
    console.log(`Found 'framer-diqy4o-container' at index ${idx}`);
    const start = Math.max(0, idx - 300);
    const end = Math.min(code.length, idx + 300);
    console.log(code.substring(start, end).replace(/\n/g, ' '));
    console.log('------------------');
    idx += 23;
}
