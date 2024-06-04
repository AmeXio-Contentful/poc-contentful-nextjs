import { Solutions } from '@src/components/features/decoupled-components/solutions/solutions';
import {
  SolutionItem,
  SolutionsProps,
} from '@src/components/features/decoupled-components/solutions/solutions.typings';

export interface TeaserItemSanity {
  title: string;
  subtitle: string;
  buttonUrl: string;
  buttonText: string;
  quote: string;
  backgroundImage: {
    asset: {
      url: string
    }
  }
}

interface SolutionProps {
  title: string;
  solutionItems: TeaserItemSanity[]
}

export const Solution = (props: SolutionProps) => {
  const teasers: SolutionItem[] | undefined = props?.solutionItems?.map(item => ({
    title: item.title,
    description: item.subtitle,
    image: item.backgroundImage.asset,
    button: {
      buttonUrl: item.buttonUrl,
      buttonText: item.buttonText
    }
  } as SolutionItem));

  const mappedData: SolutionsProps = {
    'title': props?.title || '',
    'solutions': teasers
  }

  return <Solutions {...mappedData} />

};
