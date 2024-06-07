import { DefaultQueryParameters } from '@src/data/contentful/component.typings';
import {
  useCtfComponentExpertAdviceQuery
} from '@src/data/contentful/expert-advice/__generated/expert-advice.generated';

export function ExpertAdviceGql({
                                id,
                                locale,
                                preview,
                              }: DefaultQueryParameters) {
  return ( useCtfComponentExpertAdviceQuery({
    id: id,
    locale: locale,
    preview: preview,
  }));
}
