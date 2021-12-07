import Card from '@/component/Card/Card';
import { RightOutlined } from '@ant-design/icons';

import './Mine.less';

const Mine = () => {
  const bar = (
    <div className="option-bar">
      <div className="option-avatar"></div>
      <div className="option-title">
        <span>infomation</span>
      </div>
      <div className="option-to">
        <RightOutlined />
      </div>
    </div>
  );

  return (
    <div>
      <div style={{ }}></div>
      <div>
        <Card style={{ width: '90%', margin: '120px auto' }}>
          {bar}
          <hr style={{ opacity: 0.3 }} />
          {bar}
          <hr style={{ opacity: 0.3 }} />
          {bar}
          <hr style={{ opacity: 0.3 }} />
          {bar}
          <hr style={{ opacity: 0.3 }} />
          {bar}
          <hr style={{ opacity: 0.3 }} />
          {bar}
        </Card>
      </div>
    </div>
  );
};

export default Mine;
