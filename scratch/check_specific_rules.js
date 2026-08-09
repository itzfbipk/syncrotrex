const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v35.mjs', 'utf8');

const class1 = 'framer-1kat19j'; // Box 1
const class2 = 'framer-s0rhwo'; // Box 2

console.log("Box 1 specific rules:");
let match;
const regex1 = new RegExp('\\.' + class1 + '\\s*{([^}]+)}', 'g');
while ((match = regex1.exec(code)) !== null) {
    console.log(match[0]);
}

console.log("\nBox 2 specific rules:");
const regex2 = new RegExp('\\.' + class2 + '\\s*{([^}]+)}', 'g');
while ((match = regex2.exec(code)) !== null) {
    console.log(match[0]);
}

// What if the gap is defined on the flex container?
// Check if gap is present in the CSS.
