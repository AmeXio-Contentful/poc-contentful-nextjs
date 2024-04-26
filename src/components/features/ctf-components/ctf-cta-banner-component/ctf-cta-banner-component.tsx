import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import {
  ComponentHeroBannerFieldsFragment
} from '@src/components/features/ctf-components/ctf-cta-banner-component/__generated/ctf-cta-banner-component.generated';


export const CtfCtaBannerComponent = (
  props: ComponentHeroBannerFieldsFragment,
) => {
  const { title, subtitle, buttonText, backgroundImage } = props;

  return (
    <div
      className="md:px-48z h-auto w-full pb-24 pt-14 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage?.url})` }}>
      <div className="w-full
      mx-auto max-w-6xl px-20 sm:px-4 lg:px-20">
        <h1 className="font-semibold text-white">{title}</h1>
        <p className="mt-5 text-xl text-white">{documentToReactComponents(subtitle?.json)}</p>
        <a href="" className="mt-6 bg-orange-500 px-5 py-3.5 text-sm text-white">
          {buttonText}
        </a>
      </div>
    </div>
  );
};
