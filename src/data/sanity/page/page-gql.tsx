import Head from 'next/head';

import CtfPage from '@src/components/features/ctf-components/ctf-page/ctf-page';
import { MetaTags, Props } from '@src/components/features/ctf-components/ctf-page/ctf-page-gql';
import { PageError } from '@src/components/features/errors/page-error';
import { useContentfulContext } from '@src/contentful-context';
import { useLandingPageByIdQuery } from '@src/data/sanity/landing-page/__generated/landing-page.generated';
import contentfulConfig from 'contentful.config';

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

  const { previewActive, locale } = useContentfulContext();
  const slug = !slugFromProps || slugFromProps === '/' ? 'home-page-v3-decouple-components' : slugFromProps;

  // LOAD SANITY
  const sanityId = '9a080216-21ab-4ac9-9200-1b9d9d6ffab1';
  const { isLoading, data } = useLandingPageByIdQuery({ id: sanityId });

  if (data) {
    const components = Object.values(data?.allLandingPage[0] as any);
    const keys = Object.keys(data?.allLandingPage[0] as any);
    components.map((entry: any, index) => {
      entry['__typename'] = (keys[index])[0].toUpperCase() + keys[index].slice(1);
      entry['isSanity'] = true;
    });

    const pageInformation = components.find((element: any) => element.__typename == 'PageInformation') as SanityPageInformation;
    const page = {
      pageContentCollection: {
        items: components,
      },
    };

    const metaTags: MetaTags = {
      title: pageInformation.seoTitle,
      description: pageInformation.description,
      no_follow: pageInformation.noIndex as boolean,
      no_index: pageInformation.noFollow as boolean,
      slug: pageInformation.slug?.current as string,
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
        <CtfPage {...page} />
      </>
    );
  }
  return <></>
};

export default SanityPageGql;
