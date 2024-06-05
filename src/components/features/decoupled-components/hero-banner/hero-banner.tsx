import { useContentfulInspectorMode } from '@contentful/live-preview/react';

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
    title: title,
    heading: 'h1',
    fieldName: 'title',
    id: props.id
  };

  const descriptionProps: DescriptionProps = {
    description: description,
    descriptionClasses: descriptionContext.context_intro,
    fieldName: 'subtitle',
    id: props.id
  }

  const buttonProps: ButtonProps = {
    buttonText: buttonText,
    buttonUrl: buttonUrl,
    fieldName: 'buttonText',
    id: props.id
  }

  return (
    <div className={styles.hero_banner}
         style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Teaser
        titleProps={titleProps}
        descriptionProps={descriptionProps}
        buttonProps={buttonProps}
        id={props.id}
      />
    </div>
  )
};


