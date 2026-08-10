const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

// Find all matches for "U =" or "U ="
let idx = 0;
while ((idx = code.indexOf('U =', idx)) !== -1) {
    console.log(`Found 'U =' at ${idx}`);
    console.log(code.substring(idx - 50, idx + 100).replace(/\n/g, ' '));
    idx += 3;
}
idx = 0;
while ((idx = code.indexOf('U=', idx)) !== -1) {
    console.log(`Found 'U=' at ${idx}`);
    console.log(code.substring(idx - 50, idx + 100).replace(/\n/g, ' '));
    idx += 2;
}
