// Renders the Open Graph image (1200×630) and PNG icons into public/.
// Run once after changing the design: `node scripts/generate-assets.mjs`
// Requires Playwright with a Chromium build (npx playwright install chromium).
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const b64 = (p) => readFileSync(root + p).toString('base64');
const font = (family, file, weight, style = 'normal') =>
  `@font-face{font-family:'${family}';font-weight:${weight};font-style:${style};src:url(data:font/woff2;base64,${b64(file)}) format('woff2')}`;

const fonts = [
  font('Space Grotesk', 'node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-400-normal.woff2', 400),
  font('Space Grotesk', 'node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-500-normal.woff2', 500),
  font('Space Grotesk', 'node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-600-normal.woff2', 600),
  font('Space Grotesk', 'node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2', 700),
  font('Lora', 'node_modules/@fontsource/lora/files/lora-latin-400-italic.woff2', 400, 'italic'),
  font('Lora', 'node_modules/@fontsource/lora/files/lora-latin-500-italic.woff2', 500, 'italic'),
].join('');

const cover = `data:image/jpeg;base64,${b64('src/assets/covers/Ikigai.jpg')}`;
const portrait = `data:image/jpeg;base64,${b64('src/assets/photos/kathleen-portrait-ikigai.jpg')}`;
const SG = `'Space Grotesk',sans-serif`;
const LI = `font-family:'Lora',serif;font-style:italic`;
// Soft, warm shadow shared with the site's covers (see --cover-shadow in global.css).
const SOFT = '0 22px 40px -14px rgba(110,84,46,0.34), 0 5px 14px rgba(110,84,46,0.12)';

const og = `<!doctype html><html><head><style>${fonts}
body{margin:0}
</style></head><body>
<div style="width:1200px;height:630px;background:#FBF7ED;color:#333A45;position:relative;overflow:hidden;display:grid;grid-template-columns:1.1fr 0.9fr;align-items:center;padding:0 80px;box-sizing:border-box">
  <div>
    <div style="font-family:${SG};font-weight:600;font-size:30px;letter-spacing:-0.02em">Kathleen <span style="${LI};font-weight:500;letter-spacing:0">Maurand Soler</span></div>
    <div style="font-family:${SG};font-weight:500;font-size:19px;color:#3F6749;margin-top:4px">Autrice</div>
    <div style="font-family:${SG};font-weight:600;font-size:80px;line-height:0.98;letter-spacing:-0.03em;margin-top:34px">Des mots qui font <span style="${LI};font-weight:400;letter-spacing:0">grandir.</span></div>
    <div style="margin-top:36px;display:flex;align-items:center;gap:14px">
      <span style="background:#D9A441;font-family:${SG};font-weight:600;font-size:15px;letter-spacing:0.08em;text-transform:uppercase;padding:8px 18px;border-radius:999px">Nouveau livre</span>
      <span style="font-family:${SG};font-size:21px;color:#4A5160">Ikigaï · Mango Éditions</span>
    </div>
  </div>
  <div style="position:relative;height:100%;display:flex;align-items:center;justify-content:center">
    <div style="position:absolute;width:300px;height:300px;border-radius:50%;background:#E4EDDE;top:50px;right:-40px"></div>
    <div style="position:absolute;width:100px;height:100px;border-radius:50%;background:#E7B7B0;bottom:70px;right:10px"></div>
    <div style="position:absolute;width:70px;height:70px;border-radius:50%;border:3px solid #4C7A56;bottom:90px;left:20px"></div>
    <div style="position:absolute;width:24px;height:24px;border-radius:50%;background:#4C7A56;top:300px;left:-10px"></div>
    <div style="position:relative;width:250px;height:370px;border:1px solid rgba(110,84,46,0.16);border-radius:6px;box-shadow:${SOFT};transform:rotate(-3deg);overflow:hidden;background:#FBF7ED"><img src="${cover}" style="width:100%;height:100%;object-fit:cover;display:block"></div>
    <div style="position:absolute;width:140px;height:140px;border-radius:50%;overflow:hidden;border:5px solid #FBF7ED;box-shadow:${SOFT};top:46px;left:-6px;box-sizing:border-box"><img src="${portrait}" style="width:100%;height:100%;object-fit:cover;display:block"></div>
  </div>
</div></body></html>`;

// Full KMS monogram for large icons; the 32 px favicon keeps the K alone.
const icon = (size, label, fontSize, radius) => `<!doctype html><html><head><style>${fonts}
body{margin:0;background:transparent}</style></head><body>
<div style="width:${size}px;height:${size}px;border-radius:${radius}px;background:#4C7A56;display:flex;align-items:center;justify-content:center;font-family:${SG};font-weight:700;font-size:${fontSize}px;letter-spacing:-0.01em;color:#FBF7ED">${label}</div>
</body></html>`;

const shots = [
  { file: 'public/og.png', html: og, width: 1200, height: 630 },
  { file: 'public/apple-touch-icon.png', html: icon(180, 'KMS', 52, 0), width: 180, height: 180 },
  { file: 'public/favicon-32.png', html: icon(32, 'K', 20, 8), width: 32, height: 32, transparent: true },
];

const browser = await chromium.launch();
for (const { file, html, width, height, transparent } of shots) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: root + file, omitBackground: !!transparent });
  await page.close();
  console.log('wrote', file);
}
await browser.close();
