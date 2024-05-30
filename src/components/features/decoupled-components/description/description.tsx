import React from 'react';

import { DescriptionProps } from '@src/components/features/decoupled-components/description/description.typings';
import styles from "./description.module.scss";

export const Description = (props: DescriptionProps) => {
  const { description, descriptionClasses } = props;

  return (
    // there is a problem loading multiple classes, especially if the aim is to override certain properties
    // it isn't predictable which properties will be loaded first, therefor you don't have full control over the styling this way
    // variables can't be edited from outside of this module, since it is fully encapsulated
    // it might be possible to add a variations through classes instead of overriding all properties by adding a class
    // needs further investigation on how to approach this problem
    <div className={`${descriptionClasses || ''} ${styles.description}`}>
        { description }
    </div>
  );
};
