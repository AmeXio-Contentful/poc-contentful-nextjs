import { ComponentHeroBannerFieldsFragment } from '@/components/ctf-components/ctf-cta-banner-component/__generated/ctf-cta-banner-component.generated';

export const CtfCtaBannerComponent = (
  props: ComponentHeroBannerFieldsFragment,
) => {
  const { title, subtitle, buttonText, backgroundImage } = props;

  return (
    <div
      className="md:px-48z h-auto w-full px-6 pb-14 pt-9"
      style={{ backgroundImage: `url(${backgroundImage?.url})` }}>
      <div className="w-full lg:w-1/2">
        <p className="text-4xl font-semibold text-white">{title}</p>
        <p className="mt-5 text-xl text-white">{subtitle}</p>
        <button className="mt-6 bg-orange-500 px-5 py-3.5 text-sm text-white">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
