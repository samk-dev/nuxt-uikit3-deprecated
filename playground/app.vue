<script setup lang="ts">
import { useNuxtApp } from '#imports';
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
// onMounted(() => console.log($uikit));
</script>

<template>
  <div>
    <button @click="showModal">show alert</button>
  </div>
</template>
