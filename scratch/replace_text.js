const fs = require('fs');
const path = require('path');

// Regex matches "The Key Benefits of AI for Your Business Growth" with potential extra whitespace.
// Note the original has double spaces between "AI" and "for". We can use a regex.
const regex = /The\s+Key\s+Benefits\s+of\s+AI\s+for\s+Your\s+Business\s+Growth/gi;
const replacement = "Built To Make Business Better";

let replacedCount = 0;

function walkDir(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.mjs') || fullPath.endsWith('.js') || fullPath.endsWith('.json')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (regex.test(content)) {
                content = content.replace(regex, replacement);
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Replaced in: ${fullPath}`);
                replacedCount++;
            }
        }
    });
}

walkDir('.');
console.log(`Done! Replaced in ${replacedCount} files.`);
