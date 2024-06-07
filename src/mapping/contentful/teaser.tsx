
import { DefaultQueryParameters } from '@src/data/contentful/component.typings';
import { TeaserGql } from '@src/data/contentful/teaser/teaser-gql';
import { TeaserProps } from '@src/components/features/decoupled-components/teaser/teaser.typings';
import { ComponentTeaserFieldsFragment } from '@src/data/contentful/teaser/__generated/ctf-teaser.generated';
import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import teaser from '@src/components/features/decoupled-components/teaser/teaser.module.scss';

export interface TeaserPropsContentful extends DefaultQueryParameters {
  teaserClasses?: string;
  icon?: string;
  titleProps?: string;
  subtitleProps?: string;
  descriptionProps?: string;
  buttonProps?: string;
}

export const TeaserComponent = (props: TeaserPropsContentful) => {
  const data = TeaserGql(props);
  const componentData: ComponentTeaserFieldsFragment | null | undefined = data.data?.teaser;

  const teaserProps: TeaserProps = {
    teaserClasses: teaser.context_default,
    icon: componentData?.image,
    titleProps: {
      heading: 'h3',
      title: componentData?.title as string,
      titleClasses: 'mt-4'
    },
    descriptionProps: {
      description: componentData?.subtitle as string,
      descriptionClasses: ''
    },
    buttonProps: {
      buttonUrl: componentData?.buttonUrl as string,
      buttonText: componentData?.buttonText as string,
    }
  }

  return (
    <div className={teaser.default_teaser}>
      <Teaser {...teaserProps} />
    </div>
  );
}
