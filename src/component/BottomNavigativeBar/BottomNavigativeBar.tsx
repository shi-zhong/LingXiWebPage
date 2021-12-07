import {
  HomeFilled,
  BulbFilled,
  SettingFilled,
  UsbFilled,
} from '@ant-design/icons';
import { useState } from 'react';
import BottomNavigativeBarItem, {
  BottomNavigativeBarItemProps,
} from './BottomNavigativeBarItem';

import './style.less';

const prefix = 'bottom-navigative-bar-';

const BottomNavigativeBar = (props: any) => {
  const [url, setUrl] = useState('/home');

  const config: BottomNavigativeBarItemProps[] = [
    {
      label: '首页',
      icon: <HomeFilled />,
      url: '/home',
    },
    {
      label: '百科',
      icon: <BulbFilled />,
      url: '/home1',
    },
    {
      label: '广场',
      icon: <UsbFilled />,
      url: '/square',
    },
    {
      label: '我的',
      icon: <SettingFilled />,
      url: '/mine',
    },
  ];

  const onClick = (url: string) => {
    setUrl(url);

    props.history.push(url)
  };

  return (
    <div className={prefix}>
      <div className={prefix + 'items-container'}>
        {config.map((item, index) => {
          return (
            <BottomNavigativeBarItem
              key={item.url}
              {...item}
              check={url === item.url}
              onClick={onClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigativeBar;
