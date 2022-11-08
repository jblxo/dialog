import classNames from 'classnames';
import ButtonsGroup, {Props as ButtonsGroupProps} from './ButtonsGroup';

export type Props = {
  description?: string;
  buttons?: ButtonsGroupProps['buttons'];
};

const ModalFooter = ({description, buttons}: Props) => (
  <div
    className={classNames('flex items-center p-2 bg-blue-300 text-white', {
      'p-0': !description && (!buttons || (Array.isArray(buttons) && buttons.length === 0)),
    })}
  >
    {description && <p className="text-sm">{description}</p>}
    {buttons && (
      <div className="ml-auto">
        <ButtonsGroup buttons={buttons} />
      </div>
    )}
  </div>
);

export default ModalFooter;
