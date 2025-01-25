import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import NotFound from "../components/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/portfolio/", component: Home },
  { path: "/portfolio/about", component: About },
  { path: "/portfolio/projects", component: Projects },
  { path: "/portfolio/contact", component: Contact },
  { path: "/portfolio/:pathMatch(.*)*", component: NotFound }, // Catch-all route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
