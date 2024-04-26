import {
  ComponentTitleFieldsFragment
} from '@src/components/features/ctf-components/ctf-title-component/__generated/ctf-title-component.generated';

export const CtfTitleComponent = (props: ComponentTitleFieldsFragment) => {
  const { title , alignment} = props;
  const alignmentDecorator = alignment != null ? ' pl-32 text-' + alignment : 'text-center m-auto'
  return (
    <div className={'md:px-48z h-auto px-6 pb-9 pt-9 mt-64'}>
      <h1 className={'primary-color lg:w-1/4 font-semibold' + alignmentDecorator}>{title}</h1>
    </div>
  );
};
