import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ComponentSolutionSectionFragment = { __typename: 'SolutionSection', title?: string | null, sys: { __typename?: 'Sys', id: string }, teasersCollection?: { __typename?: 'SolutionSectionTeasersCollection', items: Array<{ __typename?: 'Teaser', title?: string | null, subtitle?: string | null, buttonText?: string | null, buttonUrl?: string | null, image?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null } | null> } | null };

export type SolutionSectionComponentQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type SolutionSectionComponentQuery = { __typename?: 'Query', solutionSection?: (
    { __typename?: 'SolutionSection' }
    & ComponentSolutionSectionFragment
  ) | null };

export const ComponentSolutionSectionFragmentDoc = `
    fragment ComponentSolutionSection on SolutionSection {
  __typename
  sys {
    id
  }
  title
  teasersCollection {
    items {
      ... on Teaser {
        title
        subtitle
        buttonText
        buttonUrl
        image {
          url
          title
        }
      }
    }
  }
}
    `;
export const SolutionSectionComponentDocument = `
    query solutionSectionComponent($id: String!, $locale: String, $preview: Boolean) {
  solutionSection(id: $id, locale: $locale, preview: $preview) {
    ...ComponentSolutionSection
  }
}
    ${ComponentSolutionSectionFragmentDoc}`;
export const useSolutionSectionComponentQuery = <
      TData = SolutionSectionComponentQuery,
      TError = unknown
    >(
      variables: SolutionSectionComponentQueryVariables,
      options?: UseQueryOptions<SolutionSectionComponentQuery, TError, TData>
    ) =>
    useQuery<SolutionSectionComponentQuery, TError, TData>(
      ['solutionSectionComponent', variables],
      customFetcher<SolutionSectionComponentQuery, SolutionSectionComponentQueryVariables>(SolutionSectionComponentDocument, variables),
      options
    );

useSolutionSectionComponentQuery.getKey = (variables: SolutionSectionComponentQueryVariables) => ['solutionSectionComponent', variables];
;

useSolutionSectionComponentQuery.fetcher = (variables: SolutionSectionComponentQueryVariables, options?: RequestInit['headers']) => customFetcher<SolutionSectionComponentQuery, SolutionSectionComponentQueryVariables>(SolutionSectionComponentDocument, variables, options);