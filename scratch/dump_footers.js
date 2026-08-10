const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Find the text of both footers to see if they both contain the entire footer structure
// Let's print out what the outer HTML structure looks like around index 609200 and 621523.
console.log("MATCH 1 LENGTH: " + html.indexOf('</footer>', 609200));
console.log("MATCH 2 LENGTH: " + html.indexOf('</footer>', 621523));

// Let's write the entire block from 609200 to 625000 to a scratch file so we can view it.
fs.writeFileSync('scratch/footers_block.html', html.substring(608000, 626000));
console.log("Wrote scratch/footers_block.html");
