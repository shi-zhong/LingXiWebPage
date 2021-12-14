import { CSSProperties } from '@umijs/renderer-react/node_modules/@types/react';
import { Carousel } from 'antd';
import Block from '@/component/Block/Block';
import PageWithBar from '@/component/PageWithBar/PageWithBar';
import ToolBar from '@/component/ToolsBar/ToolBar';
import Card from '@/component/Card/Card';

// import RC from '@/assets/imgs/RC.jpg';
// import RC1 from '@/assets/imgs/RC1.jpg';
// import RC2 from '@/assets/imgs/RC2.jpg';
// import RC3 from '@/assets/imgs/RC3.jpg';

const RC = './static/RC.970c46a6.jpg';
const RC1 = './static/RC1.2806b8c9.jpg';
const RC2 = './static/RC2.b7e31c5c.jpg';
const RC3 = './static/RC3.65baf0d3.jpg';

const Img1 = './static/img1.1609c11d.jpg';

import {
  HomeFilled,
  BulbFilled,
  SettingFilled,
  UsbFilled,
} from '@ant-design/icons';

const square = (props: any) => {
  const onChange = (a: number) => {
    console.log(a);
  };

  const contentStyle: CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const imgStyle: CSSProperties = {
    height: '100%',
    margin: '0  auto',
  };

  const blocks = [
    {
      day: '今天',
      date: '202',
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
      day: '昨天',
      date: '201',
      draws: [RC, RC1, RC2, RC3],
      content: `又是一个不眠的夜晚,凌晨四点,最近工作丢了,天天吃不好睡不好,精神要崩溃,欠的网贷也要全面逾期了,真怕他们给我家人打骚扰电话。很多时候都觉得自己活的真失败,对不起父母想一死解脱`,
    },
    {
      day: '前天',
      date: '200',
      draws: [RC2, RC3],
      content: `不知不觉就要毕业了,莫名也留下了很多遗憾,无论白天黑夜,某一个时刻那种混身难受的感觉就会莫名跑出来,然后再冲到身体里,一瞬整个人收缩,有点难受……`,
    },
  ];

  return (
    <PageWithBar>
      <Carousel
        style={{ width: '90%', margin: '20px auto' }}
        afterChange={onChange}
      >
        <div>
          <div style={contentStyle}>
            <img style={imgStyle} src={RC} alt="1" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img style={imgStyle} src={RC1} alt="2" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img style={imgStyle} src={RC2} alt="3" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img style={imgStyle} src={RC3} alt="4" />
          </div>
        </div>
      </Carousel>
      <div>
        {blocks.map((block: any, index) => (
          <Block key={block.date + index} {...block} />
        ))}
      </div>
    </PageWithBar>
  );
};

export default square;

/**

    <div>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div>
        <ToolBar
          history={props.history}
          itemsStyle={{
            iconStyle: {
              fontSize: 25,
            },
          }}
          items={[
            {
              label: '功能1',
              icon: <HomeFilled />,
              url: '/online-analysis',
            },
            {
              label: '功能2',
              icon: <BulbFilled />,
              url: '/path2',
            },
            {
              label: '功能3',
              icon: <UsbFilled />,
              url: '/path3',
            },
            {
              label: '功能4',
              icon: <SettingFilled />,
              url: '/path4',
            },
          ]}
        />

        <Card title="生活小贴士" style={{ width: '80%', margin: '10px auto' }}>
          <div style={{ width: '80%', height: 200 }}></div>
        </Card>
      </div>
    </div>



 */
