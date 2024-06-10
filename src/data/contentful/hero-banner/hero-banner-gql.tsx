import {DefaultQueryParameters} from '@src/data/contentful/component.typings';
import {useHeroBannerComponentQuery} from '@src/data/contentful/hero-banner/__generated/hero-banner.generated';

import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

export function HeroBannerGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = useHeroBannerComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  });

  return useContentfulLiveUpdates(data);
}
