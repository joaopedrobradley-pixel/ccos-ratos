import { build } from "vite";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const ssrOutDir = path.join(root, ".prerender-ssr");
const ssrFile = "entry-server.mjs";

async function run() {
  await build({
    root,
    logLevel: "warn",
    build: {
      ssr: "src/entry-server.tsx",
      outDir: path.relative(root, ssrOutDir),
      emptyOutDir: false,
      rollupOptions: {
        output: { entryFileNames: ssrFile },
      },
    },
  });

  const modPath = pathToFileURL(path.join(ssrOutDir, ssrFile)).href;
  const mod = await import(modPath);
  const appHtml = mod.render();

  const htmlPath = path.join(root, "dist/index.html");
  const template = await fs.readFile(htmlPath, "utf-8");
  const withMarkup = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  if (withMarkup === template) {
    throw new Error('Não achei <div id="root"></div> em dist/index.html — prerender falhou.');
  }
  if (withMarkup.includes('src="/src/')) {
    throw new Error('dist/index.html ficou com referência a /src/ (caminho de dev) — asset não resolveu certo.');
  }

  await fs.writeFile(htmlPath, withMarkup);
  console.log(`✓ pré-renderizado: dist/index.html (${(appHtml.length / 1024).toFixed(1)} KiB de HTML)`);

  await fs.rm(ssrOutDir, { recursive: true, force: true });
}

run().catch(async (err) => {
  console.error(err);
  await fs.rm(ssrOutDir, { recursive: true, force: true }).catch(() => {});
  process.exit(1);
});
