const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Find all matches for "Book a" in index.html and print context
let idx = 0;
while ((idx = html.indexOf('Book a', idx)) !== -1) {
    console.log(`Found near index ${idx}:`);
    console.log(html.substring(idx - 100, idx + 200).replace(/\n/g, ' '));
    console.log('---');
    idx += 6;
}
