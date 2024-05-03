import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ComponentHeroBannerFragment = { __typename: 'HeroBanner', title?: string | null, subtitle?: string | null, buttonUrl?: string | null, buttonText?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null };

export type HeroBannerComponentQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type HeroBannerComponentQuery = { __typename?: 'Query', heroBanner?: (
    { __typename?: 'HeroBanner' }
    & ComponentHeroBannerFragment
  ) | null };

export const ComponentHeroBannerFragmentDoc = `
    fragment ComponentHeroBanner on HeroBanner {
  __typename
  sys {
    id
  }
  title
  subtitle
  buttonUrl
  buttonText
  backgroundImage {
    url
    title
  }
}
    `;
export const HeroBannerComponentDocument = `
    query heroBannerComponent($id: String!, $locale: String, $preview: Boolean) {
  heroBanner(id: $id, locale: $locale, preview: $preview) {
    ...ComponentHeroBanner
  }
}
    ${ComponentHeroBannerFragmentDoc}`;
export const useHeroBannerComponentQuery = <
      TData = HeroBannerComponentQuery,
      TError = unknown
    >(
      variables: HeroBannerComponentQueryVariables,
      options?: UseQueryOptions<HeroBannerComponentQuery, TError, TData>
    ) =>
    useQuery<HeroBannerComponentQuery, TError, TData>(
      ['heroBannerComponent', variables],
      customFetcher<HeroBannerComponentQuery, HeroBannerComponentQueryVariables>(HeroBannerComponentDocument, variables),
      options
    );

useHeroBannerComponentQuery.getKey = (variables: HeroBannerComponentQueryVariables) => ['heroBannerComponent', variables];
;

useHeroBannerComponentQuery.fetcher = (variables: HeroBannerComponentQueryVariables, options?: RequestInit['headers']) => customFetcher<HeroBannerComponentQuery, HeroBannerComponentQueryVariables>(HeroBannerComponentDocument, variables, options);