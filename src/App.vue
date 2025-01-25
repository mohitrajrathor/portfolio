<template>
  <div id="app">
    <!-- navbar -->
    <Navbar />

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
});
</script>

<style>
#app {
  background-color: #e5e4e5;
}
</style>
