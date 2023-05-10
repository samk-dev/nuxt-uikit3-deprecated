import { defineNuxtPlugin /* useRuntimeConfig */ } from '#app';
import * as UIkit from 'uikit';
// import * as icons from 'uikit/dist/js/uikit-icons';

export default defineNuxtPlugin(async (nuxtApp) => {
  // const { uikit: uikitOptions } = useRuntimeConfig().app;
  // // @ts-ignore
  // if (uikitOptions.icons) UIkit.use(icons);

  nuxtApp.provide('uikit', UIkit);
});
