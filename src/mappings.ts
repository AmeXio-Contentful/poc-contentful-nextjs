import dynamic from 'next/dynamic';

export const componentMap = {
  PageSection: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-page-section/ctf-page-section'
      ).then((module) => module.CtfPageSection),
  ),
  Teaser: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-teaser/ctf-teaser'
      ).then((module) => module.CtfTeaser),
  ),
  Title: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-title/ctf-title'
      ).then((module) => module.CtfTitle),
  ),
  Description: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-description/ctf-description'
      ).then((module) => module.CtfDescription),
  ),
  Testimonial: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-testimonial/ctf-testimonial'
      ).then((module) => module.CtfTestimonial),
  ),
  Button: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-button/ctf-button'
      ).then((module) => module.CtfButton),
  ),
  ImageCarousel: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-infinite-carousel/ctf-infinite-carousel'
      ).then((module) => module.CtfInfiniteCarousel),
  ),
  TwoGrid: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-two-grid/ctf-two-grid'
      ).then((module) => module.CtfTwoGrid),
  ),
  ComponentWrapper: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-component-wrapper/ctf-component-wrapper'
      ).then((module) => module.CtfComponentWrapper),
  ),
  HeroBanner: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/hero-banner/hero-banner'
      ).then((module) => module.HeroBanner),
  ),
  SolutionSection: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/solution/solution'
      ).then((module) => module.Solution),
  ),
  ReferenceClients: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/reference-client/reference-client'
      ).then((module) => module.ReferenceClient),
  ),
  JoinUs: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/join-us/join-us'
      ).then((module) => module.JoinUs),
  ),
};

export const componentGqlMap = {
  PageSection: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-page-section/ctf-page-section-gql'
      ).then((module) => module.CtfPageSectionGgl),
  ),
  Teaser: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql'
      ).then((module) => module.CtfTeaserGql),
   ),
  Title: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-title/ctf-title-gql'
      ).then((module) => module.CtfTitleGql),
  ),
  Description: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-description/ctf-description-gql'
      ).then((module) => module.CtfDescriptionGql),
  ),
  Testimonial: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-testimonial/ctf-testimonial-gql'
      ).then((module) => module.CtfTestimonialGql),
  ),
  Button: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-button/ctf-button-gql'
      ).then((module) => module.CtfButtonGql),
  ),
  ImageCarousel: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-infinite-carousel/ctf-infinite-carousel-gql'
      ).then((module) => module.CtfInfiniteCarouselGql),
  ),
  TwoGrid: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-two-grid/ctf-two-grid-gql'
      ).then((module) => module.CtfTwoGridGql),
  ),
  ComponentWrapper: dynamic(() =>
    import(
      '@src/components/features/ctf-components/ctf-component-wrapper/ctf-component-wrapper-gql'
      ).then((module) => module.CtComponentWrapperGgl),
  ),
  HeroBanner: dynamic(() =>
    import(
      '@src/data/contentful/hero-banner/hero-banner-gql'
      ).then((module) => module.HeroBannerGql),
  ),
  SolutionSection: dynamic(() =>
    import(
      '@src/data/contentful/solution/solution-gql'
      ).then((module) => module.SolutionGql),
  ),
  ReferenceClients: dynamic(() =>
    import(
      '@src/data/contentful/reference-client/reference-client-gql'
      ).then((module) => module.ReferenceClientGql),
  ),
  JoinUs: dynamic(() =>
    import(
      '@src/data/contentful/join-us/join-us-gql'
      ).then((module) => module.JoinUsGql),
  ),
};
