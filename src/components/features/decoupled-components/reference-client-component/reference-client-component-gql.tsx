import React from 'react';

import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';
import {
  useReferencedClientsComponentQuery
} from '@src/components/features/decoupled-components/reference-client-component/__generated/reference-client-component.generated';
import {
  ReferenceClientComponent
} from '@src/components/features/decoupled-components/reference-client-component/reference-client-component';


export function ReferenceClientComponentGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = ( useReferencedClientsComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <ReferenceClientComponent {...data.data?.referenceClients} />;
}
