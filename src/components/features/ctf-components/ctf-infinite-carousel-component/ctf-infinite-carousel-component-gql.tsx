import React from 'react';

import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component-gql';
import {
  useCtfComponentInfiniteCarouselQuery
} from '@src/components/features/ctf-components/ctf-infinite-carousel-component/__generated/ctf-infinite-carousel-component.generated';
import {
  CtfInfiniteCarouselComponent
} from '@src/components/features/ctf-components/ctf-infinite-carousel-component/ctf-infinite-carousel-component';


export function CtfInfiniteCarouselComponentGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = useCtfComponentInfiniteCarouselQuery({
    id: id,
    locale: locale,
    preview: preview,
  }) as any;

  return <CtfInfiniteCarouselComponent {...data.data?.imageCarousel} />;
}
