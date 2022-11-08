import {BeakerIcon, SignalIcon, CakeIcon} from '@heroicons/react/24/solid';

export type Props = {
  name: 'beaker' | 'signal' | 'cake';
};

const Icon = ({name}: Props) => {
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
      {name === 'beaker' && <BeakerIcon className="w-4 h-4" />}
      {name === 'signal' && <SignalIcon className="w-4 h-4" />}
      {name === 'cake' && <CakeIcon className="w-4 h-4" />}
    </div>
  );
};

export default Icon;
