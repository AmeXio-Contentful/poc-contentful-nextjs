import React from 'react';

export interface Props {
  text: string;
  heading?: string;
  classes: string;
}

export const Title = (props: Props) => {
  const {text, heading, classes} = props;
  const headingElement = React.createElement(
    heading as string,
    { className: ''},
    text,
  );
  return (
    <div className={classes}>
        { headingElement }
    </div>
  );
};
