function today() {
    console.log("today");
    return new Date().toLocaleString("en-GB", {day: "numeric", month: "short"}).replace(/\./g, "").replace(" ", "-").toLowerCase();
}
const Search = {
    template: '<article><h2>{{author}}</h2><p v-for="quote in $router.app.filterAuthor(author)">{{quote.message}}</p><em>All inspirations with {{$router.app.category}}.</em></article>',
    props: ['author']
}
const Inspiration = {
    template: '<article><h2>{{ showDay() }}<router-link :to="toSearch($router.app.show.author)">{{ $router.app.show.author }}</router-link></h2><p>{{ $router.app.show.message }}</p><em>{{ $router.app.show.daylong }}</em></article>',
    methods: {
        showDay: function () {
            console.log("showDay");
            this.$router.app.today = today();
            this.$router.app.changeCategory(this.$route.params.category);
            this.$router.app.changeDay(this.$route.params.day);
        },
        toSearch: function (a) {
            return { name: 'search', params: { author: a }}
        }
    }
}
const About = {
    template: '<article><h2>About</h2><p>Shows a predefined inspiration message of the day.</p><em><a href="https://github.com/andpei/inspiration-of-the-day">Fork me on GitHub</a></em></article>'
}
const router = new VueRouter({
    routes: [
        { path: '/search/:author', name: 'search', component: Search, props: true },
        { path: '/:category/:day', name: 'inspiration', component: Inspiration },
        { path: '/about', component: About },
        { path: '/', redirect: '/happiness/' + today() }
    ]
})
const app = new Vue({
    router,
    el: '#app',
    data: {
        category: '',
        quotes: '',
        today: today(),
        prev: '',
        next: ''
    },
    methods: {
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
        filterAuthor: function (author) {
            return this.quotes.filter(q => q.author === author);
        }
    }
})
