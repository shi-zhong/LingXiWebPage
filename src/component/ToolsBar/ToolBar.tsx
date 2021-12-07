import { useState } from 'react';
import { CSSProperties } from '@umijs/renderer-react/node_modules/@types/react';
import ToolBarItem, { ToolBarItemProps } from './ToolBarItem';
import { History } from 'umi';

import './style.less';

interface ToolBarProps {
  items: ToolBarItemProps[];
  itemsStyle?: {
    iconStyle?: CSSProperties;
    fontStyle?: CSSProperties;
  };
  history: History;
}

const prefix = 'tool-bar-';

const ToolBar = (props: ToolBarProps) => {
  const { items, itemsStyle, history } = props;

  const onClick = (url: string) => {
    history.push(url);
  };

  return (
    <div className={prefix}>
      <div className={prefix + 'items-container'}>
        {items.map((item, index) => {
          return (
            <ToolBarItem
              key={item.url}
              {...item}
              itemStyle={itemsStyle}
              onClick={onClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToolBar;
