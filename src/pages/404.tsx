import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';

import { PageError } from '@src/components/features/errors/page-error';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
import { useCtfNavigationQuery } from '@src/data/contentful/navigation/__generated/navigation.generated';


const ErrorPage404 = () => {
  return <PageError error={{ code: 404 }} />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    useCtfNavigationQuery.getKey({ locale, preview: false }),
    useCtfNavigationQuery.fetcher({ locale, preview: false }),
  );

  return {
    props: {
      ...(await getServerSideTranslations(locale)),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ErrorPage404;
