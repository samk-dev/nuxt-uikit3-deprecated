import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(async (nuxtApp) => {
  const uikitOptions = nuxtApp.$config.app.uikit;

  const UIkit = await import('uikit')
    .then((r) => r.default || r)
    .catch((err) => console.error('Failed to load UIkit: ', err));

  if (uikitOptions.icons) {
    await import('uikit/dist/js/uikit-icons.js')
      .then((r) => r.default || r)
      .catch((err) => console.error('Failed to load UIkit Icons: ', err));
  }

  nuxtApp.provide('uikit', UIkit);
});
