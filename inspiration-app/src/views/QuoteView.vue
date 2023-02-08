<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
export default {
  emits: ['prev-next-click'],
  props: {
    show: Object,
    prev: String,
    next: String,
    category: String,
    categorySwitch: String,
    today: String,
  },
  methods: {
    showQuoteParent: function(c, d) {
      console.log("showQuoteParent", c, d);
      // on button click show quote from fixture by category and pref/next day
      // emit a call from QuoteView (child) to run the showQuote in main App (parent) 
      this.$emit("prev-next-click", c, d);
      console.log("this.show", this.show);
    },
    to: function (c=this.category, d=this.today) {
      return { name: 'quote', params: { category: c, day: d }}
    },
    toSearch: function (a) {
      return { name: 'search', params: { author: a }}
    },
  },
  created() {
    console.log("*** QuoteView is created.");
    // on pageload show quote from URL by category and day
    console.log("this.$route.params", this.$route.params);
    this.showQuoteParent(this.$route.params.category, this.$route.params.day);
  }
};
</script>

<template>
  <article>
    <h2><RouterLink :to="toSearch(show.author)">{{ show.author }}</RouterLink></h2>
    <p>{{ show.message }}</p>
    <em>{{ show.daylong }}</em>
  </article>
  <nav>
    <RouterLink class="button prev" :to="to(category,prev)" v-if="prev" :title="prev" @click="showQuoteParent(category,prev)">&lt;&lt; past</RouterLink>
    <RouterLink class="button category" :to="to(categorySwitch,show.day)" v-if="show.day" :title="categorySwitch" @click="showQuoteParent(categorySwitch,show.day)">&#8651;</RouterLink>
    <RouterLink class="button next" :to="to(category,next)" v-if="next" :title="next" @click="showQuoteParent(category,next)">next &gt;&gt;</RouterLink>
  </nav>
</template>
