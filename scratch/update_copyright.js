const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

// 1. Rename main-v23.mjs to main-v24.mjs
const oldMain = 'main-v23.mjs';
const newMain = 'main-v24.mjs';
const oldMainPath = path.join('scripts', oldMain);
const newMainPath = path.join('scripts', newMain);

if (fs.existsSync(oldMainPath)) {
    let jsCode = fs.readFileSync(oldMainPath, 'utf8');
    
    // Replace text inside main bundle
    // It is: children:`© All right reserved`
    const targetJS = 'children:`© All right reserved`';
    const replacementJS = 'children:`© 2026 Syncrotrex. All rights reserved.`';
    
    if (jsCode.includes(targetJS)) {
        jsCode = jsCode.replace(targetJS, replacementJS);
        console.log('Updated copyright in JS code.');
    } else {
        console.log('Warning: target copyright string not found in JS.');
    }
    
    fs.writeFileSync(newMainPath, jsCode, 'utf8');
    fs.unlinkSync(oldMainPath);
    console.log(`Renamed and updated JS bundle to ${newMain}`);
}

// 2. Update HTML pages and searchIndex files
allFiles.forEach(file => {
    if (file === newMainPath) return; // skip self
    
    if (fs.existsSync(file)) {
        if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.mjs') || file.endsWith('.json')) {
            let content = fs.readFileSync(file, 'utf8');
            let updated = false;
            
            // Replace main bundle reference
            if (content.includes(oldMain)) {
                content = content.replace(new RegExp(oldMain, 'g'), newMain);
                updated = true;
            }
            
            // Replace HTML/JSON copyright text
            const targetHTML = '© All right reserved';
            const replacementHTML = '© 2026 Syncrotrex. All rights reserved.';
            if (content.includes(targetHTML)) {
                content = content.replace(new RegExp(targetHTML, 'g'), replacementHTML);
                updated = true;
            }
            
            // Fallback for searchIndex mapping (which might not have copyright symbol or have it represented as unicode)
            if (content.includes('All right reserved') && !content.includes('Syncrotrex. All rights reserved.')) {
                content = content.replace(/All right reserved/g, '2026 Syncrotrex. All rights reserved.');
                updated = true;
            }
            
            if (updated) {
                fs.writeFileSync(file, content, 'utf8');
                console.log(`Updated reference/text in: ${file}`);
            }
        }
    }
});

// 3. Git commit and push
try {
    console.log('Staging changes...');
    execSync('git add -A', { stdio: 'inherit' });
    console.log('Committing changes...');
    execSync('git commit -m "update copyright to 2026 Syncrotrex. All rights reserved."', { stdio: 'inherit' });
    console.log('Pushing to remote origin main...');
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('Successfully pushed changes to remote.');
} catch (error) {
    console.error('Git execution failed:', error.message);
}
