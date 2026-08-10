const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

let idx = 0;
let footerCount = 0;
while ((idx = html.indexOf('<footer', idx)) !== -1) {
    console.log(`Found <footer tag at position ${idx}`);
    footerCount++;
    idx += 7;
}
console.log(`Total <footer tags: ${footerCount}`);
