import { ContentfulFieldName } from '@src/components/shared/shared-typing';

export interface TitleProps extends ContentfulFieldName {
  title: string;
  heading?: string;
  titleClasses?: string;
}
