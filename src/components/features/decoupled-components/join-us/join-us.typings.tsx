export interface JoinUsProps {
    title: string,
    description: string,
    buttonText: string,
    buttonUrl: string,
    joinUsItems: JoinUsItem[],
    joinUsClients: JoinUsClient[]
}

export interface JoinUsItem {
    title: string,
    image: any,
    iconUrl?: string
}

export interface JoinUsClient {
    title: string,
    url: string
}
