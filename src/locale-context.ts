import { createClient } from 'contentful';
import React from 'react';

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

export const defaultLocale = {
  locales: await getLocales()
};

const LocaleContext = React.createContext(defaultLocale);

export const useLocaleContext = () => React.useContext(LocaleContext);

export default LocaleContext;
