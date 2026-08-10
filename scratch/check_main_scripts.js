const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Find all matches for "main-" script source
let idx = 0;
while ((idx = html.indexOf('main-', idx)) !== -1) {
    console.log(`Found 'main-' at index ${idx}`);
    console.log(html.substring(idx - 100, idx + 100));
    idx += 5;
}
