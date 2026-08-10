const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

let idx = 0;
while ((idx = html.indexOf('<script', idx)) !== -1) {
    const end = html.indexOf('</script>', idx) + 9;
    console.log(`=== SCRIPT MATCH at ${idx} ===`);
    console.log(html.substring(idx, end).replace(/\n/g, ' '));
    console.log('------------------');
    idx = end;
}
