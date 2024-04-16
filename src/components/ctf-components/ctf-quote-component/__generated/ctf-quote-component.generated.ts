import * as Types from '../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@/lib/fetchConfig';
export type ComponentQuoteFieldsFragment = {
  __typename: 'ComponentQuote';
  internalName: string | null;
  sys: { __typename?: 'Sys'; id: string };
};

export type CtfComponentQuoteQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;

export type CtfComponentQuoteQuery = {
  __typename?: 'Query';
  componentQuote: {
    __typename: 'ComponentQuote';
    internalName: string | null;
    sys: { __typename?: 'Sys'; id: string };
  } | null;
};

export const ComponentQuoteFieldsFragmentDoc = `
    fragment ComponentQuoteFields on ComponentQuote {
  __typename
  sys {
    id
  }
  internalName
}
    `;
export const CtfComponentQuoteDocument = `
    query CtfComponentQuote($id: String!, $locale: String, $preview: Boolean) {
  componentQuote(id: $id, locale: $locale, preview: $preview) {
    ...ComponentQuoteFields
  }
}
    ${ComponentQuoteFieldsFragmentDoc}`;

export const useCtfComponentQuoteQuery = <
  TData = CtfComponentQuoteQuery,
  TError = unknown,
>(
  variables: CtfComponentQuoteQueryVariables,
  options?: Omit<
    UseQueryOptions<CtfComponentQuoteQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      CtfComponentQuoteQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<CtfComponentQuoteQuery, TError, TData>({
    queryKey: ['CtfComponentQuote', variables],
    queryFn: customFetcher<
      CtfComponentQuoteQuery,
      CtfComponentQuoteQueryVariables
    >(CtfComponentQuoteDocument, variables),
    ...options,
  });
};

useCtfComponentQuoteQuery.getKey = (
  variables: CtfComponentQuoteQueryVariables,
) => ['CtfComponentQuote', variables];

useCtfComponentQuoteQuery.fetcher = (
  variables: CtfComponentQuoteQueryVariables,
  options?: RequestInit['headers'],
) =>
  customFetcher<CtfComponentQuoteQuery, CtfComponentQuoteQueryVariables>(
    CtfComponentQuoteDocument,
    variables,
    options,
  );
