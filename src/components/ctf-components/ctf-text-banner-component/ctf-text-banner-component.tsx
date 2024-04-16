import {
    ComponentTextBannerFieldsFragment
} from "@/components/ctf-components/ctf-text-banner-component/__generated/ctf-text-banner-component.generated";


export const CtfTextBannerComponent = (props: ComponentTextBannerFieldsFragment) => {
    const { title } = props;
    return (
        <div>
            <p>resource type {props.__typename} with internal name: {title}</p>
        </div>
    );
};