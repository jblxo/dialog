import {ReactNode} from 'react';

export type Props = {
  children?: ReactNode;
};

const ModalContent = ({children}: Props) => <div className="p-2 bg-white">{children}</div>;

export default ModalContent;
