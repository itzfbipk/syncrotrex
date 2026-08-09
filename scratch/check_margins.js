const fs = require('fs');

const file1 = fs.readFileSync('scratch/premium_ui_steps_fixed.js', 'utf8');
const file2 = fs.readFileSync('scratch/update_ui_v34.js', 'utf8');

console.log("premium_ui_steps_fixed.js margin-tops:");
const m1 = file1.match(/marginTop:\s*['"]([^'"]+)['"]/g) || [];
console.log(m1);
const m1b = file1.match(/margin-top:\s*([^;"]+)/g) || [];
console.log(m1b);

console.log("\nupdate_ui_v34.js margin-tops:");
const m2 = file2.match(/marginTop:\s*['"]([^'"]+)['"]/g) || [];
console.log(m2);
const m2b = file2.match(/margin-top:\s*([^;"]+)/g) || [];
console.log(m2b);
