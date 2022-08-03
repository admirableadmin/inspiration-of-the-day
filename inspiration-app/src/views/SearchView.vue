<script setup>
import { RouterLink } from 'vue-router'
import quotes from '@/assets/quotes.js'
</script>

<script>
export default {
props: {
    author: String,
  },
  methods: {
    to: function (c=this.category, d=this.today) {
      return { name: 'quote', params: { category: c, day: d }}
    },
    categories: function () {
      return Object.keys(quotes);
    },
    filterAuthor: function (category, author) {
      console.log("filterAuthor", category, "author", author);
      return quotes[category].filter(q => q.author === author);
    }
  }
};
</script>

<template>
  <article><h2>{{author}}</h2>
    <ul>
      <li v-for="category in categories()">
        {{category}}
        <ul>
          <li v-for="quote in filterAuthor(category, author)">
            <RouterLink :to="to(category, quote.day)">{{quote.day}}</RouterLink> {{quote.message.substring(0, 40)}} &hellip;
          </li>
        </ul>
      </li>
    </ul>
    <em>All inspirations from the same author.</em>
  </article>
</template>
