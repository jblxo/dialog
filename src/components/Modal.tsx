import {MouseEvent, ReactElement, ReactNode, useState} from 'react';
import {createPortal} from 'react-dom';
import ModalContent, {Props as ModalContentProps} from './ModalContent';
import ModalFooter, {Props as ModalFooterProps} from './ModalFooter';
import ModalHeader, {Props as ModalHeaderProps} from './ModalHeader';

type Props = Pick<ModalHeaderProps, 'title' | 'icon'> &
  ModalContentProps &
  Pick<ModalFooterProps, 'description'> & {
    trigger: ReactElement;
    headerButtons?: ModalHeaderProps['buttons'];
    footerButtons?: ModalFooterProps['buttons'];
  };

const Modal = ({
  trigger,
  title,
  description,
  icon,
  headerButtons,
  footerButtons,
  children,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseOnOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <trigger.type {...trigger.props} onClick={() => setIsOpen(true)} />
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50">
              <div
                className="absolute inset-0 w-full h-full flex justify-center items-center"
                onClick={handleCloseOnOutsideClick}
              >
                <div className="relative w-1/2">
                  <ModalHeader title={title} icon={icon} buttons={headerButtons} />
                  <ModalContent>{children}</ModalContent>
                  <ModalFooter description={description} buttons={footerButtons} />
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
