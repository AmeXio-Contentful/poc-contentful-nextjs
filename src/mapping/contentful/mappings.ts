import dynamic from 'next/dynamic';

export const componentMap = {
  TeaserLinked: dynamic(() =>
    import(
      '@src/mapping/contentful/teaser-linked'
      ).then((module) => module.TeaserLinked),
  ),
  Teaser: dynamic(() =>
    import(
      '@src/mapping/contentful/teaser'
      ).then((module) => module.TeaserComponent),
  ),
  Testimonial: dynamic(() =>
    import(
      '@src/components/features/ctf-components/testimonial/ctf-testimonial'
      ).then((module) => module.CtfTestimonial),
  ),
  ImageCarousel: dynamic(() =>
    import(
      '@src/mapping/contentful/infinite-carousel'
      ).then((module) => module.InfiniteCarousel),
  ),
  TwoGrid: dynamic(() =>
    import(
      '@src/mapping/contentful/two-grid'
      ).then((module) => module.TwoGridComponent),
  ),
  HeroBanner: dynamic(() =>
    import(
      '@src/mapping/contentful/hero-banner'
      ).then((module) => module.HeroBannerComponent),
  ),
  SolutionSection: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/solutions/solutions'
      ).then((module) => module.Solutions),
  ),
  ReferenceClients: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/reference-clients/reference-clients'
      ).then((module) => module.ReferenceClients),
  ),
  JoinUs: dynamic(() =>
    import(
      '@src/components/features/decoupled-components/join-us/join-us'
      ).then((module) => module.JoinUs),
  ),
  ExpertAdvice: dynamic(() =>
    import(
      '@src/mapping/contentful/expert-advice'
      ).then((module) => module.ExpertAdviceContentful),
  ),
  FeaturedArticle: dynamic(() =>
    import(
      '@src/mapping/contentful/featured-article'
      ).then((module) => module.FeaturedArticleContentful),
  ),
  Image: dynamic(() =>
    import(
      '@src/mapping/contentful/image'
      ).then((module) => module.ContentfulImage),
  ),
};

export const componentGqlMap = {
  TeaserLinked: dynamic(() =>
    import(
      '@src/mapping/contentful/teaser-linked'
      ).then((module) => module.TeaserLinked),
  ),
  Testimonial: dynamic(() =>
    import(
      '@src/components/features/ctf-components/testimonial/ctf-testimonial-gql'
      ).then((module) => module.CtfTestimonialGql),
  ),
  ImageCarousel: dynamic(() =>
    import(
      '@src/data/contentful/infinite-carousel/ctf-infinite-carousel-gql'
      ).then((module) => module.CtfInfiniteCarouselGql),
  ),
  TwoGrid: dynamic(() =>
    import(
      '@src/mapping/contentful/two-grid'
      ).then((module) => module.TwoGridComponent),
  ),
  // gql file is loaded, which loads the component with the data
  HeroBanner: dynamic(() =>
    import(
      '@src/mapping/contentful/hero-banner'
      ).then((module) => module.HeroBannerComponent),
  ),
  SolutionSection: dynamic(() =>
    import(
      '@src/mapping/contentful/solutions'
      ).then((module) => module.SolutionsComponent),
  ),
  ReferenceClients: dynamic(() =>
    import(
      '@src/mapping/contentful/reference-clients'
      ).then((module) => module.ReferenceClientsComponent),
  ),
  JoinUs: dynamic(() =>
    import(
      '@src/mapping/contentful/join-us'
      ).then((module) => module.JoinUsComponent),
  ),
};
