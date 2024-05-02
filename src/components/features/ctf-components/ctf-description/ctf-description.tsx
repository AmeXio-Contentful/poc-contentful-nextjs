import React from 'react';

import {
  ComponentDescriptionFieldsFragment
} from '@src/components/features/ctf-components/ctf-description/__generated/ctf-description.generated';

export const CtfDescription = (props: ComponentDescriptionFieldsFragment) => {
  const { description } = props;

  return (
    <div className="md:px-48z h-auto w-2/5 px-6 pb-9 pt-9 text-center m-auto">
      <div className="text-center text-base font-normal text-black">
        { description }
      </div>
    </div>
  );
};
