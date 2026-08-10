const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const start = html.indexOf('framer-1rq5fs7-container');
if(start !== -1) {
    const divStart = html.lastIndexOf('<div', start);
    console.log(html.substring(divStart, divStart + 400));
} else {
    console.log("framer-1rq5fs7-container not found in HTML either");
}
