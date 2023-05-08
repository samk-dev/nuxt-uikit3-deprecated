<script setup lang="ts">
import { PropType } from 'vue';
import type { PropsAccordionItem } from './BaseAccordionItem.vue';

const props = defineProps({
  items: {
    type: [Object] as PropType<PropsAccordionItem[]>,
    required: true
  }
});
</script>

<template>
  <ul data-uk-accordion>
    <base-accordion-item
      v-for="(item, i) in props.items"
      :key="i"
      :label="item.label"
      :is-open="item.isOpen"
    >
      {{ item.content }}
    </base-accordion-item>
  </ul>
</template>
