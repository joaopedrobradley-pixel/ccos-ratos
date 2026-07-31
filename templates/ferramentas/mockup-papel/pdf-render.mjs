import { createCanvas } from "@napi-rs/canvas";
import fs from "node:fs";
import path from "node:path";

const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");

const pdfPath = process.argv[2];
const outDir = process.argv[3];
const scale = Number(process.argv[4] || 3);

const data = new Uint8Array(fs.readFileSync(pdfPath));
const loadingTask = pdfjsLib.getDocument({ data });
const pdf = await loadingTask.promise;

for (let i = 1; i <= pdf.numPages; i++) {
  const page = await pdf.getPage(i);
  const viewport = page.getViewport({ scale });
  const canvas = createCanvas(viewport.width, viewport.height);
  const ctx = canvas.getContext("2d");

  await page.render({ canvasContext: ctx, viewport }).promise;

  const outPath = path.join(outDir, `page-${i}.png`);
  fs.writeFileSync(outPath, canvas.toBuffer("image/png"));
  console.log("wrote", outPath);
}
