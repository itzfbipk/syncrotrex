const fs = require('fs');

let htmlCode = fs.readFileSync('index.html', 'utf8');

// The new HTML for Box 1 (Strategic Roadmap v35)
const box1HTML = `
    <style>
        @keyframes drawLine {
            0% { height: 0%; opacity: 0; }
            100% { height: 45%; opacity: 1; }
        }
        @keyframes pulseDotPurple {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(201, 110, 240, 0.7); }
            70% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(201, 110, 240, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(201, 110, 240, 0); }
        }
        @keyframes slideInRight {
            0% { transform: translateX(-10px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes scanningBar {
            0% { left: -30%; }
            100% { left: 100%; }
        }
    </style>
    <div style="height: 100%; width: 100%; padding: 16px; display: flex; flex-direction: column; background-color: transparent; font-family: var(--framer-font-family, Satoshi, Inter, sans-serif); box-sizing: border-box; border-top: 1px solid rgba(255,255,255,0.05);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; margin-bottom: 12px;">
            <div style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.9); letter-spacing: -0.2px; line-height: 1;">Strategic Roadmap</div>
            <div style="font-size: 9px; color: rgba(255,255,255,0.4); font-family: monospace; line-height: 1;">PHASE 1</div>
        </div>
        <div style="position: relative; flex: 1; padding-left: 12px;">
            <div style="position: absolute; left: 14px; top: 6px; bottom: 10px; width: 1px; background-color: rgba(255,255,255,0.05);"></div>
            <div style="position: absolute; left: 14px; top: 6px; width: 1px; background-color: #c96ef0; animation: drawLine 1s ease-out forwards;"></div>
            <div style="position: relative; display: flex; align-items: flex-start; margin-bottom: 8px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.2s;">
                <div style="position: absolute; left: 0px; top: 4px; width: 5px; height: 5px; border-radius: 50%; background-color: #c96ef0; animation: pulseDotPurple 2s infinite; z-index: 2;"></div>
                <div style="margin-left: 20px; display: flex; flex-direction: column; width: 100%;">
                    <div style="font-size: 11px; font-weight: 600; color: white; line-height: 1;">Discovery &amp; Requirements</div>
                    <div style="padding: 6px 10px; background-color: rgba(201, 110, 240, 0.05); border: 1px solid rgba(201, 110, 240, 0.2); border-radius: 6px; margin-top: 6px;">
                        <div style="font-size: 9px; color: #e3a8ff; margin-bottom: 4px; line-height: 1;">Analyzing workflow...</div>
                        <div style="height: 2px; width: 100%; background-color: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden; position: relative;">
                            <div style="position: absolute; top: 0; bottom: 0; width: 30%; background-color: #c96ef0; animation: scanningBar 1.5s ease-in-out infinite;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="position: relative; display: flex; align-items: flex-start; margin-bottom: 8px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.4s;">
                <div style="position: absolute; left: 1px; top: 4px; width: 3px; height: 3px; border-radius: 50%; background-color: rgba(255,255,255,0.2); z-index: 2;"></div>
                <div style="margin-left: 20px; display: flex; flex-direction: column;">
                    <div style="font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.4); line-height: 1;">Technical Architecture</div>
                </div>
            </div>
            <div style="position: relative; display: flex; align-items: flex-start; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.6s;">
                <div style="position: absolute; left: 1px; top: 4px; width: 3px; height: 3px; border-radius: 50%; background-color: rgba(255,255,255,0.2); z-index: 2;"></div>
                <div style="margin-left: 20px; display: flex; flex-direction: column;">
                    <div style="font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.4); line-height: 1;">Implementation Plan</div>
                </div>
            </div>
        </div>
    </div>
`.trim().replace(/\n/g, '').replace(/\s+/g, ' ');

