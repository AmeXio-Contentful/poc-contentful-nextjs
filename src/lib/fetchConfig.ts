import { end } from '@popperjs/core';

export const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${String(process.env.CONTENTFUL_SPACE_ID,)}`;

export const fetchConfig = {
  endpoint: `${baseUrl}`,
  localEndpoint: `${baseUrl}/environments/local`,
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
  },
  localParams: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN_LOCAL}`,
    },
  },
  localPreviewParams: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN_LOCAL}`,
    },
  },
};

export function customFetcher<TData, TVariables extends { preview?: boolean | null }>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
) {
  return async (): Promise<TData> => {
    const env = process.env.NODE_ENV;
    let endpoint = fetchConfig.localEndpoint;
    let apiToken = fetchConfig.localParams
    if(env == "development"){
      endpoint = fetchConfig.localEndpoint;
      apiToken = variables?.preview ? fetchConfig.localPreviewParams : fetchConfig.localParams;
    }
    else if (env == "production") {
      endpoint = fetchConfig.endpoint;
      apiToken = variables?.preview ? fetchConfig.previewParams : fetchConfig.params
    }
    const res = await fetch(endpoint, {
      method: 'POST',
      ...options,
      ...(apiToken),
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
