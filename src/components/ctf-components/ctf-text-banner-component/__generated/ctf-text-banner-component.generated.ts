import * as Types from '../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@/lib/fetchConfig';
export type ComponentTextBannerFieldsFragment = { __typename: 'TextBanner', title?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfTextBannerQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfTextBannerQuery = { __typename?: 'Query', textBanner?: { __typename: 'TextBanner', title?: string | null, sys: { __typename?: 'Sys', id: string } } | null };


export const ComponentTextBannerFieldsFragmentDoc = `
    fragment ComponentTextBannerFields on TextBanner {
  __typename
  sys {
    id
  }
  title
}
    `;
export const CtfTextBannerDocument = `
    query CtfTextBanner($id: String!, $locale: String, $preview: Boolean) {
  textBanner(id: $id, locale: $locale, preview: $preview) {
    ...ComponentTextBannerFields
  }
}
    ${ComponentTextBannerFieldsFragmentDoc}`;

export const useCtfTextBannerQuery = <
      TData = CtfTextBannerQuery,
      TError = unknown
    >(
      variables: CtfTextBannerQueryVariables,
      options?: Omit<UseQueryOptions<CtfTextBannerQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfTextBannerQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfTextBannerQuery, TError, TData>(
      {
    queryKey: ['CtfTextBanner', variables],
    queryFn: customFetcher<CtfTextBannerQuery, CtfTextBannerQueryVariables>(CtfTextBannerDocument, variables) as any,
    ...options
  }
    )};

useCtfTextBannerQuery.getKey = (variables: CtfTextBannerQueryVariables) => ['CtfTextBanner', variables];


useCtfTextBannerQuery.fetcher = (variables: CtfTextBannerQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfTextBannerQuery, CtfTextBannerQueryVariables>(CtfTextBannerDocument, variables, options);
