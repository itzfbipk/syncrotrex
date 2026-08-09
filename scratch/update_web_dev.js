const fs = require('fs');
const path = require('path');

// 1. Fix static HTML in index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

const targetStr = 'data-framer-name="Sales and marketing"';
const startIndex = indexHtml.indexOf(targetStr);

if (startIndex !== -1) {
    // Find the opening div of this container. It's likely '<div class="framer-1hijlhj"' just before this.
    const divStart = indexHtml.lastIndexOf('<div', startIndex);
    
    // Find the children container inside "Sales and marketing", it might not be a direct child but we can replace from the first child div.
    // Actually, "Sales and marketing" is the container itself. Let's find its matching closing div.
    let open = 0;
    let endIndex = -1;
    for(let i = divStart; i < indexHtml.length; i++) {
        if(indexHtml.substring(i, i+4) === '<div') open++;
        else if(indexHtml.substring(i, i+6) === '</div>') {
            open--;
            if(open === 0) {
                endIndex = i + 5;
                break;
            }
        }
    }
    
    if (endIndex !== -1) {
        const newHtml = `
<div class="framer-1hijlhj" data-border="true" data-framer-name="Sales and marketing" style="--border-bottom-width: 1px; --border-color: var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, rgb(34, 34, 34)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, rgb(0, 0, 0)); border-top-left-radius: 12px; border-top-right-radius: 12px; opacity: 1;">
    <div style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: #111; overflow: hidden; font-family: 'Inter', sans-serif; color: white; padding: 0;">
        <div style="display: flex; align-items: center; padding: 12px 16px; background-color: #1e1e1e; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; gap: 6px;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background-color: #ff5f56;"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background-color: #ffbd2e;"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background-color: #27c93f;"></div>
            </div>
            <div style="margin: 0 auto; background-color: #000; padding: 4px 16px; border-radius: 12px; font-size: 10px; color: #888; border: 1px solid rgba(255,255,255,0.1);">syncrotrex.com/preview</div>
        </div>
        <div style="flex: 1; padding: 24px; display: flex; flex-direction: column; gap: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="width: 30px; height: 30px; background-color: #c96ef0; border-radius: 4px;"></div>
                <div style="display: flex; gap: 12px;">
                    <div style="width: 40px; height: 6px; background-color: rgba(255,255,255,0.2); border-radius: 3px;"></div>
                    <div style="width: 40px; height: 6px; background-color: rgba(255,255,255,0.2); border-radius: 3px;"></div>
                    <div style="width: 40px; height: 6px; background-color: rgba(255,255,255,0.2); border-radius: 3px;"></div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; margin-top: 30px;">
                <div style="width: 70%; height: 20px; background-color: rgba(255,255,255,0.9); border-radius: 4px;"></div>
                <div style="width: 50%; height: 8px; background-color: rgba(255,255,255,0.5); border-radius: 4px;"></div>
                <div style="margin-top: 16px; padding: 10px 24px; background: linear-gradient(to right, #c96ef0, #df7afe); border-radius: 20px; font-size: 12px; font-weight: bold;">Launch Site</div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 30px;">
                <div style="height: 70px; background-color: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);"></div>
                <div style="height: 70px; background-color: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);"></div>
                <div style="height: 70px; background-color: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);"></div>
            </div>
        </div>
    </div>
</div>
        `.trim();
        
        indexHtml = indexHtml.substring(0, divStart) + newHtml + indexHtml.substring(endIndex + 1);
        fs.writeFileSync('index.html', indexHtml, 'utf8');
        console.log('Updated index.html static markup.');
    }
}

// 2. Update references
function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v16.mjs')) {
                content = content.replace(/xELU-v16\.mjs/g, 'xELU-v17.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated reference in ' + fullPath);
            }
        }
    });
}

if (fs.existsSync('scripts/xELU-v16.mjs')) {
    fs.unlinkSync('scripts/xELU-v16.mjs'); 
}
updateReferences('.');
