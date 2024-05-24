import React from 'react';

import { ComponentResolver } from '@src/components/shared/component-resolver';


export const TwoGrid = (props: any) => {
  let left: any = {};
  let right: any = {};
  Object.keys(props).map((entry) => {
    if (props[entry] != null && props[entry]['_type']) {
      if (props[entry]['isLeft']) {
        left = {
          componentProps: props[entry],
          isSanity: true,
          __typename: (props[entry]['_type'])[0].toUpperCase() + props[entry]['_type'].slice(1),
        };
      } else {
        right = {
          componentProps: props[entry],
          isSanity: true,
          __typename: (props[entry]['_type'])[0].toUpperCase() + props[entry]['_type'].slice(1),
        };
      }
    }
  });
  return (
    <div className="grid grid-cols-2 divide-x mb-24">
      <div className="h-auto text-center">
        <ComponentResolver componentProps={left!} forceGql={!left!.isSanity} className={left.__typename} />
      </div>
      <div className="h-auto text-center secondary-color bg-[#D9E8F5]">
        <ComponentResolver componentProps={right!} forceGql={!right!.isSanity} className={right.__typename } />
      </div>
    </div>
  );
};
