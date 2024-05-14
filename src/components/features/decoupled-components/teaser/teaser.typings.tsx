import {ButtonProps} from "@src/components/features/decoupled-components/button/button.typings";
import {DescriptionProps} from "@src/components/features/decoupled-components/description/description.typings";
import {TitleProps} from "@src/components/features/decoupled-components/title/title.typings";

/* export interface TeaserProps extends ButtonProps, DescriptionProps, TitleProps {
  type: string;
  image?: any;
  subtitle: string;
  titleProps: TitleProps;
  descriptionProps: DescriptionProps;
  buttonProps?: ButtonProps;
  quote?: string;
} */

export interface TeaserProps {
  icon?: string;
  titleProps: TitleProps;
  descriptionProps: DescriptionProps;
  buttonProps?: ButtonProps;
  teaserClasses?: string;
}
