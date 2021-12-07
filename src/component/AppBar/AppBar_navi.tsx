import { History } from 'umi';
import { LeftOutlined, TagTwoTone } from '@ant-design/icons';
import Card from '@/component/Card/Card';

import './style.less';

interface AppbarProps {
  history: History;
}

const prefix = 'appbar-navi-';

const AppBar = (props: AppbarProps) => {
  return (
    <div className="appbar-container">
      {/* back */}
      <div
        className={prefix + 'back'}
        onClick={() => {
          props.history.goBack();
        }}
      >
        <LeftOutlined />
      </div>
      <div className={prefix + 'title'}>{document.title}</div>
      {/* 额外操作 */}
      <div className={prefix + 'extra'}>
        <TagTwoTone />
      </div>
    </div>
  );
};

export default AppBar;
