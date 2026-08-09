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

const oldChunk = 'chunk-11.mjs';
const newChunk = 'chunk-11-v2.mjs';

const oldPath = path.join('scripts', oldChunk);
const newPath = path.join('scripts', newChunk);

if (fs.existsSync(oldPath)) {
    let code = fs.readFileSync(oldPath, 'utf8');
    
    // Replace hover scroll direction
    const target = 'justify-content: flex-end;';
    const replacement = 'justify-content: flex-start;';
    
    if (code.includes(target)) {
        code = code.replace(target, replacement);
        console.log('Successfully updated hover style in chunk-11');
    } else {
        console.log('Warning: target hover style not found in chunk-11');
    }
    
    fs.writeFileSync(newPath, code, 'utf8');
    console.log(`Saved updated chunk to ${newChunk}`);
    
    // Delete the old file to clean up
    fs.unlinkSync(oldPath);
    console.log(`Deleted old ${oldChunk}`);
}

// Update all references in other files
allFiles.forEach(file => {
    // skip the newly created newChunk file itself
    if (file === newPath) return;
    
    if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.mjs')) {
        let content = fs.readFileSync(file, 'utf8');
        if (content.includes(oldChunk)) {
            content = content.replace(new RegExp(oldChunk, 'g'), newChunk);
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated reference in: ${file}`);
        }
    }
});
