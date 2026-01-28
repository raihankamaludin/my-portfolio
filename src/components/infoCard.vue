<template>
  <div
    class="flex items-center gap-3 p-3 bg-white shadow-md rounded-2xl border border-gray-200"
  >
    <div class="shrink-0 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-xl text-sm">
      <slot name="icon"></slot>
    </div>

    <div class="whitespace-normal break-all">
      <p class="text-sm text-gray-500">{{ label }}</p>
      <p class="text-base md:text-sm font-semibold text-gray-800 ">{{ value }}</p>
    </div>
  </div>
</template>


<script setup>
defineProps({
  label: String,
  value: String
})
</script>
