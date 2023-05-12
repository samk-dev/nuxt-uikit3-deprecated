<script setup lang="ts">
import { useNuxtApp /*onMounted*/ } from '#imports';
const { $uikit } = useNuxtApp();

const accordionItems = [
  {
    label: 'Item 1',
    isOpen: true,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    label: 'Item 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    label: 'Item 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

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
// onMounted(() => {
//   console.log(useNuxtApp());
//   if (process.client) {
//     console.log(UIkit.modal.confirm('Uiki'));
//   }
// });
</script>

<template>
  <div class="uk-container uk-padding">
    <h1 class="uk-heading-small uk-text-bold">
      Nuxt UIkit 3 Module Playground
    </h1>

    <h2 class="uk-text-bold">Modal Component</h2>
    <button class="uk-button uk-button-secondary" @click="showModal">
      Show Modal
    </button>

    <h2>Icon</h2>
    <span data-uk-icon="icon: check; ratio: 2" />

    <h2 class="uk-text-bold">Accordion Component</h2>
    <base-accordion :items="accordionItems" />
  </div>
</template>
