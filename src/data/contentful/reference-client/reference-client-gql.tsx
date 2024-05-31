import React from 'react';

import {
  DefaultQueryParameters
} from '@src/data/contentful/component.typings';
import {
  useReferencedClientsComponentQuery
} from '@src/data/contentful/reference-client/__generated/reference-client.generated';
import {
  ReferenceClients
} from '@src/components/features/decoupled-components/reference-clients/reference-clients';


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

  return <ReferenceClients {...data.data?.referenceClients} />;
}
