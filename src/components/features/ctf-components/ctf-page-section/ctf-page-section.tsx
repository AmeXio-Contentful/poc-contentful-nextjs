import React from 'react';

import { ComponentResolver } from '@src/components/shared/component-resolver';
import { sectionTypes } from '@src/components/shared/global';
import { PageContainer } from '@src/components/templates/page-container';

interface PageSectionProps {
  __typename: string;
  sys: {
    id: string;
  }
  componentsGrouped?: boolean;
  componentsCollection?: any;
  sectionType?: string;
}


export const CtfPageSection = (props: PageSectionProps) => {
  const data = props.componentsCollection?.items as any[];

  if (data?.length) {
    const testimonialCountObj = data.filter(item => item.__typename == sectionTypes.testimonialResourceType)
    if (testimonialCountObj && testimonialCountObj.length > 0) {
      data.map(testimonial => testimonial.maxItems = testimonialCountObj.length);
    }

    if (props.sectionType == sectionTypes.solutionSection) {
      data.map(item => item.sectionType = props.sectionType);
    }

    if (props.sectionType == sectionTypes.hrSection) {
      data.map(item => item.sectionType = props.sectionType);
    }
  }

  return (
    <PageContainer>
      {props.componentsCollection && props.componentsCollection?.items.map(entry => (
        <div key={entry.sys.id}>
          <ComponentResolver componentProps={entry!} />
        </div>
      ))}
    </PageContainer>
  );
};

