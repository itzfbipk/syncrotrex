const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const s2Start = html.indexOf('data-framer-name="AI development card"');
const containerStart = html.indexOf('framer-mmt41l-container', s2Start);
const divStart = html.lastIndexOf('<div', containerStart);
const divEnd = html.indexOf('>', containerStart);

// Let's get the full content of framer-mmt41l-container in HTML
let open = 0;
let endIndex = -1;
for(let i = divStart; i < html.length; i++) {
    if(html.substring(i, i+4) === '<div') open++;
    else if(html.substring(i, i+6) === '</div>') {
        open--;
        if(open === 0) {
            endIndex = i + 6;
            break;
        }
    }
}
console.log("Box 2 Wrapper HTML Content:");
console.log(html.substring(divStart, endIndex));
