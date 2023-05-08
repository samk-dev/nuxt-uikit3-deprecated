# Nuxt Uikit 3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt compatibility: `^3.0.0`
UIkit 3 version `3.16.15`

nuxt-uikit3 Nuxt module.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-uikit3?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

- [UIkit 3 Docs](https://getuikit.com/docs/introduction)
- [Nuxt Docs](https://nuxt.com/docs/getting-started/introduction)

## Features

- Injects UIkit 3 into Nuxt ✅
- Load UIkit 3 default css or disable it and load your own ✅
- Use all UIKit 3 JS components without writing any JS ✅

### On version `1.0.0` release **todos**

- Enable/Disable Uikit 3 default icons
- Import only specific JS components []
- Enable/Disable Uikit 3 default icons []
- Tests jest?? or vitest??
- Docs []
- Examples []
- Contribution guid []
- Licence []
- PR template []
- Nuxt 2 support?? maybe!!

## Quick Setup

Add `@samk_dev/nuxt-uikit3` dependency to your project

```bash
# Using pnpm
pnpm add -D @samk_dev/nuxt-uikit3 uikit
# with typyscript support
pnpm add -D @samk_dev/nuxt-uikit3 uikit @types/uikit

# Using yarn
yarn add --dev @samk_dev/nuxt-uikit3 uikit
# with typescript
yarn add --dev @samk_dev/nuxt-uikit3 uikit @types/uikit

# Using npm
npm install --save-dev @samk_dev/nuxt-uikit3 uikit
# with typescript
npm install --save-dev @samk_dev/nuxt-uikit3 uikit @types/uikit
```

Add `@samk_dev/nuxt-uikit3` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['@samk_dev/nuxt-uikit3']
});
```

That's it! You can now use Nuxt Uikit 3 in your Nuxt app ✨

## Module Options

By default Nuxt UIkit 3 Module loads UIkit 3 core css && core theme css, but you can select what css components to import or disable this behaviour && load your own custom css.

### Default UIkit 3 core css && default theme css

```ts
export default defineNuxtConfig({
  modules: ['@samk_dev/nuxt-uikit3'],
  uikit3: {
    css: {
      /**
       * @default true
       */
      coreCss: boolean,
      /**
       * @default true
       */
      coreTheme: boolean
    }
  }
});
```

## CSS

You can use any css class from UIkit 3 as you would normally do.

### CSS Example

```html
<section class="uk-section uk-section-default">
  <div class="uk-container">
    <h1 class="uk-heading-medium">Are You Nuxt!</h1>
    <button type="button" class="uk-button uk-button-primary">Click me!</button>
  </div>
</section>
```

## Javascript

You can use UIkit 3 JS components by adding the `data-uk-<component-name>` || by calling `$uikit` inside `<script></script>` tag

**To work with javascript components from UIkit 3, you have to add `data-uk-<component-name>`
Please refer to UIkit 3 documentation as they mentioned there**

From [UIkit 3 Docs](https://getuikit.com/docs/javascript)

`UIkit and reactive JavaScript frameworks. UIkit is listening for DOM manipulations and will automatically initialize, connect and disconnect components as they are inserted or removed from the DOM. That way it can easily be used with JavaScript frameworks like Vue.js and React. You can use UIkit components by adding uk-* or data-uk-* attributes to your HTML elements without writing a single line of JavaScript. This is UIkit's best practice of using its components and should always be considered first.`

```html
<!-- ❌ WILL NOT WORK -->
<div uk-sticky="offset: 50;"></div>
<!-- ✅ WILL WORK -->
<div data-uk-sticky="offset: 50;"></div>
```

## Usage Example

### Acordion Component

Using the `data-uk-<component-name>` method:

```html
<template>
  <ul data-uk-accordion>
    <li class="uk-open">
      <a class="uk-accordion-title" href="#">Item 1</a>
      <div class="uk-accordion-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </li>
    <li>
      <a class="uk-accordion-title" href="#">Item 2</a>
      <div class="uk-accordion-content">
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          reprehenderit.
        </p>
      </div>
    </li>
    <li>
      <a class="uk-accordion-title" href="#">Item 3</a>
      <div class="uk-accordion-content">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          proident.
        </p>
      </div>
    </li>
  </ul>
</template>
```

### Inside `<script></script>` tag

```html
<script setup lang="ts">
  // import $uikit from useNuxtApp()
  const { $uikit } = useNuxtApp();
  // use any component $uikit.<component-name>
  function showModal() {
    $uikit.modal.confirm('UIkit confirm!').then(
      function () {
        console.log('Confirmed.');
      },
      function () {
        console.log('Rejected.');
      }
    );
  }
</script>

<template>
  <div>
    <!-- call showModal method on click -->
    <button @click="showModal">show alert</button>
  </div>
</template>
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@samk_dev/nuxt-uikit3/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@samk_dev/nuxt-uikit3
[npm-downloads-src]: https://img.shields.io/npm/dm/@samk_dev/nuxt-uikit3.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@samk_dev/nuxt-uikit3
[license-src]: https://img.shields.io/npm/l/@samk_dev/nuxt-uikit3.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@samk_dev/nuxt-uikit3
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
