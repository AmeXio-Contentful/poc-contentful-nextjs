import { ReferenceClients } from '@src/components/features/decoupled-components/reference-clients/reference-clients';
import {
  ReferenceClient,
  ReferenceClientsProps,
} from '@src/components/features/decoupled-components/reference-clients/reference-clients.typings';
import { ReferenceClientProps } from '@src/data/sanity/typings/reference-client.typings';


export const ReferenceClientsComponentSanity = (props: ReferenceClientProps) => {
  // adjust data over here to custom component typing
  const clients: ReferenceClient[] | null | undefined = props?.referencedClientsItems?.map(item => ({
    'id': item?.title || '',
    'image': item?.backgroundImage.asset || '',
    'title': item?.title || '',
    'subtitle': item?.subtitle || '',
    'description': item?.quote || ''
  }));

  const mappedData: ReferenceClientsProps = {
    'title': props?.title || '',
    'description': props?.subtitle || '',
    'clients': clients || []
  }

 return <ReferenceClients {...mappedData} />
};
