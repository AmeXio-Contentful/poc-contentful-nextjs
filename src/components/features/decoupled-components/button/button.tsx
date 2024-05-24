import styles from './button.module.scss';
import { ButtonProps } from './button.typings';

export const Button = (props: ButtonProps) => {
  const { buttonUrl, buttonText, buttonClasses } = props;

  return (
      <button className={`${styles.button} ${buttonClasses}`}>
        <a href={buttonUrl as string}> {buttonText} </a>
      </button>
  );
};
