<template>
  <footer class="bg-gray-950 text-gray-400 py-8 mt-20">
    <div
      class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"
    >
      <div class="text-lg font-bold text-white">Raihan.dev</div>

      <div class="flex gap-6">
        <a
          href="https://github.com/raihankamaludin"
          target="_blank"
          class="hover:text-indigo-400"
          >GitHub</a
        >
        <a
          href="https://www.linkedin.com/in/raihankamaludin/"
          target="_blank"
          class="hover:text-indigo-400"
          >LinkedIn</a
        >
        <a
          href="mailto:raihankamaludin17@gmail.com"
          class="hover:text-indigo-400"
          >Email</a
        >
      </div>

      <div class="text-sm text-gray-500 mt-4 md:mt-0">
        &copy; {{ new Date().getFullYear() }} Raihan.dev. All rights reserved.
      </div>
    </div>
  </footer>
</template>
