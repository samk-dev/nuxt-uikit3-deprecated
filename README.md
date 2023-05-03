# Nuxt Uikit 3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

nuxt-uikit3 Nuxt module.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-uikit3?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Injects Uikit 3
- Import only Uikit 3 components you need
- Enable/Disable Uikit 3 default icons

### Todo

- Import only specific components []
- Enable/Disable Uikit 3 default icons []
- Contribution guid []
- Licence []
- Docs []
- Examples []
- PR template []
- Nuxt 2 support?? maybe!!

## Quick Setup

Add `@samk_dev/nuxt-uikit3` dependency to your project

```bash
# Using pnpm
pnpm add -D @samk_dev/nuxt-uikit3

# Using yarn
yarn add --dev @samk_dev/nuxt-uikit3

# Using npm
npm install --save-dev @samk_dev/nuxt-uikit3
```

Add `@samk_dev/nuxt-uikit3` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['@samk_dev/nuxt-uikit3']
});
```

That's it! You can now use Nuxt Uikit 3 in your Nuxt app ✨

## Usage Example

```vue
<script setup lang="ts">
const { $uikit } = useNuxtApp();

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

[npm-version-src]: https://img.shields.io/npm/v/nuxt-uikit3/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-uikit3
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-uikit3.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-uikit3
[license-src]: https://img.shields.io/npm/l/nuxt-uikit3.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-uikit3
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
