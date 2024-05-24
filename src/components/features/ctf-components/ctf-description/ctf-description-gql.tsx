import React from 'react';

import {
  useCtfComponentDescriptionQuery
} from '@src/components/features/ctf-components/ctf-description/__generated/ctf-description.generated';
import { CtfDescription } from '@src/components/features/ctf-components/ctf-description/ctf-description';
import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';


export function CtfDescriptionGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = ( useCtfComponentDescriptionQuery({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  // eslint-disable-next-line react/jsx-no-undef
  return <CtfDescription {...data.data?.description} />;
}
