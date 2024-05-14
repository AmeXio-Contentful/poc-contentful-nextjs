import button from '../button/button.module.scss';
import styles from './hero-banner.module.scss';

import {
  ButtonProps,
} from '@src/components/features/decoupled-components/button/button';
import {
  ComponentHeroBannerFragment
} from '@src/data/contentful/hero-banner/__generated/hero-banner.generated';
import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import { Props } from '@src/components/features/decoupled-components/title/title';
import { sectionTypes } from '@src/components/shared/global';

export const HeroBanner = (props: ComponentHeroBannerFragment) => {
  const { backgroundImage , title, subtitle, buttonText, buttonUrl} = props;
  const titleProps: Props = {
    text: title as string,
    heading: 'h1',
    classes: 'font-semibold text-white text-4xl max-w-xl'
  };

  const descriptionProps: Props = {
    text: subtitle as string,
    classes: 'mt-6 mb-5 text-xl text-white max-w-xl'
  }

  const buttonProps: ButtonProps = {
    buttonText: buttonText as string,
    buttonUrl: buttonUrl as string,
    classes: styles.hero_button // 'mt-6 bg-blue-500 px-5 py-3.5 text-base text-white'
  }

  return (
    <div className={button.hero_context}>
      <Teaser
        type={sectionTypes.bannerSection}
        title={title as string}
        subtitle={subtitle as string}
        image={backgroundImage}
        buttonUrl={buttonUrl as string}
        buttonText={buttonText as string}
        titleProps={titleProps}
        descriptionProps={descriptionProps}
        buttonProps={buttonProps}/>
    </div>
  )
};
