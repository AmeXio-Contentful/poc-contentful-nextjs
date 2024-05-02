import {
  ComponentButtonFieldsFragment
} from '@src/components/features/ctf-components/ctf-button/__generated/ctf-button.generated';

export const CtfButton = (props: ComponentButtonFieldsFragment) => {
  const { url, buttonText } = props;

  return (
    <div className="w-full text-center">
      <button className="mb-16 mt-6 bg-orange-500 px-5 py-3.5 text-sm text-white">
        <a href={url as string}> {buttonText} </a>
      </button>
    </div>
  );
};
