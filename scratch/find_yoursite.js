const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /yoursite\.com/g;
let match;
while ((match = regex.exec(html)) !== null) {
    const start = Math.max(0, match.index - 500);
    const end = Math.min(html.length, match.index + 500);
    console.log("MATCH:");
    console.log(html.substring(start, end));
}
