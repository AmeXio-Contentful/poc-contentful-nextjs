import React from 'react';

import styles from "./description.module.scss";

import { DescriptionProps } from '@src/components/features/decoupled-components/description/description.typings';

export const Description = ({ description, descriptionClasses }: DescriptionProps) => (
  <div className={`${styles.description} ${descriptionClasses || ''}`}>
      { description }
  </div>
);
