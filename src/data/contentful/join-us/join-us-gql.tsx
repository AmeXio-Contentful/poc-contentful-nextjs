import {DefaultQueryParameters} from '@src/data/contentful/component.typings';
import {useJoinUsComponentQuery} from '@src/data/contentful/join-us/__generated/join-us.generated';

export function JoinUsGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  return ( useJoinUsComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  }));
}
