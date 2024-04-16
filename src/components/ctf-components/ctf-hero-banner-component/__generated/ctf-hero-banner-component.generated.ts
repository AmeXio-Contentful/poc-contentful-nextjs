import * as Types from '../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@/lib/fetchConfig';
export type ComponentHeroBannerFieldsFragment = {
  __typename: 'ComponentHeroBanner';
  internalName: string | null;
  sys: { __typename?: 'Sys'; id: string };
};

export type CtfComponentHeroBannerQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;

export type CtfComponentHeroBannerQuery = {
  __typename?: 'Query';
  componentHeroBanner: {
    __typename: 'ComponentHeroBanner';
    internalName: string | null;
    sys: { __typename?: 'Sys'; id: string };
  } | null;
};

export const ComponentHeroBannerFieldsFragmentDoc = `
    fragment ComponentHeroBannerFields on ComponentHeroBanner {
  __typename
  sys {
    id
  }
  internalName
}
    `;
export const CtfComponentHeroBannerDocument = `
    query CtfComponentHeroBanner($id: String!, $locale: String, $preview: Boolean) {
  componentHeroBanner(id: $id, locale: $locale, preview: $preview) {
    ...ComponentHeroBannerFields
  }
}
    ${ComponentHeroBannerFieldsFragmentDoc}`;

export const useCtfComponentHeroBannerQuery = <
  TData = CtfComponentHeroBannerQuery,
  TError = unknown,
>(
  variables: CtfComponentHeroBannerQueryVariables,
  options?: Omit<
    UseQueryOptions<CtfComponentHeroBannerQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      CtfComponentHeroBannerQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<CtfComponentHeroBannerQuery, TError, TData>({
    queryKey: ['CtfComponentHeroBanner', variables],
    queryFn: customFetcher<
      CtfComponentHeroBannerQuery,
      CtfComponentHeroBannerQueryVariables
    >(CtfComponentHeroBannerDocument, variables),
    ...options,
  });
};

useCtfComponentHeroBannerQuery.getKey = (
  variables: CtfComponentHeroBannerQueryVariables,
) => ['CtfComponentHeroBanner', variables];

useCtfComponentHeroBannerQuery.fetcher = (
  variables: CtfComponentHeroBannerQueryVariables,
  options?: RequestInit['headers'],
) =>
  customFetcher<
    CtfComponentHeroBannerQuery,
    CtfComponentHeroBannerQueryVariables
  >(CtfComponentHeroBannerDocument, variables, options);
