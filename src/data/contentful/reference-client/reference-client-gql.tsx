import React from 'react';

import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';
import {
  useReferencedClientsComponentQuery
} from '@src/data/contentful/reference-client/__generated/reference-client.generated';
import {
  ReferenceClient
} from '@src/components/features/decoupled-components/reference-client/reference-client';


export function ReferenceClientGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = ( useReferencedClientsComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <ReferenceClient {...data.data?.referenceClients} />;
}