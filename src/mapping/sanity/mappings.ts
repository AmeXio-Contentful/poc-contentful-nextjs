import dynamic from 'next/dynamic';

export const componentMapSanity = {
  HeroBanner: dynamic(() =>
    import(
      '@src/mapping/sanity/hero-banner'
      ).then((module) => module.HeroBannerSanityComponent),
  ),
  SolutionSection: dynamic(() =>
    import(
      '@src/mapping/sanity/solution'
      ).then((module) => module.Solution),
  ),
  TwoGrid: dynamic(() =>
    import(
      '@src/mapping/sanity/two-grid'
      ).then((module) => module.TwoGridSanity),
  ),
  ReferencedClients: dynamic(() =>
    import(
      '@src/mapping/sanity/reference-client'
      ).then((module) => module.ReferenceClientsComponentSanity),
  ),
  JoinUs: dynamic(() =>
    import(
      '@src/mapping/sanity/join-us'
      ).then((module) => module.JoinUsComponentSanity),
  ),
  FeaturedArticle: dynamic(() =>
    import(
      '@src/mapping/sanity/featured-article'
      ).then((module) => module.FeaturedArticleSanity),
  ),
  ExpertAdvice: dynamic(() =>
    import(
      '@src/mapping/sanity/expert-advice'
      ).then((module) => module.ExpertAdviceSanity),
  ),
  ClientImage: dynamic(() =>
    import(
      '@src/mapping/sanity/image'
      ).then((module) => module.SanityImage),
  ),
  Teaser: dynamic(() =>
    import(
      '@src/mapping/sanity/teaser'
      ).then((module) => module.TeaserComponent),
  )
};
