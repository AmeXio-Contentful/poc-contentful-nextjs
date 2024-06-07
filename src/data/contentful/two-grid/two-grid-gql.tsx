import {DefaultQueryParameters} from '@src/data/contentful/component.typings';
import {useCtfComponentTwoGridQuery} from '@src/data/contentful/two-grid/__generated/two-grid.generated';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

export function TwoGridGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  console.log("id", preview);
  const data = useCtfComponentTwoGridQuery({
    id: id,
    locale: locale,
    preview: preview,
  });

   console.log("data", data?.data);
   return useContentfulLiveUpdates(data);
}
