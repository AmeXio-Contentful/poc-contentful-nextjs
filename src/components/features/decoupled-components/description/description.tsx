import React from 'react';

import styles from "./description.module.scss";

import { DescriptionProps } from '@src/components/features/decoupled-components/description/description.typings';


export const Description = (props: DescriptionProps) => {
  const { description, descriptionClasses } = props;

  return (
    // this way should work properly to add variations!!!
    <div className={`${styles.description} ${descriptionClasses === 'intro' && styles.intro}`}>
        { description }
    </div>
  );
};
