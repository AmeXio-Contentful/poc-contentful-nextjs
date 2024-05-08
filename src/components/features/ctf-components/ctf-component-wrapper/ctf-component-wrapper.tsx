import React from 'react';

import { ComponentResolver } from '@src/components/shared/component-resolver';
import { PageContainer } from '@src/components/templates/page-container';


const typenameTestimonial = "Testimonial";
const typenameTeaser = "Teaser";

export const CtfComponentWrapper = (props: any) => {

  const data = props.componentsCollection?.items as any[];

  let classNames = '';
  if (data && data.length > 0) {
    // counting every slide which should be included in swiper, if every item is loaded, the swiper item is loaded, see: CtfTestimonial
    const testimonialCountObj = data.filter(item => item.__typename == typenameTestimonial)
    if (testimonialCountObj && testimonialCountObj.length > 0) {
      data.map(testimonial => testimonial.maxItems = testimonialCountObj.length);
    }

    if (props.sectionType == 'Solutions Section') {
      classNames = 'grid h-auto w-4/5 grid-cols-1 justify-items-center gap-x-4 gap-y-10 px-6 pb-14 pt-9 md:px-48 lg:grid-cols-2 m-auto';
      data.map(item => item.sectionType = 'Solutions Section');
    }

    if (props.sectionType == 'HR Section') {
      classNames = 'grid grid-cols-3 gap-x-3 mt-9';
      data.map(item => item.sectionType = 'HR Section');
    }
  }

  return (
    <PageContainer className={classNames}>
      {props.componentsCollection && props.componentsCollection?.items.map(entry => (
        <div key={entry!.sys.id}>
          <ComponentResolver componentProps={entry!} />
        </div>
      ))}
    </PageContainer>
  );
};

