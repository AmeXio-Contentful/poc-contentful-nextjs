import { createClient } from 'contentful';

export async function getLocales()  {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    environment: process.env.ENVIRONMENT_NAME, // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
  })

  const space = await client.getSpace();
  const locales = space.locales;
  return locales.map(locale=> locale.code);
}
