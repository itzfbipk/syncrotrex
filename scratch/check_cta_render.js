const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetIdx = 24526;
// Print more code before the CSS styles to see the rendering function JSX structure of the Button
console.log(code.substring(targetIdx - 5000, targetIdx - 3000).replace(/\n/g, ' '));
