const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

// Search for `var U =` or similar. Let's look for definitions of variables in this file.
// Or search for the stylesheet block where U and k are declared.
const targetIdx = 24526;
const block = code.substring(0, targetIdx);
// Let's find definitions of U and k.
let idxU = block.lastIndexOf('U=');
if (idxU !== -1) {
    console.log("Found U=");
    console.log(block.substring(idxU - 50, idxU + 300).replace(/\n/g, ' '));
}
let idxk = block.lastIndexOf('k=');
if (idxk !== -1) {
    console.log("Found k=");
    console.log(block.substring(idxk - 50, idxk + 300).replace(/\n/g, ' '));
}
