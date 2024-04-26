'use client';


import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  ComponentContentCarouselFieldsFragment
} from '@src/components/features/ctf-components/ctf-content-carousel-component/__generated/ctf-content-carousel-component.generated';
import CtfTextBanner
  from '@src/components/features/ctf-components/ctf-content-text-banner-component/ctf-content-text-banner-component';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import { Pagination } from 'swiper/modules';

export const CtfContentCarouselComponent = (
  props: ComponentContentCarouselFieldsFragment,
) => {
  const {
    title,
    subtitle,
    blockBody,
    block2Body,
    block3Body,
    blockImage,
    block2Image,
    block3Image,
  } = props;
  const combinedData = [
    {
      image: blockImage,
      body: blockBody,
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
    <>
      <CtfTextBanner
        title={title as string}
        description={subtitle as string}
      ></CtfTextBanner>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mt-6 h-auto w-full"
      >
        {combinedData?.map((entry: any) => (
          <SwiperSlide className="w-full px-4 pb-10" key={entry.id}>
            <div className="flex flex-col justify-center gap-x-36 md:flex-row">
              <img
                className="mx-auto pb-6 md:mx-0 md:pb-0"
                src={entry.image?.url}
                width="250px"
                height="250px"
                alt="alt"
              />
              <div className="my-auto flex w-[545px] flex-col gap-4 px-14 md:px-0 ">
                <h4 className="text-2xl font-semibold text-blue-900">
                  Guillaume Tran Thahn
                </h4>
                <p className="font-semibold text-base">
                  Head of Software Development – Dassault Aviation
                </p>
                <div className="text-base">
                  {documentToReactComponents(entry.body?.json)}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
