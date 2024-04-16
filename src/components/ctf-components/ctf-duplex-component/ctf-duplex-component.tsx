import { ComponentDuplexFieldsFragment } from '@/components/ctf-components/ctf-duplex-component/__generated/ctf-duplex-component.generated';

export const CtfDuplexComponent = (props: ComponentDuplexFieldsFragment) => {
  const { internalName } = props;
  return (
    <div>
      <p className={'text-blue-700'}>
        CtfDuplexComponent
        <span className={'block italic'}>{internalName}</span>
      </p>
    </div>
  );
};
