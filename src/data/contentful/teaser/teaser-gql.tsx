import { useCtfComponentTeaserQuery } from '@src/data/contentful/teaser/__generated/ctf-teaser.generated';
import { TeaserPropsContentful } from '@src/mapping/contentful/teaser';

export function TeaserGql(props: TeaserPropsContentful) {
  return useCtfComponentTeaserQuery({
    id: props.id,
    locale: props.locale,
    preview: props.preview,
  }) as any;
}
