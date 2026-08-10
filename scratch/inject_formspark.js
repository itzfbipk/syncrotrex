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
        
        // Fix Framer's duplicate "Name" bug by re-mapping names based on placeholders
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            const ph = (input.placeholder || '').toLowerCase();
            if (ph.includes('jane') && input.type !== 'email') input.name = 'First Name';
            else if (ph.includes('smith')) input.name = 'Last Name';
            else if (ph.includes('jane@mail.com')) input.name = 'Email';
            else if (ph.includes('+1')) input.name = 'Phone';
            else if (ph.includes('help')) input.name = 'Message';
        });

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

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
            
            // Hide the form and show a clean success message to prevent spam!
            form.style.display = 'none';
            const successMsg = document.createElement('div');
            successMsg.innerText = "Message sent successfully! We will get back to you shortly.";
            successMsg.style.color = "var(--token-ea3f5ec2-80ec-412c-a26e-34872584c90c, #ffffff)"; // Match theme
            successMsg.style.textAlign = "center";
            successMsg.style.padding = "3rem 1rem";
            successMsg.style.fontSize = "1.2rem";
            successMsg.style.fontWeight = "500";
            successMsg.style.border = "1px solid rgba(255,255,255,0.1)";
            successMsg.style.borderRadius = "12px";
            successMsg.style.background = "rgba(255,255,255,0.03)";
            form.parentNode.insertBefore(successMsg, form);

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

    // Remove old script
    content = content.replace(/<script id="formspark-hijack">[\s\S]*?<\/script>\s*<\/body>/, '</body>');

    // Inject new script
    content = content.replace(/<\/body>/, scriptToInject);

    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
    }
});

console.log("Updated files: " + changedFiles);
