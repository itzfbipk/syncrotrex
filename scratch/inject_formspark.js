const fs = require('fs');
const path = require('path');

const dir = 'D:/Projetcs/Syncrotrex Site (agency)';

const scriptToInject = `
<script id="formspark-hijack">
// Inject CSS animation for the success message
const style = document.createElement('style');
style.innerHTML = \`
    @keyframes successFadeIn { 
        0% { opacity: 0; transform: translateY(20px); filter: blur(5px); } 
        100% { opacity: 1; transform: translateY(0); filter: blur(0); } 
    }
\`;
document.head.appendChild(style);

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
            btn.style.opacity = "0.7";
            btn.style.pointerEvents = "none";
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
            
            // Create a gorgeous premium success message matching the dark/purple theme
            const successMsg = document.createElement('div');
            successMsg.innerHTML = \`
                <div style="font-size: 3.5rem; margin-bottom: 1rem;">✨</div>
                <h3 style="font-size: 1.8rem; font-weight: 600; margin-bottom: 0.5rem; color: #ffffff; font-family: 'Figtree', sans-serif; letter-spacing: -0.02em;">Message Sent!</h3>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.7); margin: 0; font-family: 'Figtree', sans-serif;">We've received your request and our team will be in touch shortly.</p>
            \`;
            
            successMsg.style.textAlign = "center";
            successMsg.style.padding = "4rem 2rem";
            successMsg.style.border = "1px solid rgba(255,255,255,0.08)";
            successMsg.style.borderRadius = "20px";
            successMsg.style.background = "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(138,43,226,0.12) 100%)";
            successMsg.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)";
            successMsg.style.display = "flex";
            successMsg.style.flexDirection = "column";
            successMsg.style.alignItems = "center";
            successMsg.style.justifyContent = "center";
            successMsg.style.width = "100%";
            successMsg.style.animation = "successFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards";
            
            form.parentNode.insertBefore(successMsg, form);

        } catch (error) {
            console.error(error);
            if (btn) {
                if (btn.value) btn.value = "Error. Try again.";
                else btn.innerText = "Error. Try again.";
                btn.style.opacity = "1";
                btn.style.pointerEvents = "auto";
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

console.log("Updated files to use premium success UI: " + changedFiles);
