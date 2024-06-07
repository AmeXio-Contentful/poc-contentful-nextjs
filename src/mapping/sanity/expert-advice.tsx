import ExpertAdvice from '@src/components/features/decoupled-components/expert-advice/expert-advice';

export function ExpertAdviceSanity(props: any) {
  const expertAdviceProps = {
    title: props.componentProps?.title,
    subtitle: props.componentProps?.subtitle,
    buttonUrl: props.componentProps?.buttonUrl,
    buttonText: props.componentProps?.buttonText,
    advices: props.componentProps?.expertAdvices,
  };

  return <ExpertAdvice {...expertAdviceProps} />;
}
