const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v35.mjs', 'utf8');

const regex = /\.framer-mmt41l-container\s*{([^}]+)}/g;
let match;
while ((match = regex.exec(code)) !== null) {
    console.log("mmt41l-container CSS: " + match[0]);
}

const regex2 = /\.framer-15bmlrg-container\s*{([^}]+)}/g;
while ((match = regex2.exec(code)) !== null) {
    console.log("15bmlrg-container CSS: " + match[0]);
}
