import React from 'react';

import { Props } from '@src/components/features/decoupled-components/title-component/title-component';

export const DescriptionComponent = (props: Props) => {
  const { text, classes } = props;

  return (
    <div className={classes}>
        { text }
    </div>
  );
};
