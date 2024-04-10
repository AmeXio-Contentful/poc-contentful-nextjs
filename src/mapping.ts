import dynamic from 'next/dynamic';

export const componentMap = {
    textBanner: dynamic(() =>
        import('@/components/ctf-components/ctf-text-banner/ctf-text-banner').then(module => module.TextBanner),
    ),
}

export const componentGqlMap = {
    textBanner: dynamic(() =>
        import('@/components/ctf-components/ctf-text-banner/ctf-text-banner-ggl').then(module => module.CtfTextBannerGql) as any,
    )
};