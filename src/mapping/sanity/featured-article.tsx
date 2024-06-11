import { FeaturedArticle } from '@src/components/features/decoupled-components/featured-article/featured-article';
import { toPortableText } from '@src/mapping/contentful/featured-article';

interface FeaturedProps {
  subtitle: any;
  title: string;
  buttonUrl: string;
  heading: string;
}

export function FeaturedArticleSanity(props: any) {

  const featuredArticleProps: FeaturedProps = {
    title: props?.title as string,
    subtitle: toPortableText(props?.subtitleRaw),
    buttonUrl: props?.buttonUrl as string,
    heading: props?.heading as string
  }

  return <FeaturedArticle {...featuredArticleProps} />
}
