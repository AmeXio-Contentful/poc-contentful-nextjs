import React from 'react';

import styles from "./description.module.scss";

import { DescriptionProps } from '@src/components/features/decoupled-components/description/description.typings';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export const Description = ({ description, descriptionClasses, id, fieldName }: DescriptionProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: id });

  return (
    <div className={`${styles.description} ${descriptionClasses || ''}`} {...inspectorProps({ fieldId: fieldName as string })}>
      { description }
    </div>
  );
}
