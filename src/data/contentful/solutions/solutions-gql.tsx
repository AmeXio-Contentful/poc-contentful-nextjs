import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { DefaultQueryParameters } from '@src/data/contentful/component.typings';
import { useSolutionSectionComponentQuery } from '@src/data/contentful/solutions/__generated/solutions.generated';

export function SolutionsGql({ id, locale, preview }: DefaultQueryParameters) {
  const data = useSolutionSectionComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  });

  return useContentfulLiveUpdates(data);
}
