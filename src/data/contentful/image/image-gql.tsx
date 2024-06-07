import { DefaultQueryParameters } from '@src/data/contentful/component.typings';
import { useImageComponentQuery } from '@src/data/contentful/image/__generated/image.generated';

export function ImageGql({
                            id,
                            locale,
                            preview,
                          }: DefaultQueryParameters) {
  return ( useImageComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  }));
}
