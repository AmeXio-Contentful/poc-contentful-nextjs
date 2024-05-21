import {
  useCtfPageSectionQuery
} from '@src/components/features/ctf-components/ctf-page-section/__generated/ctf-page-section.generated';
import { CtfPageSection } from '@src/components/features/ctf-components/ctf-page-section/ctf-page-section';
import { useContentfulContext } from '@src/contentful-context';



export const CtfPageSectionGgl = (props: any) => {

  const { previewActive, locale } = useContentfulContext();

  const data = useCtfPageSectionQuery({
    id: props.id,
    locale,
    preview: previewActive,
  }) as any;

  return (
      <CtfPageSection {...data.data?.pageSection} />
  );
};

