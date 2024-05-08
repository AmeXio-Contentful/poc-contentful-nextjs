import React from 'react';

import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';
import {
  useHeroBannerComponentQuery
} from '@src/components/features/decoupled-components/hero-banner-component/__generated/hero-banner-component.generated';
import {
  HeroBannerComponent
} from '@src/components/features/decoupled-components/hero-banner-component/hero-banner-component';


export function HeroBannerComponentGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = ( useHeroBannerComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <HeroBannerComponent {...data.data?.heroBanner} />;
}
