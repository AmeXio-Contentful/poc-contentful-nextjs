
import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import teaser from '@src/components/features/decoupled-components/teaser/teaser.module.scss';
import { TeaserProps } from '@src/components/features/decoupled-components/teaser/teaser.typings';
import { DefaultQueryParameters } from '@src/data/contentful/component.typings';
import { ComponentTeaserFieldsFragment } from '@src/data/contentful/teaser/__generated/teaser.generated';
import { TeaserGql } from '@src/data/contentful/teaser/teaser-gql';

export interface TeaserPropsContentful extends DefaultQueryParameters {
  teaserClasses?: string;
  icon?: string;
  titleProps?: string;
  subtitleProps?: string;
  descriptionProps?: string;
  buttonProps?: string;
}

export const TeaserComponent = (props: any) => {
  const teaserProps: TeaserProps = {
    teaserClasses: teaser.context_default,
    icon: props?.backgroundImage?.asset,
    titleProps: {
      heading: 'h3',
      title: props?.title as string,
      titleClasses: 'mt-4'
    },
    descriptionProps: {
      description: props?.subtitle as string,
      descriptionClasses: ''
    },
    buttonProps: {
      buttonUrl: props?.buttonUrl as string,
      buttonText: props?.buttonText as string,
    }
  }

  return (
    <div className={teaser.default_teaser}>
      <Teaser {...teaserProps} />
    </div>
  );
}
