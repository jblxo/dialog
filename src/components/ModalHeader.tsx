import ButtonsGroup, {Props as ButtonsGroupProps} from './ButtonsGroup';
import Icon, {Props as IconProps} from './Icon';

export type Props = {
  title: string;
  icon: IconProps['name'];
  buttons?: ButtonsGroupProps['buttons'];
};

const ModalHeader = ({title, icon, buttons}: Props) => (
  <div className="flex justify-between items-center p-2 bg-blue-400 text-white">
    <div className="flex items-center">
      <Icon name={icon} />
      <h2 className="text-xl font-bold ml-2">{title}</h2>
    </div>
    {buttons && <ButtonsGroup buttons={buttons} />}
  </div>
);

export default ModalHeader;
