export const TextBanner = (props: any) => {
    const { title, description } = props;
    return (
        <div>
            <p>description: {description}</p>
            <p>title: {title}</p>
        </div>
    );
};