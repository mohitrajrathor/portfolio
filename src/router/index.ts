import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import NotFound from "../components/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
  { path: "/:pathMatch(.*)*", component: NotFound }, // Catch-all route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
