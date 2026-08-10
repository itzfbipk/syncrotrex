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
            
            // Hide the form and show a clean success message
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

    content = content.replace(/<script id="formspark-hijack">[\s\S]*?<\/script>\s*<\/body>/, '</body>');
    content = content.replace(/<\/body>/, scriptToInject);

    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
    }
});

console.log("Reverted files to use minimal success UI: " + changedFiles);
