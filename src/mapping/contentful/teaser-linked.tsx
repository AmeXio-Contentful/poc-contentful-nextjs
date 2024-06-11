import { ButtonProps } from '@src/components/features/decoupled-components/button/button.typings';
import descriptionContext from '@src/components/features/decoupled-components/description/description.module.scss';
import { DescriptionProps } from '@src/components/features/decoupled-components/description/description.typings';
import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import { TitleProps } from '@src/components/features/decoupled-components/title/title.typings';
import styles from '@src/components/features/decoupled-components/hero-banner/hero-banner.module.scss';
import { CtfTeaserLinkedGql } from '@src/data/contentful/teaser-linked/ctf-teaser-linked-gql';
import { DefaultQueryParameters } from '@src/data/contentful/component.typings';


export const TeaserLinked = (props: DefaultQueryParameters) => {
  const data = CtfTeaserLinkedGql(props);

  if (data.data) {
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
  }
  return <></>
};
