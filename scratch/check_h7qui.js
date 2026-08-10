const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const target = "h7qui";
let idx = 0;
while ((idx = html.indexOf(target, idx)) !== -1) {
    console.log(`Found '${target}' at index ${idx}:`);
    console.log(html.substring(idx - 100, idx + 100).replace(/\n/g, ' '));
    idx += target.length;
}
