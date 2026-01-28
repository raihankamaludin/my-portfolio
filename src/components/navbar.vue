<template>
  <nav
    class="w-3/4 sm:w-11/12 md:w-11/12 lg:w-3/4 mx-auto px-6 py-2 flex justify-between items-center bg-main-bg shadow-lg border border-gray-200 fixed top-5 inset-x-0 z-50 rounded-4xl sm:justify-center md:justify-center lg:justify-between"
  >
    <!-- LOGO -->
    <h1
      class="text-primary font-bold text-lg sm:text-xl md:text-xl lg:text-2xl block sm:hidden lg:block"
    >
      RaihanDev
    </h1>

    <!-- DESKTOP MENU -->
    <ul
      class="hidden sm:flex items-center gap-0 md:gap-1 lg:gap-2 xl:gap-7 md:flex md:items-center md:justify-center"
    >
      <li v-for="sec in sections" :key="sec.id">
        <a
          :href="'#' + sec.id"
          :class="[
            'flex items-center gap-2 px-3 py-2 rounded-full transition-colors text-xs sm:text-sm md:text-base lg:text-base',
            activeSection === sec.id
              ? 'bg-primary text-white'
              : 'text-text-secondary hover:bg-primary hover:text-white',
          ]"
        >
          <i :class="sec.icon"></i>
          {{ sec.name }}
        </a>
      </li>
    </ul>

    <!-- HAMBURGER -->
    <button @click="open = !open" class="sm:hidden text-3xl text-primary">
      ☰
    </button>
  </nav>

  <!-- MOBILE MENU -->
  <div
    v-if="open"
    class="sm:hidden fixed top-[88px] w-3/4 left-1/2 -translate-x-1/2 bg-main-bg rounded-3xl shadow-lg border border-gray-200 p-5 flex flex-col gap-4 z-60"
  >
    <a
      v-for="sec in sections"
      :key="sec.id"
      :href="'#' + sec.id"
      @click="handleSelect"
      class="flex items-center gap-3 px-3 py-2 rounded-full text-text-secondary hover:bg-primary hover:text-white transition"
    >
      <i :class="sec.icon"></i>
      {{ sec.name }}
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const open = ref(false);

const sections = [
  { id: "home", name: "Home", icon: "fi fi-ts-house-chimney mt-1" },
  { id: "about", name: "About", icon: "fi fi-ts-id-card-clip-alt mt-1" },
  { id: "experience", name: "Experience", icon: "fi fi-ts-ux-browser mt-1" },
  { id: "projects", name: "Projects", icon: "fi fi-ts-folder-open mt-1" },
  { id: "skills", name: "Skills", icon: "fi fi-ts-laptop-code mt-1" },
  { id: "contact", name: "Contact", icon: "fi fi-ts-phone-office mt-1" },
];

const activeSection = ref("home");

function handleSelect() {
  open.value = false; // Tutup menu setelah klik
}

function handleScroll() {
  const scrollPos = window.scrollY + 120;
  for (let sec of sections) {
    const el = document.getElementById(sec.id);
    if (
      el &&
      el.offsetTop <= scrollPos &&
      el.offsetTop + el.offsetHeight > scrollPos
    ) {
      activeSection.value = sec.id;
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
