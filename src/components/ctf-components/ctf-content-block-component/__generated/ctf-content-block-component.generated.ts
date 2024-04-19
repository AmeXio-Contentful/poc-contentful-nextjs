import * as Types from '../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@/lib/fetchConfig';
export type ComponentContentBlocksFieldsFragment = {
  __typename: 'ContentBlock';
  sys: { __typename?: 'Sys'; id: string };
  contentBlockCtaCollection: {
    __typename?: 'ContentBlockContentBlockCtaCollection';
    total: number;
    items: Array<
      | { __typename?: 'Author'; sys: { __typename?: 'Sys'; id: string } }
      | { __typename?: 'ComponentCta'; sys: { __typename?: 'Sys'; id: string } }
      | {
          __typename?: 'ComponentDemo';
          sys: { __typename?: 'Sys'; id: string };
        }
      | {
          __typename?: 'ComponentDuplex';
          sys: { __typename?: 'Sys'; id: string };
        }
      | {
          __typename?: 'ComponentHeroBanner';
          sys: { __typename?: 'Sys'; id: string };
        }
      | {
          __typename?: 'ComponentInfoBlock';
          sys: { __typename?: 'Sys'; id: string };
        }
      | {
          __typename?: 'ComponentProductTable';
          sys: { __typename?: 'Sys'; id: string };
        }
      | {
          __typename?: 'ComponentQuote';
          sys: { __typename?: 'Sys'; id: string };
        }
      | { __typename?: 'ContentBlock'; sys: { __typename?: 'Sys'; id: string } }
      | { __typename?: 'ContentBlok'; sys: { __typename?: 'Sys'; id: string } }
      | {
          __typename?: 'ContentBlokMetCta';
          blockTitle: string | null;
          buttonText: string | null;
          buttonLink: string | null;
          blockImage: {
            __typename?: 'Asset';
            title: string | null;
            description: string | null;
            contentType: string | null;
            fileName: string | null;
            url: string | null;
            width: number | null;
            height: number | null;
          } | null;
          blockBody: {
            __typename?: 'ContentBlokMetCtaBlockBody';
            json: any;
          } | null;
          sys: { __typename?: 'Sys'; id: string };
        }
      | {
          __typename?: 'ContentBlokSplit';
          sys: { __typename?: 'Sys'; id: string };
        }
      | {
          __typename?: 'ContentCarousel';
          sys: { __typename?: 'Sys'; id: string };
        }
      | { __typename?: 'FooterMenu'; sys: { __typename?: 'Sys'; id: string } }
      | { __typename?: 'HeroBanner'; sys: { __typename?: 'Sys'; id: string } }
      | {
          __typename?: 'ImageCarousel';
          sys: { __typename?: 'Sys'; id: string };
        }
      | { __typename?: 'MenuGroup'; sys: { __typename?: 'Sys'; id: string } }
      | {
          __typename?: 'NavigationMenu';
          sys: { __typename?: 'Sys'; id: string };
        }
      | { __typename?: 'Page'; sys: { __typename?: 'Sys'; id: string } }
      | { __typename?: 'Seo'; sys: { __typename?: 'Sys'; id: string } }
      | { __typename?: 'TextBanner'; sys: { __typename?: 'Sys'; id: string } }
      | { __typename?: 'Title'; sys: { __typename?: 'Sys'; id: string } }
      | { __typename?: 'TopicPerson'; sys: { __typename?: 'Sys'; id: string } }
      | { __typename?: 'TopicProduct'; sys: { __typename?: 'Sys'; id: string } }
      | {
          __typename?: 'TopicProductFeature';
          sys: { __typename?: 'Sys'; id: string };
        }
      | null
    >;
  } | null;
};

export type CtfComponentContentBlockQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;

