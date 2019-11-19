new Vue({
  el: '#app',
  data: {
    user: null,
    bookshelf: null,
    statistics: null,
  },
  created: function() {
    var data = createData();
    this.user = data[0].user;
    this.bookshelf = data[0].bookshelf;
    this.statistics = data[0].statistics;
  },
  methods: {
  },
  computed: {
  }
});
