import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import {DefaultQueryParameters} from '@src/data/contentful/component.typings';
import {useCtfComponentTwoGridQuery} from '@src/data/contentful/two-grid/__generated/two-grid.generated';

export function TwoGridGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = useCtfComponentTwoGridQuery({
    id: id,
    locale: locale,
    preview: preview,
  });

   return useContentfulLiveUpdates(data);
}
