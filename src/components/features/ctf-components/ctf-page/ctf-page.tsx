import { Box } from '@mui/material';
import React from 'react';

import CtfFormComponent from '@src/components/features/ctf-components/ctf-form-component/ctf-form-component';
import { CtfPageFieldsFragment } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { ComponentResolver } from '@src/components/shared/component-resolver';
import { PageContainer } from '@src/components/templates/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';


const CtfPage = (props: CtfPageFieldsFragment) => {

  const content = props.pageContentCollection;
  return (
    <PageContainer>
      {content && content.items?.map(entry => (
        <LayoutContext.Provider value={defaultLayout} key={entry!.sys.id}>
          <ComponentResolver componentProps={entry!} />
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

export default CtfPage;
