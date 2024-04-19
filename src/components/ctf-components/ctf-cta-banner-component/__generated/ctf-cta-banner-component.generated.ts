import * as Types from '../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@/lib/fetchConfig';
export type ComponentHeroBannerFieldsFragment = {
  __typename: 'HeroBanner';
  title: string | null;
  subtitle: string | null;
  fullWidth: boolean | null;
  buttonText: string | null;
  buttonLink: string | null;
  internalName: string | null;
  sys: { __typename?: 'Sys'; id: string };
  backgroundImage: {
    __typename?: 'Asset';
    title: string | null;
    description: string | null;
    contentType: string | null;
    fileName: string | null;
    url: string | null;
    width: number | null;
    height: number | null;
  } | null;
};

export type CtfComponentCtaBannerQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;

export type CtfComponentCtaBannerQuery = {
  __typename?: 'Query';
  heroBanner: {
    __typename: 'HeroBanner';
    title: string | null;
    subtitle: string | null;
    fullWidth: boolean | null;
    buttonText: string | null;
    buttonLink: string | null;
    internalName: string | null;
    sys: { __typename?: 'Sys'; id: string };
    backgroundImage: {
      __typename?: 'Asset';
      title: string | null;
      description: string | null;
      contentType: string | null;
      fileName: string | null;
      url: string | null;
      width: number | null;
      height: number | null;
    } | null;
  } | null;
};

export const ComponentHeroBannerFieldsFragmentDoc = `
    fragment ComponentHeroBannerFields on HeroBanner {
  __typename
  sys {
    id
  }
  title
  subtitle
  fullWidth
  buttonText
  buttonLink
  internalName
  backgroundImage {
    title
    description
    contentType
    fileName
    url
    width
    height
  }
}
    `;
export const CtfComponentCtaBannerDocument = `
    query CtfComponentCtaBanner($id: String!, $locale: String, $preview: Boolean) {
  heroBanner(id: $id, locale: $locale, preview: $preview) {
    ...ComponentHeroBannerFields
  }
}
    ${ComponentHeroBannerFieldsFragmentDoc}`;

export const useCtfComponentCtaBannerQuery = <
  TData = CtfComponentCtaBannerQuery,
  TError = unknown,
>(
  variables: CtfComponentCtaBannerQueryVariables,
  options?: Omit<
    UseQueryOptions<CtfComponentCtaBannerQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      CtfComponentCtaBannerQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<CtfComponentCtaBannerQuery, TError, TData>({
    queryKey: ['CtfComponentCtaBanner', variables],
    queryFn: customFetcher<
      CtfComponentCtaBannerQuery,
      CtfComponentCtaBannerQueryVariables
    >(CtfComponentCtaBannerDocument, variables) as any,
    ...options,
  });
};

useCtfComponentCtaBannerQuery.getKey = (
  variables: CtfComponentCtaBannerQueryVariables,
) => ['CtfComponentCtaBanner', variables];

useCtfComponentCtaBannerQuery.fetcher = (
  variables: CtfComponentCtaBannerQueryVariables,
  options?: RequestInit['headers'],
) =>
  customFetcher<
    CtfComponentCtaBannerQuery,
    CtfComponentCtaBannerQueryVariables
  >(CtfComponentCtaBannerDocument, variables, options);
