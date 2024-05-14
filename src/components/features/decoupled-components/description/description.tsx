import React from 'react';

import { Props } from '@src/components/features/decoupled-components/title/title';

export const Description = (props: Props) => {
  const { text, classes } = props;

  return (
    <div className={classes}>
        { text }
    </div>
  );
};
