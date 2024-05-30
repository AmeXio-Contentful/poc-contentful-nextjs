import styles from './hero-banner.module.scss';
import descriptionContext from '../description/description.module.scss';

import {ButtonProps} from '@src/components/features/decoupled-components/button/button.typings';
import {DescriptionProps} from "@src/components/features/decoupled-components/description/description.typings";
import {HeroBannerProps} from "@src/components/features/decoupled-components/hero-banner/hero-banner.typings";

import {Teaser} from '@src/components/features/decoupled-components/teaser/teaser';
import {TitleProps} from '@src/components/features/decoupled-components/title/title.typings';

export const HeroBanner = (props: HeroBannerProps) => {
  const { backgroundImage , title, description, buttonText, buttonUrl} = props;
  const titleProps: TitleProps = {
    title: title as string,
    heading: 'h1'
  };

  const descriptionProps: DescriptionProps = {
    description: description as string,
    descriptionClasses: descriptionContext.context_intro
  }

  const buttonProps: ButtonProps = {
    buttonText: buttonText as string,
    buttonUrl: buttonUrl as string,
  }

  return (
    <div className={styles.hero_banner}
         style={{ backgroundImage: `url(${backgroundImage?.url})` }}
    >
      <Teaser
        titleProps={titleProps}
        descriptionProps={descriptionProps}
        buttonProps={buttonProps}
      />
    </div>
  )
};
