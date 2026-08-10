const fs = require('fs');
const path = require('path');

const dir = 'D:/Projetcs/Syncrotrex Site (agency)';

function walk(currentDir) {
    let results = [];
    const list = fs.readdirSync(currentDir);
    list.forEach(file => {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'scratch') {
                results = results.concat(walk(filePath));
            }
        } else {
            results.push(filePath);
        }
    });
    return results;
}

const allFiles = walk(dir);
const htmlFiles = allFiles.filter(f => f.endsWith('.html'));

const linkReport = {};

htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relPath = path.relative(dir, file);
    
    // Extract all <a href="...">...</a>
    // We'll use a regex that handles nested tags in a basic way, or just match href and the following text.
    const aTagRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gs;
    let match;
    
    if (!linkReport[relPath]) linkReport[relPath] = [];
    
    while ((match = aTagRegex.exec(content)) !== null) {
        const href = match[1];
        let innerHtml = match[2];
        
        // clean up inner HTML to get text
        let text = innerHtml.replace(/<[^>]+>/g, '').trim();
        if (!text) {
            // maybe it was an image or svg, check if there's an aria-label or just note it as icon
            const ariaMatch = match[0].match(/aria-label=["']([^"']+)["']/);
            if (ariaMatch) {
                text = `[Icon: ${ariaMatch[1]}]`;
            } else if (innerHtml.includes('<img') || innerHtml.includes('<svg')) {
                text = `[Image/Icon]`;
            } else {
                text = `[No Text]`;
            }
        }
        
        // ignore duplicate links in the same file to keep report clean
        const exists = linkReport[relPath].find(l => l.href === href && l.text === text);
        if (!exists) {
            linkReport[relPath].push({ type: 'Link', href, text });
        }
    }
});

console.log('# Links and Buttons Report\n');

for (const [file, links] of Object.entries(linkReport)) {
    if (links.length === 0) continue;
    console.log(`## File: ${file}`);
    links.forEach(l => {
        let actionStr = `Leads to -> ${l.href}`;
        if (l.href.startsWith('#')) {
            actionStr = `Scrolls to section -> ${l.href} on the same page`;
        } else if (l.href.startsWith('mailto:')) {
            actionStr = `Opens email client -> ${l.href.replace('mailto:', '')}`;
        }
        console.log(`- **Text/Button:** "${l.text}" | **Action:** ${actionStr}`);
    });
    console.log('');
}
