new Vue({
  el: '#app',
  data: {
    index: 0,
    initData: [],
    user: null,
    bookshelf: null,
    statistics: null,
  },
  created: function() {
    this.initData = createInitData();
    this.updateData(this.initData[0]);
  },
  methods: {
    updateData: function(data) {
      this.user = data.user;
      this.bookshelf = data.bookshelf;
      this.statistics = data.statistics;
    },
    showRandomBookshelf: function() {
      var index = Math.floor((this.index + 1) % 3);
      this.index = index;
      this.updateData(this.initData[index]);
    }
  },
  computed: {
  }
});
