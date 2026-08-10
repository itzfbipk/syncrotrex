const fs = require('fs');

const dump = fs.readFileSync('scratch/cta_button_dump.js', 'utf8');

// Let's print lines containing `hover` or `variants` or `gesture` or `he`
const lines = dump.split('\n');
lines.forEach((line, index) => {
    if (line.includes('hover') || line.includes('gesture') || line.includes('Variant') || line.includes('variant') || line.includes('he(')) {
        console.log(`Line ${index + 1}: ${line}`);
    }
});
