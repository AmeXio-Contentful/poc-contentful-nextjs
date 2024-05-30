import React from 'react';

import { DescriptionProps } from '@src/components/features/decoupled-components/description/description.typings';
import styles from "./description.module.scss";

export const Description = (props: DescriptionProps) => {
  const { description, descriptionClasses } = props;

  return (
    // this way should work properly to add variations!!!
    <div className={`${styles.description} ${descriptionClasses === 'intro' && styles.intro}`}>
        { description }
    </div>
  );
};
