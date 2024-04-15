'use client';

import React from 'react';
import { useCtfTextBannerQuery } from './__generated/ctf-text-banner.generated';
import { TextBanner } from '@/components/ctf-components/ctf-text-banner/ctf-text-banner';

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
  })();
  return <TextBanner {...data?.textBanner} />;
}
