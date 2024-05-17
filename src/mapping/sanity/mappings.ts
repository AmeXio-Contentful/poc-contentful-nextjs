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
  )
};
