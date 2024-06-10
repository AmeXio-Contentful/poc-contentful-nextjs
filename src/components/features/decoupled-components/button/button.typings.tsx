import { ContentfulFieldName } from '@src/components/shared/shared-typing';

export interface ButtonProps extends ContentfulFieldName {
  buttonUrl: string;
  buttonText: string;
  buttonClasses?: string;
  id?: string;
  fieldName?: string;
}
