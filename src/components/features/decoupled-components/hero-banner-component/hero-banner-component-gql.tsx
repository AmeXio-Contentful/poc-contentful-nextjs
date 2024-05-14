import React from 'react';

import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';
import {
  useHeroBannerComponentQuery
} from '@src/components/features/decoupled-components/hero-banner-component/__generated/hero-banner-component.generated';
import { UniversalLayer } from '@src/components/shared/universal-layer';


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

  return <UniversalLayer data={...data.data?.heroBanner} component="HeroBanner"/>
}
