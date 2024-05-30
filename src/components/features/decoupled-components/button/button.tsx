import styles from './button.module.scss';
import { ButtonProps } from './button.typings';

export const Button = (props: ButtonProps) => {
  const { buttonUrl, buttonText, buttonClasses } = props;

  return (
    // see description example on how to use variations instead of passing a class, this might result in unpredictable behaviour in styling
      <button className={`${styles.button} ${buttonClasses}`}>
        <a href={buttonUrl as string}> {buttonText} </a>
      </button>
  );
};
