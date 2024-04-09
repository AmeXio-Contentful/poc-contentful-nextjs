export const TextBanner = (props: any) => {
    const { title, description } = props;

    console.log("props should be ready", props);
    return (
        <div>
            <p>description: {description}</p>
            <p>title: {title}</p>
        </div>
    );
};