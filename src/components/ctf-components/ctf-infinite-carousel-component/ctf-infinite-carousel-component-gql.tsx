import React from 'react';
import { DefaultQueryParameters } from '@/components/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component-gql';
import { useCtfComponentInfiniteCarouselQuery } from '@/components/ctf-components/ctf-infinite-carousel-component/__generated/ctf-infinite-carousel-component.generated';
import { CtfInfiniteCarouselComponent } from '@/components/ctf-components/ctf-infinite-carousel-component/ctf-infinite-carousel-component';

export async function CtfInfiniteCarouselComponentGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = (await useCtfComponentInfiniteCarouselQuery.fetcher({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <CtfInfiniteCarouselComponent {...data.data?.imageCarousel} />;
}
