import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Lovable builds pin their own target; external builds use Vercel's
  // Build Output API, including the server handler and generated routing.
  nitro: { preset: "vercel" },
  tanstackStart: {
    server: {
      entry: "server",
    },

    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/produce" },
      { path: "/operations" },
      { path: "/partnerships" },
      { path: "/contact" },
      { path: "/privacy" },
      { path: "/terms" },
    ],
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: false,
    },
  },
});
