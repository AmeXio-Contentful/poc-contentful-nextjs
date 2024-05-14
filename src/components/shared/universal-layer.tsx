import { componentMap } from '@src/mappings';

interface UniversalLayerProps {
  data: any;
  component: string;
}

export const UniversalLayer = (props: UniversalLayerProps) => {
  const Component = componentMap[props.component];
  return <Component {...props.data}/>
}
