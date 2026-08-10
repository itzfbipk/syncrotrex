const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Search for "crafted by Faizan"
let idx = 0;
while ((idx = html.indexOf('crafted by Faizan', idx)) !== -1) {
    console.log(`Found 'crafted by Faizan' at index ${idx}`);
    const start = Math.max(0, idx - 300);
    const end = Math.min(html.length, idx + 300);
    console.log(html.substring(start, end).replace(/\n/g, ' '));
    console.log('------------------');
    idx += 17;
}
