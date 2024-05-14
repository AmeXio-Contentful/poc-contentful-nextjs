import {
  ButtonProps,
} from '@src/components/features/decoupled-components/button/button.typings';
import {DescriptionProps} from "@src/components/features/decoupled-components/description/description.typings";
import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import { TitleProps } from '@src/components/features/decoupled-components/title/title.typings';
import { sectionTypes } from '@src/components/shared/global';
import {
  ComponentHeroBannerFragment
} from '@src/data/contentful/hero-banner/__generated/hero-banner.generated';

export const HeroBanner = (props: ComponentHeroBannerFragment) => {
  const { backgroundImage , title, subtitle, buttonText, buttonUrl} = props;
  const titleProps: TitleProps = {
    title: title as string,
    heading: 'h1',
    titleClasses: 'font-semibold text-white text-4xl max-w-xl'
  };

  const descriptionProps: DescriptionProps = {
    description: subtitle as string,
    descriptionClasses: 'mt-6 mb-5 text-xl text-white max-w-xl'
  }

  const buttonProps: ButtonProps = {
    buttonText: buttonText as string,
    buttonUrl: buttonUrl as string,
    // buttonClasses: styles.hero_button // 'mt-6 bg-blue-500 px-5 py-3.5 text-base text-white'
  }

  return (
    <div>
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
