<template>
  <section
    class="px-4 pt-20 md:px-10 md:pb-20 bg-main-bg flex flex-col md:flex-row items-center justify-center overflow-x-hidden"
  >
    <!-- Kiri -->
    <div data-aos="fade-right" class="w-full md:w-1/2 text-center p-4">
      <h1
        class="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-stack font-bold text-primary"
      >
        Hi, I’m <span class="text-blue-400">Raihan</span>
      </h1>
      <p class="text-sm sm:text-base xl:text-lg mt-4 text-text-muted">
        {{ displayText }}<span class="animate-blink">┃</span>
      </p>
    </div>

    <!-- Gambar -->
    <div
      data-aos="zoom-in"
      class="w-auto md:w-3/4 flex justify-center mt-6 md:mt-0"
    >
      <img
        src="../assets/image/foto-raihan.png"
        alt="Profil"
        class="w-3/4 sm:w-2/3 md:w-4/5 max-w-full object-cover rounded-lg"
      />
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from "vue";

const fullText = "Mahasiswa • Web Enthusiast";
const displayText = ref("");
let charIndex = 0;
let deleting = false;

function typeWriter() {
  if (!deleting) {
    displayText.value = fullText.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === fullText.length) {
      setTimeout(() => {
        deleting = true;
        typeWriter();
      }, 1500);
      return;
    }
  } else {
    displayText.value = fullText.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) deleting = false;
  }
  setTimeout(typeWriter, deleting ? 50 : 100);
}

onMounted(() => {
  typeWriter();
  if (window.AOS) {
    window.AOS.init({ duration: 1000 }); // hapus once:true supaya animasi tiap scroll
    window.AOS.refresh();
  }
});
</script>

<style>
.animate-blink {
  animation: blink 1s step-start infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
