import React from 'react';

import { CtfTestimonial } from '@src/components/features/ctf-components/testimonial/ctf-testimonial';

export interface DefaultQueryParameters {
  id: any;
  locale: any;
  preview: any;
}

export function CtfTestimonialGql(props: any) {
  return <CtfTestimonial {...props.data?.teaser} />;
}
