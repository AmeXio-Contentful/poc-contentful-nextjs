import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Teaser {
  image: any;
  body: any;
}

export const CtfTeaserComponent = (props: Teaser) => {
  const { image, body } = props;
  return (
    <div className="md:px-48z h-auto px-6 pb-14 pt-9 text-base">
      <div className="relative max-w-full max-h-full overflow-hidden
      mx-auto rounded-full m-auto w-28 h-28 bg-blue-900">
      <img
        className="min-w-full min-h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={image?.url}
        width="auto"
        height="auto"
        alt="alt"
      />
      </div>
      <div className="pt-5">
        <div className="text-s text-center">
          {documentToReactComponents(body?.json)}
        </div>
      </div>
    </div>
  );
};
