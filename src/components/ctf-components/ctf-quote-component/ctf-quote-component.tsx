import { ComponentQuoteFieldsFragment } from '@/components/ctf-components/ctf-quote-component/__generated/ctf-quote-component.generated';

export const CtfQuoteComponent = (props: ComponentQuoteFieldsFragment) => {
  const { internalName } = props;
  return (
    <div>
      <p>
        resource type {props.__typename} with internal name: {internalName}
      </p>
    </div>
  );
};
