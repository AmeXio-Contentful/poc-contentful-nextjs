import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ComponentImageCarouselFieldsFragment = { __typename: 'ImageCarousel', autoplay?: boolean | null, sys: { __typename?: 'Sys', id: string }, imageCollection?: { __typename?: 'AssetCollection', total: number, items: Array<{ __typename?: 'Asset', title?: string | null, description?: string | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type CtfComponentInfiniteCarouselQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfComponentInfiniteCarouselQuery = { __typename?: 'Query', imageCarousel?: (
    { __typename?: 'ImageCarousel' }
    & ComponentImageCarouselFieldsFragment
  ) | null };

export const ComponentImageCarouselFieldsFragmentDoc = `
    fragment ComponentImageCarouselFields on ImageCarousel {
  __typename
  sys {
    id
  }
  autoplay
  imageCollection {
    total
    items {
      sys {
        id
      }
      ... on Asset {
        title
        description
        url
        sys {
          id
        }
      }
    }
  }
}
    `;
export const CtfComponentInfiniteCarouselDocument = `
    query CtfComponentInfiniteCarousel($id: String!, $locale: String, $preview: Boolean) {
  imageCarousel(id: $id, locale: $locale, preview: $preview) {
    ...ComponentImageCarouselFields
  }
}
    ${ComponentImageCarouselFieldsFragmentDoc}`;
export const useCtfComponentInfiniteCarouselQuery = <
      TData = CtfComponentInfiniteCarouselQuery,
      TError = unknown
    >(
      variables: CtfComponentInfiniteCarouselQueryVariables,
      options?: UseQueryOptions<CtfComponentInfiniteCarouselQuery, TError, TData>
    ) =>
    useQuery<CtfComponentInfiniteCarouselQuery, TError, TData>(
      ['CtfComponentInfiniteCarousel', variables],
      customFetcher<CtfComponentInfiniteCarouselQuery, CtfComponentInfiniteCarouselQueryVariables>(CtfComponentInfiniteCarouselDocument, variables),
      options
    );

useCtfComponentInfiniteCarouselQuery.getKey = (variables: CtfComponentInfiniteCarouselQueryVariables) => ['CtfComponentInfiniteCarousel', variables];
;

useCtfComponentInfiniteCarouselQuery.fetcher = (variables: CtfComponentInfiniteCarouselQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfComponentInfiniteCarouselQuery, CtfComponentInfiniteCarouselQueryVariables>(CtfComponentInfiniteCarouselDocument, variables, options);