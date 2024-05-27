import React from 'react';

import {
  DefaultQueryParameters
} from '@src/data/contentful/teaser/ctf-teaser-gql';
import {
  useHeroBannerComponentQuery
} from '@src/data/contentful/hero-banner/__generated/hero-banner.generated';
import {
  HeroBanner
} from '@src/components/features/decoupled-components/hero-banner/hero-banner';

export function HeroBannerGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = ( useHeroBannerComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  })) as any; // How and where is the structure of this data determined? Can this be defined somewhere and is there a link with the actual model?
  // can this model be enforced through import/exports so the model in the actual cms is representative for the model used in the code

  console.log("data", data);
  // should return data, not the component itself
  // --> where and how should error handling be done?
  // --> generic in the mapping?
  // only returning the data results in an error because a React component is expected
  // how to return data only?
  // return data;

  return <HeroBanner {...data.data?.heroBanner} />;
}
