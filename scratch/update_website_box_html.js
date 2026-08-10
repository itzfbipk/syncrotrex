const fs = require('fs');

const originalHTML = `
    <style>
        @keyframes subtleFloat {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
            100% { transform: translateY(0px); }
        }
        .web-builder-minimal * { box-sizing: border-box; }
    </style>
    <div class="web-builder-minimal" style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: #050505; overflow: hidden; font-family: 'Inter', sans-serif; color: white; padding: 0; position: relative;">
        <div style="position: absolute; top: -50px; left: 20%; right: 20%; height: 100px; background: radial-gradient(ellipse at top, rgba(189, 78, 255, 0.15), transparent 70%); pointer-events: none;"></div>
        <div style="display: flex; align-items: center; padding: 12px 16px; border-bottom: 1px solid rgb(34,34,34); background-color: transparent;">
            <div style="display: flex; gap: 6px;">
                <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #333;"></div>
                <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #333;"></div>
                <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #333;"></div>
            </div>
            <div style="margin: 0 auto; font-size: 11px; color: rgba(255,255,255,0.3); letter-spacing: 0.5px;">yoursite.com</div>
        </div>
        <div style="flex: 1; padding: 24px; display: flex; flex-direction: column; gap: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div style="width: 24px; height: 24px; border-radius: 4px; background-color: rgba(255,255,255,0.05);"></div>
                <div style="display: flex; gap: 12px;">
                    <div style="width: 30px; height: 4px; background-color: rgba(255,255,255,0.1); border-radius: 2px;"></div>
                    <div style="width: 30px; height: 4px; background-color: rgba(255,255,255,0.1); border-radius: 2px;"></div>
                    <div style="width: 30px; height: 4px; background-color: rgba(255,255,255,0.1); border-radius: 2px;"></div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; margin-top: 10px; animation: subtleFloat 6s ease-in-out infinite;">
                <div style="width: 60%; height: 14px; background-color: rgba(255,255,255,0.6); border-radius: 2px;"></div>
                <div style="width: 40%; height: 6px; background-color: rgba(255,255,255,0.2); border-radius: 2px; margin-bottom: 16px;"></div>
                <div style="padding: 8px 20px; border-radius: 4px; border: 1px solid rgba(189, 78, 255, 0.3); background-color: rgba(189, 78, 255, 0.05); font-size: 10px; color: rgba(255,255,255,0.7); letter-spacing: 0.5px;">Publish</div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: auto; padding-bottom: 10px;">
                <div style="height: 60px; border-radius: 6px; border: 1px solid rgb(34,34,34); background-color: transparent; padding: 12px; display: flex; flex-direction: column; gap: 8px;">
                    <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.03);"></div>
                    <div style="width: 50%; height: 4px; border-radius: 2px; background-color: rgba(255,255,255,0.1);"></div>
                </div>
                <div style="height: 60px; border-radius: 6px; border: 1px solid rgb(34,34,34); background-color: transparent; padding: 12px; display: flex; flex-direction: column; gap: 8px;">
                    <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.03);"></div>
                    <div style="width: 50%; height: 4px; border-radius: 2px; background-color: rgba(255,255,255,0.1);"></div>
                </div>
            </div>
        </div>
    </div>
`.trim().replace(/\n/g, '').replace(/\s+/g, ' ');

