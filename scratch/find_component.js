const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v20.mjs', 'utf8');

const targetStrHTML = 'data-framer-name="AI assistant"';
let indexHtml = fs.readFileSync('index.html', 'utf8');
if (indexHtml.includes(targetStrHTML)) {
    console.log("Found AI assistant in index.html");
}

const targetStrMJS = '"data-framer-name": `AI assistant`';
if (code.includes(targetStrMJS)) {
    console.log("Found AI assistant in xELU");
}

const targetStrMJS2 = '"data-framer-name": `SaaS Development`';
if (code.includes(targetStrMJS2)) {
    console.log("Found SaaS Development in xELU");
}
