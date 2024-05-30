import {ButtonProps} from "@src/components/features/decoupled-components/button/button.typings";
import {DescriptionProps} from "@src/components/features/decoupled-components/description/description.typings";
import {TitleProps} from "@src/components/features/decoupled-components/title/title.typings";

export interface TeaserProps {
  icon?: any; // define a more specific type for assets
  iconUrl?: string;
  titleProps: TitleProps;
  subTitleProps?: TitleProps;
  descriptionProps: DescriptionProps;
  buttonProps?: ButtonProps;
  teaserClasses?: string;
}
