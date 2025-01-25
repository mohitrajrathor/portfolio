<template>
  <div class="h-screen flex justify-center">
    <div class="text-center my-auto">
      <h1 class="text-5xl">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/portfolio/">Go back to Home</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
});
</script>

<style scoped></style>
