<template>
  <div class="bg-white shadow-md rounded-xl p-6 border border-slate-200 hover:shadow-xl transition duration-300">

    <h3 class="text-xl font-bold text-slate-900">{{ school }}</h3>

    <p class="text-slate-600 mt-1 text-lg font-medium">
      {{ degree }}
    </p>

    <p class="text-slate-500 mt-3">
      {{ desc }}
    </p>

    <p class="text-sm text-slate-400 mt-4">
      <i class="fi fi-rr-calendar mr-1"></i>{{ date }}
    </p>

  </div>
</template>

<script setup>
defineProps({
  school: String,
  degree: String,
  desc: String,
  date: String,
});
</script>
