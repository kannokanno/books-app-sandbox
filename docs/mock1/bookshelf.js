new Vue({
  el: '#app',
  data: {
    index: 0,
    initData: [],
    user: null,
    bookshelf: null,
    statistics: null,

    showSearchSection: false,
    showSearchResult: false,
    addIndex: 0,
    searchResults: [
      { cover_url: 'https://cover.openbd.jp/9784000010870.jpg', link_count: 2, title: '', author: '' },
      { cover_url: 'https://cover.openbd.jp/9784000241793.jpg', link_count: 1, title: '', author: '' },
      { cover_url: 'https://cover.openbd.jp/9784000245395.jpg', link_count: 1, title: '', author: '' },
      { cover_url: 'https://cover.openbd.jp/9784000613668.jpg', link_count: 4, title: '', author: '' },
      { cover_url: 'https://cover.openbd.jp/9784000613675.jpg', link_count: 3, title: '', author: '' },
      { cover_url: 'https://cover.openbd.jp/9784000613705.jpg', link_count: 2, title: '', author: '' },
      { cover_url: 'https://cover.openbd.jp/9784001126860.jpg', link_count: 4, title: '', author: '' },
      { cover_url: 'https://cover.openbd.jp/9784098604111.jpg', link_count: 0, title: '', author: '' },
      { cover_url: 'https://cover.openbd.jp/9784098604425.jpg', link_count: 1, title: '', author: '' },
    ],
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
      var nextIndex = this.index + 1;
      if(nextIndex > 4) {
        nextIndex = 1;
      }
      this.index = nextIndex;
      this.updateData(this.initData[this.index]);
    },


    showAddForm: function(addIndex) {
      this.addIndex = addIndex;
      this.showSearchSection = true;
    },
    addBook: function(book) {
      this.bookshelf.books[this.addIndex] = book;
      this.showSearchSection = false;
      this.showSearchResult = false;
    },
  },
  computed: {
  }
});
