const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Find all matches for ".hidden-" in index.html
const regex = /\.hidden-[a-zA-Z0-9_-]+/g;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log(`Found CSS class selector: ${match[0]}`);
}
