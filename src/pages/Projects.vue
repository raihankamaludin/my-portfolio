<template>
  <section class="px-4 pt-30 md:pt-32 md:pb-20 md:px-10 mx-auto">
    <div data-aos="fade-up" class="text-center mb-6">
      <SectionTitle
        title="My Projects"
        paragraf="A showcase of my development work across modern web technologies."
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        v-for="(item, i) in projectData"
        :key="i"
        v-bind="item"
        :data-aos="'fade-up'"
        :data-aos-delay="i * 200"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import SectionTitle from "../components/SectionTitle.vue";
import { onMounted } from "vue";

const projectData = [
  {
    title: "Portfolio Website",
    type: "Static Website",
    description:
      "Website portofolio pribadi menggunakan Vue.js dan Tailwind CSS, dirancang modern dan responsif.",
    status: "Completed",
    techStack: ["Vue.js", "Tailwind CSS", "JavaScript"],
    code: "#",

  },
  {
    title: "E-Commerce UI",
    type: "Frontend UI",
    description:
      "Desain interface e-commerce modern sebagai latihan layouting dan UI/UX.",
    status: "Completed",
    techStack: ["Vue.js", "Tailwind CSS", "JavaScript"],
    code: "https://github.com/raihankamaludin/ecommerce-catalog.git",

  },
];

onMounted(() => {
  if (window.AOS) window.AOS.refresh()
})
</script>
