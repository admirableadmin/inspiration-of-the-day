const today = new Date().toLocaleString("de-de", {day: "numeric", month: "short"}).replace(/\./g, "").replace(" ", "-").toLowerCase();
const Inspiration = {
    template: '<article><h2>{{ showDay() }}{{ $router.app.show.author }}</h2><p>{{ $router.app.show.message }}</p><em>{{ $router.app.show.daylong }}</em></article>',
    methods: {
        showDay: function () {
            console.log("showDay");
            this.$router.app.changeCategory(this.$route.params.category);
            this.$router.app.changeDay(this.$route.params.day);
        }
    }
}
const router = new VueRouter({
    routes: [
        { path: '/:category/:day', name: 'inspiration', component: Inspiration },
        { path: '/', redirect: '/happiness/' + today }
    ]
})
const app = new Vue({
    router,
    el: '#app',
    data: {
        category: '',
        quotes: '',
        today: today,
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
            if (id >= 0 && id < this.quotes.length - 1 && id < this.findDay(today, 2))
                this.next = this.quotes[id + 1].day;
        },
        findDay: function (day, ifFalse) {
            const id = this.quotes.findIndex(q => q.day === day);
            console.log("findDay", day, "id", id);
            return id !== -1 ? id : ifFalse;
        }
    }
})
