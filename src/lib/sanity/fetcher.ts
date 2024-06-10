export const fetchConfigSanity = {
  endpoint: 'https://yzaqedxx.api.sanity.io/v2023-08-01/graphql/production/experiment',
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
    const res = await fetch(fetchConfigSanity.endpoint, {
      method: 'POST',
      ...options,
      ...(fetchConfigSanity.params),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    console.log("json", json);
    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
