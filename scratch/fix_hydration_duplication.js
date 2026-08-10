const fs = require('fs');
const path = require('path');

const jsScript = `<script>document.documentElement.classList.add('js-active');</script>`;
const cssStyle = `<style>html.js-active .ssr-variant { display: none !important; }</style>`;

function fixHtmlFile(filePath) {
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Inject the script in head if not already present
    if (!html.includes('js-active')) {
        // Find </head> and insert before it
        const headEnd = html.indexOf('</head>');
        if (headEnd !== -1) {
            html = html.substring(0, headEnd) + jsScript + cssStyle + html.substring(headEnd);
            fs.writeFileSync(filePath, html, 'utf8');
            console.log(`Successfully fixed hydration duplication in: ${filePath}`);
        } else {
            console.log(`Could not find </head> in: ${filePath}`);
        }
    } else {
        console.log(`Already fixed: ${filePath}`);
    }
}

function walkDir(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.html')) {
            fixHtmlFile(fullPath);
        }
    });
}

walkDir('.');
