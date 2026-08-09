const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /\.framer-24Uvd\s*{([^}]+)}/g;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log(match[0]);
}

// Also check xELU-v35.mjs
const code = fs.readFileSync('scripts/xELU-v35.mjs', 'utf8');
const regex2 = /\.framer-24Uvd\s*{([^}]+)}/g;
while ((match = regex2.exec(code)) !== null) {
    console.log("From JS: " + match[0]);
}
