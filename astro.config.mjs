import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static"; // 👈 Importamos el adaptador

// https://astro.build/config
export default defineConfig({
  adapter: vercel(), // 👈 Añadimos el adaptador aquí
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    }
  },
});