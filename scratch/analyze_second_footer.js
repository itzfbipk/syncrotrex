const fs = require('fs');

const block = fs.readFileSync('scratch/footers_block.html', 'utf8');

// Let's count how many times "Links" or "Socials" appears inside this block.
const linksCount = (block.match(/Links/g) || []).length;
const socialsCount = (block.match(/Socials/g) || []).length;
const newsletterCount = (block.match(/Join our newsletter/g) || []).length;

console.log(`Links count in block: ${linksCount}`);
console.log(`Socials count in block: ${socialsCount}`);
console.log(`Newsletter count in block: ${newsletterCount}`);

// Let's find where the second footer starts and print its first 2000 chars.
const secondFooterIdx = block.indexOf('<footer name="Copyright"');
console.log("\n=== SECOND FOOTER START ===");
console.log(block.substring(secondFooterIdx, secondFooterIdx + 2000));
