import * as Types from '../../../../lib/__generated/graphql.types';

export type PageLinkFieldsFragment = { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContentCollection?: { __typename?: 'PagePageContentCollection', items: Array<{ __typename: 'ContentBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentBlok', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentBlokMetCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentBlokSplit', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TextBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | null> } | null };

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
