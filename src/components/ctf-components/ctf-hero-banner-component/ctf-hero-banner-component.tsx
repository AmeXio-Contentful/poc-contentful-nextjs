import { ComponentHeroBannerFieldsFragment } from '@/components/ctf-components/ctf-hero-banner-component/__generated/ctf-hero-banner-component.generated';

export const CtfHeroBannerComponent = (
  props: ComponentHeroBannerFieldsFragment,
) => {
  const { internalName } = props;
  return (
    <div>
      <p className={'text-green-700'}>
        This is the CtfHeroBannerComponent
        <span className={'block italic'}>{internalName}</span>
      </p>
    </div>
  );
};
