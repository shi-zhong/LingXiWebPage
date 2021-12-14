const RC = './static/RC.970c46a6.jpg';
const RC1 = './static/RC1.2806b8c9.jpg';
const RC2 = './static/RC2.b7e31c5c.jpg';
const RC3 = './static/RC3.65baf0d3.jpg';
const Img1 = './static/img1.1609c11d.jpg';

export default {
  namespace: 'home',
  state: {
    blocks: [
      {
        day: '今天',
        date: '210',
        draws: [
          RC,
          RC1,
          RC2,
          RC3,
          Img1,
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        ],
        content: `本来开心就很难,谈了3年马上要结婚的男朋友也要跟我分手了心里很痛苦,晚上也睡不好入睡困难做噩梦感觉每天的时间太长了。我什么都不想做没有力气去做。我什么都不想管偏偏不能不管这种逼迫自己的感觉太差了我怕我以后不会开心了,太痛苦了,我甚至可以理解那些选择离开的人对于他们来说真的是种解脱`,
      },
      {
        day: '三天前',
        date: '207',
        draws: [RC, RC1, RC2, RC3],
        content: `又是一个不眠的夜晚,凌晨四点,最近工作丢了,天天吃不好睡不好,精神要崩溃,欠的网贷也要全面逾期了,真怕他们给我家人打骚扰电话。很多时候都觉得自己活的真失败,对不起父母想一死解脱`,
      },
      {
        day: '四天前',
        date: '206',
        draws: [RC2, RC3],
        content: `不知不觉就要毕业了,莫名也留下了很多遗憾,无论白天黑夜,某一个时刻那种混身难受的感觉就会莫名跑出来,然后再冲到身体里,一瞬整个人收缩,有点难受……`,
      },
      {
        day: '一周前',
        date: '203',
        draws: [],
        content: `今天晚上找不到考试音频感觉很难受,明明就是芝麻大小的事情`,
      },
      {
        day: '两周前',
        date: '200',
        draws: [],
        content: `曾经深爱过一个比我大两岁的女孩子,失恋之后。最让我难过的,是我和她再也无法缩小两年的差距。只会越来越大。两个人都走上了不同的路,也许再无交集。`,
      },
    ],
  },
  effects: {},
  reducers: {
    addBlock(state: any, { payload }: any) {
      return { ...state, blocks: payload };
    },
  },
};
