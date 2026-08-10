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
const textFiles = allFiles.filter(f => f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.mjs') || f.endsWith('.css'));

console.log(`Scanning ${textFiles.length} files...`);

const bugs = [];

textFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relPath = path.relative(dir, file);

    const lines = content.split('\n');
    lines.forEach((line, i) => {
        const lineNum = i + 1;
        
        if (line.toLowerCase().includes('localhost')) {
            bugs.push(`[Localhost URL] ${relPath}:${lineNum}`);
        }
        if (line.includes('TODO:') || line.includes('FIXME:')) {
            bugs.push(`[TODO/FIXME] ${relPath}:${lineNum}`);
        }
        if (line.includes('console.error')) {
            bugs.push(`[Console Error] ${relPath}:${lineNum}`);
        }
        if (line.includes('class="undefined"')) {
            bugs.push(`[Undefined Class] ${relPath}:${lineNum}`);
        }
        
        // Simple internal link check
        const hrefMatch = line.match(/href=["'](\/[^"']*)["']/g);
        if (hrefMatch) {
            hrefMatch.forEach(match => {
                const link = match.replace(/href=["']/, '').replace(/["']$/, '');
                // Skip external links, fragments, anchors
                if (link.startsWith('/') && !link.startsWith('//')) {
                    // Normalize link to see if file exists
                    // Very simple naive check
                    let checkPath = link === '/' ? '/index.html' : link;
                    if (checkPath.endsWith('/')) checkPath += 'index.html';
                    if (!checkPath.includes('.')) checkPath += '/index.html';
                    
                    const fullPath = path.join(dir, checkPath);
                    if (!fs.existsSync(fullPath)) {
                        bugs.push(`[Broken Link] ${relPath}:${lineNum} -> ${link}`);
                    }
                }
            });
        }
    });
});

console.log('--- Bug Report ---');
bugs.forEach(b => console.log(b));
console.log('--- End of Report ---');
