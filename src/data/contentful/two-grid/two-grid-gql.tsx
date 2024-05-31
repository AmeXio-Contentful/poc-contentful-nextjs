import {DefaultQueryParameters} from '@src/data/contentful/component.typings';
import {useCtfComponentTwoGridQuery} from '@src/data/contentful/two-grid/__generated/ctf-two-grid.generated';

export function TwoGridGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  return useCtfComponentTwoGridQuery({
    id: id,
    locale: locale,
    preview: preview,
  });
}
