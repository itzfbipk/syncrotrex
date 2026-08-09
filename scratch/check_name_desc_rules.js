const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v35.mjs', 'utf8');

const class1 = 'framer-c01dmm'; // Box 1 Name and description
const class2 = 'framer-6jjf4z'; // Box 2 Name and description

console.log("Box 1 Name & Desc rules:");
let match;
const regex1 = new RegExp('\\.' + class1 + '\\s*{([^}]+)}', 'g');
while ((match = regex1.exec(code)) !== null) {
    console.log(match[0]);
}

console.log("\nBox 2 Name & Desc rules:");
const regex2 = new RegExp('\\.' + class2 + '\\s*{([^}]+)}', 'g');
while ((match = regex2.exec(code)) !== null) {
    console.log(match[0]);
}
