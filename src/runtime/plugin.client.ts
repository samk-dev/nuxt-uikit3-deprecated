import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(async (nuxtApp) => {
  const uikitOptions = nuxtApp.$config.app.uikit;

  if (uikitOptions.js) {
    const UIkit = await import('uikit').then((r) => r.default || r);

    if (uikitOptions.icons) {
      await import('uikit/dist/js/uikit-icons.js').then((r) => r.default || r);
    }

    nuxtApp.provide('uikit', UIkit);
  }
});
