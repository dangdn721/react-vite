import type { ReactElementProps } from 'types';
import clsx from 'clsx';

export default function (properties: ReactElementProps) {
  return (
    <span
      {...properties}
      className={`text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent
									text-blueGray-400 ${clsx(properties.className)}`}
    >
      {properties.children}
    </span>
  );
}
