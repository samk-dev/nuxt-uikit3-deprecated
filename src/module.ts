import type { NuxtUIkitModuleOptions } from './types';
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';

export default defineNuxtModule<NuxtUIkitModuleOptions>({
  meta: {
    name: 'nuxt-uikit3',
    configKey: 'uikit',
    compatibility: {
      nuxt: '^3.0.0',
      bridge: false
    }
  },

  defaults: {
    css: {
      coreCss: true,
      coreTheme: true
    },
    js: true
  },

  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // provide module config to runtime/plugin.ts
    nuxt.options.runtimeConfig.app.uikit ||= {} as NuxtUIkitModuleOptions;
    nuxt.options.runtimeConfig.app.uikit = options;

    const cssOptions = options.css;
    // load core + theme css
    if (cssOptions?.coreCss && cssOptions.coreTheme) {
      nuxt.options.css ||= [];
      nuxt.options.css.push(`uikit/dist/css/uikit.min.css`);
    }
    // load only core css
    if (options.css?.coreCss && !cssOptions?.coreTheme) {
      nuxt.options.css ||= [];
      nuxt.options.css.push(`uikit/dist/css/uikit-core.css`);
    }

    /**
     * TODO:
     *
     * Allow scss && less customization
     *
     * accept an option from the config
     * {
     *  customCSS: true,
     *  lang: 'scss|less',
     *  variablesPath: '~/assets/scss/vars.scss',
     *  mixins: 'path',
     *  components: []
     * }
     *
     */

    // add uikit plugin to nuxt
    if (options.js) {
      addPlugin({
        src: resolver.resolve('./runtime/plugin.client'),
        mode: 'client'
      });
    }
  }
});
