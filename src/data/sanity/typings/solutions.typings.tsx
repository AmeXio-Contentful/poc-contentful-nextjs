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

export interface SolutionProps {
  title: string;
  solutionItems: TeaserItemSanity[]
}
