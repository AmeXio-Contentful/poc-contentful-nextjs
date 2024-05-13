import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';

import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import CtfPageGgl from '@src/components/features/ctf-components/ctf-page/ctf-page-gql';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
import { prefetchPromiseArr } from '@src/lib/prefetch-promise-array';

const LangPage: NextPage = () => {
  return <CtfPageGgl slug="/" />;
};


export async function getStaticProps({ locale, query }: NextPageContext) {
  try {
    const preview = false;
    const queryClient = new QueryClient();

    // Default queries
    await queryClient.prefetchQuery(
      useCtfPageQuery.getKey({ slug: 'home-page-v3-decouple-components', locale, preview }),
      useCtfPageQuery.fetcher({ slug: 'home-page-v3-decouple-components', locale, preview }),
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
}


export default LangPage;
