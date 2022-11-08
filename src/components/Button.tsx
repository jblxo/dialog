import classNames from 'classnames';
import {MouseEvent, ReactNode} from 'react';

type Props = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: ReactNode;
};

const Button = ({onClick, className, children}: Props) => (
  <button
    className={classNames('px-1 py-2 border rounded-md bg-blue-500 text-white', className)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
