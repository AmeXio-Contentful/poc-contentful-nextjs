import { ContentfulFieldName } from '@src/components/shared/shared-typing';

export interface DescriptionProps extends ContentfulFieldName {
  description?: string;
  descriptionClasses?: string;
}
