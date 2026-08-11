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
        const data = {};
        for (let [key, value] of formData.entries()) {
            if (value && value.trim() !== '') {
                data[key] = value;
            }
        }

        const btn = form.querySelector('input[type="submit"], button') || form.parentElement.querySelector('a');
        let originalText = "Submit";
        if (btn) {
            originalText = btn.value || btn.innerText;
            if (btn.value) btn.value = "Sending...";
            else btn.innerText = "Sending...";
        }

        const emojiMap = {
            'First Name': '👤 First Name',
            'Last Name': '👤 Last Name',
            'Email': '✉️ Email Address',
            'Phone': '📞 Phone Number',
            'Message': '💬 Client Message'
        };

        const fields = Object.entries(data).map(([key, value]) => ({
            name: emojiMap[key] || key,
            value: \`> \${value}\`,
            inline: false
        }));

        const discordPayload = {
            content: null,
            embeds: [{
                title: "🚀 New Website Lead!",
                description: "A potential client just submitted the contact form.",
                color: 0x8a2be2,
                fields: fields,
                footer: { text: "Syncrotrex Agency Form" },
                timestamp: new Date().toISOString()
            }]
        };

        try {
            await fetch("https://discord.com/api/webhooks/1536521704489091092/119YLvTp-8ZvrdF63jelOzrjjVCBEruCvoUPMwVVjItfBhFsaghOElwDoFfuD_VrIz9I", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(discordPayload),
            });
            
            // Hide the form smoothly
            form.style.display = 'none';
            
            // Minimal, theme-matching success card (matching the E-mail and Phone cards)
            const successMsg = document.createElement('div');
            successMsg.innerHTML = \`
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #fff; margin-right: 12px; margin-bottom: 2px;">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span style="color: #ffffff; font-size: 1.1rem; font-family: 'Figtree', sans-serif;">Message sent successfully! We will get back to you shortly.</span>
            \`;
            
            successMsg.style.display = "flex";
            successMsg.style.flexDirection = "row";
            successMsg.style.alignItems = "center";
            successMsg.style.justifyContent = "center";
            successMsg.style.padding = "2rem 1.5rem";
            successMsg.style.border = "1px solid rgba(255,255,255,0.1)";
            successMsg.style.borderRadius = "8px"; // Standard border radius for Framer cards
            successMsg.style.background = "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(138,43,226,0.15) 100%)"; // Exact subtle purple gradient from the Email card
            successMsg.style.width = "100%";
            successMsg.style.boxSizing = "border-box";
            
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

    content = content.replace(/<script id="formspark-hijack">[\s\S]*?<\/script>\s*<\/body>/, '</body>');
    content = content.replace(/<\/body>/, scriptToInject);

    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
    }
});

console.log("Updated files to use theme-matching success UI: " + changedFiles);
