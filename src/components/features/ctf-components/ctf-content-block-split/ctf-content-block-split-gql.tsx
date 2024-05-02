import React from 'react';

import {
  useCtfComponentSplitBlockQuery
} from '@src/components/features/ctf-components/ctf-content-block-split/__generated/ctf-content-block-split.generated';
import {
  CtfContentBlockSplit
} from '@src/components/features/ctf-components/ctf-content-block-split/ctf-content-block-split';
import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';


export function CtfContentBlockSplitGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = useCtfComponentSplitBlockQuery({
    id: id,
    locale: locale,
    preview: preview,
  }) as any;

  return <CtfContentBlockSplit {...data.data?.contentBlokSplit} />;
}
