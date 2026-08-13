import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// Build auxiliar só para gerar um preview em HTML único (usado no Artifact) —
// o deploy real no Netlify usa o vite.config.ts normal (multi-arquivo, browser history).
export default defineConfig({
  define: {
    "import.meta.env.VITE_SINGLEFILE_PREVIEW": JSON.stringify("true"),
  },
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: false }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
    viteSingleFile(),
  ],
  build: {
    target: "es2022",
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    outDir: "dist-singlefile",
  },
});
