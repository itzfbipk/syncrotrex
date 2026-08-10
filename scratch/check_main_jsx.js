const fs = require('fs');

const code = fs.readFileSync('scripts/main-v25.mjs', 'utf8');

// Find occurrences of the containers in JSX/render structures.
// Let's print occurrences that are NOT inside CSS style blocks.
let idx = 0;
while ((idx = code.indexOf('framer-diqy4o-container', idx)) !== -1) {
    console.log(`Match at ${idx}:`);
    const start = Math.max(0, idx - 200);
    const end = Math.min(code.length, idx + 200);
    console.log(code.substring(start, end).replace(/\n/g, ' '));
    console.log('---');
    idx += 23;
}

idx = 0;
while ((idx = code.indexOf('framer-ynm0sg-container', idx)) !== -1) {
    console.log(`Match at ${idx}:`);
    const start = Math.max(0, idx - 200);
    const end = Math.min(code.length, idx + 200);
    console.log(code.substring(start, end).replace(/\n/g, ' '));
    console.log('---');
    idx += 23;
}
