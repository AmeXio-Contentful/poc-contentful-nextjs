import * as Types from '../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@/lib/fetchConfig';
export type ComponentContentBlokSplitFieldsFragment = {
  __typename: 'ContentBlokSplit';
  title: string | null;
  subtitle: string | null;
  buttonText: string | null;
  buttonLink: string | null;
  fullWidth: boolean | null;
  title2: string | null;
  backgroundColor: string | null;
  sys: { __typename?: 'Sys'; id: string };
  button1: { __typename?: 'ContentBlokSplitButton1'; json: any } | null;
  backgroundImage: {
    __typename?: 'Asset';
    title: string | null;
    description: string | null;
    url: string | null;
    contentType: string | null;
  } | null;
  image: {
    __typename?: 'Asset';
    title: string | null;
    description: string | null;
    url: string | null;
    contentType: string | null;
  } | null;
};

export type CtfComponentSplitBlockQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;

export type CtfComponentSplitBlockQuery = {
  __typename?: 'Query';
  contentBlokSplit: {
    __typename: 'ContentBlokSplit';
    title: string | null;
    subtitle: string | null;
    buttonText: string | null;
    buttonLink: string | null;
    fullWidth: boolean | null;
    title2: string | null;
    backgroundColor: string | null;
    sys: { __typename?: 'Sys'; id: string };
    button1: { __typename?: 'ContentBlokSplitButton1'; json: any } | null;
    backgroundImage: {
      __typename?: 'Asset';
      title: string | null;
      description: string | null;
      url: string | null;
      contentType: string | null;
    } | null;
    image: {
      __typename?: 'Asset';
      title: string | null;
      description: string | null;
      url: string | null;
      contentType: string | null;
    } | null;
  } | null;
};

export const ComponentContentBlokSplitFieldsFragmentDoc = `
    fragment ComponentContentBlokSplitFields on ContentBlokSplit {
  __typename
  sys {
    id
  }
  title
  subtitle
  button1 {
    json
  }
  buttonText
  buttonLink
  backgroundImage {
    title
    description
    url
    contentType
  }
  fullWidth
  image {
    title
    description
    url
    contentType
  }
  title2
  backgroundColor
}
    `;
export const CtfComponentSplitBlockDocument = `
    query CtfComponentSplitBlock($id: String!, $locale: String, $preview: Boolean) {
  contentBlokSplit(id: $id, locale: $locale, preview: $preview) {
    ...ComponentContentBlokSplitFields
  }
}
    ${ComponentContentBlokSplitFieldsFragmentDoc}`;

export const useCtfComponentSplitBlockQuery = <
  TData = CtfComponentSplitBlockQuery,
  TError = unknown,
>(
  variables: CtfComponentSplitBlockQueryVariables,
  options?: Omit<
    UseQueryOptions<CtfComponentSplitBlockQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      CtfComponentSplitBlockQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<CtfComponentSplitBlockQuery, TError, TData>({
    queryKey: ['CtfComponentSplitBlock', variables],
    queryFn: customFetcher<
      CtfComponentSplitBlockQuery,
      CtfComponentSplitBlockQueryVariables
    >(CtfComponentSplitBlockDocument, variables) as any,
    ...options,
  });
};

useCtfComponentSplitBlockQuery.getKey = (
  variables: CtfComponentSplitBlockQueryVariables,
) => ['CtfComponentSplitBlock', variables];

useCtfComponentSplitBlockQuery.fetcher = (
  variables: CtfComponentSplitBlockQueryVariables,
  options?: RequestInit['headers'],
) =>
  customFetcher<
    CtfComponentSplitBlockQuery,
    CtfComponentSplitBlockQueryVariables
  >(CtfComponentSplitBlockDocument, variables, options);
