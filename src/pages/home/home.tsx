import { Image } from 'antd';
import PageWithBar from '@/component/PageWithBar/PageWithBar';
import Block from '@/component/Block/Block';
// import Img1 from '@/assets/imgs/img1.jpg';
// import RC from '@/assets/imgs/RC.jpg';
// import RC1 from '@/assets/imgs/RC1.jpg';
// import RC2 from '@/assets/imgs/RC2.jpg';
// import RC3 from '@/assets/imgs/RC3.jpg';

// import Edit from '@/assets/edit.svg';
const Edit = './static/edit.svg';

import './home.less';
import { connect } from 'dva';

const prefix = 'home-';

const Home = (props: any) => {
  const { blocks } = props;
  const name = '灰楚楚';
  const url =
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

  return (
    <PageWithBar>
      <div className={prefix + 'head'}>
        <div className={prefix + 'head-title'}>首页</div>
        <div className={prefix + 'avatar'}>
          <Image
            className={prefix + 'avatar-image'}
            style={{ borderRadius: '50%', margin: '0 auto', height: 70 }}
            width={70}
            src={url}
          />
          <div className={prefix + 'avatar-username'}>{name}</div>
        </div>
      </div>
      <div
        className={prefix + 'user-draw-button'}
        onClick={() => {
          if (blocks.length === 5) {
            props.history.push('/mood-draw');
          } else {
            props.history.push('/mood-draw2');
          }
        }}
      >
        用户画像
      </div>
      <div>
        {blocks.map((block: any, index: number) => (
          <Block key={`${index}++${block.date}`} {...block} />
        ))}
      </div>
      <div
        className={prefix + 'edit'}
        onClick={() => {
          props.history.push('/online-analysis');
        }}
      >
        <img src={Edit} alt="edit" />
      </div>
    </PageWithBar>
  );
};

export default connect(({ home }: any) => ({
  blocks: home.blocks,
}))(Home);
