import {HeroBanner} from '@src/components/features/decoupled-components/hero-banner/hero-banner';


interface HeroBannerProps {
  backgroundImage: any;
  buttonText: string;
  buttonUrl: string;
  description: string;
  title: string;
}

interface HeroBannerSanityProps extends HeroBannerProps {
  subtitle: string;
}

export const HeroBannerSanityComponent = (componentData: HeroBannerSanityProps) => {
  const mappedData: HeroBannerProps = {
    'backgroundImage': componentData?.backgroundImage.asset.url as string || '',
    'title': componentData?.title || '',
    'description': componentData?.subtitle || '',
    'buttonText': componentData?.buttonText || '',
    'buttonUrl': componentData?.buttonUrl || ''
  }

  return <HeroBanner {...mappedData} />
};
