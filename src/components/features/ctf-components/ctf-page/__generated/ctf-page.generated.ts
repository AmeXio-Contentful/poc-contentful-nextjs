import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type CtfPageFieldsFragment = { __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null } | null, pageContentCollection?: { __typename?: 'PagePageContentCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PageSection', sys: { __typename?: 'Sys', id: string } } | { __typename: 'SolutionSection', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Teaser', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Testimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type CtfPageQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<(
      { __typename?: 'Page' }
      & CtfPageFieldsFragment
    ) | null> } | null };

export const CtfPageFieldsFragmentDoc = `
    fragment CtfPageFields on Page {
  __typename
  sys {
    id
  }
  pageName
  internalName: pageName
  slug
  seo {
    title
    description
    noIndex
    noFollow
  }
  pageContentCollection {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      ... {
        __typename
      }
    }
  }
}
    `;
export const CtfPageDocument = `
    query CtfPage($slug: String!, $locale: String, $preview: Boolean) {
  pageCollection(
    where: {slug: $slug}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      ...CtfPageFields
    }
  }
}
    ${CtfPageFieldsFragmentDoc}`;
export const useCtfPageQuery = <
      TData = CtfPageQuery,
      TError = unknown
    >(
      variables: CtfPageQueryVariables,
      options?: UseQueryOptions<CtfPageQuery, TError, TData>
    ) =>
    useQuery<CtfPageQuery, TError, TData>(
      ['CtfPage', variables],
      customFetcher<CtfPageQuery, CtfPageQueryVariables>(CtfPageDocument, variables),
      options
    );

useCtfPageQuery.getKey = (variables: CtfPageQueryVariables) => ['CtfPage', variables];
;

useCtfPageQuery.fetcher = (variables: CtfPageQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfPageQuery, CtfPageQueryVariables>(CtfPageDocument, variables, options);