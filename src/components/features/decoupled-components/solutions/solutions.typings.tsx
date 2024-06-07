import { ButtonProps } from '@src/components/features/decoupled-components/button/button.typings';
import { ContentfulFieldName } from '@src/components/shared/shared-typing';

export interface SolutionsProps extends ContentfulFieldName {
  title: string;
  solutions?: SolutionItem[];
}

export interface SolutionItem extends ContentfulFieldName {
  image: any;
  title: string;
  description: string;
  button?: ButtonProps;
  id: string;
}
