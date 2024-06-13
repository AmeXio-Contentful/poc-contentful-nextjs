import { ExpertAdvice } from '@src/components/features/decoupled-components/expert-advice/expert-advice';
import { Advices } from '@src/mapping/contentful/expert-advice';


export function ExpertAdviceSanity(props: any) {

  const advices: Advices[] = []
  props?.expertAdvices?.forEach((item: any) => {
    advices.push({
      buttonText: item.advice,
      buttonUrl: item.url
    })
  });

  const expertAdviceProps = {
    title: props?.title as string,
    subtitle: props?.subtitle as string,
    buttonUrl: props?.buttonUrl as string,
    buttonText: props?.buttonText as string,
    advices: advices
  }

  return <ExpertAdvice {...expertAdviceProps} />;
}
