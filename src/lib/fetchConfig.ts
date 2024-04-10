import { QueryFunction, QueryKey } from "@tanstack/query-core";
import { CtfTextBannerQuery } from "@/components/ctf-components/ctf-text-banner/__generated/ctf-text-banner.generated";

require('dotenv').config()

export const fetchConfig = {
    endpoint: `https://graphql.contentful.com/content/v1/spaces/${
        process.env.CONTENTFUL_SPACE_ID}`,
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
};

export async function customFetcher<TData, TVariables extends { preview?: boolean | null }>(
    query: string,
    variables?: TVariables,
    options?: RequestInit['headers'],
) {
    return await fetch(fetchConfig.endpoint as string, {
        method: 'POST',
        ...options,
        ...(variables?.preview ? fetchConfig.previewParams : fetchConfig.params),
        body: JSON.stringify({query, variables}),
    });
}

