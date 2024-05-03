import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ComponentTeaserFieldsFragment = { __typename: 'Teaser', title?: string | null, subtitle?: string | null, buttonText?: string | null, buttonUrl?: string | null, grouped?: boolean | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null };

export type CtfComponentTeaserQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfComponentTeaserQuery = { __typename?: 'Query', teaser?: (
    { __typename?: 'Teaser' }
    & ComponentTeaserFieldsFragment
  ) | null };

export const ComponentTeaserFieldsFragmentDoc = `
    fragment ComponentTeaserFields on Teaser {
  __typename
  sys {
    id
  }
  title
  subtitle
  buttonText
  buttonUrl
  grouped
  image {
    title
    url
  }
}
    `;
export const CtfComponentTeaserDocument = `
    query CtfComponentTeaser($id: String!, $locale: String, $preview: Boolean) {
  teaser(id: $id, locale: $locale, preview: $preview) {
    ...ComponentTeaserFields
  }
}
    ${ComponentTeaserFieldsFragmentDoc}`;
export const useCtfComponentTeaserQuery = <
      TData = CtfComponentTeaserQuery,
      TError = unknown
    >(
      variables: CtfComponentTeaserQueryVariables,
      options?: UseQueryOptions<CtfComponentTeaserQuery, TError, TData>
    ) =>
    useQuery<CtfComponentTeaserQuery, TError, TData>(
      ['CtfComponentTeaser', variables],
      customFetcher<CtfComponentTeaserQuery, CtfComponentTeaserQueryVariables>(CtfComponentTeaserDocument, variables),
      options
    );

useCtfComponentTeaserQuery.getKey = (variables: CtfComponentTeaserQueryVariables) => ['CtfComponentTeaser', variables];
;

useCtfComponentTeaserQuery.fetcher = (variables: CtfComponentTeaserQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfComponentTeaserQuery, CtfComponentTeaserQueryVariables>(CtfComponentTeaserDocument, variables, options);