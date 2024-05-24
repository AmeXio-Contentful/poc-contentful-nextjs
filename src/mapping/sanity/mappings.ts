import dynamic from 'next/dynamic';

export const componentMapSanity = {
  HeroBanner: dynamic(() =>
    import(
      '@src/mapping/sanity/hero-banner'
      ).then((module) => module.HeroBanner),
  ),
  SolutionSection: dynamic(() =>
    import(
      '@src/mapping/sanity/solution'
      ).then((module) => module.Solution),
  ),
  TwoGrid: dynamic(() =>
    import(
      '@src/mapping/sanity/two-grid'
      ).then((module) => module.TwoGrid),
  ),
  ExpertAdvice: dynamic(() =>
    import(
      '@src/mapping/sanity/expert-advice'
      ).then((module) => module.ExpertAdvice),
  ),
  FeaturedArticle: dynamic(() =>
    import(
      '@src/mapping/sanity/featured-article'
      ).then((module) => module.FeaturedArticle),
  )
};
