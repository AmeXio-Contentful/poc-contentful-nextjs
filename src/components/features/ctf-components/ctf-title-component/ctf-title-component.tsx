import {
  ComponentTitleFieldsFragment
} from '@src/components/features/ctf-components/ctf-title-component/__generated/ctf-title-component.generated';

export const CtfTitleComponent = (props: ComponentTitleFieldsFragment) => {
  const { title } = props;
  return (
    <div className="md:px-48z h-auto w-full px-6 pb-9 pt-9 text-center">
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
};
