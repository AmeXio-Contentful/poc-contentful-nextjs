import {reference} from "@popperjs/core";

import {ReferenceClients} from "@src/components/features/decoupled-components/reference-clients/reference-clients";
import {
  ReferenceClient,
  ReferenceClientsProps
} from "@src/components/features/decoupled-components/reference-clients/reference-clients.typings";
import {DefaultQueryParameters} from "@src/data/contentful/component.typings";
import {ComponentRerenceClientFragment} from "@src/data/contentful/reference-client/__generated/reference-client.generated";
import {ReferenceClientGql} from "@src/data/contentful/reference-client/reference-client-gql";

export const ReferenceClientsComponent = (props: DefaultQueryParameters) => {
  const data = ReferenceClientGql(props);
  const componentData: ComponentRerenceClientFragment | null | undefined = data.data?.referenceClients;
  // adjust data over here to custom component typing
  const clients: ReferenceClient[] | null | undefined = componentData?.clientsCollection?.items?.map(item => ({
    'id': item?.title || '',
    'image': item?.image || '',
    'title': item?.title || '',
    'subtitle': item?.subtitle || '',
    'description': item?.quote || ''
  }));

  const mappedData: ReferenceClientsProps = {
    'title': componentData?.title || '',
    'description': componentData?.description || '',
    'clients': clients || []
  }

  return <ReferenceClients {...mappedData} />
};
