import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ComponentContentCarouselFieldsFragment = { __typename: 'ContentCarousel', title?: string | null, subtitle?: string | null, autoplay?: boolean | null, sys: { __typename?: 'Sys', id: string }, blockImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, blockBody?: { __typename?: 'ContentCarouselBlockBody', json: any } | null, block2Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block2Body?: { __typename?: 'ContentCarouselBlock2Body', json: any } | null, block3Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block3Body?: { __typename?: 'ContentCarouselBlock3Body', json: any } | null };

export type CtfComponentContentCarouselQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfComponentContentCarouselQuery = { __typename?: 'Query', contentCarousel?: (
    { __typename?: 'ContentCarousel' }
    & ComponentContentCarouselFieldsFragment
  ) | null };

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
      TError = unknown
    >(
      variables: CtfComponentContentCarouselQueryVariables,
      options?: UseQueryOptions<CtfComponentContentCarouselQuery, TError, TData>
    ) =>
    useQuery<CtfComponentContentCarouselQuery, TError, TData>(
      ['CtfComponentContentCarousel', variables],
      customFetcher<CtfComponentContentCarouselQuery, CtfComponentContentCarouselQueryVariables>(CtfComponentContentCarouselDocument, variables),
      options
    );

useCtfComponentContentCarouselQuery.getKey = (variables: CtfComponentContentCarouselQueryVariables) => ['CtfComponentContentCarousel', variables];
;

useCtfComponentContentCarouselQuery.fetcher = (variables: CtfComponentContentCarouselQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfComponentContentCarouselQuery, CtfComponentContentCarouselQueryVariables>(CtfComponentContentCarouselDocument, variables, options);