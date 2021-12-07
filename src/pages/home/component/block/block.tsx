import { Image } from 'antd';
import './block.less';

const prefix = 'block-';

interface BlockProps {
  day: string;
  date: string;
}

const Block = (props: BlockProps) => {
  // const { day, date } = props;
  const day = '今天';
  const date = 201;

  return (
    <div className={prefix + 'container'}>
      <div className={prefix + 'left-decoration'}>
        <div></div>
      </div>
      <div className={prefix + 'right'}>
        <div className={prefix + 'title'}>
          <div className={prefix + 'title-left'}>{day}</div>
          <div className={prefix + 'title-right'}>第{date}天</div>
        </div>
        <div className={prefix + 'content'}>
          <div>image.map()</div>
          <div>content</div>
          <div>全文</div>
        </div>
      </div>
    </div>
  );
};

export default Block;
