import {ReactElement} from 'react';

export type Props = {
  buttons: ReactElement | ReactElement[];
};

const ButtonsGroup = ({buttons}: Props) => (
  <div className="flex flex-wrap justify-center items-center space-x-2">
    {(Array.isArray(buttons) ? buttons : [buttons]).map((button, index) => (
      <button.type key={button.key ?? index} {...button.props} />
    ))}
  </div>
);

export default ButtonsGroup;
