import React from 'react';

import { useCtfComponentInfiniteCarouselQuery } from '@src/components/features/ctf-components/ctf-infinite-carousel/__generated/ctf-infinite-carousel.generated';
import { CtfInfiniteCarousel } from '@src/components/features/ctf-components/ctf-infinite-carousel/ctf-infinite-carousel';
import { DefaultQueryParameters } from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';

export function CtfInfiniteCarouselGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = useCtfComponentInfiniteCarouselQuery({
    id: id,
    locale: locale,
    preview: preview,
  }) as any;

  return <CtfInfiniteCarousel {...data.data?.imageCarousel} />;
}
