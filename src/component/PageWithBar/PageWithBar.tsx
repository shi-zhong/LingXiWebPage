/**
 * 仅仅用于 带有底部导航栏的 页面
 */

import './PageWithBar.less';

interface PageWithBarProps extends React.PropsWithChildren<any> {}

const PageWithBar = (props: PageWithBarProps) => {
  return <div className="page-with-bar">{props.children}</div>;
};

export default PageWithBar;
