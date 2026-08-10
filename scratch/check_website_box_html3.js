const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="framer-1rq5fs7-container"[^>]*>/g;
let match;
while ((match = regex.exec(html)) !== null) {
    const start = html.lastIndexOf('<div', match.index);
    console.log(html.substring(start, start + 300));
}
