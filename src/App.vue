<template>
  <div>
    <Navbar />
    <main class="w-full md:w-[90%] max-w-[1400px] mx-auto">
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Experience from "./pages/ExperienceSection.vue";
import Projects from "./pages/Projects.vue";
import Skills from "./pages/SkillsSection.vue";
import Contact from "./pages/Contact.vue";
</script>
