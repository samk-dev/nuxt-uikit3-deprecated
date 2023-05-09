<script setup lang="ts">
import { useNuxtApp } from '#imports';
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
// onMounted(() => console.log($uikit));
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

    <h2 class="uk-text-bold">Accordion Component</h2>
    <base-accordion :items="accordionItems" />

    <div
      class="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      data-uk-slider
    >
      <ul
        class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m"
      >
        <li>
          <img
            src="https://getuikit.com/docs/images/slider1.jpg"
            width="400"
            height="600"
            alt=""
          />
          <div class="uk-position-center uk-panel">
            <h1>1</h1>
          </div>
        </li>
        <li>
          <img
            src="https://getuikit.com/docs/images/slider2.jpg"
            width="400"
            height="600"
            alt=""
          />
          <div class="uk-position-center uk-panel">
            <h1>2</h1>
          </div>
        </li>
        <li>
          <img
            src="https://getuikit.com/docs/images/slider4.jpg"
            width="400"
            height="600"
            alt=""
          />
          <div class="uk-position-center uk-panel">
            <h1>3</h1>
          </div>
        </li>
        <li>
          <img
            src="https://getuikit.com/docs/images/slider3.jpg"
            width="400"
            height="600"
            alt=""
          />
          <div class="uk-position-center uk-panel">
            <h1>4</h1>
          </div>
        </li>
        <li>
          <img
            src="https://getuikit.com/docs/images/slider5.jpg"
            width="400"
            height="600"
            alt=""
          />
          <div class="uk-position-center uk-panel">
            <h1>5</h1>
          </div>
        </li>
        <li>
          <img
            src="https://getuikit.com/docs/images/slider1.jpg"
            width="400"
            height="600"
            alt=""
          />
          <div class="uk-position-center uk-panel">
            <h1>6</h1>
          </div>
        </li>
        <li>
          <img
            src="https://getuikit.com/docs/images/slider2.jpg"
            width="400"
            height="600"
            alt=""
          />
          <div class="uk-position-center uk-panel">
            <h1>7</h1>
          </div>
        </li>
        <li>
          <img
            src="https://getuikit.com/docs/images/slider3.jpg"
            width="400"
            height="600"
            alt=""
          />
          <div class="uk-position-center uk-panel">
            <h1>8</h1>
          </div>
        </li>
        <li>
          <img
            src="https://getuikit.com/docs/images/slider4.jpg"
            width="400"
            height="600"
            alt=""
          />
          <div class="uk-position-center uk-panel">
            <h1>9</h1>
          </div>
        </li>
        <li>
          <img
            src="https://getuikit.com/docs/images/slider5.jpg"
            width="400"
            height="600"
            alt=""
          />
          <div class="uk-position-center uk-panel">
            <h1>10</h1>
          </div>
        </li>
      </ul>

      <a
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous
        uk-slider-item="previous"
      />
      <a
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next
        uk-slider-item="next"
      />
    </div>
  </div>
</template>
