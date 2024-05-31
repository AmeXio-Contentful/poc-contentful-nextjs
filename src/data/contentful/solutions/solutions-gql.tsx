import {DefaultQueryParameters} from '@src/data/contentful/component.typings';
import {useSolutionSectionComponentQuery} from '@src/data/contentful/solutions/__generated/solution.generated';

export function SolutionsGql({
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
