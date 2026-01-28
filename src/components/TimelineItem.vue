<template>
  <div class="relative flex items-start gap-8">
    <!-- Bullet -->
    <div class="relative">
      <div class="w-5 h-5 bg-white border-4px border-slate-900 rounded-full"></div>
    </div>

    <!-- Isi card -->
    <div class="flex-1">
      <slot></slot>
    </div>
  </div>
</template>
