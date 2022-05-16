import type { ReactElementProps } from 'types';

export default function (properties: ReactElementProps) {
  return (
    <div {...properties} className={`flex mx-auto ${properties.className ? properties.className : ''}`}>
      {properties.children}
    </div>
  );
}
