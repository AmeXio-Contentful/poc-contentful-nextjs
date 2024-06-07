export interface JoinUsProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  joinUsItems: JoinUsItem[];
  joinUsClients: JoinUsClient[];
  id?: string;
}

export interface JoinUsItem {
  title?: string;
  image?: any;
  iconUrl?: string;
  id?: string;
  description?: string;
}

export interface JoinUsClient {
  title: string;
  url: string;
  id?: string;
}
