'use client';

import React from 'react';
import { CtfDuplexComponent } from '@/components/ctf-components/ctf-duplex-component/ctf-duplex-component';
import {
  useCtfComponentDuplexQuery
} from "@/components/ctf-components/ctf-duplex-component/__generated/ctf-duplex-component.generated";
import {
  CtfTextBannerQueryVariables,
  useCtfTextBannerQuery
} from "@/components/ctf-components/ctf-text-banner-component/__generated/ctf-text-banner-component.generated";
import {
  CtfTextBannerComponent
} from "@/components/ctf-components/ctf-text-banner-component/ctf-text-banner-component";

interface CtfDuplexComponentGqlPropsInterface {
  id: any;
  locale: any;
  preview: any;
}

export async function CtfTextBannerComponentGql({
  id,
  locale,
  preview,
}: CtfTextBannerQueryVariables) {
  const data = await useCtfTextBannerQuery.fetcher({
    id: id,
    locale: locale,
    preview: preview,
  }) as any;

  return <CtfTextBannerComponent {...data.data?.textBanner} />;
}
