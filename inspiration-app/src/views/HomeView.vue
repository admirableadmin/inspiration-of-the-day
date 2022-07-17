<script setup>
import TheQuote from '@/components/TheQuote.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <article>
    <TheQuote author="vuejs" message="hello world" daylong="today" />
  </article>
  <nav>
    <RouterLink class="button prev" to="/" >&lt;&lt; past</RouterLink>
    <RouterLink class="button next" to="/" >next &gt;&gt;</RouterLink>
  </nav>
</template>
