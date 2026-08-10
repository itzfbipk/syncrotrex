const fs = require('fs');
const file = 'D:/Projetcs/Syncrotrex Site (agency)/scripts/xELU-v38.mjs';

const content = fs.readFileSync(file, 'utf8');
const index = content.indexOf('Schedule a call');

if (index !== -1) {
    const start = Math.max(0, index - 200);
    const end = Math.min(content.length, index + 200);
    console.log(content.substring(start, end));
} else {
    console.log('Not found');
}
