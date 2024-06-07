import React from 'react';

// import { CtfPageFieldsFragment } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { ComponentResolver } from '@src/components/shared/component-resolver';
import { PageContainer } from '@src/components/templates/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';

const Page = (props: any) => {
  const content = props.pageContentCollection;
  return (
    <PageContainer>
      {content &&
        content.items?.map(entry => (
          <LayoutContext.Provider value={defaultLayout} key={entry!.sys.id}>
            <ComponentResolver componentProps={entry!} />
          </LayoutContext.Provider>
        ))}
    </PageContainer>
  );
};

export default Page;