export type CtfComponentContentBlockQuery = {
  __typename?: 'Query';
  contentBlock: {
    __typename: 'ContentBlock';
    sys: { __typename?: 'Sys'; id: string };
    contentBlockCtaCollection: {
      __typename?: 'ContentBlockContentBlockCtaCollection';
      total: number;
      items: Array<
        | { __typename?: 'Author'; sys: { __typename?: 'Sys'; id: string } }
        | {
            __typename?: 'ComponentCta';
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'ComponentDemo';
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'ComponentDuplex';
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'ComponentHeroBanner';
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'ComponentInfoBlock';
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'ComponentProductTable';
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'ComponentQuote';
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'ContentBlock';
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'ContentBlok';
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'ContentBlokMetCta';
            blockTitle: string | null;
            buttonText: string | null;
            buttonLink: string | null;
            blockImage: {
              __typename?: 'Asset';
              title: string | null;
              description: string | null;
              contentType: string | null;
              fileName: string | null;
              url: string | null;
              width: number | null;
              height: number | null;
            } | null;
            blockBody: {
              __typename?: 'ContentBlokMetCtaBlockBody';
              json: any;
            } | null;
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'ContentBlokSplit';
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'ContentCarousel';
            sys: { __typename?: 'Sys'; id: string };
          }
        | { __typename?: 'FooterMenu'; sys: { __typename?: 'Sys'; id: string } }
        | { __typename?: 'HeroBanner'; sys: { __typename?: 'Sys'; id: string } }
        | {
            __typename?: 'ImageCarousel';
            sys: { __typename?: 'Sys'; id: string };
          }
        | { __typename?: 'MenuGroup'; sys: { __typename?: 'Sys'; id: string } }
        | {
            __typename?: 'NavigationMenu';
            sys: { __typename?: 'Sys'; id: string };
          }
        | { __typename?: 'Page'; sys: { __typename?: 'Sys'; id: string } }
        | { __typename?: 'Seo'; sys: { __typename?: 'Sys'; id: string } }
        | { __typename?: 'TextBanner'; sys: { __typename?: 'Sys'; id: string } }
        | { __typename?: 'Title'; sys: { __typename?: 'Sys'; id: string } }
        | {
            __typename?: 'TopicPerson';
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'TopicProduct';
            sys: { __typename?: 'Sys'; id: string };
          }
        | {
            __typename?: 'TopicProductFeature';
            sys: { __typename?: 'Sys'; id: string };
          }
        | null
      >;
    } | null;
  } | null;
};

export const ComponentContentBlocksFieldsFragmentDoc = `
    fragment ComponentContentBlocksFields on ContentBlock {
  __typename
  sys {
    id
  }
  contentBlockCtaCollection {
    total
    items {
      sys {
        id
      }
      ... on ContentBlokMetCta {
        blockTitle
        buttonText
        buttonLink
        blockImage {
          title
          description
          contentType
          fileName
          url
          width
          height
        }
        blockBody {
          json
        }
      }
    }
  }
}
    `;
export const CtfComponentContentBlockDocument = `
    query CtfComponentContentBlock($id: String!, $locale: String, $preview: Boolean) {
  contentBlock(id: $id, locale: $locale, preview: $preview) {
    ...ComponentContentBlocksFields
  }
}
    ${ComponentContentBlocksFieldsFragmentDoc}`;

export const useCtfComponentContentBlockQuery = <
  TData = CtfComponentContentBlockQuery,
  TError = unknown,
>(
  variables: CtfComponentContentBlockQueryVariables,
  options?: Omit<
    UseQueryOptions<CtfComponentContentBlockQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      CtfComponentContentBlockQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<CtfComponentContentBlockQuery, TError, TData>({
    queryKey: ['CtfComponentContentBlock', variables],
    queryFn: customFetcher<
      CtfComponentContentBlockQuery,
      CtfComponentContentBlockQueryVariables
    >(CtfComponentContentBlockDocument, variables) as any,
    ...options,
  });
};

useCtfComponentContentBlockQuery.getKey = (
  variables: CtfComponentContentBlockQueryVariables,
) => ['CtfComponentContentBlock', variables];

useCtfComponentContentBlockQuery.fetcher = (
  variables: CtfComponentContentBlockQueryVariables,
  options?: RequestInit['headers'],
) =>
  customFetcher<
    CtfComponentContentBlockQuery,
    CtfComponentContentBlockQueryVariables
  >(CtfComponentContentBlockDocument, variables, options);