import { useContentfulContext } from '@src/contentful-context';
import {
  useCtfComponentWrapperQuery
} from '@src/components/features/ctf-components/ctf-component-wrapper/__generated/ctf-component-wrapper.generated';
import {
  CtfComponentWrapper
} from '@src/components/features/ctf-components/ctf-component-wrapper/ctf-component-wrapper';
import { CtfTeaser } from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser';
import React from 'react';


export const CtComponentWrapperGgl = (props: any) => {
  const { previewActive, locale } = useContentfulContext();

  const data = useCtfComponentWrapperQuery({
    id: props.id,
    locale,
    preview: previewActive,
  }) as any;

  if (data.data?.componentWrapper) {
    data.data!.componentWrapper.sectionType = props.sectionType;
    return (
      <CtfComponentWrapper {...data.data?.componentWrapper} />
    );
  }
  return <></>
};

