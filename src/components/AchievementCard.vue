<template>
  <div class="p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
    <h3 class="text-xl font-bold text-primary">{{ title }}</h3>
    <p class="text-slate-600 mt-1 text-lg font-medium">
      {{ degree }}
    </p>
    <p class="text-slate-500 mt-3">{{ description }}</p>

    <!-- Tombol lihat PDF -->
    <a
      :href="pdf"
      target="_blank"
      class="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80"
    >
      Lihat Sertifikat (PDF)
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  degree: String,
  description: String,
  pdf: String,
});
</script>
