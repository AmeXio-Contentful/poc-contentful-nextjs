import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface ContentCtaBlock {
  buttonText: string;
  buttonLink: string;
  blockImage?: {
    title: string;
    description: string;
    contentType: string;
    url: string;
    width: string;
    height: string;
  };
  blockBody: any;
  blockTitle: any;
}

export default function CtfContentCtaBlockComponent(props: ContentCtaBlock) {
  const { buttonText, buttonLink, blockImage, blockBody, blockTitle } = props;
  return (
    <div className="flex w-full max-w-[455px] flex-row gap-x-[75px] mt-4 mb-40">
      <img
        width="75px"
        className="place-self-start"
        alt="icon"
        src={blockImage?.url}
      />
      <div>
        <h3 className="primary-color font-semibold">{blockTitle}</h3>
        <div className="my-3 h-auto">
          {documentToReactComponents(blockBody.json)}
        </div>
        <button className="mt-8 bg-orange-500 text-2xl font-semibold text-white p-5 px-8">
          <a href={buttonLink as string}> {buttonText} </a>
        </button>
      </div>
    </div>
  );
}
