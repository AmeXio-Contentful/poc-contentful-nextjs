import { Solutions } from '@src/components/features/decoupled-components/solutions/solutions';
import {
  SolutionItem,
  SolutionsProps,
} from '@src/components/features/decoupled-components/solutions/solutions.typings';
import { DefaultQueryParameters } from '@src/data/contentful/component.typings';
import { ComponentSolutionSectionFragment } from '@src/data/contentful/solutions/__generated/solutions.generated';
import { SolutionsGql } from '@src/data/contentful/solutions/solutions-gql';

export const SolutionsComponent = (props: DefaultQueryParameters) => {
  const data = SolutionsGql(props);
  const componentData: ComponentSolutionSectionFragment | null | undefined =
    data.data?.solutionSection;
  // adjust data over here to custom component typing
  const teasers: SolutionItem[] | undefined = componentData?.teasersCollection?.items?.map(
    item =>
      ({
        image: item?.image,
        title: item?.title || '',
        description: item?.subtitle || '',
        button: {
          buttonUrl: item?.buttonUrl,
          buttonText: item?.buttonText,
        },
        id: item?.sys.id,
      }) as SolutionItem,
  );

  const mappedData: SolutionsProps = {
    title: componentData?.title || '',
    solutions: teasers,
    id: componentData?.sys.id,
  };

  return <Solutions {...mappedData} />;
};
