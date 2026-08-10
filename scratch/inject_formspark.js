const fs = require('fs');
const path = require('path');

const dir = 'D:/Projetcs/Syncrotrex Site (agency)';

const scriptToInject = `
<script id="formspark-hijack">
document.addEventListener('submit', async function(e) {
    if (e.target.tagName === 'FORM') {
        e.preventDefault();
        e.stopImmediatePropagation();

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Find the submit button to show loading state
        // Framer uses <a> or <input> or <button> inside the form sometimes
        const btn = form.querySelector('input[type="submit"], button') || form.parentElement.querySelector('a');
        let originalText = "Submit";
        if (btn) {
            originalText = btn.value || btn.innerText;
            if (btn.value) btn.value = "Sending...";
            else btn.innerText = "Sending...";
        }

        try {
            await fetch("https://submit-form.com/SudMwVaGT", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });
            
            if (btn) {
                if (btn.value) btn.value = "Message Sent!";
                else btn.innerText = "Message Sent!";
            }
            form.reset();
            setTimeout(() => {
                if (btn) {
                    if (btn.value) btn.value = originalText;
                    else btn.innerText = originalText;
                }
            }, 3000);
        } catch (error) {
            console.error(error);
            if (btn) {
                if (btn.value) btn.value = "Error. Try again.";
                else btn.innerText = "Error. Try again.";
            }
        }
    }
}, { capture: true });
</script>
</body>`;

function walk(currentDir) {
    let results = [];
    const list = fs.readdirSync(currentDir);
    list.forEach(file => {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                results = results.concat(walk(filePath));
            }
        } else {
            if (filePath.endsWith('.html')) {
                results.push(filePath);
            }
        }
    });
    return results;
}

const files = walk(dir);

let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Remove old script if it exists
    content = content.replace(/<script id="formspark-hijack">[\s\S]*?<\/script>\s*<\/body>/, '</body>');

    // Inject new script
    content = content.replace(/<\/body>/, scriptToInject);

    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
        console.log("Updated " + file);
    }
});

console.log("Updated files: " + changedFiles);
