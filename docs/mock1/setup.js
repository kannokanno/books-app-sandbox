new Vue({
  el: '#app',
  data: {
    showInitMessage: false,
    showSearchResult: false,
    searchResults: [
      { cover_url: 'https://cover.openbd.jp/9784000613705.jpg', title: '', author: '' },
    ],
  },
  created: function() {
  },
  methods: {
    showSetupForm: function() {
      this.showInitMessage = false;
    },
  },
  computed: {
  }
});
