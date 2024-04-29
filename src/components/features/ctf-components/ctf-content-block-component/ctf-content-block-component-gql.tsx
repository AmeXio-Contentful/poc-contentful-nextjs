import React from 'react';

import {
  useCtfComponentContentBlockQuery
} from '@src/components/features/ctf-components/ctf-content-block-component/__generated/ctf-content-block-component.generated';
import {
  CtfContentBlockComponent
} from '@src/components/features/ctf-components/ctf-content-block-component/ctf-content-block-component';
import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component-gql';


export function CtfContentBlockComponentGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = useCtfComponentContentBlockQuery({
    id: id,
    locale: locale,
    preview: preview,
  }) as any;

  return <CtfContentBlockComponent {...data.data?.contentBlock} />;
}
