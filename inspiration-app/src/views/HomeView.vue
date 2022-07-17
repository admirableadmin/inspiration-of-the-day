<script setup>
import TheQuote from '@/components/TheQuote.vue'
import { RouterLink } from 'vue-router'
import quotes from '@/assets/quotes.js'
</script>

<script>
export default {
  data() {
    return {
      show: {author: "vuejs", message: "hello world", daylong: "today"}
    }
  },
  methods: {
  },
  created() {
    console.log(quotes);
    this.show = quotes['happiness'][1];
    this.show.daylong = new Date(this.show.day + new Date().getFullYear()).toLocaleString("de-de", {day: "numeric", month: "long", year: "numeric"});
    console.log(this.show);
  }
}
</script>

<template>
  <article>
    <TheQuote :author="show.author" :message="show.message" :daylong="show.daylong" />
  </article>
  <nav>
    <RouterLink class="button prev" to="/" >&lt;&lt; past</RouterLink>
    <RouterLink class="button next" to="/" >next &gt;&gt;</RouterLink>
  </nav>
</template>
