import React from 'react';

import CtfContentCtaBlockComponent
  from '@src/components/features/ctf-components/ctf-content-cta-block-component/ctf-content-cta-block-component';

export const CtfContentBlockComponent = (props: any) => {
  const { contentBlockCtaCollection } = props;
  return (
    <div className=" grid h-auto w-full grid-cols-1 justify-items-center gap-x-4 gap-y-10 px-6 pb-14 pt-9 md:px-48 lg:grid-cols-2">
      {contentBlockCtaCollection?.items.map((entry: any) => (
        <div className="w-full" key={entry.sys.id}>
          <CtfContentCtaBlockComponent
            blockBody={entry.blockBody}
            buttonLink={entry.buttonLink}
            buttonText={entry.buttonText}
            blockImage={entry.blockImage}
            blockTitle={entry.blockTitle}
          ></CtfContentCtaBlockComponent>
        </div>
      ))}
    </div>
  );
};
