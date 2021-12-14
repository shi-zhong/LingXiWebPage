import Card from '@/component/Card/Card';
import { Image } from 'antd';

import {
  HomeFilled,
  BulbFilled,
  SettingFilled,
  UsbFilled,
} from '@ant-design/icons';

import PageWithBar from '@/component/PageWithBar/PageWithBar';
import './Mine.less';
import '@/pages/home/home.less';

const prefix = 'mine-';

const Mine = () => {
  const name = '灰楚楚';
  const url =
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

  const barItem = [
    {
      icon: <HomeFilled />,
      title: '个人信息',
    },
    {
      icon: <SettingFilled />,
      title: '设置',
    },
    {
      icon: <BulbFilled />,
      title: '推荐给好友',
    },
    {
      icon: <UsbFilled />,
      title: '联系我们',
    },
  ];

  return (
    <PageWithBar>
      <div className={prefix + 'head'}>
        <div className={prefix + 'head-title'}>我的</div>
        <div className="home-avatar">
          <Image
            className="home-avatar-image"
            style={{ borderRadius: '50%', margin: '0 auto' }}
            width={70}
            src={url}
          />
          <div className="home-avatar-username">{name}</div>
        </div>
      </div>
      <div>
        <Card
          style={{
            width: '80%',
            margin: '-40px auto 0 auto',
            borderRadius: 20,
            background: 'white',
          }}
        >
          {barItem.map((item, index) => {
            if (index !== barItem.length - 1) {
              return (
                <div key={item.title + index}>
                  <div className="option-bar">
                    <div style={{ fontSize: 23 }}>{item.icon}</div>
                    <div className="option-title">{item.title}</div>
                  </div>
                  <hr style={{ opacity: 0.3 }} />
                </div>
              );
            }
            return (
              <div key={item.title + index} className="option-bar">
                <div style={{ fontSize: 23 }}>{item.icon}</div>
                <div className="option-title">{item.title}</div>
              </div>
            );
          })}
        </Card>
      </div>
    </PageWithBar>
  );
};

export default Mine;
