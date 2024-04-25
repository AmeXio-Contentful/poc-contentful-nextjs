import {
  ComponentTitleFieldsFragment
} from '@src/components/features/ctf-components/ctf-title-component/__generated/ctf-title-component.generated';

export const CtfTitleComponent = (props: ComponentTitleFieldsFragment) => {
  const { title } = props;
  return (
    <div className="md:px-48z h-auto px-6 pb-9 pt-9 text-center mt-72">
      <h1 className="primary-color lg:w-1/4 font-semibold m-auto">{title}</h1>
    </div>
  );
};
