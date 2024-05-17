import {ButtonProps} from '@src/components/features/decoupled-components/button/button.typings';
import {DescriptionProps} from "@src/components/features/decoupled-components/description/description.typings";
import {Teaser} from '@src/components/features/decoupled-components/teaser/teaser';
import {TitleProps} from '@src/components/features/decoupled-components/title/title.typings';


import styles from '@src/components/features/decoupled-components/hero-banner/hero-banner.module.scss';

interface HeroBannerProps {
  backgroundImage: {
    asset: {
      url: string
    }
  }
  buttonText: string;
  buttonUrl: string;
  subtitle: string;
  title: string;
}

export const HeroBanner = (props: HeroBannerProps) => {
  const { backgroundImage , title, subtitle, buttonText, buttonUrl} = props;
  const titleProps: TitleProps = {
    title: title as string,
    heading: 'h1'
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
    <div className={styles.hero_banner}
         style={{ backgroundImage: `url(${backgroundImage?.asset?.url})` }}
    >
      <Teaser
        titleProps={titleProps}
        descriptionProps={descriptionProps}
        buttonProps={buttonProps}
      />
    </div>
  )
};
