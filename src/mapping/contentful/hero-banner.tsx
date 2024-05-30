import {HeroBanner} from '@src/components/features/decoupled-components/hero-banner/hero-banner';
import {HeroBannerProps} from "@src/components/features/decoupled-components/hero-banner/hero-banner.typings";
import {ComponentHeroBannerFragment} from '@src/data/contentful/hero-banner/__generated/hero-banner.generated';
import {HeroBannerGql} from '@src/data/contentful/hero-banner/hero-banner-gql';
import {DefaultQueryParameters} from '@src/data/contentful/teaser/ctf-teaser-gql';


export const HeroBannerComponent = (props: DefaultQueryParameters) => {
  const data = HeroBannerGql(props);
  const heroBannerData: ComponentHeroBannerFragment = data.data?.heroBanner;
  // adjust data over here to custom component typing
  const mappedData: HeroBannerProps = {
    'backgroundImage': heroBannerData?.backgroundImage || '',
    'title': heroBannerData?.title || '',
    'description': heroBannerData?.subtitle || '',
    'buttonText': heroBannerData?.buttonText || '',
    'buttonUrl': heroBannerData?.buttonUrl || ''
  }

  return <HeroBanner {...mappedData} />
};
