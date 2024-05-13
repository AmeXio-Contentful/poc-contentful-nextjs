import {
  Button,
} from '@src/components/features/decoupled-components/button/button';
import {
  Description,
} from '@src/components/features/decoupled-components/description/description';
import { TitleComponent } from '@src/components/features/decoupled-components/title-component/title-component';
import { sectionTypes } from '@src/components/shared/global';


interface TeaserProps {
  type: string;
  image?: any;
  title: string;
  subtitle: string;
  buttonUrl: string;
  buttonText: string;
  titleProps: any;
  descriptionProps: any;
  buttonProps?: any;
  quote?: string;
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
    classes: props.buttonProps?.classes,
  };

  switch (props.type) {
    case sectionTypes.solutionSection:
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
            <Description {...descriptionProps} />
          </div>
          <Button {...buttonProps} />
        </div>
      </div>;
    case sectionTypes.bannerSection:
      return (
        <div
          className="md:px-48z h-auto w-full pb-24 pt-14 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${props.image?.url})` }}>
          <div className="w-full mx-auto max-w-6xl px-4 md:px-20">
            <TitleComponent {...titleProps} />
            <Description {...descriptionProps} />
            <Button {...buttonProps} />
          </div>
        </div>
      );
    case sectionTypes.clientReferenceSection:
      return (
        <div className="flex flex-col justify-center gap-x-36 md:flex-row mb-24">
          <img
            className="mx-auto pb-6 md:mx-0 md:pb-0"
            src={props.image?.url}
            width="200px"
            height="200px"
            alt="alt"
          />
          <div className="my-auto flex w-[545px] flex-col gap-4 px-14 md:px-0 ">
            <h4 className="font-semibold primary-color">
              {props.title}
            </h4>
            <p className="font-semibold text-base">
              {props.subtitle}
            </p>
            <div className="text-base italic">
              {props.quote}
            </div>
          </div>
        </div>
      );
    case sectionTypes.hrSection:
      return (
        <div className="md:px-48z h-auto px-6 pb-14 pt-9">
          <img
            className="mx-auto rounded-full pb-6 m-auto"
            src={props.image?.url}
            width="150px"
            height="150px"
            alt="alt"
          />
          <div className="pt-2">
            <h4 className="font-semibold primary-color text-base">
              {props.title}
            </h4>
            <div className="text-center pt-2">
              <p className="text-base">{props.subtitle}</p>
            </div>
          </div>
        </div>
      );

  }
  return <></>;
};
