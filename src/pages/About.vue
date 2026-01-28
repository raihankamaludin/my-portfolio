<template>
  <section
    id="about"
    class="px-4 pt-30 md:pt-32 lg:pt-35 md:pb-20 mx-auto md:px-10 flex flex-col"
  >
    <div
      data-aos="fade-up"
      class="flex flex-col items-center text-center mb-10"
    >
      <SectionTitle
        title="About Me"
        paragraf="passionate about creating innovative solutions through technology."
      />
    </div>

    <div
      class="flex flex-col lg:flex-row items-center gap-2 md:gap-10 lg:gap-20"
    >
      <div
        data-aos="fade-right"
        class="hidden lg:flex justify-center mb-6 md:mb-0"
      >
        <img
          src="../assets/image/about.png"
          alt="Raihan photo"
          class="rounded-2xl shadow-lg w-sm object-cover"
        />
      </div>

      <div
        data-aos="fade-left"
        class="w-full lg:w-2/3 bg-white shadow-xl p-8 rounded-2xl border border-gray-100"
      >
        <h2 class="text-3xl font-bold text-primary mb-4">Hello There!</h2>

        <p class="text-text-secondary leading-relaxed">
          Saya mahasiswa Informatika yang sedang fokus mengembangkan diri di
          bidang Fullstack Web Development. Telah mempelajari HTML, CSS,
          JavaScript, Vue.js, dan React.js dengan kemampuan cepat beradaptasi
          terhadap teknologi baru. Antusias untuk belajar lebih dalam serta
          berkontribusi melalui proyek nyata.
        </p>

        <!-- Garis -->
        <div class="h-px bg-gray-300/50 shadow-lg my-8"></div>

        <!-- Info Card -->
        <div class="grid md:grid-cols-2 gap-6 mt-5">
          <InfoCard data-aos="fade-up" label="Nama" value="Raihan Kamaludin">
            <template #icon>
              <i class="fi fi-rr-user"></i>
            </template>
          </InfoCard>

          <InfoCard
            data-aos="fade-up"
            label="Domisili"
            value="Ciputat, Tangerang Selatan"
          >
            <template #icon>
              <i class="fi fi-rr-marker"></i>
            </template>
          </InfoCard>

          <InfoCard
            data-aos="fade-up"
            label="Pendidikan"
            value="Teknik Informatika"
          >
            <template #icon>
              <i class="fi fi-rr-graduation-cap"></i>
            </template>
          </InfoCard>

          <InfoCard
            data-aos="fade-up"
            label="Email"
            value="raihankamaludin17@gmail.com"
          >
            <template #icon>
              <i class="fi fi-rr-envelope"></i>
            </template>
          </InfoCard>

          <InfoCard data-aos="fade-up" label="Phone" value="+62 895-3849-35560">
            <template #icon>
              <i class="fi fi-rr-phone-call"></i>
            </template>
          </InfoCard>

          <InfoCard
            data-aos="fade-up"
            label="Status"
            value="Available for work"
          >
            <template #icon>
              <i class="fi fi-rr-hourglass-end"></i>
            </template>
          </InfoCard>
        </div>

        <!-- Garis -->
        <div class="h-px bg-gray-300/50 shadow-lg my-8"></div>

        <!-- Interests & Focus -->
        <div data-aos="fade-up" class="my-8">
          <h2 class="text-xl font-semibold mb-4">Interests & Focus</h2>
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              class="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
              >Frontend Development</span
            >
            <span
              class="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
              >Vue.js</span
            >
            <span
              class="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
              >UI/UX Design</span
            >
            <span
              class="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
              >Web Technologies</span
            >
          </div>

          <div class="flex gap-4 flex-wrap">
            <a
              href="/file-cv/cv_raihan_kamaludin.pdf"
              download
              class="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              <i class="fi fi-rr-download"></i> Download My CV
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=raihankamaludin17@gmail.com&su=Hire%20Me&body=Hi%20Raihan,%20I%20want%20to%20hire%20you."
              target="_blank"
              class="flex items-center gap-2 px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition"
            >
              <i class="fi fi-rr-briefcase"></i> Hire Me Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import InfoCard from "../components/infoCard.vue";
import SectionTitle from "../components/SectionTitle.vue";
import { onMounted } from "vue";

onMounted(() => {
  if (window.AOS) window.AOS.refresh();
});
</script>