const vibrantHTML = `
    <style>
        @keyframes subtleFloat {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
            100% { transform: translateY(0px); }
        }
        @keyframes pulsePublish {
            0% { box-shadow: 0 0 0 0 rgba(201, 110, 240, 0.4); }
            70% { box-shadow: 0 0 0 8px rgba(201, 110, 240, 0); }
            100% { box-shadow: 0 0 0 0 rgba(201, 110, 240, 0); }
        }
        .web-builder-minimal * { box-sizing: border-box; }
    </style>
    <div class="web-builder-minimal" style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: #0d0d12; overflow: hidden; font-family: 'Inter', sans-serif; color: white; padding: 0; position: relative; box-shadow: inset 0 0 40px rgba(201, 110, 240, 0.05);">
        <div style="position: absolute; top: -50px; left: 10%; right: 10%; height: 150px; background: radial-gradient(ellipse at top, rgba(201, 110, 240, 0.25), transparent 70%); pointer-events: none;"></div>
        <div style="display: flex; align-items: center; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); background-color: rgba(255,255,255,0.02);">
            <div style="display: flex; gap: 6px;">
                <div style="width: 8px; height: 8px; border-radius: 50%; background-color: rgba(255, 95, 86, 0.8);"></div>
                <div style="width: 8px; height: 8px; border-radius: 50%; background-color: rgba(255, 189, 46, 0.8);"></div>
                <div style="width: 8px; height: 8px; border-radius: 50%; background-color: rgba(39, 201, 63, 0.8);"></div>
            </div>
            <div style="margin: 0 auto; font-size: 11px; color: rgba(255,255,255,0.7); letter-spacing: 0.5px; font-weight: 500;">yoursite.com</div>
        </div>
        <div style="flex: 1; padding: 24px; display: flex; flex-direction: column; gap: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div style="width: 24px; height: 24px; border-radius: 6px; background-color: rgba(201, 110, 240, 0.15); border: 1px solid rgba(201, 110, 240, 0.3);"></div>
                <div style="display: flex; gap: 12px;">
                    <div style="width: 30px; height: 4px; background-color: rgba(255,255,255,0.3); border-radius: 2px;"></div>
                    <div style="width: 30px; height: 4px; background-color: rgba(255,255,255,0.3); border-radius: 2px;"></div>
                    <div style="width: 30px; height: 4px; background-color: rgba(255,255,255,0.3); border-radius: 2px;"></div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; margin-top: 10px; animation: subtleFloat 6s ease-in-out infinite;">
                <div style="width: 65%; height: 18px; background-color: rgba(255,255,255,0.9); border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);"></div>
                <div style="width: 45%; height: 8px; background-color: rgba(255,255,255,0.4); border-radius: 4px; margin-bottom: 16px;"></div>
                <div style="padding: 8px 24px; border-radius: 6px; border: 1px solid rgba(201, 110, 240, 0.6); background-color: rgba(201, 110, 240, 0.15); font-size: 11px; font-weight: 600; color: #e3a8ff; letter-spacing: 0.5px; animation: pulsePublish 2s infinite;">Publish</div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: auto; padding-bottom: 10px;">
                <div style="height: 60px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background-color: rgba(255,255,255,0.02); padding: 12px; display: flex; flex-direction: column; gap: 10px;">
                    <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.15);"></div>
                    <div style="width: 60%; height: 6px; border-radius: 3px; background-color: rgba(255,255,255,0.25);"></div>
                </div>
                <div style="height: 60px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background-color: rgba(255,255,255,0.02); padding: 12px; display: flex; flex-direction: column; gap: 10px;">
                    <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.15);"></div>
                    <div style="width: 60%; height: 6px; border-radius: 3px; background-color: rgba(255,255,255,0.25);"></div>
                </div>
            </div>
        </div>
    </div>
`.trim().replace(/\n/g, '').replace(/\s+/g, ' ');

let htmlCode = fs.readFileSync('index.html', 'utf8');

// The original HTML in index.html is likely slightly different due to how the DOM serializes it or the previous script stringified it.
// Let's use a regex to replace everything between `<div class="framer-1rq5fs7-container"` and its closing tag.

const matchString = 'yoursite.com';
const startIdx = htmlCode.indexOf(matchString);
if(startIdx !== -1) {
    const startDiv = htmlCode.lastIndexOf('<style', startIdx);
    const endDiv = htmlCode.indexOf('</div>', htmlCode.indexOf('</div>', htmlCode.indexOf('</div>', htmlCode.indexOf('</div>', startIdx + 10) + 10) + 10) + 10) + 6; // Rough guess
    
    // Instead of precise string manipulation, let's just use regex to replace everything inside the children of the wrapper
    
    // In xELU-v37.mjs it works. But for index.html, let's try replacing a generic regex block.
    // actually, let me just find the start of `<style>` before `yoursite.com` and replace up to the closing `</div>` of the `web-builder-minimal` div.
    
    let htmlStart = htmlCode.lastIndexOf('<style>', startIdx);
    let htmlEnd = htmlCode.indexOf('</div></div></div>', startIdx); // It's nested a few divs deep
    
    if (htmlStart !== -1 && htmlEnd !== -1) {
        htmlCode = htmlCode.substring(0, htmlStart) + vibrantHTML + htmlCode.substring(htmlEnd);
        fs.writeFileSync('index.html', htmlCode, 'utf8');
        console.log("Successfully replaced in index.html via substring replacement!");
    } else {
        console.log("Could not find start/end bounds in index.html.");
    }
}
