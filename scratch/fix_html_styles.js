const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            results.push(fullPath);
        }
    });
    return results;
}

const allFiles = walk('.');

const targetStyle1 = '.framer-mscS8.framer-v-1e5l598.hover .framer-1hhkatf,.framer-mscS8.framer-v-1dhrp5e.hover .framer-1hhkatf{justify-content:flex-end}';
const replacementStyle1 = '.framer-mscS8.framer-v-1e5l598.hover .framer-1hhkatf,.framer-mscS8.framer-v-1dhrp5e.hover .framer-1hhkatf{justify-content:flex-start}';

// Fallback search patterns (in case of minor spacing differences)
const targetStyle2 = '.framer-mscS8.framer-v-1e5l598.hover .framer-1hhkatf, .framer-mscS8.framer-v-1dhrp5e.hover .framer-1hhkatf { justify-content: flex-end; }';
const replacementStyle2 = '.framer-mscS8.framer-v-1e5l598.hover .framer-1hhkatf, .framer-mscS8.framer-v-1dhrp5e.hover .framer-1hhkatf { justify-content: flex-start; }';

allFiles.forEach(file => {
    if (file.endsWith('.html')) {
        let content = fs.readFileSync(file, 'utf8');
        let updated = false;
        
        if (content.includes(targetStyle1)) {
            content = content.replace(targetStyle1, replacementStyle1);
            updated = true;
        }
        if (content.includes(targetStyle2)) {
            content = content.replace(targetStyle2, replacementStyle2);
            updated = true;
        }
        
        // Let's also do a regex replace to be completely safe against minor minification differences
        const regex = /\.framer-mscS8\.framer-v-1e5l598\.hover\s+\.framer-1hhkatf\s*,\s*\.framer-mscS8\.framer-v-1dhrp5e\.hover\s+\.framer-1hhkatf\s*\{\s*justify-content\s*:\s*flex-end\s*;?\s*\}/g;
        if (regex.test(content)) {
            content = content.replace(regex, '.framer-mscS8.framer-v-1e5l598.hover .framer-1hhkatf,.framer-mscS8.framer-v-1dhrp5e.hover .framer-1hhkatf{justify-content:flex-start}');
            updated = true;
        }
        
        if (updated) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated HTML styles in: ${file}`);
        }
    }
});
