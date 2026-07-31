// Gera um PNG (fundo transparente) a partir de mockup-papel.html
// Uso: node gerar-mockup.mjs [caminho-da-imagem] [caminho-de-saida]
// Se nao passar argumentos, usa a imagem ja definida no HTML e salva em mockup.png
// Requer: npx playwright install chromium  (uma vez só)

import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(dir, "mockup-papel.html");
const imgArg = process.argv[2];
const outPath = process.argv[3] ? path.resolve(process.argv[3]) : path.join(dir, "mockup.png");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1000, height: 1200 } });
await page.goto(`file:///${htmlPath.replace(/\\/g, "/")}`);

if (imgArg) {
  const imgUrl = "file:///" + path.resolve(imgArg).replace(/\\/g, "/");
  await page.evaluate((src) => {
    const img = document.querySelector("#paper img");
    img.src = src;
  }, imgUrl);
  await page.locator("#paper img").evaluate((img) => img.decode());
}

const stage = page.locator("#stage");
await stage.screenshot({ path: outPath, omitBackground: true });

await browser.close();
console.log("Mockup salvo em:", outPath);
