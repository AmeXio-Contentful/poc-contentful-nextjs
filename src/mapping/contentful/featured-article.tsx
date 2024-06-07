import {PortableText} from '@portabletext/react'
import { FeaturedArticle } from '@src/components/features/decoupled-components/featured-article/featured-article';
import { FeaturedArticleGql } from '@src/data/contentful/featured-article/featured-article-gql';
import {
  ComponentExperAdviceFieldsFragment
} from '@src/data/contentful/expert-advice/__generated/expert-advice.generated';
import {
  ComponentFeaturedArticleFieldsFragment
} from '@src/data/contentful/featured-article/__generated/featured-article.generated';

interface FeaturedProps {
  subtitle: string;
  title: string;
  buttonUrl: string;
  heading: string;
}

export function toPortableText(rawText: any[]) {
  return <PortableText value={rawText} />
}

export function FeaturedArticleContentful(props: any) {
  const data = FeaturedArticleGql(props);
  const componentData: ComponentFeaturedArticleFieldsFragment | null | undefined = data.data?.featuredArticle;

  console.log("componentData", componentData);
  const featuredArticleProps: FeaturedProps = {
    title: componentData?.title as string,
    subtitle: componentData?.subtitle as string,
    buttonUrl: componentData?.buttonUrl as string,
    heading: componentData?.heading as string
  }

  return <FeaturedArticle {...featuredArticleProps} />
}
