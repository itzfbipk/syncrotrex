const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

// Let's find all occurrences of "= e((()=>" or "= e(" in the entire file
// to find where components are defined.
let idx = 0;
while ((idx = code.indexOf('= e((()=>', idx)) !== -1) {
    console.log(`Found component definition at index ${idx}:`);
    console.log(code.substring(idx - 50, idx + 100).replace(/\n/g, ' '));
    console.log('---');
    idx += 8;
}
