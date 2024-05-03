import React from 'react';

import {
  ComponentTitleFieldsFragment,
} from '@src/components/features/ctf-components/ctf-title/__generated/ctf-title-component.generated';

export const CtfTitle = (props: ComponentTitleFieldsFragment) => {
  const { title = '', alignment, fontSize = 'h1' } = props;
  const alignmentDecorator = alignment != null ? 'pl-32 text-' + alignment : 'text-center m-auto';
  const newFontSize = fontSize != null ? fontSize : 'h1';

  const element = React.createElement(
    newFontSize,
    { className: 'primary-color font-semibold ' + alignmentDecorator },
    title,
  );
  return (
    <div className="md:px-48z h-auto w-full px-6 pb-9 pt-9 text-center">
      <h2 className="text-4xl">{element}</h2>
    </div>
  );
};
