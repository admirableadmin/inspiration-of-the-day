<script setup>
import { RouterLink, RouterView } from 'vue-router'
import quotesjs from '@/assets/quotes.js'
</script>

<script>
export default {
  data() {
    return {
      category: '',
      categorySwitch: '',
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
      this.changeCategorySwitch(c);
      this.changeDay(d);
    },
    to: function (c=this.category, d=this.today) {
      return { name: 'quote', params: { category: c, day: d }}
    },
    categories: function () {
      return Object.keys(quotesjs);
    },
    changeCategory: function (category) {
      console.log("changeCategory", category);
      var id = this.findCategory(category, 0);
      console.log("changeCategory id", id);
      this.category = Object.keys(quotesjs)[id];
      this.quotes = Object.values(quotesjs)[id];
      console.log("changeCategory this.category", this.category, "this.quotes", this.quotes);
    },
    changeCategorySwitch: function (category) {
      var all = this.categories();
      var other = all.filter(x => x !== category);
      other.sort( function() { return 0.5 - Math.random() } );
      this.categorySwitch = other[0];
      console.log("changeCategorySwitch this.categorySwitch", this.categorySwitch);
    },
    findCategory: function (category, ifFalse) {
      const id = Object.keys(quotesjs).findIndex(q => q === category);
      console.log("findCategory", category, "id", id);
      return id !== -1 ? id : ifFalse;
    },
    changeDay: function (day) {
      console.log("changeDay", day);
      var id = this.findDay(day, 0);
      this.show = this.quotes[id];
      this.show.daylong = new Date(this.show.day + " " + new Date().getFullYear()).toLocaleString("de-de", {day: "numeric", month: "long", year: "numeric"});
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
    console.log("all quotes are loaded from quotes.js", quotesjs);
  }
}
</script>

<template>
  <nav id="navigation" aria-label="Menu">
    <span id="home"><RouterLink to="/" @click="showQuote('happiness',today)"><img src="/favicon.ico"/></RouterLink></span>
    <label for="toggle-mobile-menu" aria-label="Menu">&#9776;</label>
    <input id="toggle-mobile-menu" type="checkbox" />
    <ul id="main-menu">
      <li><RouterLink to="/" @click="showQuote('happiness',today)">Home</RouterLink></li>
      <RouterLink v-for="category in categories()" v-bind:key="category.id" :to="to(category)" @click="showQuote(category,today)"><li>{{ category }} </li></RouterLink>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
  <section>
    <h1><RouterLink to="/" @click="showQuote('happiness',today)">Inspiration of the day</RouterLink></h1>
    <RouterView :show="show" :prev="prev" :next="next" :category="category" :categorySwitch="categorySwitch" :today="today" @prev-next-click="showQuote"/>
  </section>
</template>

<style scoped>
</style>
