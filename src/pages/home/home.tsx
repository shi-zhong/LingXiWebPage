import { Image } from 'antd';
import Block from './component/block/block';
import './home.less';

const prefix = 'home-';

const Home = () => {
  const name = 'nickname';
  const url =
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

  return (
    <div>
      <div className={prefix + 'head'}>
        <div className={prefix + 'head-title'}>首页</div>
        <div>
          <div className={prefix + 'avatar'}>
            <Image
              className={prefix + 'avatar-image'}
              style={{ borderRadius: '50%', margin: '0 auto' }}
              width={70}
              src={url}
            />
            <div className={prefix + 'avatar-username'}>{name}</div>
          </div>
        </div>
      </div>
      <div className={prefix + 'user-draw-button'}>用户画像</div>
      <div>
        <Block  />
      </div>
    </div>
  );
};

export default Home;
