import {useHeroBannerComponentQuery} from '@src/data/contentful/hero-banner/__generated/hero-banner.generated';
import {DefaultQueryParameters} from '@src/data/contentful/teaser/ctf-teaser-gql';

export function HeroBannerGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = ( useHeroBannerComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;
  // How and where is the structure of this data determined? Can this be defined somewhere and is there a link with the actual model?
  // can this model be enforced through import/exports so the model in the actual cms is representative for the model used in the code

  return data;
}
