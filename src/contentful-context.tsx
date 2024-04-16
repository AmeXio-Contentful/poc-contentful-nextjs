'use client';

import { useContext, createContext, ReactNode } from 'react';

import contentfulConfig from 'contentful.config';
import i18nConfig from 'next-i18next.config.js';
const { i18n } = i18nConfig;

export interface ContentfulContextInterface {
  locale: string;
  spaceIds: {
    main: string;
  };
  previewActive: boolean;
}

export const contentfulContextValue: ContentfulContextInterface = {
  locale: i18n.defaultLocale,
  spaceIds: {
    main: contentfulConfig.contentful.space_id,
  },
  previewActive: false,
};

export const ContentfulContext = createContext<ContentfulContextInterface>(
  contentfulContextValue,
);

export const useContentfulContext = () => useContext(ContentfulContext);

export const ContentfulContentProvider = ({ children }: any) => {
  const previewActive = false; // not yet configured, so not available
  return (
    <ContentfulContext.Provider
      value={{
        locale: process.env.DEFAULT_LOCALE as string,
        spaceIds: {
          main: process.env.CONTENTFUL_SPACE_ID as string,
        },
        previewActive,
      }}
    >
      {children}
    </ContentfulContext.Provider>
  );
};
