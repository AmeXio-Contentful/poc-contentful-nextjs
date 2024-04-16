import * as Types from '../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@/lib/fetchConfig';
export type ComponentDuplexFieldsFragment = { __typename: 'ComponentDuplex', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfComponentDuplexQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfComponentDuplexQuery = { __typename?: 'Query', componentDuplex?: { __typename: 'ComponentDuplex', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | null };


export const ComponentDuplexFieldsFragmentDoc = `
    fragment ComponentDuplexFields on ComponentDuplex {
  __typename
  sys {
    id
  }
  internalName
}
    `;
export const CtfComponentDuplexDocument = `
    query CtfComponentDuplex($id: String!, $locale: String, $preview: Boolean) {
  componentDuplex(id: $id, locale: $locale, preview: $preview) {
    ...ComponentDuplexFields
  }
}
    ${ComponentDuplexFieldsFragmentDoc}`;

export const useCtfComponentDuplexQuery = <
      TData = CtfComponentDuplexQuery,
      TError = unknown
    >(
      variables: CtfComponentDuplexQueryVariables,
      options?: Omit<UseQueryOptions<CtfComponentDuplexQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfComponentDuplexQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfComponentDuplexQuery, TError, TData>(
      {
    queryKey: ['CtfComponentDuplex', variables],
    queryFn: customFetcher<CtfComponentDuplexQuery, CtfComponentDuplexQueryVariables>(CtfComponentDuplexDocument, variables) as any,
    ...options
  }
    )};

useCtfComponentDuplexQuery.getKey = (variables: CtfComponentDuplexQueryVariables) => ['CtfComponentDuplex', variables];


useCtfComponentDuplexQuery.fetcher = (variables: CtfComponentDuplexQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfComponentDuplexQuery, CtfComponentDuplexQueryVariables>(CtfComponentDuplexDocument, variables, options);
