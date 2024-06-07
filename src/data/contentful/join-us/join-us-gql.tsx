import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { DefaultQueryParameters } from '@src/data/contentful/component.typings';
import { useJoinUsComponentQuery } from '@src/data/contentful/join-us/__generated/join-us.generated';

export function JoinUsGql({ id, locale, preview }: DefaultQueryParameters) {
  const data = useJoinUsComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  });

  return useContentfulLiveUpdates(data);
}
