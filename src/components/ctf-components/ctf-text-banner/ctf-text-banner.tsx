import { TextBannerFieldsFragment } from '@/components/ctf-components/ctf-text-banner/__generated/ctf-text-banner.generated';

export const TextBanner = (props: TextBannerFieldsFragment) => {
  const { title, description } = props;
  return (
    <div>
      <p>description: {description}</p>
      <p>title: {title}</p>
    </div>
  );
};
