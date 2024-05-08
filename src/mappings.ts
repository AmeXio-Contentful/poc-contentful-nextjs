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
      '@src/components/features/decoupled-components/hero-banner-component/hero-banner-component'
      ).then((module) => module.HeroBannerComponent),
  ),
  SolutionSection: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/solution-component/solution-component'
      ).then((module) => module.SolutionComponent),
  ),
  ReferenceClients: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/reference-client-component/reference-client-component'
      ).then((module) => module.ReferenceClientComponent),
  ),
  JoinUs: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/join-us-component/join-us-component'
      ).then((module) => module.JoinUsComponent),
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
      '@src/components/features/decoupled-components/hero-banner-component/hero-banner-component-gql'
      ).then((module) => module.HeroBannerComponentGql),
  ),
  SolutionSection: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/solution-component/solution-component-gql'
      ).then((module) => module.SolutionComponentGql),
  ),
  ReferenceClients: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/reference-client-component/reference-client-component-gql'
      ).then((module) => module.ReferenceClientComponentGql),
  ),
  JoinUs: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/join-us-component/join-us-component-gql'
      ).then((module) => module.JoinUsComponentGql),
  ),
};
