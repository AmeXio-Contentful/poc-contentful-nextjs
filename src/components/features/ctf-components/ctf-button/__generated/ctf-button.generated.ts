import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ComponentButtonFieldsFragment = { __typename: 'Button', url?: string | null, buttonText?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfComponentButtonQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfComponentButtonQuery = { __typename?: 'Query', button?: (
    { __typename?: 'Button' }
    & ComponentButtonFieldsFragment
  ) | null };

export const ComponentButtonFieldsFragmentDoc = `
    fragment ComponentButtonFields on Button {
  __typename
  sys {
    id
  }
  url
  buttonText
}
    `;
export const CtfComponentButtonDocument = `
    query CtfComponentButton($id: String!, $locale: String, $preview: Boolean) {
  button(id: $id, locale: $locale, preview: $preview) {
    ...ComponentButtonFields
  }
}
    ${ComponentButtonFieldsFragmentDoc}`;
export const useCtfComponentButtonQuery = <
      TData = CtfComponentButtonQuery,
      TError = unknown
    >(
      variables: CtfComponentButtonQueryVariables,
      options?: UseQueryOptions<CtfComponentButtonQuery, TError, TData>
    ) =>
    useQuery<CtfComponentButtonQuery, TError, TData>(
      ['CtfComponentButton', variables],
      customFetcher<CtfComponentButtonQuery, CtfComponentButtonQueryVariables>(CtfComponentButtonDocument, variables),
      options
    );

useCtfComponentButtonQuery.getKey = (variables: CtfComponentButtonQueryVariables) => ['CtfComponentButton', variables];
;

useCtfComponentButtonQuery.fetcher = (variables: CtfComponentButtonQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfComponentButtonQuery, CtfComponentButtonQueryVariables>(CtfComponentButtonDocument, variables, options);