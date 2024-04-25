import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import {
  ComponentHeroBannerFieldsFragment
} from '@src/components/features/ctf-components/ctf-cta-banner-component/__generated/ctf-cta-banner-component.generated';


export const CtfCtaBannerComponent = (
  props: ComponentHeroBannerFieldsFragment,
) => {
  const { title, subtitle, buttonText, backgroundImage , buttonLink} = props;

  return (
    <div
      className="md:px-48z w-full px-6 pb-14 pt-9 bg-no-repeat bg-cover bg-center max-h-[465px] min-h-[465px] flex"
      style={{ backgroundImage: `url(${backgroundImage?.url})` }}>
      <div className="lg:w-1/2 flex-col m-auto h-full">
        <h1 className="font-bold text-white lg:w-1/2">{title}</h1>
        <p className="mt-5 text-3xl text-white font-semibold lg:w-1/2 leading-relaxed">{documentToReactComponents(subtitle?.json)}</p>
        <button className="mt-8 bg-orange-500 text-2xl font-semibold text-white p-5 px-8">
          <a href={buttonLink as string}> {buttonText} </a>
        </button>
      </div>
    </div>
  );
};
