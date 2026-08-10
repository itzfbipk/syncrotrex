const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

let idx = 0;
let occurrences = [];
while ((idx = html.indexOf('crafted by<span', idx)) !== -1) {
    occurrences.push(idx);
    idx += 15;
}

console.log(`Found ${occurrences.length} occurrences in index.html:`);
occurrences.forEach((pos, index) => {
    console.log(`Match ${index + 1} at position ${pos}`);
    // Print 1000 characters before and after to see where it sits in the page layout structure
    const start = Math.max(0, pos - 1500);
    const end = Math.min(html.length, pos + 1500);
    fs.writeFileSync(`scratch/footer_match_${index + 1}.txt`, html.substring(start, end));
});
