function createData() {
  return [
    _data1(),
  ];
}

function  _data1() {
  return {
    user: { name: 'かんの', avator_url: './data/1/avatar.png' },
    statistics: { like: 214, follow: 34, follower: 300 },
    bookshelf: {
      name: '積読ベスト9',
      books: [
        // TODO: linksの持ち方
        { cover_url: 'https://cover.openbd.jp/9784000010870.jpg' },
        { cover_url: 'https://cover.openbd.jp/9784000241793.jpg' },
        { cover_url: 'https://cover.openbd.jp/9784000245395.jpg' },
        { cover_url: 'https://cover.openbd.jp/9784000010870.jpg' },
        { cover_url: 'https://cover.openbd.jp/9784000241793.jpg' },
        { cover_url: 'https://cover.openbd.jp/9784000245395.jpg' },
      ]
    }
  };
}
