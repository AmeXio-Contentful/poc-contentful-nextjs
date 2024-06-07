import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation, SSRConfig } from 'next-i18next';
import { useEffect, useState } from 'react';

import { Settings } from '@src/components/features/settings';
import { Layout } from '@src/components/templates/layout/layout';
import { useContentfulContext, ContentfulContentProvider } from '@src/contentful-context';
import { queryConfig } from '@src/lib/gql-client';
import colorfulTheme from '@src/theme';
import nextI18nConfig from 'next-i18next.config';
import '@src/styles/global.css';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/scrollbar';

import '../styles/default-theme.scss';
import contentfulConfig from 'contentful.config';

import { ContentfulLivePreview } from '@contentful/live-preview';

const LivePreviewProvider = ({ children }) => {
  const { previewActive, locale } = useContentfulContext();

  return (
    <ContentfulLivePreviewProvider
      locale={locale}
      enableInspectorMode={previewActive}
      enableLiveUpdates={previewActive}
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
};

type CustomPageProps = SSRConfig & { dehydratedState: DehydratedState; err: Error };

const CustomApp = ({
  Component,
  router,
  pageProps: originalPageProps,
}: AppProps<CustomPageProps>) => {
  const [queryClient] = useState(() => new QueryClient(queryConfig));
  const { dehydratedState, err, ...pageProps } = originalPageProps;
  const { previewActive } = useContentfulContext();

  useEffect(() => {
    // when component is mounting we remove server side rendered css:
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    router.events.on('routeChangeComplete', () => null);

    return () => {
      router.events.off('routeChangeComplete', () => null);
    };
  }, [router.events]);

  ContentfulLivePreview.init({
    locale: 'en',
    enableInspectorMode: true,
    enableLiveUpdates: true,
    debugMode: false,
  });

  return (
    <>
      <Head>
        <meta key="og:image" property="og:image" content={contentfulConfig.meta.image} />
      </Head>
      <ContentfulContentProvider router={router}>
        <LivePreviewProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={colorfulTheme}>
                <Hydrate state={dehydratedState}>
                  <Layout preview={previewActive}>
                    <Component {...pageProps} err={err} />
                    <Settings />
                  </Layout>
                </Hydrate>
              </ThemeProvider>
            </StyledEngineProvider>
          </QueryClientProvider>
        </LivePreviewProvider>
      </ContentfulContentProvider>
    </>
  );
};

export default appWithTranslation(CustomApp, nextI18nConfig);
