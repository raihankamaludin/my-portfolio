<template>
  <h2 class="text-4xl md:text-5xl font-bold text-primary">{{ title }}</h2>
  <p class="text-gray-500 mt-4 max-w-2xl mx-auto mb-15">{{ paragraf }}</p>
</template>

<script setup>
defineProps({
  title: String,
  paragraf: String,
});
</script>
