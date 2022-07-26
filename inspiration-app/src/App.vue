<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
    showQuote: function (c, d) {
      console.log("showQuote c", c, "d", d);
      this.changeCategory(c);
      this.changeDay(d);
    },
    to: function (c=this.category, d=this.today) {
      return { name: 'quote', params: { category: c, day: d }}
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
  },
  created() {
    console.log("*** App is created.");
    console.log("all quotes are loaded", quotes);
  }
}
</script>

<template>
  <nav id="navigation" aria-label="Menu">
    <span id="home"><RouterLink to="/"><img src="/favicon.ico"/></RouterLink></span>
    <label for="toggle-mobile-menu" aria-label="Menu">&#9776;</label>
    <input id="toggle-mobile-menu" type="checkbox" />
    <ul id="main-menu">
      <li><RouterLink to="/">Home</RouterLink></li>
      <RouterLink v-for="category in categories()" v-bind:key="category.id" :to="to(category)" @click="showQuote(category,today)"><li>{{ category }} </li></RouterLink>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
  <section>
    <h1><RouterLink to="/">Inspiration of the day</RouterLink></h1>
    <RouterView :show="show" :prev="prev" :next="next" :category="category" :today="today" @prev-next-click="showQuote"/>
  </section>
</template>

<style scoped>
</style>
