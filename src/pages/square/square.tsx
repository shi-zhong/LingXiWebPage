import { CSSProperties } from '@umijs/renderer-react/node_modules/@types/react';
import { Carousel } from 'antd';
import ToolBar from '@/component/ToolsBar/ToolBar';
import Card from '@/component/Card/Card';

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

  return (
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
  );
};

export default square;
