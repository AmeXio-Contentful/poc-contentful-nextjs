import React, { useMemo } from 'react';

interface Props {
  componentProps: {
    sys: { id: string };
    __typename: string;
    [k: string]: any;
  };

  /**
   * forces to do a graqhql request to get its content, instead
   * of expecting content is provided trough `props.componentProps`:
   */
  forceGql?: boolean;

  className?: string;
  inline?: boolean;
}

export const ComponentResolver = () => {
  return (
    <div>
      ComponentResolver TODO: see
      https://github.com/contentful/template-marketing-webapp-nextjs
    </div>
  );
};
