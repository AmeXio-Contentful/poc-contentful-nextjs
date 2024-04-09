import { TextBannerFieldsFragment } from './__generated/ctf-text-banner.generated'

export const TextBanner = (props: TextBannerFieldsFragment) => {
    const { title, description } = props;

    console.log("props should be ready", props);
    return (
        <div>
            <p>description: {description}</p>
            <p>title: {title}</p>
        </div>
    );
};