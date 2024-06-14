export const fetchConfigSanity = {
  endpoint: process.env.SANITY_ENDPOINT,
  params: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
}

export function customFetcherSanity<TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
) {
  return async (): Promise<TData> => {
    const res = await fetch(fetchConfigSanity.endpoint as string, {
      method: 'POST',
      ...options,
      ...(fetchConfigSanity.params),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
