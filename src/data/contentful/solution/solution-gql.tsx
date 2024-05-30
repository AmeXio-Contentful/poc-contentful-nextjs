import {DefaultQueryParameters} from '@src/data/contentful/component.typings';
import {useSolutionSectionComponentQuery} from '@src/data/contentful/solution/__generated/solution.generated';

export function SolutionGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  return ( useSolutionSectionComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  }));
}
