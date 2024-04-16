import dynamic from 'next/dynamic';

export const componentMap = {
  ComponentDuplex: dynamic(() =>
    import(
      '@/components/ctf-components/ctf-duplex-component/ctf-duplex-component'
    ).then((module) => module.CtfDuplexComponent),
  ),
  ComponentHeroBanner: dynamic(() =>
    import(
      '@/components/ctf-components/ctf-hero-banner-component/ctf-hero-banner-component'
    ).then((module) => module.CtfHeroBannerComponent),
  ),
  TextBanner: dynamic(() =>
    import(
      '@/components/ctf-components/ctf-text-banner-component/ctf-text-banner-component'
    ).then((module) => module.CtfTextBannerComponent),
  ),
  ComponentQuote: dynamic(() =>
    import(
      '@/components/ctf-components/ctf-quote-component/ctf-quote-component'
    ).then((module) => module.CtfQuoteComponent),
  ),
};

export const componentGqlMap = {
  ComponentDuplex: dynamic(() =>
    import(
      '@/components/ctf-components/ctf-duplex-component/ctf-duplex-component-gql'
    ).then((module) => module.CtfDuplexComponentGql),
  ),
  ComponentHeroBanner: dynamic(() =>
    import(
      '@/components/ctf-components/ctf-hero-banner-component/ctf-hero-banner-component-gql'
    ).then((module) => module.CtfHeroBannerComponentGql),
  ),
  TextBanner: dynamic(() =>
    import(
      '@/components/ctf-components/ctf-text-banner-component/ctf-text-banner-component-gql'
    ).then((module) => module.CtfTextBannerComponentGql),
  ),
  ComponentQuote: dynamic(() =>
    import(
      '@/components/ctf-components/ctf-quote-component/ctf-quote-component-gql'
    ).then((module) => module.CtfQuoteComponentGql),
  ),
};
