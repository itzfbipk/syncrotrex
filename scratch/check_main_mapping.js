const fs = require('fs');

const code = fs.readFileSync('scripts/main-v25.mjs', 'utf8');

const target = "framer-diqy4o-container";
const idx = code.indexOf(target);
if (idx !== -1) {
    console.log("Found container in main-v25.mjs!");
    console.log(code.substring(idx - 500, idx + 500).replace(/\n/g, ' '));
} else {
    console.log("Not found in main-v25.mjs.");
}
