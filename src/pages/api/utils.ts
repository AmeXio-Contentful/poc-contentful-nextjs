import * as contentful from "contentful";

export async function getPreviewBySlug(slug: string) {
  const contentfulClient = createContentfulClient();
  return await contentfulClient.getEntries({
    content_type: 'page',
    "fields.slug": slug
  });
}

function createContentfulClient() {
  const options = {
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
    host: 'preview.contentful.com',
    environment: process.env.ENVIRONMENT_NAME
  }
  return contentful.createClient(options);
}
