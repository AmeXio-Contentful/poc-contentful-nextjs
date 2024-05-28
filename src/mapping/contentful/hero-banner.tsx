import {HeroBanner} from '@src/components/features/decoupled-components/hero-banner/hero-banner';
import {HeroBannerGql} from '@src/data/contentful/hero-banner/hero-banner-gql';
import {DefaultQueryParameters} from '@src/data/contentful/teaser/ctf-teaser-gql';

export const HeroBannerComponent = (props: DefaultQueryParameters) => {
  const data = HeroBannerGql(props);
  // adjust data over here to custom component typing
  /* const mappedData = {

  } */

  return <HeroBanner {...data.data?.heroBanner} />
};
