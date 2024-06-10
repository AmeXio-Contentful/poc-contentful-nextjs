import { Box } from '@mui/material';
import React from 'react';

import CtfFormComponent from '@src/components/features/ctf-components/form-component/ctf-form-component';
import { ComponentResolver } from '@src/components/shared/component-resolver';
import { PageContainer } from '@src/components/templates/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';

const Page = (props: any) => {

  const content = props.pageContentCollection;
  console.log("content", content);
  return (
    <PageContainer>
      {content.items?.map((entry,index) => (
        <LayoutContext.Provider value={defaultLayout} key={index}>
          <ComponentResolver componentProps={entry!} forceGql={!entry!.isSanity} className={entry.__typename}/>
        </LayoutContext.Provider>
      ))}

      <Box
        position="relative"
        className="form-component"
      >
        <CtfFormComponent />
      </Box>
    </PageContainer>
  );
};

export default Page;
