'use client';

import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React, { useEffect, useState } from 'react';

import { useCtfTextBannerQuery } from './__generated/ctf-text-banner.generated';
import { TextBanner } from '@/components/ctf-components/ctf-text-banner/ctf-text-banner';

interface CtfTextBannerGqlPropsInterface {
    id: string;
    locale: string;
    preview: boolean;
}

export default function CtfTextBannerGql({ id, locale, preview }: CtfTextBannerGqlPropsInterface) {
    const { data, status } = useCtfTextBannerQuery({
        id,
        locale,
        preview,
    });

    console.log(`after query with status ${status}`, data);

    const componentTextBanner = useContentfulLiveUpdates(data?.textBanner);

    return <TextBanner {...componentTextBanner} />;
}

// export const CtfTextBannerGql =  ({ id, locale, preview }: CtfTextBannerGqlPropsInterface) => {
//
//     const [componentTextBanner, setComponentTextBanner] = useState<TextBannerFieldsFragment>();
//
//     const { data, status } = useCtfTextBannerQuery({
//         id,
//         locale,
//         preview,
//     });
//
//     const componentTextBanner = useContentfulLiveUpdates(data?.textBanner);
//     console.log(`after query with status ${status}`, data);
//
//     useEffect(() => {
//         console.log("in useEffect");
//
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         const componentTextBanner = useContentfulLiveUpdates(data?.textBanner);
//
//         console.log("test", componentTextBanner);
//         // @ts-ignore
//         setComponentTextBanner(componentTextBanner);
//     }, [status]);
//
//     return <TextBanner {...componentTextBanner} />;
// };
