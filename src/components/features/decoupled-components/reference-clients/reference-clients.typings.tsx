export interface ReferenceClientsProps {
  title: string,
  description: string,
  clients: ReferenceClient[]
}

export interface ReferenceClient {
  id: any,
  image: any,
  title: string,
  subtitle: string,
  description: string
}
