import React from 'react';

import { DescriptionProps } from '@src/components/features/decoupled-components/description/description.typings';

export const Description = (props: DescriptionProps) => {
  const { description, descriptionClasses } = props;

  return (
    <div className={descriptionClasses}>
        { description }
    </div>
  );
};
