'use client';

import React from 'react';
import { useCtfTextBannerQuery } from './__generated/ctf-text-banner.generated';
import { TextBanner } from '@/components/ctf-components/ctf-text-banner/ctf-text-banner';

interface CtfTextBannerGqlPropsInterface {
    id: string;
    locale: string;
    preview: boolean;
}

export async function CtfTextBannerGql({ id, locale, preview }: CtfTextBannerGqlPropsInterface) {
    const res = await useCtfTextBannerQuery.fetcher({
        id,
        locale,
        preview,
    });

    const data = await res.json();
    const componentTextBanner =  data.data?.textBanner;
    return <TextBanner {...componentTextBanner} />;
}

