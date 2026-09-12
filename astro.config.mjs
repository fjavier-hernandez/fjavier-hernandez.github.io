// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fjavier-hernandez.github.io',
  // Repo de usuario (fjavier-hernandez.github.io) → base en raíz.
  base: '/',
  output: 'static',
});
