'use client';

import React from 'react';
import { CtfDuplexComponent } from '@/components/ctf-components/ctf-duplex-component/ctf-duplex-component';
import {
  useCtfComponentDuplexQuery
} from "@/components/ctf-components/ctf-duplex-component/__generated/ctf-duplex-component.generated";
import {
  CtfHeroBannerComponent
} from "@/components/ctf-components/ctf-hero-banner-component/ctf-hero-banner-component";
import {
  useCtfComponentHeroBannerQuery
} from "@/components/ctf-components/ctf-hero-banner-component/__generated/ctf-hero-banner-component.generated";

interface CtfTextBannerGqlPropsInterface {
  id: any;
  locale: any;
  preview: any;
}

export async function CtfHeroBannerComponentGql({
  id,
  locale,
  preview,
}: CtfTextBannerGqlPropsInterface) {
  const data = await useCtfComponentHeroBannerQuery.fetcher({
    id: id,
    locale: locale,
    preview: preview,
  }) as any;

  return <CtfHeroBannerComponent {...data.data?.componentHeroBanner} />;
}
