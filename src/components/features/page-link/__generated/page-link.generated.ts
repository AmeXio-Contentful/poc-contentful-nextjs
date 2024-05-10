import * as Types from '../../../../lib/__generated/graphql.types';

export type PageLinkFieldsFragment = { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContentCollection?: { __typename?: 'PagePageContentCollection', items: Array<{ __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Description', sys: { __typename?: 'Sys', id: string } } | { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'JoinUs', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PageSection', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ReferenceClients', sys: { __typename?: 'Sys', id: string } } | { __typename: 'SolutionSection', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Teaser', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Testimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TwoGrid', sys: { __typename?: 'Sys', id: string } } | null> } | null };

export const PageLinkFieldsFragmentDoc = `
    fragment PageLinkFields on Page {
  __typename
  slug
  sys {
    id
  }
  pageName
  pageContentCollection(locale: $locale, preview: $preview) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
    }
  }
}
    `;