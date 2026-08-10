const fs = require('fs');

const path = 'C:\\Users\\Aki\\.gemini\\antigravity\\brain\\8162e310-1329-4514-95b4-d811cd3f4e02\\.system_generated\\logs\\transcript.jsonl';
if (fs.existsSync(path)) {
    const lines = fs.readFileSync(path, 'utf8').split('\n');
    lines.forEach(line => {
        if (!line) return;
        try {
            const step = JSON.parse(line);
            if (step.type === 'USER_INPUT' && (step.content.toLowerCase().includes('animation') || step.content.toLowerCase().includes('button'))) {
                console.log(`[USER]: ${step.content}`);
            }
        } catch (e) {}
    });
} else {
    console.log("Transcript not found at: " + path);
}
