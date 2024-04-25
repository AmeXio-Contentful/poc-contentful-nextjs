import dynamic from 'next/dynamic';

export const componentMap = {
  HeroBanner: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component'
      ).then((module) => module.CtfCtaBannerComponent),
  ),
  Title: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-title-component/ctf-title-component'
      ).then((module) => module.CtfTitleComponent),
  ),
  ContentBlock: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-content-block-component/ctf-content-block-component'
      ).then((module) => module.CtfContentBlockComponent),
  ),
  ContentCarousel: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-content-carousel-component/ctf-content-carousel-component'
      ).then((module) => module.CtfContentCarouselComponent),
  ),
  ContentBlok: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-content-block-join-us/ctf-content-block-join-us'
      ).then((module) => module.CtfContentBlockJoinUs),
  ),
  ImageCarousel: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-infinite-carousel-component/ctf-infinite-carousel-component'
      ).then((module) => module.CtfInfiniteCarouselComponent),
  ),
  ContentBlokSplit: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-content-block-split/ctf-content-block-split'
      ).then((module) => module.CtfContentBlockSplit),
  ),
};

export const componentGqlMap = {
  HeroBanner: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-cta-banner-component/ctf-cta-banner-component-gql'
      ).then((module) => module.CtfCtaBannerComponentGql),
  ),
  Title: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-title-component/ctf-title-component-gql'
      ).then((module) => module.CtfTitleComponentGql),
  ),
  ContentBlock: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-content-block-component/ctf-content-block-component-gql'
      ).then((module) => module.CtfContentBlockComponentGql),
  ),
  ContentCarousel: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-content-carousel-component/ctf-content-carousel-component-gql'
      ).then((module) => module.CtfContentCarouselComponentGql),
  ),
  ContentBlok: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-content-block-join-us/ctf-content-block-join-us-gql'
      ).then((module) => module.CtfContentBlockJoinUsGql),
  ),
  ImageCarousel: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-infinite-carousel-component/ctf-infinite-carousel-component-gql'
      ).then((module) => module.CtfInfiniteCarouselComponentGql),
  ),
  ContentBlokSplit: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-content-block-split/ctf-content-block-split-gql'
      ).then((module) => module.CtfContentBlockSplitGql),
  ),
};
