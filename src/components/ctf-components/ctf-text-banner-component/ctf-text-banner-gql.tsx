'use client';

import React from 'react';
import { useCtfTextBannerQuery } from '@/components/ctf-components/ctf-text-banner-component/__generated/ctf-text-banner-component.generated';
import { CtfTextBannerComponent } from '@/components/ctf-components/ctf-text-banner-component/ctf-text-banner-component';

interface CtfTextBannerGqlPropsInterface {
  id: any;
  locale: any;
  preview: any;
}

export async function CtfTextBannerGql({
  id,
  locale,
  preview,
}: CtfTextBannerGqlPropsInterface) {
  const data = await useCtfTextBannerQuery.fetcher({
    id: id,
    locale: locale,
    preview: preview,
  });
  return <CtfTextBannerComponent {...data.data?.textBanner} />;
}
