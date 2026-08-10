const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="framer-1rq5fs7-container"[^>]*>/g;
let match = regex.exec(html);
if (match) {
    const start = html.lastIndexOf('<div', match.index);
    let open = 0;
    let end = -1;
    for(let i=start; i<html.length; i++) {
        if(html.substring(i, i+4) === '<div') open++;
        if(html.substring(i, i+6) === '</div>') {
            open--;
            if(open === 0) {
                end = i + 6;
                break;
            }
        }
    }
    console.log(html.substring(start, end));
}
