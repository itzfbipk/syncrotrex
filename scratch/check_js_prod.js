const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const target = "framer-js-prod";
console.log(`Includes 'framer-js-prod': ${html.includes(target)}`);
