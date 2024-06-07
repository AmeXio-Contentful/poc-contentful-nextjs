import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import styles from './button.module.scss';
import { ButtonProps } from './button.typings';

export const Button = ({ buttonUrl, buttonText, buttonClasses, id, fieldName }: ButtonProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: id });

  return (
    <button
      className={`${styles.button} ${buttonClasses || ''}`}
      {...inspectorProps({ fieldId: fieldName as string })}
    >
      <a href={buttonUrl as string}>{buttonText}</a>
    </button>
  );
};
