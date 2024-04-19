import { ComponentContentBlokFieldsFragment } from '@/components/ctf-components/ctf-content-block-join-us/__generated/ctf-content-block-join-us.generated';
import { CtfTeaserComponent } from '@/components/ctf-components/ctf-teaser-component/ctf-teaser-component';

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
    <div className="mx-auto max-w-[600px] pt-16">
      <h2 className="m-0 mb-4 p-0 text-center align-baseline text-4xl font-medium normal-case text-blue-900">
        {title}
      </h2>
      <p className="text-center text-base font-normal text-black">{subtitle}</p>
      <div className="grid grid-cols-3 gap-4">
        {combinedData?.map((entry: any) => (
          <div key={entry.id}>
            <CtfTeaserComponent
              body={entry.body}
              image={entry.image}
            ></CtfTeaserComponent>
          </div>
        ))}
      </div>
    </div>
  );
};
