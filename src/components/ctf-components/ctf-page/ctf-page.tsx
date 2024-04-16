import { ComponentResolver } from '@/components/utils/component-resolver';
import { getAmeXioPage } from '@/lib/api';
import { Page } from '@/lib/types';
import { draftMode } from 'next/headers';
import React from 'react';
import contentfulConfig from 'contentful.config';
import i18nConfig from 'next-i18next.config.js';
import Head from 'next/head';
import QueryClientContextProvider from '@/components/utils/query-client-provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ContentfulContentProvider } from "@/contentful-context";

const {i18n} = i18nConfig;

interface ComponentProps {
    __typename: string;
    sys: {
        id: string;
    }
}

export default async function CtfPage() {
    const {isEnabled} = draftMode();
    const page: Page = await getAmeXioPage(isEnabled);

    const locale = i18n.defaultLocale;

    const {seo} = page || {};

    const metaTags = {
        title: seo?.title ?? page?.pageName,
        description: seo?.description,
        image: seo?.image,
        no_index: seo?.noIndex,
        no_follow: seo?.noFollow,
    };

    const robots = [
        metaTags.no_index === true ? 'noindex' : undefined,
        metaTags.no_follow === true ? 'nofollow' : undefined,
    ].filter((x): x is string => x !== undefined);

    const topSection =
        page?.topSectionCollection &&
        (page?.topSectionCollection.items.filter((it) => !!it)) as ComponentProps[];

    const pageSection = page?.pageContentCollection?.items as ComponentProps[];
    const extraSection = page?.extraSectionCollection?.items as ComponentProps[];

    return (
        <>
            <Head>
                {metaTags.title && (
                    <>
                        <title key="title">{metaTags.title}</title>
                        <meta key="og:title" property="og:title" content={metaTags.title}/>
                    </>
                )}
                {metaTags.description && (
                    <>
                        <meta
                            key="description"
                            name="description"
                            content={metaTags.description}
                        />
                        <meta
                            key="og:description"
                            property="og:description"
                            content={metaTags.description}
                        />
                    </>
                )}
                {robots.length > 0 && (
                    <meta key="robots" name="robots" content={robots.join(', ')}/>
                )}
                {metaTags.image && (
                    <meta
                        key="og:image"
                        property="og:image"
                        content={`${metaTags.image.url}?w=1200&h=630&f=faces&fit=fill`}
                    />
                )}
                {page?.slug && (
                    <meta
                        key="og:url"
                        property="og:url"
                        content={`${contentfulConfig.meta.url}/${page?.slug === 'home' ? '' : `/${page?.slug}`}`}
                    />
                )}
                <meta key="og:locale" property="og:locale" content={locale}/>
            </Head>
            <body>
                <main className="flex min-h-screen flex-col items-center justify-between p-24">
                    <ContentfulContentProvider>
                        <QueryClientContextProvider>
                            <ReactQueryDevtools initialIsOpen={false}/>
                            {topSection?.map(entry => (
                                <div key={entry.sys.id}>
                                    <ComponentResolver componentProps={entry!}/>
                                </div>
                            ))}

                            {pageSection?.map(entry => (
                                <div key={entry.sys.id}>
                                    <ComponentResolver componentProps={entry!}/>
                                </div>
                            ))}

                            {extraSection?.map(entry => (
                                <div key={entry.sys.id}>
                                    <ComponentResolver componentProps={entry!}/>
                                </div>
                            ))}
                        </QueryClientContextProvider>
                    </ContentfulContentProvider>
                </main>
            </body>
        </>
    );
}