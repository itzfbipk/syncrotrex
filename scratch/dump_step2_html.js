const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const target = 'data-framer-name="AI development card"';
const idx = html.indexOf(target);
if (idx !== -1) {
    const startIdx = html.lastIndexOf('<div', idx);
    console.log(html.substring(startIdx, startIdx + 2000));
} else {
    console.log("NOT FOUND");
}
