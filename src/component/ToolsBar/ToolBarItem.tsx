import { CSSProperties } from '@umijs/renderer-react/node_modules/@types/react';
import './style.less';

interface ToolBarItemProps {
  icon: React.ReactNode;
  url: string;
  label: string;
  onClick?: (l: string) => void;
  style?: {
    iconStyle?: CSSProperties;
    fontStyle?: CSSProperties;
  };
  itemStyle?: {
    iconStyle?: CSSProperties;
    fontStyle?: CSSProperties;
  };
}

const prefix = 'tool-bar-item-';

const ToolBarItem = (props: ToolBarItemProps) => {
  const { icon, label, url, onClick, style, itemStyle } = props;

  const iconStyle = {
    ...style?.iconStyle,
    ...itemStyle?.iconStyle,
  };

  const fontStyle = {
    ...style?.fontStyle,
    ...itemStyle?.fontStyle,
  };

  const handleClick = () => {
    onClick && onClick(url);
  };

  return (
    <div onClick={handleClick} className={prefix}>
      <div className={prefix + 'inner-container'}>
        <div style={{ textAlign: 'center', fontSize: 16, ...iconStyle }}>
          {icon}
        </div>

        <span
          className={prefix + ''}
          style={{ textAlign: 'center', ...fontStyle }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

export default ToolBarItem;
export { ToolBarItemProps };
