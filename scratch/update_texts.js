const fs = require('fs');

let code = fs.readFileSync('scripts/xELU-v11.mjs', 'utf8');

// Replace Title
code = code.replace('What can I help with?', 'Workspace Overview');

// Replace Subtitle
const oldSubtitle = 'Weather you want help in  customer handling or make changes in your system just give me command';
const newSubtitle = 'Active Users — 1,284  |  Projects — 24  |  Revenue — $18,420  |  Growth — +24.8%';
code = code.replace(oldSubtitle, newSubtitle);

// Replace placeholder text inside the input
code = code.replace('+ Add document', 'View detailed analytics reports');

// Replace the three small buttons at the bottom
code = code.replace('Analyze', 'Users');
code = code.replace('Generate Image', 'Revenue');
code = code.replace('research', 'Settings');

fs.writeFileSync('scripts/xELU-v12.mjs', code, 'utf8');
console.log('Saved to xELU-v12.mjs');

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('What can I help with?', 'Workspace Overview');
html = html.replace(oldSubtitle, newSubtitle);
html = html.replace('+ Add document', 'View detailed analytics reports');
html = html.replace('Analyze', 'Users');
html = html.replace('Generate Image', 'Revenue');
html = html.replace('research', 'Settings');

html = html.replace(/xELU-v11\.mjs/g, 'xELU-v12.mjs');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Updated index.html');
