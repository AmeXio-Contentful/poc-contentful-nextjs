import React from 'react';

import { DefaultQueryParameters } from '@src/data/contentful/component.typings';
import { useCtfComponentInfiniteCarouselQuery } from '@src/data/contentful/infinite-carousel/__generated/ctf-infinite-carousel.generated';
import { InfiniteCarousel } from '@src/mapping/contentful/infinite-carousel';

export function CtfInfiniteCarouselGql({ id, locale, preview }: DefaultQueryParameters) {
  const data = useCtfComponentInfiniteCarouselQuery({
    id: id,
    locale: locale,
    preview: preview,
  }) as any;

  return <InfiniteCarousel {...data.data?.imageCarousel} />;
}
