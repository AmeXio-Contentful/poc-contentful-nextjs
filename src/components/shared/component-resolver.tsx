import { Box } from '@mui/material';
import React, { useMemo } from 'react';

import { useContentfulContext } from '@src/contentful-context';
import { componentGqlMap, componentMap } from '@src/mapping/contentful/mappings';
import {componentMapSanity } from '@src/mapping/sanity/mappings';

let previousComponent: string | null = null;
export interface Props {
  componentProps: {
    sys: { id: string };
    __typename: string;
    [k: string]: any;
    sectionType?: number;
    isSanity?: boolean;
  };

  /**
   * forces to do a graqhql request to get its content, instead
   * of expecting content is provided trough `props.componentProps`:
   */
  forceGql?: boolean;

  className?: string;
  inline?: boolean;
}

export const ComponentResolver = (props: Props) => {

  const { componentProps, inline = false } = props;
  const { previewActive } = useContentfulContext();

  const { locale } = useContentfulContext();

  // mapping for Gql
  const componentMapToUse = props.componentProps.isSanity ? componentMapSanity : componentMap;
  const ComponentGql = componentGqlMap[componentProps.__typename];

  const shouldForceGql = useMemo(() => {
    if (props.forceGql === true) {
      return true;
    }

    if (!ComponentGql) {
      return false;
    }

    if (Object.keys(componentProps).length > 3) {
      // We expect components with no fragments set up to only contain 2 object
      // props. If there are more, it means we are providing fragments manually
      return false;
    }

    if (componentProps.__typename === undefined || componentProps.sys === undefined) {
      // We expect exactly these keys to be present in the returned props if the
      // fragment was not specified for this component
      return false;
    }

    return true;
  }, [ComponentGql, componentProps, props.forceGql]);

  const Component = !shouldForceGql && componentMapToUse[componentProps.__typename];

  const previousComponentProp = previousComponent;
  previousComponent = componentProps.__typename;

  if (!Component && !ComponentGql) {
    return null;
  }

  return (
    <Box
      position="relative"
      component={inline ? 'span' : 'div'}
      className={componentProps.__typename}
    >
      {Component && props.componentProps.isSanity ? (
        <Component
          {...componentProps}
          locale={locale}
          className={props.className}
          previousComponent={previousComponentProp}
        />
      ) : (
        <ComponentGql
          id={componentProps.sys.id}
          __typename={componentProps.__typename}
          className={props.className}
          preview={previewActive}
          locale={locale}
          previousComponent={previousComponentProp}
          sectionType={componentProps.sectionType}
        />
      )}
    </Box>
  );
};
