'use client';

import React from 'react';
import { useCtfComponentCtaBannerQuery } from '@/components/ctf-components/ctf-cta-banner-component/__generated/ctf-cta-banner-component.generated';
import { CtfCtaBannerComponent } from '@/components/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component';

export interface DefaultQueryParameters {
  id: any;
  locale: any;
  preview: any;
}

export async function CtfCtaBannerComponentGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = (await useCtfComponentCtaBannerQuery.fetcher({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  console.log("data", data);
  return <CtfCtaBannerComponent {...data.data?.heroBanner} />;
}
