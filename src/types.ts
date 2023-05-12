/**
 * @name NUIkitCssOption
 * @description By default Nuxt UIkit 3 Module loads UIkit 3 core css && core theme css, you can select what css components to import or disable this behaviour && load your own custom css
 *
 *
 * @sinc 0.0.1
 */
export type NUIkitCssOptions = {
  /**
   * @description Enable/Disable Nuxt UIkit 3 module from loading UIkit 3 core css
   * @type coreCss
   * @default false
   *
   * @sinc 0.0.1
   */
  coreCss: boolean;
  /**
   * @description Enable/Disable Nuxt UIkit 3 module from loading UIkit 3 default theme css
   * @type coreTheme
   * @default false
   *
   * @sinc 0.0.1
   */
  coreTheme: boolean;
};

/**
 * @name Nuxt UIkit 3 Module Otions
 * @description Module options definition
 *
 * @sinc 0.0.1
 */
export interface NuxtUIkitModuleOptions {
  css: NUIkitCssOptions;
  js: boolean;
  icons: boolean;
}
