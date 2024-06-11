import { ImageComponent } from '@src/components/features/decoupled-components/image/image';

export interface ImageProps {
  url: string;
  title?: string;
}

export const SanityImage = (props: any) => {

  const mappedData = {
    url: props?.image?.asset.url as string,
    title: ''
  }

  return (
  <div>
    <ImageComponent {...mappedData} />
  </div>
  )
};
