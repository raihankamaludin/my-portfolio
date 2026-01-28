<template>
  <div
    class="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col"
  >
    <!-- Title -->
    <h3 class="text-lg font-semibold text-slate-800">
      {{ name }}
    </h3>

    <!-- Badge Type -->
    <span
      class="mt-2 w-max px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-600"
    >
      {{ type }}
    </span>

    <!-- Progress -->
    <div class="mt-5">
      <div class="h-2 bg-slate-200 rounded-full">
        <div
          class="h-full bg-text-secondary rounded-full transition-all duration-300"
          :style="{ width: level + '%' }"
        ></div>
      </div>

      <p class="text-right text-sm mt-1 text-slate-600">
        {{ level }}%
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  type: String,
  level: Number,
});
</script>

