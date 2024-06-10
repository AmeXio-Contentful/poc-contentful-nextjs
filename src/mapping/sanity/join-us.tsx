import { JoinUs } from '@src/components/features/decoupled-components/join-us/join-us';
import {
  JoinUsClient,
  JoinUsItem,
  JoinUsProps,
} from '@src/components/features/decoupled-components/join-us/join-us.typings';
import { JoinUsPropsSanity } from '@src/data/sanity/typings/join-us.typings';



export const JoinUsComponentSanity = (props: JoinUsPropsSanity) => {
  const joinUsItems: JoinUsItem[] | undefined = props.joinUsClientItems.map(item => ({
    title: item?.title || '',
    image: item?.backgroundImage?.asset || ''
  }));

  const joinUsClients: JoinUsClient[] | undefined = props.joinUsClients.map(item => ({
    title: item?.title || '',
    url: item?.image.asset.url || ''
  }))

  const mappedData: JoinUsProps = {
    title: props?.title || '',
    description: props?.subtitle || '',
    buttonText: props?.buttonText || '',
    buttonUrl: props?.buttonUrl || '',
    joinUsItems: joinUsItems || [],
    joinUsClients: joinUsClients || []
  }

  return <JoinUs {...mappedData} />
};
