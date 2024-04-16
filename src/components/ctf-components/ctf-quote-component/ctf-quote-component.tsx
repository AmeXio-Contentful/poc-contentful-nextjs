import { ComponentQuoteFieldsFragment } from '@/components/ctf-components/ctf-quote-component/__generated/ctf-quote-component.generated';
import colors from 'tailwindcss/colors';

export const CtfQuoteComponent = (props: ComponentQuoteFieldsFragment) => {
  const { internalName } = props;
  return (
    <div>
      <p className={'text-red-900'}>
        ComponentQuote
        <span className={'block italic'}>{internalName}</span>
      </p>
    </div>
  );
};
