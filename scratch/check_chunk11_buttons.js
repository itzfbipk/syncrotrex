const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

// Find all matches for "cal.com" or look for where the button is exported/defined.
// Let's print out some references to check how the button hover animation is implemented.
let idx = 0;
while ((idx = code.indexOf('cal.com', idx)) !== -1) {
    console.log(`Found 'cal.com' in chunk-11-v3.mjs at index ${idx}:`);
    console.log(code.substring(idx - 150, idx + 150).replace(/\n/g, ' '));
    console.log('---');
    idx += 7;
}
