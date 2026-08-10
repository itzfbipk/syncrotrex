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

const scriptToInject = `
<script id="clean-hash-links">
document.addEventListener("click", function(e) {
    const a = e.target.closest("a");
    if (!a) return;
    
    const href = a.getAttribute("href");
    if (!href) return;
    
    // Check if it's a hash link on the current page
    if (href.includes("#")) {
        const parts = href.split("#");
        const id = parts[1];
        const pagePath = parts[0];
        
        // If the hash is on the same page (or we are already on the home page and it's index.html#)
        const isSamePage = !pagePath || 
                           pagePath === "/" || 
                           pagePath === "index.html" || 
                           window.location.pathname === pagePath ||
                           (window.location.pathname === "/" && pagePath === "");
                           
        if (isSamePage && id) {
            const target = document.getElementById(id);
            if (target) {
                e.preventDefault();
                e.stopPropagation();
                
                // Scroll smoothly
                target.scrollIntoView({ behavior: "smooth" });
                
                // Ensure URL stays clean by pushing current path without hash
                setTimeout(() => {
                    history.replaceState(null, "", window.location.pathname + window.location.search);
                }, 10);
            }
        }
    }
}, true); // Use capture phase to beat Framer's internal router
</script>
`;

let changedFiles = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('id="clean-hash-links"')) {
        return; // already injected
    }
    
    // Inject right before </body>
    if (content.includes('</body>')) {
        content = content.replace('</body>', scriptToInject + '\n</body>');
        fs.writeFileSync(file, content);
        changedFiles++;
    } else if (content.includes('</html>')) { // fallback
        content = content.replace('</html>', scriptToInject + '\n</html>');
        fs.writeFileSync(file, content);
        changedFiles++;
    }
});

console.log("Injected hash-link cleaner into " + changedFiles + " files.");
