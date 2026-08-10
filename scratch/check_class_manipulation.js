const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Search for classList or className in index.html scripts
let idx = 0;
while ((idx = html.indexOf('class', idx)) !== -1) {
    if (html.substring(idx, idx + 10).includes('List') || html.substring(idx, idx + 10).includes('Name')) {
        console.log(`Found near ${idx}:`);
        console.log(html.substring(idx - 50, idx + 150).replace(/\n/g, ' '));
    }
    idx += 5;
}
