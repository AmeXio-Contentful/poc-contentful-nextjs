import {
  DefaultQueryParameters
} from '@src/data/contentful/component.typings';
import {
  useCtfComponentTwoGridQuery
} from '@src/data/contentful/two-grid/__generated/ctf-two-grid.generated';
import { CtfTwoGrid } from '@src/data/contentful/two-grid/ctf-two-grid';


export function CtfTwoGridGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = useCtfComponentTwoGridQuery({
    id: id,
    locale: locale,
    preview: preview,
  }) as any;

  return <CtfTwoGrid {...data.data?.twoGrid} />;
}
