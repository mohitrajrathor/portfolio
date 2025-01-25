<template>
  <nav class="pt-10 container mx-auto">
    <div class="flex justify-between">
      <!-- branding -->
      <div class="font-bold">
        <router-link to="/portfolio/"
          >mohitraj<span class="text-red-400">rathor</span></router-link
        >
      </div>

      <!-- links -->
      <div class="font-medium">
        <router-link
          to="/portfolio/about"
          class="me-3 hover:font-semibold hover:text-xl"
          >About <span class="text-red-400">me</span></router-link
        >
        <router-link
          to="/portfolio/projects"
          class="me-3 hover:font-semibold hover:text-xl"
          >Project</router-link
        >
        <router-link
          to="/portfolio/experiance"
          class="me-3 hover:font-semibold hover:text-xl"
          >Experiance</router-link
        >
      </div>

      <div class="font-bold">
        <router-link to="/portfolio/contact">Contact me</router-link>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Navbar",
});
</script>
<style></style>
