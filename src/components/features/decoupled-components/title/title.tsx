import React from 'react';

import styles from './title.module.scss';

import {TitleProps} from "@src/components/features/decoupled-components/title/title.typings";

export const Title = (props: TitleProps) => {
  const {title, heading="h2", titleClasses} = props;
  const headingElement = React.createElement(
    heading as string,
    { className: `${styles[heading]}` },
    title,
  );
  return (
    // there is a problem loading multiple classes, especially if the aim is to override certain properties
    // it isn't predictable which properties will be loaded first, therefor you don't have full control over the styling this way
    // variables can't be edited from outside of this module, since it is fully encapsulated
    // it might be possible to add a variations through classes instead of overriding all properties by adding a class
    // needs further investigation on how to approach this problem
    <div className={`${styles.title} ${titleClasses || ''}`}>
        { headingElement }
    </div>
  );
};
