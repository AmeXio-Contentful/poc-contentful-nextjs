import styles from './button.module.scss';

export interface ButtonProps {
  buttonUrl: string;
  buttonText: string;
  classes?: string
}

export const Button = (props: ButtonProps) => {
  const { buttonUrl, buttonText } = props;

  return (
      <button className={styles.button}>
        <a href={buttonUrl as string}> {buttonText} </a>
      </button>
  );
};
