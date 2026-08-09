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

// 1. Rename main-v24.mjs to main-v25.mjs
const oldMain = 'main-v24.mjs';
const newMain = 'main-v25.mjs';
const oldMainPath = path.join('scripts', oldMain);
const newMainPath = path.join('scripts', newMain);

if (fs.existsSync(oldMainPath)) {
    let jsCode = fs.readFileSync(oldMainPath, 'utf8');
    
    // Replace Instagram with Github
    jsCode = jsCode.replace('href:`instagram.com`', 'href:`https://github.com/itzfbipk`');
    jsCode = jsCode.replace('children:`Instagram`', 'children:`Github`');
    
    // Replace Facebook with Discord
    jsCode = jsCode.replace('href:`facebook.com`', 'href:`https://discord.com`');
    jsCode = jsCode.replace('children:`Facebook`', 'children:`Discord`');
    
    // Replace Twitter with Twitter/X
    jsCode = jsCode.replace('children:`Twitter`', 'children:`Twitter/X`');
    jsCode = jsCode.replace('href:`x.com`', 'href:`https://x.com/ItzFB1`');
    
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
            
            // Replace Instagram link and text
            if (content.includes('href="https://instagram.com"') || content.includes('>Instagram<')) {
                content = content.replace(/href="https:\/\/instagram\.com"/g, 'href="https://github.com/itzfbipk"');
                content = content.replace(/>Instagram</g, '>Github<');
                updated = true;
            }
            
            // Replace Facebook link and text
            if (content.includes('href="https://facebook.com"') || content.includes('>Facebook<')) {
                content = content.replace(/href="https:\/\/facebook\.com"/g, 'href="https://discord.com"');
                content = content.replace(/>Facebook</g, '>Discord<');
                updated = true;
            }
            
            // Replace Twitter text with Twitter/X
            if (content.includes('>Twitter<')) {
                content = content.replace(/>Twitter</g, '>Twitter/X<');
                updated = true;
            }
            
            // Specifically check for searchIndex files
            if (file.includes('searchIndex')) {
                if (content.includes('"Instagram"')) {
                    content = content.replace(/"Instagram"/g, '"Github"');
                    updated = true;
                }
                if (content.includes('"Facebook"')) {
                    content = content.replace(/"Facebook"/g, '"Discord"');
                    updated = true;
                }
                if (content.includes('"Twitter"')) {
                    content = content.replace(/"Twitter"/g, '"Twitter/X"');
                    updated = true;
                }
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
    execSync('git commit -m "update social links: remove instagram/facebook, add github/discord, change twitter to twitter/x"', { stdio: 'inherit' });
    console.log('Pushing to remote origin main...');
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('Successfully pushed changes to remote.');
} catch (error) {
    console.error('Git execution failed:', error.message);
}
