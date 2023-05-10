import UIkit from 'uikit';

declare module '#app' {
  interface NuxtApp {
    $uikit: typeof UIkit;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $uikit: typeof UIkit;
  }
}
