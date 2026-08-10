const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="framer-[a-z0-9]+-container"[^>]*id="Tm3B26HDu"/g;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log(match[0]);
}

const idx = html.indexOf('id="Tm3B26HDu"');
if(idx !== -1) {
    const start = html.lastIndexOf('<div', idx);
    console.log(html.substring(start, start + 300));
}
