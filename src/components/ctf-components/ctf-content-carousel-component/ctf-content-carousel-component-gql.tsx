'use client';

import React from 'react';
import { useCtfComponentContentCarouselQuery } from '@/components/ctf-components/ctf-content-carousel-component/__generated/ctf-content-carousel-component.generated';
import { DefaultQueryParameters } from '@/components/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component-gql';
import { CtfContentCarouselComponent } from '@/components/ctf-components/ctf-content-carousel-component/ctf-content-carousel-component';

export async function CtfContentCarouselComponentGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = (await useCtfComponentContentCarouselQuery.fetcher({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <CtfContentCarouselComponent {...data.data?.contentCarousel} />;
}
