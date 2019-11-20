function createInitData() {
  return [
    _data1(),
    _data2(),
    _data3(),
  ];
}

function  _data1() {
  return {
    user: { name: '本好き太郎', avatar_url: './data/1/avatar.png' },
    statistics: { like: 214, follow: 34, follower: 300 },
    bookshelf: {
      name: '積読ベスト9',
      books: [
        { cover_url: 'https://cover.openbd.jp/9784000010870.jpg', link_count: 2 },
        { cover_url: 'https://cover.openbd.jp/9784000241793.jpg', link_count: 1 },
        { cover_url: 'https://cover.openbd.jp/9784000245395.jpg', link_count: 1 },
        { cover_url: 'https://cover.openbd.jp/9784000613668.jpg', link_count: 4 },
        { cover_url: 'https://cover.openbd.jp/9784000613675.jpg', link_count: 3 },
        { cover_url: 'https://cover.openbd.jp/9784000613705.jpg', link_count: 2 },
        { cover_url: 'https://cover.openbd.jp/9784001126860.jpg', link_count: 4 },
        { cover_url: 'https://cover.openbd.jp/9784098604111.jpg', link_count: 0 },
        { cover_url: 'https://cover.openbd.jp/9784098604425.jpg', link_count: 1 },
      ]
    }
  };
}
function  _data2() {
  return {
    user: { name: '店主やまだ', avatar_url: './data/2/avatar.jpg' },
    statistics: { like: 24, follow: 4, follower: 30 },
    bookshelf: {
      name: '今月の買って良かった本',
      books: [
        { cover_url: 'https://cover.openbd.jp/9784098604555.jpg', link_count: 4 },
        { cover_url: 'https://cover.openbd.jp/9784098604999.jpg', link_count: 1 },
        { cover_url: 'https://cover.openbd.jp/9784098605002.jpg', link_count: 3 },
        { cover_url: 'https://cover.openbd.jp/9784098605026.jpg', link_count: 0 },
        { cover_url: 'https://cover.openbd.jp/9784098605057.jpg', link_count: 0 },
        { cover_url: 'https://cover.openbd.jp/9784098605071.jpg', link_count: 4 },
        { cover_url: 'https://cover.openbd.jp/9784098605095.jpg', link_count: 2 },
        { cover_url: 'https://cover.openbd.jp/9784098706440.jpg', link_count: 2 },
        { cover_url: 'https://cover.openbd.jp/9784098706457.jpg', link_count: 2 },
      ]
    }
  };
}
function  _data3() {
  return {
    user: { name: 'ほろ酔いサラリーマン', avatar_url: './data/3/avatar.jpg' },
    statistics: { like: 124, follow: 0, follower: 400 },
    bookshelf: {
      name: '読んだら自分の人生を後悔した本',
      books: [
        { cover_url: 'https://cover.openbd.jp/9784065172384.jpg', link_count: 1 },
        { cover_url: 'https://cover.openbd.jp/9784000010870.jpg', link_count: 4 },
        { cover_url: 'https://cover.openbd.jp/9784000241793.jpg', link_count: 1 },
        { cover_url: 'https://cover.openbd.jp/9784000245395.jpg', link_count: 1 },
        { cover_url: 'https://cover.openbd.jp/9784000613668.jpg', link_count: 3 },
        { cover_url: 'https://cover.openbd.jp/9784000613675.jpg', link_count: 0 },
        { cover_url: 'https://cover.openbd.jp/9784000613705.jpg', link_count: 3 },
        { cover_url: 'https://cover.openbd.jp/9784296104109.jpg', link_count: 2 },
        { cover_url: 'https://cover.openbd.jp/9784297106300.jpg', link_count: 4 },
      ]
    }
  };
}

