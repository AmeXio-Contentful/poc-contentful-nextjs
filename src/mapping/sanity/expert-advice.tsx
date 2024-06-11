import { ExpertAdvice } from '@src/components/features/decoupled-components/expert-advice/expert-advice';


export function ExpertAdviceSanity(props: any) {

  const advices: any[] = []
  props?.advicesCollection?.items.forEach((item: any) => {
    advices.push({
      buttonText: item.title,
      buttonUrl: item.buttonUrl
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
