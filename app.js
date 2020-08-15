this.today = new Date().toLocaleString("de-de", {day: "numeric", month: "long"}).replace(" ", "");
const Inspiration = {
    template: '<article><h2>{{ showDay() }}</h2><p>{{ this.$router.app.show.message }}</p><em>{{ this.$router.app.show.author }}</em></article>',
    methods: {
        showDay: function () {
            console.log("showDay");
            this.$router.app.changeDay(this.$route.params.day);
            return this.$router.app.show.day.replace(".", ". ");
        }
    }
}
const routes = [
    { path: '/inspiration/:day', component: Inspiration },
    { path: '/', redirect: '/inspiration/' + this.today }
]
const router = new VueRouter({routes})
var app = new Vue({
    router,
    el: '#app',
    data: {
        quotes: [
            {
                message: 'Hello Vue.js!',
                author: 'demo',
                day: '1.Januar'
            }, {
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                author: 'Lorem ipsum',
                day: '1.Februar'
            }, {
                message: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                author: 'Lorem ipsum',
                day: '15.August'
            }, {
                message: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. ',
                author: 'Lorem ipsum',
                day: '31.Dezember'
            }
        ],
        today: this.today,
        prev: '',
        next: ''
    },
    methods: {
        changeDay: function (day) {
            console.log("changeDay", day);
            var id = this.findDay(day, 0);
            this.show = this.quotes[id];
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
        }
    }
})
