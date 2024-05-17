import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import Head from 'next/head';

import CtfPage from './ctf-page';

import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { PageError } from '@src/components/features/errors/page-error';
import { useContentfulContext } from '@src/contentful-context';
import { tryget } from '@src/utils';
import contentfulConfig from 'contentful.config';
import { useSearchParams } from 'next/navigation';
import { useLandingPageByIdQuery } from '@src/data/sanity/landing-page/__generated/landing-page.generated';

interface Props {
  topic?: string;
  slug: string;
}

interface MetaTags {
  title: string;
  description: string;
  no_index: boolean;
  no_follow: boolean;
  slug: string;
}

interface SanityPageInformation {
  seoTitle: string;
  noIndex?: boolean;
  noFollow?: boolean;
  description: string;
  slug?: {
    current: string
  };
}

const CtfPageGgl = ({ slug: slugFromProps }: Props) => {

  const isSanity = useSearchParams().get('sanity');
  const { previewActive, locale } = useContentfulContext();
  const slug = !slugFromProps || slugFromProps === '/' ? 'home-page-v3-decouple-components' : slugFromProps;
  let page, loading;

  const { seo } = page || {};

  const metaTags: MetaTags = {
    title: '',
    description: '',
    no_follow: false,
    no_index: false,
    slug: '',
  };

  if (isSanity != 'true') {

    // LOAD CONTENTFUL
    const { isLoading, data } = useCtfPageQuery({
      slug,
      locale,
      preview: previewActive,
    });
    loading = isLoading;
    page = useContentfulLiveUpdates(tryget(() => data?.pageCollection!.items[0]));

    if (page) {
      metaTags.title = seo?.title ?? page.pageName;
      metaTags.description = seo?.description;
      metaTags.no_index = seo?.noIndex;
      metaTags.no_follow = seo?.noFollow;
      metaTags.slug = page.slug;
    }
  } else {
    // LOAD SANITY
    const sanityId = '9a080216-21ab-4ac9-9200-1b9d9d6ffab1';
    const { isLoading, data } = useLandingPageByIdQuery({ id: sanityId });
    loading = isLoading;

    if (data) {
      const components = Object.values(data?.allLandingPage[0] as any);
      const keys = Object.keys(data?.allLandingPage[0] as any);
      components.map((entry: any, index) => {
        entry['__typename'] = (keys[index] as string)[0].toUpperCase() + keys[index].slice(1);
        entry['isSanity'] = true;
      });

      const pageInformation = components.find((element: any) => element.__typename == 'PageInformation') as SanityPageInformation;

      metaTags.title = pageInformation.seoTitle;
      metaTags.description = pageInformation?.description;
      metaTags.no_index = !!pageInformation?.noIndex;
      metaTags.no_follow = !!pageInformation?.noFollow;
      metaTags.slug = pageInformation.slug?.current as string;

      page = {
        pageContentCollection: {
          items: components,
        },
      };
    }
  }

  if (loading) return <></>;

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
      <CtfPage {...page} />
    </>
  );
};

export default CtfPageGgl;
