import React from 'react';

import { useCtfComponentTeaserQuery } from '@src/data/contentful/teaser/__generated/ctf-teaser.generated';
import { Teaser } from '@src/mapping/contentful/teaser';

export interface DefaultQueryParameters {
  id: any;
  locale: any;
  preview: any;
  sectionType: any
}

export function CtfTeaserGql(props: DefaultQueryParameters) {
  const data = useCtfComponentTeaserQuery({
    id: props.id,
    locale: props.locale,
    preview: props.preview,
  }) as any;

  if (data.data?.teaser) {
    data.data.teaser.sectionType = props.sectionType;
    return <Teaser {...data.data.teaser}/>;
  }
  return <></>
}
