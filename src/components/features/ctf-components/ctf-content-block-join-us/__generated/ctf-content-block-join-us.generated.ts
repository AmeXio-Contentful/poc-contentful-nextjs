import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ComponentContentBlokFieldsFragment = { __typename: 'ContentBlok', title?: string | null, subtitle?: string | null, buttonText?: string | null, buttonLink?: string | null, sys: { __typename?: 'Sys', id: string }, block1Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block1Body?: { __typename?: 'ContentBlokBlock1Body', json: any } | null, block2Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block2Body?: { __typename?: 'ContentBlokBlock2Body', json: any } | null, block3Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block3Body?: { __typename?: 'ContentBlokBlock3Body', json: any } | null };

export type CtfContentBlokComponentQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfContentBlokComponentQuery = { __typename?: 'Query', contentBlok?: (
    { __typename?: 'ContentBlok' }
    & ComponentContentBlokFieldsFragment
  ) | null };

export const ComponentContentBlokFieldsFragmentDoc = `
    fragment ComponentContentBlokFields on ContentBlok {
  __typename
  sys {
    id
  }
  title
  subtitle
  block1Image {
    url
    title
    contentType
  }
  block1Body {
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
  buttonText
  buttonLink
}
    `;
export const CtfContentBlokComponentDocument = `
    query CtfContentBlokComponent($id: String!, $locale: String, $preview: Boolean) {
  contentBlok(id: $id, locale: $locale, preview: $preview) {
    ...ComponentContentBlokFields
  }
}
    ${ComponentContentBlokFieldsFragmentDoc}`;
export const useCtfContentBlokComponentQuery = <
      TData = CtfContentBlokComponentQuery,
      TError = unknown
    >(
      variables: CtfContentBlokComponentQueryVariables,
      options?: UseQueryOptions<CtfContentBlokComponentQuery, TError, TData>
    ) =>
    useQuery<CtfContentBlokComponentQuery, TError, TData>(
      ['CtfContentBlokComponent', variables],
      customFetcher<CtfContentBlokComponentQuery, CtfContentBlokComponentQueryVariables>(CtfContentBlokComponentDocument, variables),
      options
    );

useCtfContentBlokComponentQuery.getKey = (variables: CtfContentBlokComponentQueryVariables) => ['CtfContentBlokComponent', variables];
;

useCtfContentBlokComponentQuery.fetcher = (variables: CtfContentBlokComponentQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfContentBlokComponentQuery, CtfContentBlokComponentQueryVariables>(CtfContentBlokComponentDocument, variables, options);