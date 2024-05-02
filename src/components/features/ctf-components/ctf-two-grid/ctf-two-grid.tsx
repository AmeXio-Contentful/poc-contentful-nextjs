import { ComponentResolver } from '@src/components/shared/component-resolver';
import React from 'react';

export const CtfTwoGrid = (props: any) => {
  if (props && props.componentLeft) {
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
          {/*<CtfExpertAdvice title={title as string} subtitle={subtitle as string} buttonText1={buttonText as string}*/}
          {/*                 buttonText2={buttonText as string} buttonLink={buttonLink as string} />*/}

        </div>
        <div className="h-auto text-center secondary-color">
          {/*<CtfFeaturedArticle description={subtitle as string} subtitle={title2 as string} />*/}
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
