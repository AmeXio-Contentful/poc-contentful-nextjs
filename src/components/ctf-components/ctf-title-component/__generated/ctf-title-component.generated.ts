import * as Types from '../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@/lib/fetchConfig';
export type ComponentTitleFieldsFragment = {
  __typename: 'Title';
  title: string | null;
  sys: { __typename?: 'Sys'; id: string };
};

export type CtfComponentTitleQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;

export type CtfComponentTitleQuery = {
  __typename?: 'Query';
  title: {
    __typename: 'Title';
    title: string | null;
    sys: { __typename?: 'Sys'; id: string };
  } | null;
};

export const ComponentTitleFieldsFragmentDoc = `
    fragment ComponentTitleFields on Title {
  __typename
  sys {
    id
  }
  title
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
  TError = unknown,
>(
  variables: CtfComponentTitleQueryVariables,
  options?: Omit<
    UseQueryOptions<CtfComponentTitleQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      CtfComponentTitleQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<CtfComponentTitleQuery, TError, TData>({
    queryKey: ['CtfComponentTitle', variables],
    queryFn: customFetcher<
      CtfComponentTitleQuery,
      CtfComponentTitleQueryVariables
    >(CtfComponentTitleDocument, variables) as any,
    ...options,
  });
};

useCtfComponentTitleQuery.getKey = (
  variables: CtfComponentTitleQueryVariables,
) => ['CtfComponentTitle', variables];

useCtfComponentTitleQuery.fetcher = (
  variables: CtfComponentTitleQueryVariables,
  options?: RequestInit['headers'],
) =>
  customFetcher<CtfComponentTitleQuery, CtfComponentTitleQueryVariables>(
    CtfComponentTitleDocument,
    variables,
    options,
  );
