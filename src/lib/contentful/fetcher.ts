export const baseUrl = process.env.CONTENTFUL_ENDPOINT;

export const fetcherConfigContentful = {
  endpoint: `${baseUrl}`,
  params: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  },
  previewParams: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
    },
  }
};

export function customFetcher<TData, TVariables extends { preview?: boolean | null }>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
) {
  return async (): Promise<TData> => {
    const res = await fetch(fetcherConfigContentful.endpoint, {
      method: 'POST',
      ...options,
      ...(variables?.preview ? fetcherConfigContentful.previewParams : fetcherConfigContentful.params),
      body: JSON.stringify({ query, variables }),
    });

    console.log("res", res);
    const json = await res.json();
    console.log("json", json);

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
