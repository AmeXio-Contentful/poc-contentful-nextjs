export interface ReferenceClientsProps {
  title: string,
  description: string,
  clients: ReferenceClient[]
  id: string;
}

export interface ReferenceClient {
  id: any,
  image: any,
  title: string,
  subtitle: string,
  description: string
}
