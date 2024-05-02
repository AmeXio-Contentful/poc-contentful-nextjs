import React from 'react';

import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';
import {
  useCtfComponentTitleQuery
} from '@src/components/features/ctf-components/ctf-title-component/__generated/ctf-title-component.generated';
import { CtfTitleComponent } from '@src/components/features/ctf-components/ctf-title-component/ctf-title-component';


export function CtfTitleComponentGql({
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
  return <CtfTitleComponent {...data.data?.title} />;
}
