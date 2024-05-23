import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';

import { useCtfNavigationQuery } from '@src/data/contentful/navigation/__generated/navigation.generated';
import { useCtfPageQuery } from '@src/data/contentful/page/__generated/ctf-page.generated';
import CtfPageGgl from '@src/data/contentful/page/ctf-page-gql';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
import { prefetchPromiseArr } from '@src/lib/prefetch-promise-array';


const LangPage: NextPage = () => {
  return <CtfPageGgl slug="/" />;
};

export const getServerSideProps = async ({ locale, query }: NextPageContext) => {
  try {
    const preview = Boolean(query.preview);
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(
      useCtfNavigationQuery.getKey({ locale, preview }),
      useCtfNavigationQuery.fetcher({ locale, preview }),
    );

    // Default queries
    await queryClient.prefetchQuery(
      useCtfPageQuery.getKey({ slug: 'home', locale, preview }),
      useCtfPageQuery.fetcher({ slug: 'home', locale, preview }),
    );

    await queryClient.prefetchQuery(
      useCtfNavigationQuery.getKey({ locale, preview }),
      useCtfNavigationQuery.fetcher({ locale, preview }),
    );

    // Dynamic queries
    const pageData = await useCtfPageQuery.fetcher({ slug: 'home', locale, preview })();
    const page = pageData.pageCollection?.items[0];

    // const topSection = page?.topSectionCollection?.items;
    const content = page?.pageContentCollection?.items;
    // const extraSection = page?.extraSectionCollection?.items;

    await Promise.all([
      // ...prefetchPromiseArr({ inputArr: topSection, locale, queryClient }),
      // ...prefetchPromiseArr({ inputArr: extraSection, locale, queryClient }),
      ...prefetchPromiseArr({ inputArr: [content], locale, queryClient }),
    ]);

    return {
      props: {
        ...(await getServerSideTranslations(locale)),
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default LangPage;
