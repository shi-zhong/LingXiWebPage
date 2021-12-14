import { useState, CSSProperties } from 'react';
import { Image } from 'antd';
import './moodDraw.less';
import { LeftOutlined } from '@ant-design/icons';
import AppBar from '@/component/AppBar/AppBar_navi';

// import Chart1 from '@/assets/imgs/chart1.png';
// import Chart2 from '@/assets/imgs/chart2.png';

const Chart1 = './static/chart1.png';
const Chart2 = './static/chart2.png';

const prefix = 'mood-draw-';

const MoodDraw = (props: any) => {
  const content = `主人日常生活中要学会察觉自身情绪变化并接纳负性情绪，不必苛责自己，保持平稳心态。可以多与家人，朋友倾诉，保持生活多样性，转移注意力到自己感兴趣的事情上，防止信息过载对心理造成的冲击。保持良好的生活节奏和习惯。 `;

  const [tab, setTab] = useState('wine');
  const onTabContentChange = (key: string) => {
    setTab(key);
  };

  const Tab = (key: string, content: string) => {
    return (
      <div
        className={
          prefix +
          'tab-block ' +
          (tab === key ? prefix + 'tab-block-chosen' : '')
        }
        onClick={() => onTabContentChange(key)}
      >
        {content}
      </div>
    );
  };

  const getTabPane = () => {
    let content = '';

    switch (tab) {
      case 'wine':
        content = Chart1;
        break;
      case 'factor':
        content = Chart2;
        break;
    }

    return (
      <div className={prefix + 'tab-pane'}>
        <Image src={content} width={'100%'} />
      </div>
    );
  };

  const style: CSSProperties = {
    fontWeight: 'bold',
    color: 'coral',
  };

  return (
    <div className={prefix + 'page'}>
      <AppBar history={props.history} />
      <div className={prefix + 'tab-container'}>
        {getTabPane()}
        <div className={prefix + 'tab-cho-con'}>
          {Tab('wine', '情绪曲线')}
          {Tab('factor', '情绪因素')}
        </div>
      </div>
      <div className={prefix + 'analysis'}>
        <div className={prefix + 'analysis-title'}>心情分析</div>
        <div className={prefix + 'analysis-content'}>
          <p className="p">
            通过这段时间的记录，小樨认为主人的情绪状态中存在
            <span style={style}>乱贴标签</span>和
            <span style={style}>哀伤与丧失</span>和
            <span style={style}>罪责归己</span>的特征。
          </p>
          <p className="p">
            ​主人在描述自己的言语中，可能过于情绪化的给自己贴上了
            <span style={style}>标签</span>
            ，这些标签除了引起自己的负性情绪之外是好无意义的。
          </p>
          <p className="p">
            另外，<span style={style}>罪责归己</span>
            会引发内疚、羞愧和自卑感。其实主人本不必给自己那么大压力，理性的看待事件才是解决问题的关键。
          </p>
          <p className="p">
            对于主人近期的<span style={style}>丧失感</span>
            ，小樨表示非常遗憾，不过生活总要继续，希望主人能尽快从
            <span style={style}>哀伤情绪</span>
            中走出来，积极的面对生活
          </p>
          ​
        </div>
        <div className={prefix + 'analysis-title'}>贴心建议</div>
        <div className={prefix + 'analysis-content'}>
          <p className="p">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default MoodDraw;
