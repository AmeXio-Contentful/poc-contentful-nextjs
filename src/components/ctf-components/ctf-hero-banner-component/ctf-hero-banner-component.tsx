import { ComponentHeroBannerFieldsFragment } from '@/components/ctf-components/ctf-hero-banner-component/__generated/ctf-hero-banner-component.generated';

export const CtfHeroBannerComponent = (
  props: ComponentHeroBannerFieldsFragment,
) => {
  const { internalName } = props;
  return (
    <div>
      <p>
        resource type {props.__typename} with internal name: {internalName}
      </p>
    </div>
  );
};
