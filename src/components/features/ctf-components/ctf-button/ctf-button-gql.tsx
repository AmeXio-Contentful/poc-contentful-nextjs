import React from 'react';

import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';
import { CtfButton } from '@src/components/features/ctf-components/ctf-button/ctf-button';
import {
  useCtfComponentButtonQuery
} from '@src/components/features/ctf-components/ctf-button/__generated/ctf-button.generated';



export function CtfButtonGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = useCtfComponentButtonQuery({
    id: id,
    locale: locale,
    preview: preview,
  }) as any;

  return <CtfButton {...data.data?.button} />;
}
