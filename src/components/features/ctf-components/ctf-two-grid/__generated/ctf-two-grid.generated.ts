import * as Types from '../../../../../lib/__generated/graphql.types';

import { DefaultInfo_Button_Fragment, DefaultInfo_ComponentWrapper_Fragment, DefaultInfo_ContentCarousel_Fragment, DefaultInfo_Description_Fragment, DefaultInfo_FooterMenu_Fragment, DefaultInfo_HeroBanner_Fragment, DefaultInfo_Image_Fragment, DefaultInfo_ImageCarousel_Fragment, DefaultInfo_LanguageMetadata_Fragment, DefaultInfo_MainNavigation_Fragment, DefaultInfo_MenuGroup_Fragment, DefaultInfo_NavigationItem_Fragment, DefaultInfo_NavigationMenu_Fragment, DefaultInfo_Page_Fragment, DefaultInfo_PageSection_Fragment, DefaultInfo_Seo_Fragment, DefaultInfo_Teaser_Fragment, DefaultInfo_Testimonial_Fragment, DefaultInfo_Title_Fragment, DefaultInfo_TwoGrid_Fragment } from '../../ctf-page-section/__generated/ctf-page-section.generated';
import { DefaultInfoFragmentDoc } from '../../ctf-page-section/__generated/ctf-page-section.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ComponentsFieldPageSectionFragment = { __typename: 'PageSection', componentsGrouped?: boolean | null, sys: { __typename?: 'Sys', id: string }, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<(
      { __typename?: 'Button' }
      & ComponentsFields_Button_Fragment
    ) | (
      { __typename?: 'ComponentWrapper' }
      & ComponentsFields_ComponentWrapper_Fragment
    ) | (
      { __typename?: 'Description' }
      & ComponentsFields_Description_Fragment
    ) | (
      { __typename?: 'Image' }
      & ComponentsFields_Image_Fragment
    ) | (
      { __typename?: 'ImageCarousel' }
      & ComponentsFields_ImageCarousel_Fragment
    ) | (
      { __typename?: 'PageSection' }
      & ComponentsFields_PageSection_Fragment
    ) | (
      { __typename?: 'Teaser' }
      & ComponentsFields_Teaser_Fragment
    ) | (
      { __typename?: 'Testimonial' }
      & ComponentsFields_Testimonial_Fragment
    ) | (
      { __typename?: 'Title' }
      & ComponentsFields_Title_Fragment
    ) | (
      { __typename?: 'TwoGrid' }
      & ComponentsFields_TwoGrid_Fragment
    ) | null> } | null };

export type ComponentsFields_Button_Fragment = (
  { __typename?: 'Button' }
  & DefaultInfo_Button_Fragment
);

export type ComponentsFields_ComponentWrapper_Fragment = { __typename?: 'ComponentWrapper' };

export type ComponentsFields_ContentCarousel_Fragment = { __typename?: 'ContentCarousel' };

export type ComponentsFields_Description_Fragment = (
  { __typename?: 'Description' }
  & DefaultInfo_Description_Fragment
);

export type ComponentsFields_FooterMenu_Fragment = { __typename?: 'FooterMenu' };

export type ComponentsFields_HeroBanner_Fragment = { __typename?: 'HeroBanner' };

export type ComponentsFields_Image_Fragment = (
  { __typename?: 'Image' }
  & DefaultInfo_Image_Fragment
);

export type ComponentsFields_ImageCarousel_Fragment = { __typename?: 'ImageCarousel' };

export type ComponentsFields_LanguageMetadata_Fragment = { __typename?: 'LanguageMetadata' };

export type ComponentsFields_MainNavigation_Fragment = { __typename?: 'MainNavigation' };

export type ComponentsFields_MenuGroup_Fragment = { __typename?: 'MenuGroup' };

export type ComponentsFields_NavigationItem_Fragment = { __typename?: 'NavigationItem' };

export type ComponentsFields_NavigationMenu_Fragment = { __typename?: 'NavigationMenu' };

export type ComponentsFields_Page_Fragment = { __typename?: 'Page' };

export type ComponentsFields_PageSection_Fragment = { __typename?: 'PageSection' };

export type ComponentsFields_Seo_Fragment = { __typename?: 'Seo' };

export type ComponentsFields_Teaser_Fragment = { __typename?: 'Teaser' };

export type ComponentsFields_Testimonial_Fragment = { __typename?: 'Testimonial' };

export type ComponentsFields_Title_Fragment = (
  { __typename?: 'Title' }
  & DefaultInfo_Title_Fragment
);

export type ComponentsFields_TwoGrid_Fragment = { __typename?: 'TwoGrid' };

