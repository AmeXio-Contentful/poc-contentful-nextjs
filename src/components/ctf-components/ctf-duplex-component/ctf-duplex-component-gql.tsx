'use client';

import React from 'react';
import { CtfDuplexComponent } from '@/components/ctf-components/ctf-duplex-component/ctf-duplex-component';
import { useCtfComponentDuplexQuery } from '@/components/ctf-components/ctf-duplex-component/__generated/ctf-duplex-component.generated';

interface CtfDuplexComponentGqlPropsInterface {
  id: any;
  locale: any;
  preview: any;
}

export async function CtfDuplexComponentGql({
  id,
  locale,
  preview,
}: CtfDuplexComponentGqlPropsInterface) {
  const data = (await useCtfComponentDuplexQuery.fetcher({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <CtfDuplexComponent {...data.data?.componentDuplex} />;
}
