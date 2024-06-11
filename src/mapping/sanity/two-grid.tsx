import React from 'react';

import { TwoGrid } from '@src/components/features/decoupled-components/two-grid/two-grid';
import { componentMapSanity } from '@src/mapping/sanity/mappings';

function capitalizeFirstLetter(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1)
}
export const TwoGridSanity = (props: any) => {

  const primaryComponent = componentMapSanity[capitalizeFirstLetter(props?.expertAdvice?._type)];
  const secondaryComponent = componentMapSanity[capitalizeFirstLetter(props?.featuredArticle?._type)];

  const mappedData = {
    primary: {
      component: primaryComponent,
      props: props?.expertAdvice
    },
    secondary: {
      component: secondaryComponent,
      props: props?.featuredArticle
    },
  };

  return (
    <div className="text-center">
      <TwoGrid {...mappedData} />
    </div>
  );
};
