import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path"; // Asegúrate de importar `path` para resolver rutas

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'app'), // Aquí configuramos `~` para que apunte a la carpeta `app`
    },
  },
});
