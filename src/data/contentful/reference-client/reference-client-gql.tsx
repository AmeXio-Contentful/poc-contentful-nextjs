import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { DefaultQueryParameters } from '@src/data/contentful/component.typings';
import { useReferencedClientsComponentQuery } from '@src/data/contentful/reference-client/__generated/reference-client.generated';

export function ReferenceClientGql({ id, locale, preview }: DefaultQueryParameters) {
  const data = useReferencedClientsComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  });

  return useContentfulLiveUpdates(data);
}
