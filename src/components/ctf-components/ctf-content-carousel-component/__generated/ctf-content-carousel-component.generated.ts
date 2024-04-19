import * as Types from '../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@/lib/fetchConfig';
export type ComponentContentCarouselFieldsFragment = {
  __typename: 'ContentCarousel';
  title: string | null;
  subtitle: string | null;
  autoplay: boolean | null;
  sys: { __typename?: 'Sys'; id: string };
  blockImage: {
    __typename?: 'Asset';
    url: string | null;
    title: string | null;
    contentType: string | null;
  } | null;
  blockBody: { __typename?: 'ContentCarouselBlockBody'; json: any } | null;
  block2Image: {
    __typename?: 'Asset';
    url: string | null;
    title: string | null;
    contentType: string | null;
  } | null;
  block2Body: { __typename?: 'ContentCarouselBlock2Body'; json: any } | null;
  block3Image: {
    __typename?: 'Asset';
    url: string | null;
    title: string | null;
    contentType: string | null;
  } | null;
  block3Body: { __typename?: 'ContentCarouselBlock3Body'; json: any } | null;
};

export type CtfComponentContentCarouselQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;

export type CtfComponentContentCarouselQuery = {
  __typename?: 'Query';
  contentCarousel: {
    __typename: 'ContentCarousel';
    title: string | null;
    subtitle: string | null;
    autoplay: boolean | null;
    sys: { __typename?: 'Sys'; id: string };
    blockImage: {
      __typename?: 'Asset';
      url: string | null;
      title: string | null;
      contentType: string | null;
    } | null;
    blockBody: { __typename?: 'ContentCarouselBlockBody'; json: any } | null;
    block2Image: {
      __typename?: 'Asset';
      url: string | null;
      title: string | null;
      contentType: string | null;
    } | null;
    block2Body: { __typename?: 'ContentCarouselBlock2Body'; json: any } | null;
    block3Image: {
      __typename?: 'Asset';
      url: string | null;
      title: string | null;
      contentType: string | null;
    } | null;
    block3Body: { __typename?: 'ContentCarouselBlock3Body'; json: any } | null;
  } | null;
};

export const ComponentContentCarouselFieldsFragmentDoc = `
    fragment ComponentContentCarouselFields on ContentCarousel {
  __typename
  sys {
    id
  }
  title
  subtitle
  autoplay
  blockImage {
    url
    title
    contentType
  }
  blockBody {
    json
  }
  block2Image {
    url
    title
    contentType
  }
  block2Body {
    json
  }
  block3Image {
    url
    title
    contentType
  }
  block3Body {
    json
  }
}
    `;
export const CtfComponentContentCarouselDocument = `
    query CtfComponentContentCarousel($id: String!, $locale: String, $preview: Boolean) {
  contentCarousel(id: $id, locale: $locale, preview: $preview) {
    ...ComponentContentCarouselFields
  }
}
    ${ComponentContentCarouselFieldsFragmentDoc}`;

export const useCtfComponentContentCarouselQuery = <
  TData = CtfComponentContentCarouselQuery,
  TError = unknown,
>(
  variables: CtfComponentContentCarouselQueryVariables,
  options?: Omit<
    UseQueryOptions<CtfComponentContentCarouselQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      CtfComponentContentCarouselQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<CtfComponentContentCarouselQuery, TError, TData>({
    queryKey: ['CtfComponentContentCarousel', variables],
    queryFn: customFetcher<
      CtfComponentContentCarouselQuery,
      CtfComponentContentCarouselQueryVariables
    >(CtfComponentContentCarouselDocument, variables) as any,
    ...options,
  });
};

useCtfComponentContentCarouselQuery.getKey = (
  variables: CtfComponentContentCarouselQueryVariables,
) => ['CtfComponentContentCarousel', variables];

useCtfComponentContentCarouselQuery.fetcher = (
  variables: CtfComponentContentCarouselQueryVariables,
  options?: RequestInit['headers'],
) =>
  customFetcher<
    CtfComponentContentCarouselQuery,
    CtfComponentContentCarouselQueryVariables
  >(CtfComponentContentCarouselDocument, variables, options);
