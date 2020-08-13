var app = new Vue({
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
        last: '',
        next: ''
    },
    methods: {
        quoteOf: function (day) {
            var id = this.idbyDay(day);
            this.show = this.quotes[id];
            if (id > 0)
                this.last = this.quotes[this.idbyDay(day)-1].day;
            else
                this.last = '';
            if (id >= 0 && id < this.quotes.length - 1 && id < this.idbyDay(this.today))
                this.next = this.quotes[this.idbyDay(day)+1].day;
            else
                this.next = '';
        },
        idbyDay: function (day) {
            return this.quotes.findIndex(q => q.day === day);
        }
    },
    created: function () {
        this.today = 'f1';
        this.quoteOf(this.today);
    }
})
