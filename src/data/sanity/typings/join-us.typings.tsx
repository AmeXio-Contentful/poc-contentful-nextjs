export interface JoinUsClientItemsProps {
  title: string;
  subtitle: string;
  buttonUrl: string;
  buttonText: string;
  quote: string;
  backgroundImage: joinUsClientProps
}

export interface joinUsClientProps {
  asset: {
    url: string;
  }
}

export interface JoinUsPropsSanity {
  buttonText: string;
  buttonUrl: string;
  subtitle: string;
  title: string;
  joinUsClientItems: JoinUsClientItemsProps[]
  joinUsClients: {
    title: string;
    image: {
      asset: {
        url: string;
      }
    }
  }[]
}
