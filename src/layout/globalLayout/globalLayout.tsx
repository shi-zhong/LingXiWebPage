import { useState } from 'react';
import BottomNavigativeBar from '@/component/BottomNavigativeBar/BottomNavigativeBar';
import '../index.less';

interface Props extends React.PropsWithChildren<any> {}

interface PageProps extends React.PropsWithChildren<any> {}

const Page = (props: PageProps) => {
  const [state, setState] = useState(false);

  return (
    <div className={'page-' + (state ? 'open' : 'close')}>{props.children}</div>
  );
};

const GlobalLayout = (props: Props) => {
  const { children } = props;

  const [url, setUrl] = useState(document.location.pathname);

  return (
    <div>
      {/* 主页page */}
      {/*  */}
      <div>
        {children}
        <BottomNavigativeBar history={props.history} />
      </div>
      {/* 子页 page, 拥有相对应的 动画 */}
      {/* <div>{children}</div> */}
    </div>
  );
};

export default GlobalLayout;
