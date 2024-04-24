import React from 'react';

import {
  useCtfComponentContentCarouselQuery
} from '@src/components/features/ctf-components/ctf-content-carousel-component/__generated/ctf-content-carousel-component.generated';
import {
  CtfContentCarouselComponent
} from '@src/components/features/ctf-components/ctf-content-carousel-component/ctf-content-carousel-component';
import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component-gql';


export function CtfContentCarouselComponentGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = useCtfComponentContentCarouselQuery({
    id: id,
    locale: locale,
    preview: preview,
  }) as any;

  return <CtfContentCarouselComponent {...data.data?.contentCarousel} />;
}
