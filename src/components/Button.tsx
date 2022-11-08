import classNames from 'classnames';
import {MouseEvent, ReactNode} from 'react';

type Props = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  palette?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
  children?: ReactNode;
};

const Button = ({onClick, palette = 'primary', children}: Props) => (
  <button
    className={classNames('px-1 py-2 border rounded-md text-white', {
      'bg-blue-500': palette === 'primary',
      'bg-gray-500': palette === 'secondary',
      'bg-red-500': palette === 'danger',
      'bg-yellow-500': palette === 'warning',
      'bg-green-500': palette === 'success',
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
