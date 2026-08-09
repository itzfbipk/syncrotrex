const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

const targetStr = 'data-framer-name="Sales and marketing"';
const startIndex = indexHtml.indexOf(targetStr);

if (startIndex !== -1) {
    const divStart = indexHtml.lastIndexOf('<div', startIndex);
    
    let open = 0;
    let endIndex = -1;
    for(let i = divStart; i < indexHtml.length; i++) {
        if(indexHtml.substring(i, i+4) === '<div') open++;
        else if(indexHtml.substring(i, i+6) === '</div>') {
            open--;
            if(open === 0) {
                endIndex = i + 5;
                break;
            }
        }
    }
    
    if (endIndex !== -1) {
        const newHtml = `
<div class="framer-1hijlhj" data-border="true" data-framer-name="Sales and marketing" style="--border-bottom-width: 1px; --border-color: var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, rgb(34, 34, 34)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, rgb(0, 0, 0)); border-top-left-radius: 12px; border-top-right-radius: 12px; opacity: 1;">
    <style>
        @keyframes pulseGlow {
            0% { box-shadow: 0 0 10px rgba(189, 78, 255, 0.2); }
            50% { box-shadow: 0 0 25px rgba(189, 78, 255, 0.8); }
            100% { box-shadow: 0 0 10px rgba(189, 78, 255, 0.2); }
        }
        @keyframes slideUpFade {
            from { transform: translateY(15px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(300%); }
        }
        .web-builder-container * { box-sizing: border-box; }
    </style>
    <div class="web-builder-container" style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: #060606; overflow: hidden; font-family: 'Inter', sans-serif; color: white; padding: 0; position: relative; background-image: radial-gradient(circle at 50% -20%, rgba(189, 78, 255, 0.25) 0%, transparent 60%);">
        <div style="display: flex; align-items: center; padding: 10px 16px; background-color: rgba(255,255,255,0.02); border-bottom: 1px solid rgba(255,255,255,0.06); backdrop-filter: blur(10px);">
            <div style="display: flex; gap: 6px;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background-color: #ff5f56;"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background-color: #ffbd2e;"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background-color: #27c93f;"></div>
            </div>
            <div style="margin: 0 auto; background-color: rgba(0,0,0,0.4); padding: 4px 20px; border-radius: 12px; font-size: 10px; color: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.04);">syncrotrex.com/design</div>
            <div style="display: flex; gap: 4px;">
                <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.05);"></div>
                <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.05);"></div>
            </div>
        </div>
        <div style="flex: 1; display: flex; overflow: hidden;">
            <div style="width: 50px; background-color: rgba(255,255,255,0.01); border-right: 1px solid rgba(255,255,255,0.04); display: flex; flex-direction: column; align-items: center; padding: 14px 0; gap: 14px;">
                <div style="width: 24px; height: 24px; border-radius: 6px; background-color: rgba(189, 78, 255, 0.3); border: 1px solid rgba(189, 78, 255, 0.6);"></div>
                <div style="width: 20px; height: 2px; background-color: rgba(255,255,255,0.1); border-radius: 2px;"></div>
                <div style="width: 22px; height: 22px; border-radius: 5px; background-color: rgba(255,255,255,0.06);"></div>
                <div style="width: 22px; height: 22px; border-radius: 5px; background-color: rgba(255,255,255,0.03);"></div>
                <div style="width: 22px; height: 22px; border-radius: 5px; background-color: rgba(255,255,255,0.03);"></div>
            </div>
            <div style="flex: 1; padding: 20px; display: flex; flex-direction: column; gap: 16px; position: relative;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 150px; background: linear-gradient(to bottom, transparent, rgba(189, 78, 255, 0.08) 50%, transparent); animation: scanline 5s linear infinite; pointer-events: none; z-index: 10;"></div>
                <div style="padding: 24px; border-radius: 14px; background: linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%); border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; animation: slideUpFade 0.6s ease-out forwards; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                    <div style="display: flex; gap: 8px; margin-bottom: 16px;">
                        <div style="width: 12px; height: 12px; border-radius: 50%; background: linear-gradient(135deg, #c96ef0, #6a00ff); box-shadow: 0 0 10px rgba(201, 110, 240, 0.6);"></div>
                        <div style="font-size: 10px; font-weight: 700; color: #c96ef0; letter-spacing: 1px;">WEB BUILDER</div>
                    </div>
                    <div style="width: 75%; height: 26px; border-radius: 6px; background: linear-gradient(90deg, #fff, rgba(255,255,255,0.5)); margin-bottom: 10px;"></div>
                    <div style="width: 45%; height: 12px; border-radius: 4px; background-color: rgba(255,255,255,0.2); margin-bottom: 24px;"></div>
                    <div style="padding: 8px 28px; border-radius: 20px; background: linear-gradient(135deg, #c96ef0, #6a00ff); font-size: 12px; font-weight: bold; animation: pulseGlow 2s infinite; border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 4px 15px rgba(201,110,240,0.4);">Publish Site</div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; animation: slideUpFade 0.6s ease-out 0.2s forwards; opacity: 0;">
                    <div style="height: 76px; border-radius: 12px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(189, 78, 255, 0.5); padding: 14px; display: flex; flex-direction: column; gap: 10px;">
                        <div style="width: 24px; height: 24px; border-radius: 6px; background-color: rgba(189, 78, 255, 0.25);"></div>
                        <div style="width: 60%; height: 6px; border-radius: 3px; background-color: rgba(255,255,255,0.3);"></div>
                    </div>
                    <div style="height: 76px; border-radius: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 14px; display: flex; flex-direction: column; gap: 10px;">
                        <div style="width: 24px; height: 24px; border-radius: 6px; background-color: rgba(255,255,255,0.08);"></div>
                        <div style="width: 50%; height: 6px; border-radius: 3px; background-color: rgba(255,255,255,0.15);"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        `.trim();
        
        indexHtml = indexHtml.substring(0, divStart) + newHtml + indexHtml.substring(endIndex + 1);
        fs.writeFileSync('index.html', indexHtml, 'utf8');
        console.log('Updated index.html static markup.');
    }
}
