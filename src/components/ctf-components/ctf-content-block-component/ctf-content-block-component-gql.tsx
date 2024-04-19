'use client';

import React from 'react';
import { DefaultQueryParameters } from '@/components/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component-gql';
import { useCtfComponentContentBlockQuery } from '@/components/ctf-components/ctf-content-block-component/__generated/ctf-content-block-component.generated';
import { CtfContentBlockComponent } from '@/components/ctf-components/ctf-content-block-component/ctf-content-block-component';

export async function CtfContentBlockComponentGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = (await useCtfComponentContentBlockQuery.fetcher({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <CtfContentBlockComponent {...data.data?.contentBlock} />;
}
