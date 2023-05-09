export default defineNuxtConfig({
  modules: ['../src/module'],
  uikit: {
    css: {
      coreCss: true,
      coreTheme: false
    },
    js: true
    // icons: false
  }
});
