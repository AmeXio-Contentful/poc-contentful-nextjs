import React from 'react';

import CtfExpertAdvice from '@src/components/features/ctf-components/expert-advice/ctf-expert-advice';
import CtfFeaturedArticle from '@src/components/features/ctf-components/featured-article/ctf-featured-article';

export const CtfTwoGrid = (props: any) => {
  if (props?.componentLeft && props?.componentRight) {
    const left = props.componentLeft;
    const right = props.componentRight;
    return (
      <div className="grid grid-cols-2 divide-x mb-24">
        <div className="h-auto text-center">
          <CtfExpertAdvice title={left.title as string}
                           subtitle={left.subtitle as string}
                           buttonLink={left.buttonUrl}
                           buttonText={left.buttonText}
                           advices={left.advicesCollection}
                            />
        </div>
        <div className="h-auto text-center secondary-color">
          <CtfFeaturedArticle subtitle={right.subtitle as string}
                              title={right.title as string}
                              heading={right.heading as string}
                              buttonLink={right.buttonUrl as string}/>
        </div>
      </div>
    );
  }
  return <></>
};
