import React from 'react';

import { ExpertAdvice } from '@src/components/features/decoupled-components/expert-advice/expert-advice';
// import { toPortableText } from '@src/mapping/contentful/featured-article';
import { FeaturedArticle } from '@src/components/features/decoupled-components/featured-article/featured-article';
import { TwoGrid } from '@src/components/features/decoupled-components/two-grid/two-grid';

export const TwoGridSanity = (props: any) => {
  const expertAdviceProps = {
    title: props['expertAdvice']['title'],
    subtitle: props['expertAdvice']['subtitle'],
    buttonUrl: props['expertAdvice']['buttonUrl'],
    buttonText: props['expertAdvice']['buttonText'],
    advices: props['expertAdvice']['expertAdvices']
  }

  const featuredArticleProps = {
    title: props['featuredArticle']['title'],
    heading: props['featuredArticle']['heading'],
    subtitle:  'hello world', //toPortableText(props['featuredArticle']['subtitleRaw']),
    buttonUrl: props['featuredArticle']['buttonUrl'],
  }

  const mappedData = {
    primary: {
      component: ExpertAdvice,
      props: expertAdviceProps
    },
    secondary: {
      component: FeaturedArticle,
      props: featuredArticleProps
    }
  }

  return <TwoGrid {...mappedData}/>
};
