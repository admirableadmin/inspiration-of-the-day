const today = new Date().toLocaleString("de-de", {day: "numeric", month: "short"}).replace(/\./g, "").replace(" ", "-").toLowerCase();
const happiness = [
    {
        message: 'Hello Vue.js!',
        author: 'demo',
        day: '1-jan'
    }, {
        message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        author: 'Lorem ipsum',
        day: '1-feb'
    }, {
        message: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        author: 'Lorem ipsum',
        day: '15-aug'
    }, {
        message: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. ',
        author: 'Lorem ipsum',
        day: '31-dec'
    }
]
const Inspiration = {
    template: '<article><h2>{{ showDay() }}{{ $router.app.show.author }}</h2><p>{{ $router.app.show.message }}</p><em>{{ $router.app.show.daylong }}</em></article>',
    methods: {
        showDay: function () {
            console.log("showDay");
            this.$router.app.changeDay(this.$route.params.day);
        }
    }
}
const router = new VueRouter({
    routes: [
        { path: '/happiness/:day', component: Inspiration },
        { path: '/', redirect: '/happiness/' + today }
    ]
})
const app = new Vue({
    router,
    el: '#app',
    data: {
        quotes: happiness,
        today: today,
        prev: '',
        next: ''
    },
    methods: {
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
