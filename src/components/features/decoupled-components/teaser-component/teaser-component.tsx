import { sectionTypes } from '@src/components/shared/global';
import { Props, TitleComponent } from '@src/components/features/decoupled-components/title-component/title-component';
import {
  DescriptionComponent,
} from '@src/components/features/decoupled-components/description-component/description-component';
import {
  ButtonComponent,
  ButtonProps,
} from '@src/components/features/decoupled-components/button-component/button-component';


interface TeaserProps {
  type: string;
  image?: any;
  title: string;
  subtitle: string;
  buttonUrl: string;
  buttonText: string;
  titleProps: any;
  descriptionProps: any;
  buttonProps: any;
}

export const TeaserComponent = (props: TeaserProps) => {
  const titleProps = {
    text: props.title,
    heading: props.titleProps.heading,
    classes: props.titleProps.classes,
  };

  const descriptionProps = {
    text: props.subtitle,
    classes: props.descriptionProps.classes,
  };

  const buttonProps = {
    buttonText: props.buttonText,
    buttonUrl: props.buttonUrl,
    classes: props.buttonProps.classes,
  };

  if (props.type == sectionTypes.solutionSection) {
    return <div className="flex w-full max-w-[455px] flex-row gap-x-[75px] h-full">
      {
        props.image?.url ?
          <img
            width="75px"
            className="place-self-start"
            alt="icon"
            src={props.image?.url as string}
          />
          :
          <></>
      }
      <div className="flex flex-col items-start justify-between">
        <div>
          <TitleComponent {...titleProps} />
          <DescriptionComponent {...descriptionProps} />
        </div>
        <ButtonComponent {...buttonProps} />
      </div>
    </div>;
  } else if (props.type == sectionTypes.bannerSection) {
    return (
      <div
        className="md:px-48z h-auto w-full pb-24 pt-14 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${props.image?.url})` }}>
        <div className="w-full mx-auto max-w-6xl px-4 md:px-20">
          <TitleComponent {...titleProps} />
          <DescriptionComponent {...descriptionProps} />
          <ButtonComponent {...buttonProps} />
        </div>
      </div>
    );
  }
  return <></>;
};
