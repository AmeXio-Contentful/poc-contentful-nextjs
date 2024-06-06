import React from 'react';

import {DefaultQueryParameters} from "@src/data/contentful/component.typings";
import {
  useCtfComponentTeaserLinkedQuery
} from '@src/data/contentful/teaser-linked/__generated/ctf-teaser-linked.generated';
import { TeaserLinked } from '@src/mapping/contentful/teaser-linked';

export function CtfTeaserLinkedGql(props: DefaultQueryParameters) {
  const data = useCtfComponentTeaserLinkedQuery({
    id: props.id,
    locale: props.locale,
    preview: props.preview,
  });

  if (data.data?.teaserLinked) {
    return <TeaserLinked data={data} />
  }
  return <></>
}
