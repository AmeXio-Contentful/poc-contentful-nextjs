import styles from './hero-banner-component.module.scss';
import button from '../button/button.module.scss';

import {
  ButtonProps,
} from '@src/components/features/decoupled-components/button/button';
import {
  ComponentHeroBannerFragment
} from '@src/components/features/decoupled-components/hero-banner-component/__generated/hero-banner-component.generated';
import { TeaserComponent } from '@src/components/features/decoupled-components/teaser-component/teaser-component';
import { Props } from '@src/components/features/decoupled-components/title-component/title-component';
import { sectionTypes } from '@src/components/shared/global';

export const HeroBannerComponent = (props: ComponentHeroBannerFragment) => {
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
      <TeaserComponent
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
