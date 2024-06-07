import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useContentfulContext } from '@src/contentful-context';
import { useCtfNavigationQuery } from '@src/data/contentful/navigation/__generated/navigation.generated';
import { CtfNavigation } from '@src/mapping/contentful/navigation';

export const CtfNavigationGql = () => {
  const { locale, previewActive } = useContentfulContext();

  const { data, isLoading } = useCtfNavigationQuery({
    locale,
    preview: previewActive,
  });

  const navigationMenuCollection = useContentfulLiveUpdates(data?.navigationMenuCollection);

  if (!navigationMenuCollection || isLoading) return null;

  return <CtfNavigation {...navigationMenuCollection} />;
};
