import { ImageComponent } from '@src/components/features/decoupled-components/image/image';

export interface ImageProps {
  url: string;
  title?: string;
}

interface ImageData {
  __type: string;
  image: {
    asset: {
      url: string
    }
  }
}
export const SanityImage = (props: ImageData) => {

  const mappedData: ImageProps = {
    url: props?.image?.asset.url as string,
    title: ''
  }

  return (
  <div>
    <ImageComponent {...mappedData} />
  </div>
  )
};
