import { defineNuxtPlugin } from '#app';
import * as UIkit from 'uikit';
// import icons from 'uikit/dist/js/uikit-icons';
import { NUIkit } from './assets/js/nuxt-uikit';

export default defineNuxtPlugin(async (nuxtApp) => {
  // it's causing a bug in production
  // uikit.mjs?v=41729758:3 Uncaught TypeError: UIkit.use is not a function
  // nuxtApp.$uikit = UIkit;
  // nuxtApp.$uikit?.use(icons);

  nuxtApp.provide('uikit', UIkit);
  nuxtApp.provide('nuikit', NUIkit);
});
