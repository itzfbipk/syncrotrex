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

let changedFiles = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace exact "https://cal.com" or "https://cal.com/" with "https://cal.com/syncrotrex"
    let newContent = content.replace(/"https:\/\/cal\.com\/?([^"]*)"/g, '"https://cal.com/syncrotrex$1"');
    
    if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        changedFiles++;
        console.log(`Updated links in: ${path.relative(dir, file)}`);
    }
});

console.log(`Updated ${changedFiles} files with the new Cal.com link.`);
