const fs = require('fs');

const code = fs.readFileSync('scripts/main-v25.mjs', 'utf8');

// Find all import statements in the first 5000 chars of main-v25.mjs
console.log(code.substring(0, 4000));