export type ComponentsFieldsFragment = ComponentsFields_Button_Fragment | ComponentsFields_ComponentWrapper_Fragment | ComponentsFields_ContentCarousel_Fragment | ComponentsFields_Description_Fragment | ComponentsFields_FooterMenu_Fragment | ComponentsFields_HeroBanner_Fragment | ComponentsFields_Image_Fragment | ComponentsFields_ImageCarousel_Fragment | ComponentsFields_LanguageMetadata_Fragment | ComponentsFields_MainNavigation_Fragment | ComponentsFields_MenuGroup_Fragment | ComponentsFields_NavigationItem_Fragment | ComponentsFields_NavigationMenu_Fragment | ComponentsFields_Page_Fragment | ComponentsFields_PageSection_Fragment | ComponentsFields_Seo_Fragment | ComponentsFields_Teaser_Fragment | ComponentsFields_Testimonial_Fragment | ComponentsFields_Title_Fragment | ComponentsFields_TwoGrid_Fragment;

export type ComponentTwoGridFieldsFragment = { __typename: 'TwoGrid', internalName?: string | null, sys: { __typename?: 'Sys', id: string }, componentLeft?: { __typename?: 'Button' } | { __typename?: 'Description' } | { __typename?: 'Image' } | { __typename?: 'ImageCarousel' } | (
    { __typename?: 'PageSection' }
    & ComponentsFieldPageSectionFragment
  ) | { __typename?: 'Teaser' } | { __typename?: 'Testimonial' } | { __typename?: 'Title' } | { __typename?: 'TwoGrid' } | null, componentRight?: { __typename?: 'Button' } | { __typename?: 'Description' } | { __typename?: 'Image' } | { __typename?: 'ImageCarousel' } | (
    { __typename?: 'PageSection' }
    & ComponentsFieldPageSectionFragment
  ) | { __typename?: 'Teaser' } | { __typename?: 'Testimonial' } | { __typename?: 'Title' } | { __typename?: 'TwoGrid' } | null };

export type CtfComponentTwoGridQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfComponentTwoGridQuery = { __typename?: 'Query', twoGrid?: (
    { __typename?: 'TwoGrid' }
    & ComponentTwoGridFieldsFragment
  ) | null };

export const ComponentsFieldsFragmentDoc = `
    fragment ComponentsFields on Entry {
  ... on Button {
    ...DefaultInfo
  }
  ... on Description {
    ...DefaultInfo
  }
  ... on Image {
    ...DefaultInfo
  }
  ... on Title {
    ...DefaultInfo
  }
}
    `;
export const ComponentsFieldPageSectionFragmentDoc = `
    fragment ComponentsFieldPageSection on PageSection {
  __typename
  sys {
    id
  }
  componentsGrouped
  componentsCollection {
    items {
      ...ComponentsFields
    }
  }
}
    `;
export const ComponentTwoGridFieldsFragmentDoc = `
    fragment ComponentTwoGridFields on TwoGrid {
  __typename
  internalName
  sys {
    id
  }
  componentLeft {
    ...ComponentsFieldPageSection
  }
  componentRight {
    ...ComponentsFieldPageSection
  }
}
    `;
export const CtfComponentTwoGridDocument = `
    query CtfComponentTwoGrid($id: String!, $locale: String, $preview: Boolean) {
  twoGrid(id: $id, locale: $locale, preview: $preview) {
    ...ComponentTwoGridFields
  }
}
    ${ComponentTwoGridFieldsFragmentDoc}
${ComponentsFieldPageSectionFragmentDoc}
${ComponentsFieldsFragmentDoc}
${DefaultInfoFragmentDoc}`;
export const useCtfComponentTwoGridQuery = <
      TData = CtfComponentTwoGridQuery,
      TError = unknown
    >(
      variables: CtfComponentTwoGridQueryVariables,
      options?: UseQueryOptions<CtfComponentTwoGridQuery, TError, TData>
    ) =>
    useQuery<CtfComponentTwoGridQuery, TError, TData>(
      ['CtfComponentTwoGrid', variables],
      customFetcher<CtfComponentTwoGridQuery, CtfComponentTwoGridQueryVariables>(CtfComponentTwoGridDocument, variables),
      options
    );

useCtfComponentTwoGridQuery.getKey = (variables: CtfComponentTwoGridQueryVariables) => ['CtfComponentTwoGrid', variables];
;

useCtfComponentTwoGridQuery.fetcher = (variables: CtfComponentTwoGridQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfComponentTwoGridQuery, CtfComponentTwoGridQueryVariables>(CtfComponentTwoGridDocument, variables, options);