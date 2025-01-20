<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
nav {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #333;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
