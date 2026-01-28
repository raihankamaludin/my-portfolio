<template>
  <div
    class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col h-full"
  >
    <!-- Header -->
    <div class="flex items-center justify-between">
      <h3 class="text-xl font-semibold text-slate-800">{{ title }}</h3>

      <span
        class="px-3 py-1 text-sm rounded-lg"
        :class="status === 'Completed'
          ? 'bg-green-100 text-green-700'
          : 'bg-yellow-100 text-yellow-700'"
      >
        {{ status }}
      </span>
    </div>

    <!-- Type -->
    <p class="text-slate-500 mt-1 text-sm">{{ type }}</p>

    <!-- Description -->
    <p class="text-slate-600 mt-3">{{ description }}</p>

    <!-- Tech Stack -->
    <div class="flex gap-2 flex-wrap mt-4">
      <span
        v-for="(tech, i) in techStack"
        :key="i"
        class="h-8 flex items-center px-3 text-sm font-medium leading-none bg-slate-100 text-slate-700 rounded-lg"
      >
        {{ tech }}
      </span>
    </div>

    <!-- Buttons -->
    <div class="flex gap-3 mt-auto pt-6">

      <!-- CODE (GitHub) -->
      <a
        v-if="code"
        :href="code"
        target="_blank"
        class="flex items-center justify-center gap-2 flex-1 h-10 rounded-lg bg-primary text-white hover:bg-primary/80 transition"
      >
        <i class="fi fi-brands-github text-lg"></i>
        <span>Code</span>
      </a>

  

    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  type: String,
  description: String,
  status: String,
  techStack: Array,
  code: String,
});
</script>


