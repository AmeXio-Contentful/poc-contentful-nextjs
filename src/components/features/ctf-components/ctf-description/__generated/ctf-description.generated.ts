import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ComponentDescriptionFieldsFragment = { __typename: 'Description', description?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfComponentDescriptionQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfComponentDescriptionQuery = { __typename?: 'Query', description?: (
    { __typename?: 'Description' }
    & ComponentDescriptionFieldsFragment
  ) | null };

export const ComponentDescriptionFieldsFragmentDoc = `
    fragment ComponentDescriptionFields on Description {
  __typename
  sys {
    id
  }
  description
}
    `;
export const CtfComponentDescriptionDocument = `
    query CtfComponentDescription($id: String!, $locale: String, $preview: Boolean) {
  description(id: $id, locale: $locale, preview: $preview) {
    ...ComponentDescriptionFields
  }
}
    ${ComponentDescriptionFieldsFragmentDoc}`;
export const useCtfComponentDescriptionQuery = <
      TData = CtfComponentDescriptionQuery,
      TError = unknown
    >(
      variables: CtfComponentDescriptionQueryVariables,
      options?: UseQueryOptions<CtfComponentDescriptionQuery, TError, TData>
    ) =>
    useQuery<CtfComponentDescriptionQuery, TError, TData>(
      ['CtfComponentDescription', variables],
      customFetcher<CtfComponentDescriptionQuery, CtfComponentDescriptionQueryVariables>(CtfComponentDescriptionDocument, variables),
      options
    );

useCtfComponentDescriptionQuery.getKey = (variables: CtfComponentDescriptionQueryVariables) => ['CtfComponentDescription', variables];
;

useCtfComponentDescriptionQuery.fetcher = (variables: CtfComponentDescriptionQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfComponentDescriptionQuery, CtfComponentDescriptionQueryVariables>(CtfComponentDescriptionDocument, variables, options);