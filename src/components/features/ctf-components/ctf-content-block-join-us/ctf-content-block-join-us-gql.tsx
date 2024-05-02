import React from 'react';

import {
  useCtfContentBlokComponentQuery
} from '@src/components/features/ctf-components/ctf-content-block-join-us/__generated/ctf-content-block-join-us.generated';
import {
  CtfContentBlockJoinUs
} from '@src/components/features/ctf-components/ctf-content-block-join-us/ctf-content-block-join-us';
import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';

export function CtfContentBlockJoinUsGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = useCtfContentBlokComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  }) as any;

  return <CtfContentBlockJoinUs {...data.data?.contentBlok} />;
}
