import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfFooterQuery } from './__generated/ctf-footer.generated';

import { useContentfulContext } from '@src/contentful-context';
import { Footer } from '@src/mapping/contentful/footer';


export const CtfFooterGql = () => {
  const { locale, previewActive } = useContentfulContext();

  const { data, isLoading } = useCtfFooterQuery({
    locale,
    preview: previewActive,
  });

  const footerMenuCollection = useContentfulLiveUpdates(data?.footerMenuCollection);

  if (!footerMenuCollection || isLoading) return null;

  return <Footer {...footerMenuCollection} />;
};
