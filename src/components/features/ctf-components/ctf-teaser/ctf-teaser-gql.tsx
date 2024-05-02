import React from 'react';

import {
  CtfTeaser
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser';
import {
  useCtfComponentTeaserQuery
} from '@src/components/features/ctf-components/ctf-teaser/__generated/ctf-teaser.generated';

export interface DefaultQueryParameters {
  id: any;
  locale: any;
  preview: any;
  gridSystem: any
}

export function CtfTeaserGql(props: DefaultQueryParameters) {
  const data = useCtfComponentTeaserQuery({
    id: props.id,
    locale: props.locale,
    preview: props.preview,
  }) as any;

  if (data.data?.teaser) {
    data.data!.teaser.gridSystem = props.gridSystem;
    return <CtfTeaser {...data.data?.teaser}/>;
  }
  return <></>
}
