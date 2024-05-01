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
    <div className="flex w-full max-w-[455px] flex-row gap-x-[75px] h-full">
      <img
        width="75px"
        className="place-self-start"
        alt="icon"
        src={blockImage?.url}
      />
      <div className="flex flex-col items-start justify-between">
        <div>
          <h3 className="text-2xl text-blue-900 font-medium">{blockTitle}</h3>
          <div className="my-3 h-auto text-base">
            {documentToReactComponents(blockBody.json)}
          </div>
        </div>
        <button className="mt-6 bg-orange-500 px-5 py-3.5 text-sm text-white">
          <a href={buttonLink as string}> {buttonText} </a>
        </button>
      </div>
    </div>
  );
}
