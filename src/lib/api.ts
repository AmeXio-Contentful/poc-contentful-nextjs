const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

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

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.postCollection?.items;
}

function extractPage(fetchResponse: any): any {
  return fetchResponse?.data?.pageCollection?.items?.[0];
}

export async function getAllPosts(
  isDraftMode: boolean = false,
): Promise<any[]> {
  const entries = await fetchGraphQL(
    ['posts'],
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  );
  return extractPostEntries(entries);
}

export async function getAmeXioPage(
  isDraftMode: boolean = false,
): Promise<any> {
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
      pageContent {
        ... on Entry {
          __typename
          sys {
            id
          }
        }
        ...{__typename}
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
