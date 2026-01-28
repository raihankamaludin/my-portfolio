<template>
  <section class="px-4 pt-30 md:pt-32 md:pb-20 md:px-10 mx-auto">
    <div data-aos="fade-up" class="text-center mb-6">
      <SectionTitle
        title="My Skills"
        paragraf="Technical expertise and tools I use in development."
      />
    </div>

    <!-- TAB -->
    <div
      data-aos="fade-up"
      class="flex bg-slate-100 mt-10 p-2 rounded-xl w-max mx-auto"
    >
      <button
        class="py-3 px-6 font-medium rounded-lg"
        :class="
          selected === 'programming'
            ? 'bg-slate-900 text-white'
            : 'text-slate-600 hover:bg-slate-200'
        "
        @click="selected = 'programming'"
      >
        Programming
      </button>

      <button
        class="py-3 px-6 font-medium rounded-lg"
        :class="
          selected === 'tools'
            ? 'bg-slate-900 text-white'
            : 'text-slate-600 hover:bg-slate-200'
        "
        @click="selected = 'tools'"
      >
        Tools
      </button>
    </div>

    <!-- SKILL CONTENT WRAPPER -->
    <div
      v-show="selected"
      class="mt-12 bg-white border border-gray-100 rounded-2xl shadow-xl p-8"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard
          v-for="(item, i) in currentSkills"
          :key="i"
          v-bind="item"
          data-aos="fade-up"
          :data-aos-delay="i * 150"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import SkillCard from "../components/SkillCard.vue";
import SectionTitle from "../components/SectionTitle.vue";

const selected = ref("programming");

const programming = [
  { name: "JavaScript", type: "Language", level: 75 },
  { name: "Python", type: "Language", level: 60 },
  { name: "C++", type: "Language", level: 60 },
  { name: "HTML", type: "Markup Language", level: 85 },
  { name: "CSS", type: "StyleSheet", level: 85 },
  { name: "Vue.js", type: "Framework", level: 75 },
  { name: "Tailwind CSS", type: "Framework", level: 80 },
];

const tools = [
  { name: "Git", type: "Version Control", level: 60 },
  { name: "GitHub", type: "Platform", level: 75 },
  { name: "VS Code", type: "Code Editor", level: 90 },
  { name: "Figma", type: "Design", level: 70 },
  { name: "Postman", type: "API Testing", level: 60 },
];

const currentSkills = computed(() =>
  selected.value === "programming" ? programming : tools
);

// Refresh AOS saat mount & tab berubah
onMounted(() => {
  if (window.AOS) window.AOS.refresh();
});

watch(selected, () => {
  if (window.AOS) window.AOS.refresh();
});
</script>
