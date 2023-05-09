import { defineNuxtPlugin, useRuntimeConfig } from '#app';
// @ts-ignore
import UIkit from 'uikit/dist/js/uikit.min.js';
// @ts-ignore
import Icons from 'uikit/dist/js/uikit-icons.min.js';

export default defineNuxtPlugin(async (nuxtApp) => {
  const { uikit: uikitOptions } = useRuntimeConfig().app;

  if (uikitOptions.icons) UIkit.use(Icons);

  nuxtApp.provide('uikit', UIkit);
});