// The new HTML for Box 2 (Code Editor)
const box2HTML = `
    <style>
        @keyframes typeWriter {
            from { opacity: 0; transform: translateY(2px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
    <div style="width: 100%; height: 100%; padding: 16px; display: flex; flex-direction: column; background-color: transparent; font-family: var(--framer-font-family, Satoshi, Inter, sans-serif); box-sizing: border-box; border-top: 1px solid rgba(255,255,255,0.05);">
        <div style="flex: 1; background-color: #0D0D12; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; overflow: hidden;">
            <div style="height: 28px; background-color: rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; padding: 0 12px; justify-content: space-between;">
                <div style="display: flex; gap: 8px;">
                    <div style="width: 12px; height: 12px; border: 1px solid rgba(255,255,255,0.2); border-radius: 2px; opacity: 0.5;"></div>
                    <div style="width: 12px; height: 12px; border: 1px solid rgba(255,255,255,0.2); border-radius: 2px; opacity: 0.5;"></div>
                </div>
                <div style="font-size: 9px; color: rgba(255,255,255,0.3);">automation.py</div>
                <div style="display: flex; gap: 4px;">
                    <div style="width: 6px; height: 6px; border-radius: 50%; background-color: rgba(255,255,255,0.2);"></div>
                    <div style="width: 6px; height: 6px; border-radius: 50%; background-color: rgba(255,255,255,0.2);"></div>
                </div>
            </div>
            <div style="display: flex; flex: 1;">
                <div style="width: 32px; border-right: 1px solid rgba(255,255,255,0.05); background-color: rgba(255,255,255,0.01); display: flex; flex-direction: column; align-items: center; padding: 12px 0; gap: 16px;">
                    <div style="width: 14px; height: 14px; border: 1.5px solid rgba(255,255,255,0.4); border-radius: 2px; background-color: rgba(255,255,255,0.1);"></div>
                    <div style="width: 14px; height: 14px; border: 1.5px solid rgba(255,255,255,0.2); border-radius: 50%; background-color: transparent;"></div>
                    <div style="width: 14px; height: 14px; border: 1.5px solid rgba(255,255,255,0.2); border-radius: 2px; background-color: transparent; transform: rotate(45deg);"></div>
                </div>
                <div style="padding: 12px; font-family: monospace; font-size: 10px; line-height: 1.6; color: rgba(255,255,255,0.7); display: flex; flex-direction: column; gap: 4px;">
                    <div style="animation: typeWriter 0.3s ease-out forwards; opacity: 0;"><span style="color: #c96ef0;">if </span>value > self.threshold:</div>
                    <div style="padding-left: 16px; animation: typeWriter 0.3s ease-out forwards 0.1s; opacity: 0;">self.status = <span style="color: #c96ef0;">"active"</span></div>
                    <div style="padding-left: 16px; animation: typeWriter 0.3s ease-out forwards 0.2s; opacity: 0;"><span style="color: #c96ef0;">return </span>"Automation triggered!"</div>
                    <div style="animation: typeWriter 0.3s ease-out forwards 0.3s; opacity: 0;"><span style="color: #c96ef0;">else:</span></div>
                    <div style="padding-left: 16px; margin-bottom: 8px; animation: typeWriter 0.3s ease-out forwards 0.4s; opacity: 0;"><span style="color: #c96ef0;">return </span>"No action taken."</div>
                    <div style="animation: typeWriter 0.3s ease-out forwards 0.5s; opacity: 0;"><span style="color: #c96ef0;">def </span><span style="color: white;">get_status</span>(self):</div>
                    <div style="padding-left: 16px; animation: typeWriter 0.3s ease-out forwards 0.6s; opacity: 0;"><span style="color: #c96ef0;">return </span>f"Status: {self.status}"</div>
                </div>
            </div>
        </div>
    </div>
`.trim().replace(/\n/g, '').replace(/\s+/g, ' ');

// Replace Box 1 HTML
const b1Start = htmlCode.indexOf('class="framer-15bmlrg-container"');
if(b1Start !== -1) {
    let endIndex = -1;
    for(let i=b1Start; i<htmlCode.length; i++) {
        if(htmlCode[i] === '>') {
            // Found the end of the container div tag
            let contentStart = i + 1;
            let divOpen = 1;
            for(let j=contentStart; j<htmlCode.length; j++) {
                if(htmlCode.substring(j, j+4) === '<div') divOpen++;
                if(htmlCode.substring(j, j+6) === '</div') divOpen--; // changed to '</div' to be safer
                if(divOpen === 0) {
                    endIndex = j;
                    break;
                }
            }
            if (endIndex !== -1) {
                htmlCode = htmlCode.substring(0, contentStart) + box1HTML + htmlCode.substring(endIndex);
            }
            break;
        }
    }
}

// Replace Box 2 HTML
const b2Start = htmlCode.indexOf('class="framer-mmt41l-container"');
if(b2Start !== -1) {
    let endIndex = -1;
    for(let i=b2Start; i<htmlCode.length; i++) {
        if(htmlCode[i] === '>') {
            // Found the end of the container div tag
            let contentStart = i + 1;
            let divOpen = 1;
            for(let j=contentStart; j<htmlCode.length; j++) {
                if(htmlCode.substring(j, j+4) === '<div') divOpen++;
                if(htmlCode.substring(j, j+6) === '</div') divOpen--;
                if(divOpen === 0) {
                    endIndex = j;
                    break;
                }
            }
            if (endIndex !== -1) {
                htmlCode = htmlCode.substring(0, contentStart) + box2HTML + htmlCode.substring(endIndex);
            }
            break;
        }
    }
}

fs.writeFileSync('index.html', htmlCode, 'utf8');
console.log("Updated index.html to match JS changes for Box 1 and 2 heights!");
