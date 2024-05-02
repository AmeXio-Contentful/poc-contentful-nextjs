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
      '@src/components/features/ctf-components/ctf-title-component/ctf-title-component'
      ).then((module) => module.CtfTitleComponent),
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
  )
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
      '@src/components/features/ctf-components/ctf-title-component/ctf-title-component-gql'
      ).then((module) => module.CtfTitleComponentGql),
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
  )
};
