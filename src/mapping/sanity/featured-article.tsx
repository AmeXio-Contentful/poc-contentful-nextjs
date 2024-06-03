import {PortableText} from '@portabletext/react'
import FeaturedArticle from '@src/components/features/decoupled-components/featured-article/featured-article';

interface FeaturedProps {
  subtitle: string;
  title: string;
  buttonUrl: string;
  heading: string;
}

export function toPortableText(rawText: any[]) {
  return <PortableText value={rawText} />
}

export function FeaturedArticleSanity(props: any) {
  const featuredArticleProps: FeaturedProps = {
    title: props.componentProps?.title,
    subtitle: toPortableText(props.componentProps?.subtitleRaw) as any,
    buttonUrl: props.componentProps?.buttonUrl,
    heading: props.componentProps?.heading
  }

  return <FeaturedArticle {...featuredArticleProps} />
}
