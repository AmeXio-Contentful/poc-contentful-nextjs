import { ExpertAdvice } from '@src/components/features/decoupled-components/expert-advice/expert-advice';
import {
  ComponentExperAdviceFieldsFragment
} from '@src/data/contentful/expert-advice/__generated/expert-advice.generated';
import { ExpertAdviceGql } from '@src/data/contentful/expert-advice/expert-advice-gql';

export function ExpertAdviceContentful(props: any) {
  const data = ExpertAdviceGql(props);
  const componentData: ComponentExperAdviceFieldsFragment | null | undefined = data.data?.expertAdvice;

  const advices: any[] = []
  componentData?.advicesCollection?.items.forEach((item: any) => {
    advices.push({
      buttonText: item.title,
      buttonUrl: item.buttonUrl
    })
  });
  const expertAdviceProps = {
    title: componentData?.title as string,
    subtitle: componentData?.subtitle as string,
    buttonUrl: componentData?.buttonUrl as string,
    buttonText: componentData?.buttonText as string,
    advices: advices
  }

  return <p>foo bar</p> // <ExpertAdvice {...expertAdviceProps} />;
}
