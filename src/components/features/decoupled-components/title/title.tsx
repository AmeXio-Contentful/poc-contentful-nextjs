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
    // see description example on how to use variations instead of passing a class, this might result in unpredictable behaviour in styling
    <div className={`${styles.title} ${titleClasses || ''}`}>
        { headingElement }
    </div>
  );
};
