<script setup>
import TheQuote from '@/components/TheQuote.vue'
import { RouterLink } from 'vue-router'
</script>

<script>
export default {
  emits: ['prev-next-click'],
  props: {
    author: String,
    message: String,
    daylong: String,
    prev: String,
    next: String,
    category: String,
    toprev: Object,
    tonext: Object,
  },
  methods: {
    showDayUpdateParent(c, d) {
      console.log("showDayUpdateParent", c, d);
      this.$emit("prev-next-click", c, d);
    }
  }
};
</script>

<template>
  <article>
    <h2>{{ author }}</h2>
    <p>{{ message }}</p>
    <em>{{ daylong }}</em>
  </article>
  <nav>
    <RouterLink class="button prev" :to="toprev" v-if="prev" :title="prev" @click="showDayUpdateParent(category,prev)">&lt;&lt; past</RouterLink>
    <RouterLink class="button next" :to="tonext" v-if="next" :title="next" @click="showDayUpdateParent(category,next)">next &gt;&gt;</RouterLink>
  </nav>
</template>
