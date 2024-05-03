import { sectionTypes } from '@src/components/shared/global';

export const CtfTeaser = (
  props: any
) => {
  const { title, subtitle, buttonText, image , buttonUrl, sectionType} = props;
  if (sectionType == sectionTypes.solutionSection) {
    return (
      <div className="flex w-full max-w-[455px] flex-row gap-x-[75px] h-full">
        {
          image?.url ?
            <img
              width="75px"
              className="place-self-start"
              alt="icon"
              src={image?.url as string}
            />
            :
            <></>
        }
        <div className="flex flex-col items-start justify-between">
          <div>
            <h3 className="text-2xl text-blue-900 font-medium">{title}</h3>
            <div className="my-3 h-auto text-base">
              {subtitle}
            </div>
          </div>
          <button className="mt-6 bg-orange-500 px-5 py-3.5 text-sm text-white">
            <a href={buttonUrl as string}> {buttonText} </a>
          </button>
        </div>
      </div>
    );
  }

  if (sectionType == sectionTypes.hrSection) {
    return (
      <div className="md:px-48z h-auto px-6 pb-14 pt-9 text-base">
        <div className="relative max-h-full overflow-hidden
      mx-auto rounded-full m-auto w-28 h-28 bg-blue-900">
          {
            image?.url ?
              <img
                className="min-w-full min-h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                src={image?.url}
                width="auto"
                height="auto"
                alt="alt"
              />
              :
              <></>
          }

        </div>
        <div className="pt-5">
          <div className="text-s text-center">
            <p>{subtitle}</p>
          </div>
        </div>
      </div>);
  }
  return (
    <div
      className="md:px-48z h-auto w-full pb-24 pt-14 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${image?.url})` }}>
      <div className="w-full mx-auto max-w-6xl px-4 md:px-20">
        <h1 className="font-semibold text-white text-4xl max-w-xl">{title}</h1>
        <p className="mt-6 mb-5 text-xl text-white max-w-xl">{subtitle}</p>
        <a href={buttonUrl as string} className="mt-6 bg-orange-500 px-5 py-3.5 text-sm text-white">
          {buttonText}
        </a>
      </div>
    </div>
  );
};
