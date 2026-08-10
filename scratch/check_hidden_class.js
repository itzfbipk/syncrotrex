const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const target = "hidden-h7qui";
let idx = 0;
let count = 0;
while ((idx = html.indexOf(target, idx)) !== -1) {
    console.log(`Found '${target}' at index ${idx}:`);
    console.log(html.substring(idx - 50, idx + 100).replace(/\n/g, ' '));
    count++;
    idx += target.length;
}
console.log(`Total occurrences: ${count}`);
