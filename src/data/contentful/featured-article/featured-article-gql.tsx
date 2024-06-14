import { DefaultQueryParameters } from '@src/data/contentful/component.typings';
import {
  useCtfFeaturedArticleQuery
} from '@src/data/contentful/featured-article/__generated/featured-article.generated';

export function FeaturedArticleGql({
                                id,
                                locale,
                                preview,
                              }: DefaultQueryParameters) {
  return ( useCtfFeaturedArticleQuery({
    id: id,
    locale: locale,
    preview: preview,
  }));
}
