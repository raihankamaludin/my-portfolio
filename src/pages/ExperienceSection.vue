<template>
  <section class="px-4 pt-30 md:pt-32 md:pb-20 md:px-10 mx-auto">
    <!-- Section Title -->
    <div data-aos="fade-up" class="text-center mb-6">
      <SectionTitle
        title="My Experience"
        paragraf="A journey through my professional growth, education, and achievements."
      />
    </div>

    <!-- Tabs -->
    <div data-aos="fade-up" class="flex bg-slate-100 p-2 rounded-xl">
      <button
        class="flex-1 py-3 font-medium rounded-lg transition"
        :class="selected === 'work' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-200'"
        @click="selected = 'work'"
      >
        Work Experience
      </button>

      <button
        class="flex-1 py-3 font-medium rounded-lg transition"
        :class="selected === 'education' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-200'"
        @click="selected = 'education'"
      >
        Education
      </button>

      <button
        class="flex-1 py-3 font-medium rounded-lg transition"
        :class="selected === 'achievement' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-200'"
        @click="selected = 'achievement'"
      >
        Achievements
      </button>
    </div>

    <!-- CONTENT -->
    <div class="mt-14">
      <!-- Work -->
      <Timeline v-show="selected === 'work'">
        <TimelineItem
          v-for="(item, i) in workData"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="i * 200"
        >
          <ExperienceCard v-bind="item" />
        </TimelineItem>
      </Timeline>

      <!-- Education -->
      <Timeline v-show="selected === 'education'">
        <TimelineItem
          v-for="(item, i) in eduData"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="i * 200"
        >
          <EducationCard v-bind="item" />
        </TimelineItem>
      </Timeline>

      <!-- Achievements -->
      <Timeline v-show="selected === 'achievement'">
        <TimelineItem
          v-for="(item, i) in achievementData"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="i * 200"
        >
          <AchievementCard v-bind="item" />
        </TimelineItem>
      </Timeline>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Timeline from "../components/Timeline.vue";
import TimelineItem from "../components/TimelineItem.vue";
import ExperienceCard from "../components/ExperienceCard.vue";
import EducationCard from "../components/EducationCard.vue";
import AchievementCard from "../components/AchievementCard.vue";
import SectionTitle from "../components/SectionTitle.vue";

const selected = ref("work");

const workData = [
  {
    title: "project-based internship Rakamin (Front-End Developer)",
    company: "Core Initiative",
    description:"Mengikuti program internship berbasis proyek sebagai Front-End Developer dengan fokus pada pengembangan aplikasi web menggunakan Vue.js. Mengerjakan proyek Mini E-Commerce yang mencakup pembuatan katalog produk, keranjang belanja, serta penerapan konsep UI/UX dan integrasi data secara dinamis.",
    skills: [ "Vue.js", "JavaScript", "Tailwind CSS"],
    date: "March 2025 – April 2025",
    location: "Work From Home (WFH)",
  },
];

const eduData = [
  {
    school: "Sma Negeri 10 Tangsel",
    degree: "Ilmu Pengetahuan Sosial (IPS)",
    desc: "Selama bersekolah di jurusan IPS, saya mengembangkan kemampuan analisis, komunikasi, dan pemecahan masalah. Meskipun latar belakang saya bukan dari dunia teknologi, ketertarikan saya terhadap pemrograman muncul pada akhir masa sekolah dan membuat saya mulai belajar IT secara mandiri.",
    date: "2020 – 2023",
  },
  {
    school: "Universitas Pamulang",
    degree: "Teknik Informatika",
    desc: "Saya mendalami dasar-dasar pengembangan web, UI/UX, dan algoritma selama kuliah. Walaupun belum sepenuhnya ahli, saya sudah memahami konsep dasarnya dan terus mengembangkan kemampuan melalui latihan dan proyek pribadi.",
    date: "2023 – Present",
  },
];

const achievementData = [
  {
    title: "BOOTCAMP",
    degree: "project-based internship di rakamin (Front-End Developer)",
    description:
      "Mengikuti program internship berbasis proyek untuk mengembangkan kemampuan web development",
    pdf: "/file-serifikat/pbi-certificate-325989IAPRGIC2932025.pdf",
  },
];

// Refresh AOS saat mount
onMounted(() => {
  if (window.AOS) window.AOS.refresh();
});

// Refresh AOS tiap kali tab berubah
watch(selected, () => {
  if (window.AOS) window.AOS.refresh();
});
</script>
