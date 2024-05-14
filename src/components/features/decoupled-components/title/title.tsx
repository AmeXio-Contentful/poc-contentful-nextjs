import React from 'react';
import {TitleProps} from "@src/components/features/decoupled-components/title/title.typings";
import styles from './title.module.scss';
export const Title = (props: TitleProps) => {
  const {title, heading, titleClasses} = props;
  const headingElement = React.createElement(
    heading as string,
    { className: ''},
    title,
  );
  return (
    <div className={`${styles.title} ${titleClasses}`}>
        { headingElement }
    </div>
  );
};
