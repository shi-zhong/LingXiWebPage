import './style.less';

interface BottomNavigativeBarItemProps {
  icon: React.ReactNode;
  url: string;
  label: string;
  check?: boolean;
  onClick?: (l: string) => void;
}

const prefix = 'bottom-navigative-bar-item-';

const BottomNavigativeBarItem = (props: BottomNavigativeBarItemProps) => {
  const { icon, check, label, url, onClick } = props;

  const handleClick = () => {
    if (!check) {
      onClick && onClick(url);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={prefix}
      style={{ color: check ? 'blue' : 'grey' }}
    >
      <div className={prefix + 'inner-container'}>
        <div style={{ textAlign: 'center', fontSize: 16 }}>{icon}</div>
        <span className={prefix + ''} style={{ textAlign: 'center' }}>
          {label}
        </span>
      </div>
    </div>
  );
};

export default BottomNavigativeBarItem;
export { BottomNavigativeBarItemProps };
