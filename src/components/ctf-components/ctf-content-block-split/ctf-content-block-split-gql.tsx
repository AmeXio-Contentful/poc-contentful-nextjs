'use client';

import React from 'react';
import { useCtfComponentCtaBannerQuery } from '@/components/ctf-components/ctf-cta-banner-component/__generated/ctf-cta-banner-component.generated';
import { CtfCtaBannerComponent } from '@/components/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component';
import { DefaultQueryParameters } from '@/components/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component-gql';
import { useCtfComponentTitleQuery } from '@/components/ctf-components/ctf-title-component/__generated/ctf-title-component.generated';
import { CtfTitleComponent } from '@/components/ctf-components/ctf-title-component/ctf-title-component';
import { CtfContentBlockSplit } from "@/components/ctf-components/ctf-content-block-split/ctf-content-block-split";
import {
  useCtfComponentSplitBlockQuery
} from "@/components/ctf-components/ctf-content-block-split/__generated/ctf-content-block-split.generated";

export async function CtfContentBlockSplitGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = (await useCtfComponentSplitBlockQuery.fetcher({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <CtfContentBlockSplit {...data.data?.contentBlokSplit} />;
}
