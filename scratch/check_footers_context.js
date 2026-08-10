const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const positions = [609200, 621523];

positions.forEach((pos, index) => {
    console.log(`=== FOOTER MATCH ${index + 1} at ${pos} ===`);
    console.log(html.substring(pos, pos + 300));
    console.log('...\n');
});
