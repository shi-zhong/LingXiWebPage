import { CSSProperties } from '@umijs/renderer-react/node_modules/@types/react';
import './Card.less';

interface CardProps extends React.PropsWithChildren<any> {
  className?: string;
  style?: CSSProperties;
  title?: string;
}

const Card = (props: CardProps) => {
  return (
    <div className={'card ' + (props.className || '')} style={props.style}>
      {props.title !== undefined && (
        <div className="card-title-container">
          <span className="card-title">{props.title}</span>
        </div>
      )}
      <div className="card-content-container">{props.children}</div>
    </div>
  );
};

export default Card;
