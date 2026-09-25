// Downloads every image/SVG used in the Figma file into /public.
// Figma MCP asset URLs expire ~7 days after they were generated (25 Sep 2026).
// If they have expired, re-export from Figma (file a9XvOv2ekpyiNFmrGar1r5) using the same file names.
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const base = "https://www.figma.com/api/mcp/asset";
const HOME = `${base}/2b10e83e-8ece-4e8a-82ce-d54df7f6fb5f`;
const COLLECTIONS = `${base}/07f64ccd-4232-4883-ac43-4cb475881ee8`;
const CORPORATE = `${base}/2836631b-4850-4c10-8602-504dbb0b2be8`;
const ABOUT = `${base}/a303c073-ffa5-48f0-9786-f46fedd75662`;
const CONTACT = `${base}/85f5424b-3f91-4af3-a665-42ca0d699d79`;

const assets = {
  // Photography & logo
  "images/logo.png": `${HOME}/fb250.png`,
  "images/hero.png": `${HOME}/8a3a8.png`,
  "images/about.png": `${HOME}/a3f7a.png`,
  "images/collection-daisy.png": `${HOME}/fbcf9.png`,
  "images/collection-lily.png": `${HOME}/30624.png`,
  "images/collection-bowls.png": `${HOME}/ab702.png`,
  "images/collection-diyas.png": `${HOME}/9cebe.png`,
  "images/collection-gift-sets.png": `${HOME}/91eb2.png`,
  "images/collection-frames.png": `${HOME}/3efcd.png`,
  "images/product-daisy-basket.png": `${HOME}/dd555.png`,
  "images/product-lotus-diya.png": `${HOME}/fe803.png`,
  "images/product-malachite-bowl.png": `${HOME}/99c59.png`,
  "images/gifting.png": `${HOME}/6f660.png`,
  "images/cta.png": `${HOME}/5df75.png`,

  // Home page vectors
  "icons/line-accent.svg": `${HOME}/9fe87.svg`,
  "icons/divider.svg": `${HOME}/f90a0.svg`,
  "icons/arrow-right.svg": `${HOME}/ae0d8.svg`,
  "icons/hand-helping.svg": `${HOME}/9214d.svg`,
  "icons/tree-palm.svg": `${HOME}/8fc7e.svg`,
  "icons/gift.svg": `${HOME}/5217c.svg`,
  "icons/step-line.svg": `${HOME}/bf7c1.svg`,
  "icons/phone-light.svg": `${HOME}/887a6.svg`,
  "icons/instagram-light.svg": `${HOME}/1bab9.svg`,
  "icons/footer-line.svg": `${HOME}/e1e53.svg`,

  // Page-specific vectors
  "icons/arrow-right-explore.svg": `${COLLECTIONS}/b2d16.svg`,
  "icons/phone-cta.svg": `${CORPORATE}/63b3a.svg`,
  "icons/hand-helping-about.svg": `${ABOUT}/5ecbc.svg`,
  "icons/tree-palm-about.svg": `${ABOUT}/bd2aa.svg`,
  "icons/gift-about.svg": `${ABOUT}/bc736.svg`,
  "icons/chevron-down.svg": `${CONTACT}/5820a.svg`,
  "icons/phone-dark.svg": `${CONTACT}/c5e29.svg`,
  "icons/instagram-dark.svg": `${CONTACT}/b47ff.svg`,
};

let failed = 0;
for (const [file, url] of Object.entries(assets)) {
  const dest = join(root, file);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length === 0) throw new Error("empty file");
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`✓ ${file} (${(buf.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    failed++;
    console.error(`✗ ${file} — ${err.message}`);
  }
}
console.log(failed ? `\n${failed} asset(s) failed.` : "\nAll assets downloaded.");
process.exit(failed ? 1 : 0);
