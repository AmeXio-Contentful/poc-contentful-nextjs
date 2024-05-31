import {HeroBanner} from '@src/components/features/decoupled-components/hero-banner/hero-banner';
import {HeroBannerProps} from "@src/components/features/decoupled-components/hero-banner/hero-banner.typings";
import {DefaultQueryParameters} from "@src/data/contentful/component.typings";
import {ComponentHeroBannerFragment} from '@src/data/contentful/hero-banner/__generated/hero-banner.generated';
import {HeroBannerGql} from '@src/data/contentful/hero-banner/hero-banner-gql';
import {TwoGrid} from "@src/components/features/decoupled-components/two-grid/two-grid";
import {TwoGridGql} from "@src/data/contentful/two-grid/two-grid-gql";
import ExpertAdvice from "@src/components/features/decoupled-components/expert-advice/expert-advice";
import FeaturedArticle from "@src/components/features/decoupled-components/featured-article/featured-article";

export const TwoGridComponent = (props: DefaultQueryParameters) => {
    const data = TwoGridGql(props);
     /* const componentData: ComponentHeroBannerFragment | null | undefined = data.data?.heroBanner;
    // adjust data over here to custom component typing
    const mappedData: HeroBannerProps = {
        'backgroundImage': componentData?.backgroundImage || '',
        'title': componentData?.title || '',
        'description': componentData?.subtitle || '',
        'buttonText': componentData?.buttonText || '',
        'buttonUrl': componentData?.buttonUrl || ''
    } */
    const mappedData = {
        primary: {
            component: ExpertAdvice
        },
        secondary: {
            component: FeaturedArticle
        }
    }

    return <TwoGrid {...mappedData}/>
};
