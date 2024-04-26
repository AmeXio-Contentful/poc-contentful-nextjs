import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ComponentTitleFieldsFragment = { __typename: 'Title', title?: string | null, alignment?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfComponentTitleQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfComponentTitleQuery = { __typename?: 'Query', title?: (
    { __typename?: 'Title' }
    & ComponentTitleFieldsFragment
  ) | null };

export const ComponentTitleFieldsFragmentDoc = `
    fragment ComponentTitleFields on Title {
  __typename
  sys {
    id
  }
  title
  alignment
}
    `;
export const CtfComponentTitleDocument = `
    query CtfComponentTitle($id: String!, $locale: String, $preview: Boolean) {
  title(id: $id, locale: $locale, preview: $preview) {
    ...ComponentTitleFields
  }
}
    ${ComponentTitleFieldsFragmentDoc}`;
export const useCtfComponentTitleQuery = <
      TData = CtfComponentTitleQuery,
      TError = unknown
    >(
      variables: CtfComponentTitleQueryVariables,
      options?: UseQueryOptions<CtfComponentTitleQuery, TError, TData>
    ) =>
    useQuery<CtfComponentTitleQuery, TError, TData>(
      ['CtfComponentTitle', variables],
      customFetcher<CtfComponentTitleQuery, CtfComponentTitleQueryVariables>(CtfComponentTitleDocument, variables),
      options
    );

useCtfComponentTitleQuery.getKey = (variables: CtfComponentTitleQueryVariables) => ['CtfComponentTitle', variables];
;

useCtfComponentTitleQuery.fetcher = (variables: CtfComponentTitleQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfComponentTitleQuery, CtfComponentTitleQueryVariables>(CtfComponentTitleDocument, variables, options);