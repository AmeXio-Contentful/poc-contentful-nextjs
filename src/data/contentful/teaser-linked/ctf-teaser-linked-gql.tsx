import React from 'react';

import {DefaultQueryParameters} from "@src/data/contentful/component.typings";
import {
  useCtfComponentTeaserLinkedQuery
} from '@src/data/contentful/teaser-linked/__generated/ctf-teaser-linked.generated';

export function CtfTeaserLinkedGql(props: DefaultQueryParameters) {
  return useCtfComponentTeaserLinkedQuery({
    id: props.id,
    locale: props.locale,
    preview: props.preview,
  });

  // if (data.data?.teaserLinked) {
  //   return <TeaserLinked data={data} />
  // }
  // return <></>
}
