import {JoinUs} from "@src/components/features/decoupled-components/join-us/join-us";
import {
    JoinUsClient,
    JoinUsItem,
    JoinUsProps
} from "@src/components/features/decoupled-components/join-us/join-us.typings";
import {DefaultQueryParameters} from "@src/data/contentful/component.typings";
import {ComponentJoinUsFragment} from "@src/data/contentful/join-us/__generated/join-us.generated";
import {JoinUsGql} from "@src/data/contentful/join-us/join-us-gql";

export const JoinUsComponent = (props: DefaultQueryParameters) => {
    const data = JoinUsGql(props);
    const componentData: ComponentJoinUsFragment | null | undefined = data.data?.joinUs;
    // adjust data over here to custom component typing
    const joinUsItems: JoinUsItem[] | undefined = componentData?.teasersCollection?.items.map(item => ({
        title: item?.title || '',
        image: item?.image || '',
        id: item?.sys.id,
        description: item?.subtitle
    }));

    const joinUsClients: JoinUsClient[] | undefined = componentData?.clientsCollection?.items.map(item => ({
        title: item?.title || '',
        url: item?.url || '',
        id: item?.sys.id
    }));

    const mappedData: JoinUsProps = {
        title: componentData?.title || '',
        description: componentData?.description || '',
        buttonText: componentData?.buttonText || '',
        buttonUrl: componentData?.buttonUrl || '',
        joinUsItems: joinUsItems || [],
        joinUsClients: joinUsClients || [],
        id: componentData?.sys.id
    }

    return <JoinUs {...mappedData} />
};
