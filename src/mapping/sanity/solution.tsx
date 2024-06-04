import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import { Title } from '@src/components/features/decoupled-components/title/title';
import {TitleProps} from "@src/components/features/decoupled-components/title/title.typings";
import {
  ComponentSolutionSectionFragment
} from '@src/data/contentful/solutions/__generated/solutions.generated';
import {
  SolutionItem,
  SolutionsProps,
} from '@src/components/features/decoupled-components/solutions/solutions.typings';
import { Solutions } from '@src/components/features/decoupled-components/solutions/solutions';

interface SolutionItemSanity {
  title: string;
  subtitle: string;
  buttonUrl: string;
  buttonText: string;
  backgroundImage: {
    asset: {
      url: string
    }
  }
}

interface SolutionProps {
  title: string;
  solutionItems: SolutionItemSanity[]
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
