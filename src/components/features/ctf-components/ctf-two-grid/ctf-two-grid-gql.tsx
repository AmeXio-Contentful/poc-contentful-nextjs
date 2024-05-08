import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';
import {
  useCtfComponentTwoGridQuery
} from '@src/components/features/ctf-components/ctf-two-grid/__generated/ctf-two-grid.generated';
import { CtfTwoGrid } from '@src/components/features/ctf-components/ctf-two-grid/ctf-two-grid';


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
