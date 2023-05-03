import { defineNuxtPlugin } from '#app';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('uikit', UIkit);
});
