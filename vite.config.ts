// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Fuera del sandbox de Lovable (p. ej. build para Hostinger u otro hosting
  // basado en Node.js), el wrapper de Lovable usa "cloudflare-module" como
  // defaultPreset si Nitro no autodetecta el proveedor. Forzamos "node-server"
  // explícitamente para un build Node.js genérico y portable.
  // Dentro del sandbox de Lovable esta opción se ignora (siempre usa cloudflare-module ahí).
  nitro: {
    preset: "node-server",
  },
});
