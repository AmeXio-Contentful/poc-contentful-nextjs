import {
  ComponentHeroBannerFragment
} from '@src/components/features/decoupled-components/hero-banner-component/__generated/hero-banner-component.generated';
import { Props, TitleComponent } from '@src/components/features/decoupled-components/title-component/title-component';
import {
  DescriptionComponent
} from '@src/components/features/decoupled-components/description-component/description-component';
import {
  ButtonComponent,
  ButtonProps,
} from '@src/components/features/decoupled-components/button-component/button-component';

export const HeroBannerComponent = (props: ComponentHeroBannerFragment) => {
  console.log("props", props);
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
    classes: 'mt-6 bg-orange-500 px-5 py-3.5 text-base text-white'
  }

  return (
    <div>
      <div
        className="md:px-48z h-auto w-full pb-24 pt-14 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage?.url})` }}>
        <div className="w-full mx-auto max-w-6xl px-4 md:px-20">
          <TitleComponent {...titleProps}/>
          <DescriptionComponent {...descriptionProps} />
          <ButtonComponent {...buttonProps}/>
        </div>
      </div>
    </div>
  )
};
