import React from 'react';

import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';
import {
  useJoinUsComponentQuery
} from '@src/components/features/decoupled-components/join-us-component/__generated/join-us-component.generated';
import { UniversalLayer } from '@src/components/shared/universal-layer';


export function JoinUsComponentGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = ( useJoinUsComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <UniversalLayer data={...data.data?.joinUs} component="JoinUs"/>
}
