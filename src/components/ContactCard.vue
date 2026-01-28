<template>
  <a
    :href="link"
    target="_blank"
    class="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition border border-slate-200"
  >
    <!-- Icon -->
    <i :class="icon" class="text-2xl text-primary"></i>

    <!-- Text -->
    <div>
      <h3 class="font-semibold text-slate-800 flex items-center gap-1">
        {{ title }}
        <span class="text-text-secondary/70 text-xs ">{{ username }}</span>
      </h3>
      <p class="text-slate-500 text-sm">
        <slot />
      </p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  username: String,
  link: String,        // biar bisa diklik langsung ke profile
});
</script>
