import { ComponentTextBannerFieldsFragment } from '@/components/ctf-components/ctf-text-banner-component/__generated/ctf-text-banner-component.generated';

export const CtfTextBannerComponent = (
  props: ComponentTextBannerFieldsFragment,
) => {
  const { title } = props;
  return (
    <div>
      <p className={'text-pink-700'}>
        CtfTextBannerComponent
        <span className={'block italic'}>with title: &quot;{title}&quot;</span>
      </p>
    </div>
  );
};
