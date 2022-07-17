<script setup>
import TheQuote from '@/components/TheQuote.vue'
import { RouterLink } from 'vue-router'
import quotes from '@/assets/quotes.js'
</script>

<script>
export default {
  data() {
    return {
      category: '',
      quotes: '',
      today: this.newtoday(),
      prev: '',
      next: '',
      show: {author: "vuejs", message: "hello world", daylong: "today"}
    }
  },
  methods: {
    newtoday: function() {
      console.log("newtoday");
      return new Date().toLocaleString("en-GB", {day: "numeric", month: "short"}).replace(/\./g, "").replace(" ", "-").toLowerCase();
    },
    showDay: function() {
      console.log("showDay");
      //this.today = this.newtoday();
      this.changeCategory(this.$route.params.category);
      this.changeDay(this.$route.params.day);
    },
    to: function (c=this.category, d=this.today) {
      return { name: 'inspiration', params: { category: c, day: d }}
    },
    categories: function () {
      return Object.keys(quotes);
    },
    changeCategory: function (category) {
      console.log("changeCategory", category);
      var id = this.findCategory(category, 0);
      console.log("changeCategory id", id);
      this.category = Object.keys(quotes)[id];
      this.quotes = Object.values(quotes)[id];
      console.log("changeCategory this.category", this.category, "this.quotes", this.quotes);
    },
    findCategory: function (category, ifFalse) {
      const id = Object.keys(quotes).findIndex(q => q === category);
      console.log("findCategory", category, "id", id);
      return id !== -1 ? id : ifFalse;
    },
    changeDay: function (day) {
      console.log("changeDay", day);
      var id = this.findDay(day, 0);
      this.show = this.quotes[id];
      this.show.daylong = new Date(this.show.day + new Date().getFullYear()).toLocaleString("de-de", {day: "numeric", month: "long", year: "numeric"});
      this.prev = '';
      if (id > 0)
        this.prev = this.quotes[id - 1].day;
      this.next = '';
      if (id >= 0 && id < this.quotes.length - 1 && id < this.findDay(this.today, 2))
        this.next = this.quotes[id + 1].day;
    },
    findDay: function (day, ifFalse) {
      const id = this.quotes.findIndex(q => q.day === day);
      console.log("findDay", day, "id", id);
      return id !== -1 ? id : ifFalse;
    },
    filterAuthor: function (category, author) {
      console.log("filterAuthor", category, "author", author);
      return quotes[category].filter(q => q.author === author);
    }
  },
  created() {
    console.log(quotes);
    this.showDay();
    console.log(this.show);
  }
}
</script>

<template>
  <article>
    <TheQuote :author="show.author" :message="show.message" :daylong="show.daylong" />
  </article>
  <nav>
    <RouterLink class="button prev" :to="to(category,prev)" v-if="prev" :title="prev">&lt;&lt; past</RouterLink>
    <RouterLink class="button next" :to="to(category,next)" v-if="next" :title="next">next &gt;&gt;</RouterLink>
  </nav>
</template>
