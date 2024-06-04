import {HeroBanner} from '@src/components/features/decoupled-components/hero-banner/hero-banner';
import {HeroBannerProps} from "@src/components/features/decoupled-components/hero-banner/hero-banner.typings";
import {DefaultQueryParameters} from "@src/data/contentful/component.typings";
import {ComponentHeroBannerFragment} from '@src/data/contentful/hero-banner/__generated/hero-banner.generated';
import {HeroBannerGql} from '@src/data/contentful/hero-banner/hero-banner-gql';

export const HeroBannerComponent = (props: DefaultQueryParameters) => {
  const data = HeroBannerGql(props);
  const componentData: ComponentHeroBannerFragment | null | undefined = data.data?.heroBanner;

  const mappedData: HeroBannerProps = {
    'backgroundImage': componentData?.backgroundImage?.url || '',
    'title': componentData?.title || '',
    'description': componentData?.subtitle || '',
    'buttonText': componentData?.buttonText || '',
    'buttonUrl': componentData?.buttonUrl || ''
  }

  return <HeroBanner {...mappedData} />
};
