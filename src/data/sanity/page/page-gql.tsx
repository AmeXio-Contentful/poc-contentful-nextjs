import Head from 'next/head';

import React, { useState } from 'react';

import { PageError } from '@src/components/features/errors/page-error';
import { useContentfulContext } from '@src/contentful-context';
import { MetaTags, Props } from '@src/data/contentful/page/ctf-page-gql';
import { useLandingPageByIdQuery } from '@src/data/sanity/page/__generated/page.generated';
import { Header } from '@src/mapping/sanity/header';
import Page from '@src/mapping/shared/page';
import contentfulConfig from 'contentful.config';
import { useLandingPageV2ByIdQuery } from '@src/data/sanity/page-content/__generated/page-content.generated';



export interface SanityPageInformation {
  seoTitle: string;
  noIndex?: boolean;
  noFollow?: boolean;
  description: string;
  slug?: {
    current: string
  };
}

const SanityPageGql = ({ slug: slugFromProps }: Props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { locale } = useContentfulContext();

  // LOAD SANITY
  const sanityId = 'ac8b5883-5c20-47c9-a7cb-d64437c6a49e';  //'9a080216-21ab-4ac9-9200-1b9d9d6ffab1';
  const { isLoading, data } = useLandingPageV2ByIdQuery({ id: sanityId });

  if (data) {
    const components = Object.values(data?.allLandingPageV2[0].pageSectionComponents?.pageContent as any);
    const keys = Object.keys(data?.allLandingPageV2[0].pageSectionComponents?.pageContent as any);

    console.log("keys")
    components.map((entry: any, index) => {
      entry['__typename'] = entry['_type'][0].toUpperCase() + entry['_type'].slice(1);
      entry['isSanity'] = true;
    });

    const pageInformation = data.allLandingPageV2[0].pageInformation as SanityPageInformation;
    const page = {
      pageContentCollection: {
        items: components,
      },
    };

    const metaTags: MetaTags = {
      title: pageInformation?.seoTitle as string,
      description: pageInformation?.description as string,
      no_follow: pageInformation?.noIndex as boolean,
      no_index: pageInformation?.noFollow as boolean,
      slug: pageInformation?.slug?.current as string,
    };

    if (isLoading) return <></>;

    if (!page) {
      const error = {
        code: 404,
        message:
          'We were not able to locate the content you were looking for, please check the url for possible typos',
      };
      return <PageError error={error} />;
    }

    console.log("page", page);

    const robots = [
      metaTags.no_index ? 'noindex' : undefined,
      metaTags.no_follow ? 'nofollow' : undefined,
    ].filter((x): x is string => x !== undefined);

    return (
      <>
        <Head>
          {metaTags.title && (
            <>
              <title key="title">{metaTags.title}</title>
              <meta key="og:title" property="og:title" content={metaTags.title} />
            </>
          )}
          {metaTags.description && (
            <>
              <meta key="description" name="description" content={metaTags.description} />
              <meta key="og:description" property="og:description" content={metaTags.description} />
            </>
          )}
          {metaTags.slug && (
            <meta
              key="og:url"
              property="og:url"
              content={`${contentfulConfig.meta.url}/${metaTags.slug === 'home' ? '' : `/${metaTags.slug}`}`}
            />
          )}
          {robots.length > 0 && <meta key="robots" name="robots" content={robots.join(', ')} />}

          <meta key="og:locale" property="og:locale" content={locale} />
          <meta key="og:image:width" property="og:image:width" content="1200" />
          <meta key="og:image:height" property="og:image:height" content="630" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <Header isMenuOpen={isMenuOpen} onMenuClick={() => setMenuOpen(true)} />
        <Page {...page} />
      </>
    );
  }
  return <></>
};

export default SanityPageGql;
