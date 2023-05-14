export default defineNuxtConfig({
  modules: ['../src/module', '@nuxt/devtools'],
  devtools: {
    enabled: true
  },
  uikit: {
    css: {
      coreCss: true,
      coreTheme: true
    },
    js: true,
    icons: true
  }
});
