'use client';

import React from 'react';

import { CtfTextBannerComponent } from '@/components/ctf-components/ctf-text-banner-component/ctf-text-banner-component';
import { useCtfTextBannerQuery } from '@/components/ctf-components/ctf-text-banner-component/__generated/ctf-text-banner-component.generated';

interface CtfDuplexComponentGqlPropsInterface {
  id: any;
  locale: any;
  preview: any;
}

export async function CtfTextBannerComponentGql({
  id,
  locale,
  preview,
}: CtfDuplexComponentGqlPropsInterface) {
  const data = (await useCtfTextBannerQuery.fetcher({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <CtfTextBannerComponent {...data.data?.textBanner} />;
}
