import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Teaser {
  image: any;
  body: any;
}

export const CtfTeaserComponent = (props: Teaser) => {
  const { image, body } = props;
  return (
    <div className="md:px-48z h-auto px-6 pb-14 pt-9">
      <img
        className="mx-auto rounded-full pb-6 md:mx-0 md:pb-0"
        src={image?.url}
        width="150px"
        height="150px"
      />
      <div className="pt-5">
        <div className="text-s text-center">
          {documentToReactComponents(body?.json)}
        </div>
      </div>
    </div>
  );
};
