import { QueryClient } from "@tanstack/react-query";
import { createRouter, createHashHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Hash history só no build de preview single-file (artifact) — evita 404 quando o
// HTML é servido de um caminho que não é a raiz real do site. O deploy real no
// Netlify usa browser history normal (URL limpa), definido em vite.config.ts.
const useHashHistory = import.meta.env.VITE_SINGLEFILE_PREVIEW === "true";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    ...(useHashHistory ? { history: createHashHistory() } : {}),
  });

  return router;
};
