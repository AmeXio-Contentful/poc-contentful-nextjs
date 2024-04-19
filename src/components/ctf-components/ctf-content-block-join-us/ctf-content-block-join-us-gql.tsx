'use client';

import React from 'react';
import { DefaultQueryParameters } from '@/components/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component-gql';
import { useCtfContentBlokComponentQuery } from '@/components/ctf-components/ctf-content-block-join-us/__generated/ctf-content-block-join-us.generated';
import { CtfContentBlockJoinUs } from '@/components/ctf-components/ctf-content-block-join-us/ctf-content-block-join-us';

export async function CtfContentBlockJoinUsGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = (await useCtfContentBlokComponentQuery.fetcher({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <CtfContentBlockJoinUs {...data.data?.contentBlok} />;
}
