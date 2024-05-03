import { ComponentResolver } from '@src/components/shared/component-resolver';
import React from 'react';

export const CtfTwoGrid = (props: any) => {
  if (props?.componentLeft) {
    const left = props.componentLeft.componentsCollection.items;
    const right = props.componentRight.componentsCollection.items;
    return (
      <div className="grid grid-cols-2 divide-x">
        <div className="h-auto text-center">
          {left.map((item: any) => (
            <div key={item.sys.id}>
              <ComponentResolver componentProps={item!} />
            </div>
          ))}

        </div>
        <div className="h-auto text-center secondary-color">
          {right.map((item: any) => (
            <div key={item.sys.id}>
              <ComponentResolver componentProps={item!} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <></>
};
