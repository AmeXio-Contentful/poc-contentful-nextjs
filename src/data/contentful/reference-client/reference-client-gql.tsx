import {
  DefaultQueryParameters
} from '@src/data/contentful/component.typings';
import {
  useReferencedClientsComponentQuery
} from '@src/data/contentful/reference-client/__generated/reference-client.generated';

export function ReferenceClientGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  return ( useReferencedClientsComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  }));
}
