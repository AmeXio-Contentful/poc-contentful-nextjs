import React from 'react';

import styles from './title.module.scss';

import {TitleProps} from "@src/components/features/decoupled-components/title/title.typings";

export const Title = (props: TitleProps) => {
  const {title, heading="h2", titleClasses} = props;
  const headingElement = React.createElement(
    heading as string,
    { className: heading},
    title,
  );
  return (
    <div className={`${styles.title} ${titleClasses}`}>
        { headingElement }
    </div>
  );
};
