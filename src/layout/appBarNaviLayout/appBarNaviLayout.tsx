import './index.less';
import '../index.less';

interface AppbarNaviLayoutProps extends React.PropsWithChildren<any> {
  appBar: React.ReactNode;
}

const prefix = 'appbar-layout';

const AppbarNaviLayout = (props: AppbarNaviLayoutProps) => {
  const { appBar, children } = props;

  return (
    <div>
      {appBar}
      <div className={prefix + '-page'}>{children}</div>
    </div>
  );
};

export default AppbarNaviLayout;
