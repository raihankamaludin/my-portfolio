<template>
  <section class="px-4 pt-30 md:pt-32 md:pb-20 md:px-10 mx-auto flex flex-col gap-12">
    <div data-aos="fade-up" class="text-center mb-6">
      <SectionTitle
        title="Get In Touch"
        paragraf=" Ready to bring your ideas to life? Let’s discuss your next project and create something amazing together."
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div data-aos="fade-right" class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold flex items-center gap-2">
          <i class="fi fi-rr-comment-alt"></i>
          Connect With Me
        </h2>
        <p class="text-gray-500 mb-4">
          Follow me on social media to stay updated with my projects and tech
          insights.
        </p>

        <ContactCard
          icon="fi fi-brands-linkedin"
          title="LinkedIn"
          username="@Raihan Kamaludin"
          link="https://www.linkedin.com/in/raihankamaludin/"
        >
          Connect with me professionally.
        </ContactCard>

        <ContactCard
          icon="fi fi-brands-github"
          title="GitHub"
          username="@RaihanKamaludin"
          link="https://github.com/raihankamaludin"
        >
          Check out my open-source projects.
        </ContactCard>

        <ContactCard
          icon="fi fi-brands-instagram"
          title="Instagram"
          username="@raihankmll_"
          link="https://www.instagram.com/raihankmll_?igsh=MXBnMzFybXpwajl4eA=="
        >
          Follow me for tech updates.
        </ContactCard>
      </div>

      <div data-aos="fade-left">
        <h2 class="text-2xl font-semibold flex items-center gap-2 mb-4">
          <i class="fi fi-rr-envelope"></i>
          Send Me a Message
        </h2>
<form @submit.prevent="sendEmail"
  class="p-6 rounded-2xl shadow bg-white flex flex-col gap-4"
>
  <div class="flex flex-col gap-2">
    <label class="font-medium">Name *</label>
    <input
      v-model="form.name"
      type="text"
      class="border border-gray-300 rounded-xl p-3 focus:border-primary outline-none"
      placeholder="Your full name"
      required
    />
  </div>

  <div class="flex flex-col gap-2">
    <label class="font-medium">Email *</label>
    <input
      v-model="form.email"
      type="email"
      class="border border-gray-300 rounded-xl p-3 focus:border-primary outline-none"
      placeholder="you@email.com"
      required
    />
  </div>

  <div class="flex flex-col gap-2">
    <label class="font-medium">Subject</label>
    <input
      v-model="form.subject"
      type="text"
      class="border border-gray-300 rounded-xl p-3 focus:border-primary outline-none"
      placeholder="Project inquiry, collaboration, etc."
    />
  </div>

  <div class="flex flex-col gap-2">
    <label class="font-medium">Message *</label>
    <textarea
      v-model="form.message"
      rows="4"
      class="border border-gray-300 rounded-xl p-3 focus:border-primary outline-none"
      placeholder="Tell me about your project..."
      required
    ></textarea>
  </div>

  <button
    class="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition"
  >
    Send Message
  </button>
</form>

      </div>
    </div>
  </section>
</template>

<script setup>
import ContactCard from "../components/ContactCard.vue";
import SectionTitle from "../components/SectionTitle.vue";
import { onMounted } from "vue";
import { ref } from "vue"
import emailjs from "emailjs-com"

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
})

const SERVICE_ID = "service_6wsnz3f"
const TEMPLATE_ID = "template_qz44yfe"
const PUBLIC_KEY = "0uV_kToFkuGarmVSe"

function sendEmail() {
  emailjs.send(SERVICE_ID, TEMPLATE_ID, form.value, PUBLIC_KEY)
    .then(() => {
      alert("Pesan berhasil dikirim! 🎉")
      form.value = { name: "", email: "", subject: "", message: "" }
    })
    .catch((err) => {
      alert("Gagal mengirim pesan.")
      console.log(err)
    })
}

onMounted(() => {
  if (window.AOS) window.AOS.refresh();
});
</script>
