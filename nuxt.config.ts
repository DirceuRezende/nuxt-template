import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  modules: ['@pinia/nuxt'],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
});
