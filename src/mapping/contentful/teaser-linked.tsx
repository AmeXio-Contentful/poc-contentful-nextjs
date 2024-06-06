
import { UseQueryResult } from '@tanstack/react-query';

import { ButtonProps } from '@src/components/features/decoupled-components/button/button.typings';
import descriptionContext from '@src/components/features/decoupled-components/description/description.module.scss';
import { DescriptionProps } from '@src/components/features/decoupled-components/description/description.typings';
import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import { TitleProps } from '@src/components/features/decoupled-components/title/title.typings';
import {
  CtfComponentTeaserLinkedQuery
} from '@src/data/contentful/teaser-linked/__generated/ctf-teaser-linked.generated';
import styles from '@src/components/features/decoupled-components/hero-banner/hero-banner.module.scss';

interface TeaserLinkedProps {
  data: UseQueryResult<CtfComponentTeaserLinkedQuery, unknown>
}
export const TeaserLinked = (props: TeaserLinkedProps) => {
  const data = props.data;
  const teaserLinked = data.data!.teaserLinked!

  const description: string = teaserLinked.page!.shortDescription!;
  const title = teaserLinked.page!.pageName!;
  const slug = teaserLinked.page!.slug!;

  const titleProps: TitleProps = {
    title: title,
    heading: 'h1'
  };

  const descriptionProps: DescriptionProps = {
    description: description,
    descriptionClasses: descriptionContext.context_intro
  }

  const buttonProps: ButtonProps = {
    buttonText: teaserLinked.buttonText!,
    buttonUrl: slug,
  }

  return (
    <div className={styles.hero_banner}
         style={{ backgroundImage: `url(${teaserLinked.backgroundImage?.url})` }}
    >
      <Teaser
        titleProps={titleProps}
        descriptionProps={descriptionProps}
        buttonProps={buttonProps}
      />
    </div>
  )
};
