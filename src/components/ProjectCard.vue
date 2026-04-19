<template>
  <div
    class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col h-full"
  >
  <!-- Header -->
<div class="flex items-start justify-between relative">
  <h3 class="text-xl font-semibold text-slate-800 pr-20">
    {{ title }}
  </h3>

  <span
    class="absolute top-0 right-0 px-3 py-1 text-sm rounded-xl"
    :class="
      status === 'Completed'
        ? 'bg-green-100 text-green-700'
        : 'bg-yellow-100 text-yellow-700'
    "
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
   <!-- DEMO (kiri) -->
  <a
    v-if="demo"
    :href="demo"
    target="_blank"
    class="flex items-center justify-center gap-2 h-10 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition w-1/2"
  >
    <i class="fi fi-rr-link text-lg"></i>
    <span>Demo</span>
  </a>

  <!-- CODE (kanan / full kalau sendiri) -->
  <a
    v-if="code"
    :href="code"
    target="_blank"
    :class="[
      'flex items-center justify-center gap-2 h-10 rounded-lg bg-primary text-white hover:bg-primary/80 transition',
      demo ? 'w-1/2' : 'w-full'
    ]"
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
  demo: String,
});
</script>
