const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetIdx = 24526;
// Get the array of style strings
const startStyles = code.indexOf('[', targetIdx - 3000);
const endStyles = code.indexOf(']', startStyles) + 1;
console.log("Styles array:");
console.log(code.substring(startStyles, endStyles).replace(/\n/g, ' '));
