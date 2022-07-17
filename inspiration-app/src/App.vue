<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav id="navigation" aria-label="Menu">
    <span id="home"><RouterLink to="/"><img src="/favicon.ico"/></RouterLink></span>
    <label for="toggle-mobile-menu" aria-label="Menu">&#9776;</label>
    <input id="toggle-mobile-menu" type="checkbox" />
    <ul id="main-menu">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
  <section>
    <h1><RouterLink to="/">Inspiration of the day</RouterLink></h1>
    <RouterView />
  </section>
</template>

<style scoped>
</style>
