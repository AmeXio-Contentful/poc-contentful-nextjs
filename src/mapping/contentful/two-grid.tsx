import { TwoGrid } from '@src/components/features/decoupled-components/two-grid/two-grid';
import { DefaultQueryParameters } from '@src/data/contentful/component.typings';
import { TwoGridGql } from '@src/data/contentful/two-grid/two-grid-gql';
import { componentMap } from '@src/mapping/contentful/mappings';

export const TwoGridComponent = (props: DefaultQueryParameters) => {
  const data = TwoGridGql(props);
  const componentData: any | null | undefined = data.data?.twoGrid;

  if (componentData && componentData?.componentLeft.sys) {
    const primaryComponent = componentMap[componentData?.componentLeft?.__typename as string];
    const secondaryComponent = componentMap[componentData?.componentRight?.__typename as string];

    const mappedData = {
      primary: {
        component: primaryComponent,
        props: {
          id: componentData?.componentLeft.sys.id,
          locale: props.locale,
          preview: false,
        },
      },
      secondary: {
        component: secondaryComponent,
        props: {
          id: componentData?.componentRight.sys.id,
          locale: props.locale,
          preview: false,
        },
      },
    };

    // return (
    //   <div className="text-center">
    //     <TwoGrid {...mappedData} />
    //   </div>
    // );
  }
  return <></>;
};
