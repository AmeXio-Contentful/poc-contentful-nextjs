import styles from './button.module.scss';
import { ButtonProps } from './button.typings';

export const Button = ({ buttonUrl, buttonText, buttonClasses }: ButtonProps) => (
  <button className={`${styles.button} ${buttonClasses || ''}`}>
    <a href={buttonUrl as string}>{buttonText}</a>
  </button>
);
