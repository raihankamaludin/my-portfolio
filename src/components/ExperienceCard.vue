<template>
  <div class="bg-white shadow-md rounded-xl p-6 border border-slate-200 hover:shadow-xl transition duration-300">
    <h3 class="text-xl font-bold text-slate-900">{{ title }}</h3>

    <p class="text-slate-500 mt-1 flex items-center gap-2">
      <i class="fi fi-rr-building"></i>
      {{ company }}
    </p>

    <p class="text-slate-500 mt-3 leading-relaxed">
      {{ description }}
    </p>

    <!-- Skills -->
    <div class="flex flex-wrap gap-2 mt-4">
      <span
        class="px-4 py-1 text-sm rounded-full bg-slate-900 text-white"
        v-for="(skill, index) in skills"
        :key="index"
      >
        {{ skill }}
      </span>
    </div>

    <!-- Date & Location -->
    <div class="flex justify-between text-sm text-slate-400 mt-4">
      <span><i class="fi fi-rr-calendar mr-1"></i>{{ date }}</span>
      <span><i class="fi fi-rr-marker mr-1"></i>{{ location }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  company: String,
  description: String,
  skills: Array,
  date: String,
  location: String,
});
</script>
