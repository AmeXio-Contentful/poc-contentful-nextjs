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

export function CtfTextBannerGql({ id, locale, preview }: CtfTextBannerGqlPropsInterface) {
    const { data, status } = useCtfTextBannerQuery({
        id,
        locale,
        preview,
    });

    console.log(`after query with status ${status}`, data);

    const componentTextBanner = useContentfulLiveUpdates(data?.textBanner);

    return <TextBanner {...componentTextBanner} />;
}

