import type { NuxtUIkitModuleOptions } from './types';
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';
import { name, version } from '../package.json';

export default defineNuxtModule<NuxtUIkitModuleOptions>({
  meta: {
    name,
    version,
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
    js: true,
    icons: true
  },

  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    const nuxtOptions = nuxt.options;
    // provide module config to runtime/plugin.ts
    nuxtOptions.runtimeConfig.app.uikit ||= {} as NuxtUIkitModuleOptions;
    nuxtOptions.runtimeConfig.app.uikit = options;

    const cssOptions = options.css;
    // load core + theme css
    if (cssOptions?.coreCss && cssOptions.coreTheme) {
      nuxtOptions.css ||= [];
      nuxtOptions.css.push(`uikit/dist/css/uikit.min.css`);
    }
    // load only core css
    if (options.css?.coreCss && !cssOptions?.coreTheme) {
      nuxtOptions.css ||= [];
      nuxtOptions.css.push(`uikit/dist/css/uikit-core.css`);
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
