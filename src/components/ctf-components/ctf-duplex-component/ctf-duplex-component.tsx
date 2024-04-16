import {
    ComponentDuplexFieldsFragment
} from "@/components/ctf-components/ctf-duplex-component/__generated/ctf-duplex-component.generated";

export const CtfDuplexComponent = (props: ComponentDuplexFieldsFragment) => {
    const { internalName } = props;
    return (
        <div>
            <p>resource type {props.__typename} with internal name: {internalName}</p>
        </div>
    );
};