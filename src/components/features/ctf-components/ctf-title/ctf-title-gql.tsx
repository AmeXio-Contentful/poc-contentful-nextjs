import React from 'react';

import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';
import {
  useCtfComponentTitleQuery
} from '@src/components/features/ctf-components/ctf-title/__generated/ctf-title-component.generated';
import { CtfTitle } from '@src/components/features/ctf-components/ctf-title/ctf-title';


export function CtfTitleGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = ( useCtfComponentTitleQuery({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  // eslint-disable-next-line react/jsx-no-undef
  return <CtfTitle {...data.data?.title} />;
}
