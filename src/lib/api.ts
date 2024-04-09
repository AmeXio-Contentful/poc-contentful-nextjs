import { Page } from '@/lib/types';

async function fetchGraphQL(
  tags: string[] | undefined,
  query: string,
  preview = false,
): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: tags },
    },
  ).then((response) => response.json());
}

function extractPage(fetchResponse: any): Page {
  return fetchResponse?.data?.pageCollection?.items?.[0];
}

export async function getAmeXioPage(
  isDraftMode: boolean = false,
): Promise<Page> {
  const entries = await fetchGraphQL(
    ['pages'],
    `query {
      pageCollection(where: {slug: "amexio-poc-home"}, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
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
      topSectionCollection(limit: 20) {
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
      extraSectionCollection(limit: 20) {
        items {
          ... on Entry {
            __typename
            sys {
              id
            }
          }
          ...{__typename}
        }
      }
    }
      }
    }`,
    isDraftMode,
  );
  return extractPage(entries);
}
