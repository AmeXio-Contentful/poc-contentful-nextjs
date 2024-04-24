import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ComponentHeroBannerFieldsFragment = { __typename: 'HeroBanner', title?: string | null, fullWidth?: boolean | null, buttonText?: string | null, buttonLink?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, subtitle?: { __typename?: 'HeroBannerSubtitle', json: any } | null, backgroundImage?: { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, url?: string | null, width?: number | null, height?: number | null } | null };

export type CtfComponentCtaBannerQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfComponentCtaBannerQuery = { __typename?: 'Query', heroBanner?: (
    { __typename?: 'HeroBanner' }
    & ComponentHeroBannerFieldsFragment
  ) | null };

export const ComponentHeroBannerFieldsFragmentDoc = `
    fragment ComponentHeroBannerFields on HeroBanner {
  __typename
  sys {
    id
  }
  title
  subtitle {
    json
  }
  fullWidth
  buttonText
  buttonLink
  internalName
  backgroundImage {
    title
    description
    contentType
    fileName
    url
    width
    height
  }
}
    `;
export const CtfComponentCtaBannerDocument = `
    query CtfComponentCtaBanner($id: String!, $locale: String, $preview: Boolean) {
  heroBanner(id: $id, locale: $locale, preview: $preview) {
    ...ComponentHeroBannerFields
  }
}
    ${ComponentHeroBannerFieldsFragmentDoc}`;
export const useCtfComponentCtaBannerQuery = <
      TData = CtfComponentCtaBannerQuery,
      TError = unknown
    >(
      variables: CtfComponentCtaBannerQueryVariables,
      options?: UseQueryOptions<CtfComponentCtaBannerQuery, TError, TData>
    ) =>
    useQuery<CtfComponentCtaBannerQuery, TError, TData>(
      ['CtfComponentCtaBanner', variables],
      customFetcher<CtfComponentCtaBannerQuery, CtfComponentCtaBannerQueryVariables>(CtfComponentCtaBannerDocument, variables),
      options
    );

useCtfComponentCtaBannerQuery.getKey = (variables: CtfComponentCtaBannerQueryVariables) => ['CtfComponentCtaBanner', variables];
;

useCtfComponentCtaBannerQuery.fetcher = (variables: CtfComponentCtaBannerQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfComponentCtaBannerQuery, CtfComponentCtaBannerQueryVariables>(CtfComponentCtaBannerDocument, variables, options);