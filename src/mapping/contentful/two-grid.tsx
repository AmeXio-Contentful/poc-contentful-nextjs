import ExpertAdvice from "@src/components/features/decoupled-components/expert-advice/expert-advice";
import FeaturedArticle from "@src/components/features/decoupled-components/featured-article/featured-article";
import {TwoGrid} from "@src/components/features/decoupled-components/two-grid/two-grid";
import {DefaultQueryParameters} from "@src/data/contentful/component.typings";
import {ComponentTwoGridFieldsFragment} from "@src/data/contentful/two-grid/__generated/two-grid.generated";
import {TwoGridGql} from "@src/data/contentful/two-grid/two-grid-gql";

export const TwoGridComponent = (props: DefaultQueryParameters) => {
    const data = TwoGridGql(props);
    const componentData: ComponentTwoGridFieldsFragment | null | undefined = data.data?.twoGrid;

    const expertAdvicesProps:any = componentData?.componentLeft;
    expertAdvicesProps != null ? expertAdvicesProps.advices = [] : null;
    expertAdvicesProps?.advicesCollection?.items.forEach((item) => {
      expertAdvicesProps.advices.push({
        buttonText: item.title,
        buttonUrl: item.buttonUrl
      })
    });

    const mappedData = {
        primary: {
            component: ExpertAdvice,
            props: expertAdvicesProps
        },
        secondary: {
            component: FeaturedArticle,
            props: componentData?.componentRight
        }
    }

    return <TwoGrid {...mappedData}/>
};
