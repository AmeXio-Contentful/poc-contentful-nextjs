import {
  ComponentContentBlokFieldsFragment
} from '@src/components/features/ctf-components/ctf-content-block-join-us/__generated/ctf-content-block-join-us.generated';
import { CtfTeaserComponent } from '@src/components/features/ctf-components/ctf-teaser-component/ctf-teaser-component';
import CtfTextBanner
  from '@src/components/features/ctf-components/ctf-content-text-banner-component/ctf-content-text-banner-component';


export const CtfContentBlockJoinUs = (
  props: ComponentContentBlokFieldsFragment,
) => {
  const {
    title,
    subtitle,
    block1Body,
    block2Body,
    block3Body,
    block1Image,
    block2Image,
    block3Image,
    buttonLink,
    buttonText
  } = props;
  const combinedData = [
    {
      image: block1Image,
      body: block1Body,
      id: 'my-id',
    },
    {
      image: block2Image,
      body: block2Body,
      id: 'another-id',
    },
    {
      image: block3Image,
      body: block3Body,
      id: 'last one',
    },
  ];
  return (
    <div className="mx-auto max-w-[800px] pt-16 text-center">
      <CtfTextBanner
        title={title as string}
        description={subtitle as string}
      ></CtfTextBanner>
      {/*<h2 className="m-0 mb-4 p-0 text-center align-baseline font-medium normal-case primary-color pt-24">*/}
      {/*  {title}*/}
      {/*</h2>*/}
      {/*<p className="text-center text-base font-normal text-black">{subtitle}</p>*/}
      <div className="grid grid-cols-3 gap-x-3 mt-9">
        {combinedData?.map((entry: any) => (
          <div key={entry.id}>
            <CtfTeaserComponent
              body={entry.body}
              image={entry.image}
            ></CtfTeaserComponent>
          </div>
        ))}
      </div>
      <button className="mb-16 bg-orange-500 text-2xl font-semibold text-white p-5 px-8">
        <a href={buttonLink as string}> {buttonText} </a>
      </button>
    </div>
  );
};
