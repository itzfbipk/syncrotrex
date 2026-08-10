const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const target1 = "Syncrotrex - Build Smarter";
const target2 = "Syncrotrex \u2013 Build Smarter"; // en-dash
const target3 = "Syncrotrex \u2014 Build Smarter"; // em-dash
const target4 = "Syncrotrex \u00e2\u0080\u0093 Build Smarter"; // UTF-8 encoded as Windows-1252 (â€“)

console.log(`target1 (-): ${html.includes(target1)}`);
console.log(`target2 (en-dash): ${html.includes(target2)}`);
console.log(`target3 (em-dash): ${html.includes(target3)}`);
console.log(`target4 (â€“): ${html.includes(target4)}`);

let idx = 0;
while ((idx = html.indexOf('Build Smarter', idx)) !== -1) {
    console.log(`Found 'Build Smarter' at ${idx}:`);
    console.log(html.substring(idx - 50, idx + 100));
    idx += 13;
}
