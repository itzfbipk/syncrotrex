const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v34.mjs', 'utf8');

const cards = ["Strategy card", "AI development card", "Integration card", "Optimization card"];
for (const card of cards) {
    const cardStart = code.indexOf('"data-framer-name": \`' + card + '\`,');
    if (cardStart === -1) {
        console.log("NOT FOUND: " + card);
        continue;
    }
    
    const rStart = code.indexOf('_(R, {', cardStart);
    if (rStart !== -1 && rStart < cardStart + 2000) {
        const heightMatch = code.substring(rStart, rStart + 100).match(/height:\s*([^\s,]+)/);
        console.log(card + " graphic height: " + (heightMatch ? heightMatch[1] : "NOT FOUND"));
    } else {
        console.log(card + " graphic wrapper not found");
    }
}
