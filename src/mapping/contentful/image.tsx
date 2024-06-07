import {DefaultQueryParameters} from "@src/data/contentful/component.typings";
import { ImageGql } from '@src/data/contentful/image/image-gql';
import { ComponentImageFragment } from '@src/data/contentful/image/__generated/image.generated';
import { ImageComponent } from '@src/components/features/decoupled-components/image/image';

export interface ImageProps {
  url: string;
  title?: string;
}

export const ContentfulImage = (props: DefaultQueryParameters) => {
  const data = ImageGql(props);
  const componentData: ComponentImageFragment | null | undefined = data.data?.image;

  const mappedData = {
    url: componentData?.image?.url as string,
    title: ''
  }

  return (
  <div>
    <ImageComponent {...mappedData} />
  </div>
  )
};
