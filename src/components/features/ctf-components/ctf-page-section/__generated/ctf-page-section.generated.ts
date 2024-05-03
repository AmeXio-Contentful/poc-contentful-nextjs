import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type DefaultInfo_Button_Fragment = { __typename: 'Button', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_ComponentWrapper_Fragment = { __typename: 'ComponentWrapper', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_ContentCarousel_Fragment = { __typename: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_Description_Fragment = { __typename: 'Description', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_FooterMenu_Fragment = { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_HeroBanner_Fragment = { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_Image_Fragment = { __typename: 'Image', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_ImageCarousel_Fragment = { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_LanguageMetadata_Fragment = { __typename: 'LanguageMetadata', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_MainNavigation_Fragment = { __typename: 'MainNavigation', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_MenuGroup_Fragment = { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_NavigationItem_Fragment = { __typename: 'NavigationItem', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_NavigationMenu_Fragment = { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_PageSection_Fragment = { __typename: 'PageSection', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_Seo_Fragment = { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_Teaser_Fragment = { __typename: 'Teaser', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_Testimonial_Fragment = { __typename: 'Testimonial', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_Title_Fragment = { __typename: 'Title', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfo_TwoGrid_Fragment = { __typename: 'TwoGrid', sys: { __typename?: 'Sys', id: string } };

export type DefaultInfoFragment = DefaultInfo_Button_Fragment | DefaultInfo_ComponentWrapper_Fragment | DefaultInfo_ContentCarousel_Fragment | DefaultInfo_Description_Fragment | DefaultInfo_FooterMenu_Fragment | DefaultInfo_HeroBanner_Fragment | DefaultInfo_Image_Fragment | DefaultInfo_ImageCarousel_Fragment | DefaultInfo_LanguageMetadata_Fragment | DefaultInfo_MainNavigation_Fragment | DefaultInfo_MenuGroup_Fragment | DefaultInfo_NavigationItem_Fragment | DefaultInfo_NavigationMenu_Fragment | DefaultInfo_Page_Fragment | DefaultInfo_PageSection_Fragment | DefaultInfo_Seo_Fragment | DefaultInfo_Teaser_Fragment | DefaultInfo_Testimonial_Fragment | DefaultInfo_Title_Fragment | DefaultInfo_TwoGrid_Fragment;

export type CtfPageSectionFieldsFragment = (
  { __typename?: 'PageSection', componentsGrouped?: boolean | null, sectionType?: string | null, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<(
      { __typename?: 'Button' }
      & DefaultInfo_Button_Fragment
    ) | (
      { __typename?: 'ComponentWrapper' }
      & DefaultInfo_ComponentWrapper_Fragment
    ) | (
      { __typename?: 'Description' }
      & DefaultInfo_Description_Fragment
    ) | (
      { __typename?: 'Image' }
      & DefaultInfo_Image_Fragment
    ) | (
      { __typename?: 'ImageCarousel' }
      & DefaultInfo_ImageCarousel_Fragment
    ) | (
      { __typename?: 'PageSection' }
      & DefaultInfo_PageSection_Fragment
    ) | (
      { __typename?: 'Teaser' }
      & DefaultInfo_Teaser_Fragment
    ) | (
      { __typename?: 'Testimonial', title?: string | null, subtitle?: string | null, quote?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null }
      & DefaultInfo_Testimonial_Fragment
    ) | (
      { __typename?: 'Title' }
      & DefaultInfo_Title_Fragment
    ) | (
      { __typename?: 'TwoGrid' }
      & DefaultInfo_TwoGrid_Fragment
    ) | null> } | null }
  & DefaultInfo_PageSection_Fragment
);

export type CtfPageSectionQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfPageSectionQuery = { __typename?: 'Query', pageSection?: (
    { __typename?: 'PageSection' }
    & CtfPageSectionFieldsFragment
  ) | null };

export const DefaultInfoFragmentDoc = `
    fragment DefaultInfo on Entry {
  __typename
  sys {
    id
  }
}
    `;
export const CtfPageSectionFieldsFragmentDoc = `
    fragment CtfPageSectionFields on PageSection {
  ...DefaultInfo
  componentsGrouped
  sectionType
  componentsCollection {
    items {
      ... on ComponentWrapper {
        ...DefaultInfo
      }
      ... on PageSection {
        ...DefaultInfo
      }
      ... on Button {
        ...DefaultInfo
      }
      ... on Description {
        ...DefaultInfo
      }
      ... on Image {
        ...DefaultInfo
      }
      ... on ImageCarousel {
        ...DefaultInfo
      }
      ... on Teaser {
        ...DefaultInfo
      }
      ... on Testimonial {
        ...DefaultInfo
        title
        subtitle
        quote
        image {
          url
        }
      }
      ... on Title {
        ...DefaultInfo
      }
      ... on TwoGrid {
        ...DefaultInfo
      }
    }
  }
}
    `;
export const CtfPageSectionDocument = `
    query CtfPageSection($id: String!, $locale: String, $preview: Boolean) {
  pageSection(id: $id, locale: $locale, preview: $preview) {
    ...CtfPageSectionFields
  }
}
    ${CtfPageSectionFieldsFragmentDoc}
${DefaultInfoFragmentDoc}`;
export const useCtfPageSectionQuery = <
      TData = CtfPageSectionQuery,
      TError = unknown
    >(
      variables: CtfPageSectionQueryVariables,
      options?: UseQueryOptions<CtfPageSectionQuery, TError, TData>
    ) =>
    useQuery<CtfPageSectionQuery, TError, TData>(
      ['CtfPageSection', variables],
      customFetcher<CtfPageSectionQuery, CtfPageSectionQueryVariables>(CtfPageSectionDocument, variables),
      options
    );

useCtfPageSectionQuery.getKey = (variables: CtfPageSectionQueryVariables) => ['CtfPageSection', variables];
;

useCtfPageSectionQuery.fetcher = (variables: CtfPageSectionQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfPageSectionQuery, CtfPageSectionQueryVariables>(CtfPageSectionDocument, variables, options);