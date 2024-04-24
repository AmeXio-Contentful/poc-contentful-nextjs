import React from 'react';

import {
  useCtfComponentCtaBannerQuery
} from '@src/components/features/ctf-components/ctf-cta-banner-component/__generated/ctf-cta-banner-component.generated';
import {
  CtfCtaBannerComponent
} from '@src/components/features/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component';

export interface DefaultQueryParameters {
  id: any;
  locale: any;
  preview: any;
}

export function CtfCtaBannerComponentGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = useCtfComponentCtaBannerQuery({
    id: id,
    locale: locale,
    preview: preview,
  }) as any;

  return <CtfCtaBannerComponent {...data.data?.heroBanner} />;
}
