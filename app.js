this.today = 'f1';
const Show = {
    template: '<article>{{ this.$router.app.quoteOf(this.$route.params.day) }}<p>{{ this.$router.app.show.message }}</p><h2>{{ this.$router.app.show.author }}</h2></article>'
}
const routes = [
    { path: '/show/:day', component: Show },
    { path: '/', redirect: '/show/' + this.today }
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
                day: 'j1'
            }, {
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                author: 'Lorem ipsum',
                day: 'j2'
            }, {
                message: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                author: 'Lorem ipsum',
                day: 'f1'
            }, {
                message: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. ',
                author: 'Lorem ipsum',
                day: 'm1'
            }
        ],
        today: this.today,
        prev: '',
        next: ''
    },
    methods: {
        quoteOf: function (day) {
            console.log("quoteOf", day)
            var id = this.idbyDay(day);
            this.show = this.quotes[id];
            this.prev = '';
            if (id > 0)
                this.prev = this.quotes[this.idbyDay(day) - 1].day;
            this.next = '';
            if (id >= 0 && id < this.quotes.length - 1 && id < this.idbyDay(this.today))
                this.next = this.quotes[this.idbyDay(day) + 1].day;
        },
        idbyDay: function (day) {
            const id = this.quotes.findIndex(q => q.day === day);
            return id !== -1 ? id : 0;
        }
    },
    created: function () {
        this.quoteOf(this.today);
    }
})
