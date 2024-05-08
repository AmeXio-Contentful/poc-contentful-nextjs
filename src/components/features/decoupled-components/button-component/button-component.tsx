
export interface ButtonProps {
  buttonUrl: string;
  buttonText: string;
  classes?: string
}

export const ButtonComponent = (props: ButtonProps) => {
  const { buttonUrl, buttonText , classes = 'mt-6 bg-orange-500 px-5 py-3.5 text-base text-black'} = props;

  return (
      <button className={classes}>
        <a href={buttonUrl as string}> {buttonText} </a>
      </button>
  );
};
