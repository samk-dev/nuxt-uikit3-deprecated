export default defineNuxtConfig({
  modules: ['../src/module'],
  uikit: {
    css: {
      coreCss: true,
      coreTheme: true
    },
    js: true,
    icons: true
  }
});
