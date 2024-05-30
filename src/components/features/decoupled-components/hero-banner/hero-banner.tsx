import styles from './hero-banner.module.scss';
import description from '../description/description.module.scss';

import {ButtonProps} from '@src/components/features/decoupled-components/button/button.typings';
import {DescriptionProps} from "@src/components/features/decoupled-components/description/description.typings";
import {Teaser} from '@src/components/features/decoupled-components/teaser/teaser';
import {TitleProps} from '@src/components/features/decoupled-components/title/title.typings';
import {
  ComponentHeroBannerFragment
} from '@src/data/contentful/hero-banner/__generated/hero-banner.generated';




export const HeroBanner = (props: ComponentHeroBannerFragment) => {
  const { backgroundImage , title, subtitle, buttonText, buttonUrl} = props;
  const titleProps: TitleProps = {
    title: title as string,
    heading: 'h1'
  };

  const descriptionProps: DescriptionProps = {
    description: subtitle as string,
    descriptionClasses: description.context_intro
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
