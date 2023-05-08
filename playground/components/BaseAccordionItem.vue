<script setup lang="ts">
export interface PropsAccordionItem {
  label: string;
  isOpen?: boolean;
  content?: any;
}

const props = withDefaults(defineProps<PropsAccordionItem>(), {
  isOpen: false,
  content: ''
});
</script>

<template>
  <li :class="{ 'uk-open': props.isOpen }">
    <a class="uk-accordion-title" href="#">
      {{ props.label }}
    </a>
    <div class="uk-accordion-content">
      <slot />
    </div>
  </li>
</template>
