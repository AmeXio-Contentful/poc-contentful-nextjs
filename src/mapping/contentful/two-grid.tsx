import {HeroBanner} from '@src/components/features/decoupled-components/hero-banner/hero-banner';
import {HeroBannerProps} from "@src/components/features/decoupled-components/hero-banner/hero-banner.typings";
import {DefaultQueryParameters} from "@src/data/contentful/component.typings";
import {ComponentHeroBannerFragment} from '@src/data/contentful/hero-banner/__generated/hero-banner.generated';
import {HeroBannerGql} from '@src/data/contentful/hero-banner/hero-banner-gql';
import {TwoGrid} from "@src/components/features/decoupled-components/two-grid/two-grid";
import {TwoGridGql} from "@src/data/contentful/two-grid/two-grid-gql";
import ExpertAdvice from "@src/components/features/decoupled-components/expert-advice/expert-advice";
import FeaturedArticle from "@src/components/features/decoupled-components/featured-article/featured-article";
import {ExpertProps} from "@src/components/features/decoupled-components/expert-advice/expert-advice.typings";
import {ComponentTwoGridFieldsFragment} from "@src/data/contentful/two-grid/__generated/ctf-two-grid.generated";

export const TwoGridComponent = (props: DefaultQueryParameters) => {
    const data = TwoGridGql(props);
    const componentData: ComponentTwoGridFieldsFragment | null | undefined = data.data?.twoGrid;

    // make sure the left and right component can be loaded dynamically
    // maybe loop again through the component mapping using the typename?

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
