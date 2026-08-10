const fs = require('fs');
const path = require('path');

const dir = 'D:/Projetcs/Syncrotrex Site (agency)';
const indexPath = path.join(dir, 'index.html');

let content = fs.readFileSync(indexPath, 'utf8');

// We need to replace href="/" with href="https://cal.com/syncrotrex" for specific buttons.
// Since Framer HTML can be messy, a safer way is to do a regex replace that targets anchor tags containing specific text.
// Or we can just look for the href="/" that comes right before those specific texts.

// Let's use a regex that finds an anchor tag with href="/", followed by any nested tags, ending with our target text.
const targetTexts = [
    "Schedule a call",
    "Book a free call",
    "Choose this plan"
];

let updatedContent = content;

targetTexts.forEach(text => {
    // Regex explanation:
    // href="/"   followed by
    // [^>]*>     the rest of the opening anchor tag
    // (?:(?!href=).)*?   any characters that don't start a new anchor or href (non-greedy)
    // text       the target text
    
    // Actually, in Framer, the structure is usually:
    // <a class="..." href="/" ...><div ...><p>Choose this plan</p></div></a>
    // We can just globally replace `href="/"` with `href="https://cal.com/syncrotrex"` IF it's in the vicinity of the text.
    // Given the complexity of HTML parsing with regex, a simpler approach for a one-off script:
    // Split the content by `<a `
    let parts = updatedContent.split('<a ');
    for (let i = 1; i < parts.length; i++) {
        let part = parts[i];
        let closingIndex = part.indexOf('</a>');
        if (closingIndex !== -1) {
            let anchorContent = part.substring(0, closingIndex);
            if (anchorContent.includes('href="/"') || anchorContent.includes("href='/'")) {
                if (anchorContent.includes(text)) {
                    parts[i] = part.replace(/href=["']\/["']/, 'href="https://cal.com/syncrotrex"');
                    console.log(`Replaced link for button text: "${text}"`);
                }
            }
        }
    }
    updatedContent = parts.join('<a ');
});

if (updatedContent !== content) {
    fs.writeFileSync(indexPath, updatedContent);
    console.log("Successfully updated placeholder buttons in index.html");
} else {
    console.log("No placeholder buttons found that match the criteria.");
}
