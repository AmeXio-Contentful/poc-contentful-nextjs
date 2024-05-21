import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import Head from 'next/head';

import Page from '@src/mapping/contentful/page';

import { useCtfPageQuery } from '@src/data/contentful/page/__generated/ctf-page.generated';
import { PageError } from '@src/components/features/errors/page-error';
import { useContentfulContext } from '@src/contentful-context';
import { tryget } from '@src/utils';
import contentfulConfig from 'contentful.config';


export interface Props {
  topic?: string;
  slug: string;
}

export interface MetaTags {
  title: string;
  description: string;
  no_index: boolean;
  no_follow: boolean;
  slug: string;
}

const CtfPageGgl = ({ slug: slugFromProps }: Props) => {

  const { previewActive, locale } = useContentfulContext();
  const slug = !slugFromProps || slugFromProps === '/' ? 'home-page-v3-decouple-components' : slugFromProps;


  // LOAD CONTENTFUL
  const { isLoading, data } = useCtfPageQuery({
    slug,
    locale,
    preview: previewActive,
  });

  const page = useContentfulLiveUpdates(tryget(() => data?.pageCollection!.items[0]));
  const { seo } = page || {};

  const metaTags: MetaTags = {
    title: (seo?.title ?? page?.pageName) as string,
    description: seo?.description as string,
    no_follow: seo?.noIndex as boolean,
    no_index: seo?.noFollow as boolean,
    slug: page?.slug as string,
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
      <Page {...page} />
    </>
  );
};

export default CtfPageGgl;
