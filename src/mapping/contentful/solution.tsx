import {Solution} from '@src/components/features/decoupled-components/solution/solution';
import {SolutionItem, SolutionProps} from "@src/components/features/decoupled-components/solution/solution.typings";
import {DefaultQueryParameters} from "@src/data/contentful/component.typings";
import {ComponentSolutionSectionFragment} from "@src/data/contentful/solution/__generated/solution.generated";
import {SolutionGql} from "@src/data/contentful/solution/solution-gql";


export const SolutionComponent = (props: DefaultQueryParameters) => {
  const data = SolutionGql(props);
  const componentData: ComponentSolutionSectionFragment | null | undefined = data.data?.solutionSection;
  // adjust data over here to custom component typing
  const teasers: SolutionItem[] | undefined = componentData?.teasersCollection?.items?.map(item => ({
    image: item?.image,
    title: item?.title || '',
    description: item?.subtitle || '',
    button: {
        buttonUrl: item?.buttonUrl,
        buttonText: item?.buttonText
      }
  } as SolutionItem));

  const mappedData: SolutionProps = {
    'title': componentData?.title || '',
    'solutions': teasers
  }

  return <Solution {...mappedData} />
};
