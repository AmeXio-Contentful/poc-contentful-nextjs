import {DefaultQueryParameters} from '@src/data/contentful/component.typings';
import {useHeroBannerComponentQuery} from '@src/data/contentful/hero-banner/__generated/hero-banner.generated';

export function HeroBannerGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  return ( useHeroBannerComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  }));
}
