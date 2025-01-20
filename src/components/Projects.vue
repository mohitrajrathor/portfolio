<template>
  <div class="projects">
    <h2>Projects</h2>
    <ul>
      <li>Project 1</li>
      <li>Project 2</li>
      <li>Project 3</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Projects",
});
</script>

<style scoped>
.projects {
  padding: 20px;
}
</style>
