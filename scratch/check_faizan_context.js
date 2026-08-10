const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const targetIdx = 623402;
const start = Math.max(0, targetIdx - 1000);
const end = Math.min(html.length, targetIdx + 1000);
console.log(html.substring(start, end));
