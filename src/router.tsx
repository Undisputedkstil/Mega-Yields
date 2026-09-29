import {
  createRouter,
  type AnyRouter,
} from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,

  // GitHub Pages hosts this repository at:
  // https://Undisputedkstil.github.io/Mega-Yields/
  basepath: "/Mega-Yields",

  defaultPreload: "intent",

  scrollRestoration: true,
});

export function getRouter(): AnyRouter {
  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
