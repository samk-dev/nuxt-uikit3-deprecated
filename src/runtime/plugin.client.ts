import { defineNuxtPlugin } from '#app';
import * as UIkit from 'uikit';
import icons from 'uikit/dist/js/uikit-icons';

// it's causing a bug in production
// uikit.mjs?v=41729758:3 Uncaught TypeError: UIkit.use is not a function
// UIkit.use(icons);

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.$uikit = UIkit;
  // @ts-ignore
  nuxtApp.$uikit?.use(icons);
  nuxtApp.provide('uikit', UIkit);
});
