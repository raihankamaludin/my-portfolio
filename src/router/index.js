import { createRouter, createWebHistory } from "vue-router";
import AppContent from "../App.vue";

const routes = [
  { path: "/", component: AppContent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;

