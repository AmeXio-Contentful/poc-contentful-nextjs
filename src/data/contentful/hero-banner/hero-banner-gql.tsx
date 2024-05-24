import React from 'react';

import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';
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
  })) as any;

  return <HeroBanner {...data.data?.heroBanner} />;
}
