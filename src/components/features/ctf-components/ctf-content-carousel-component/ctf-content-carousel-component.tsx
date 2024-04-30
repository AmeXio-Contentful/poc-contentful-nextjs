'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// eslint-disable-next-line import/no-unresolved
import { Pagination } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  ComponentContentCarouselFieldsFragment
} from '@src/components/features/ctf-components/ctf-content-carousel-component/__generated/ctf-content-carousel-component.generated';
import CtfTextBanner
  from '@src/components/features/ctf-components/ctf-content-text-banner-component/ctf-content-text-banner-component';


// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved

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
    blockJobTitle,
    block2JobTitle,
    block3JobTitle,
    blockName,
    block2Name,
    block3Name
  } = props;
  const combinedData = [
    {
      image: blockImage,
      body: blockBody,
      id: 'my-id',
      jobTitle: blockJobTitle,
      name: blockName
    },
    {
      image: block2Image,
      body: block2Body,
      id: 'another-id',
      jobTitle: block2JobTitle,
      name: block2Name
    },
    {
      image: block3Image,
      body: block3Body,
      id: 'last one',
      jobTitle: block3JobTitle,
      name: block3Name
    },
  ];
  return (
    <div className="p-14">
      <CtfTextBanner
        title={title as string}
        description={subtitle as string}
       />
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mt-6 h-auto w-full"
      >
        {combinedData?.map((entry: any) => (
          <SwiperSlide className="w-full px-4 pb-10" key={entry.id}>
            <div className="flex flex-col justify-center gap-x-36 md:flex-row">
              <img
                className="mx-auto pb-6 md:mx-0 md:pb-0"
                src={entry.image?.url}
                width="200px"
                height="200px"
                alt="alt"
              />
              <div className="my-auto flex w-[545px] flex-col gap-4 px-14 md:px-0 ">
                <h4 className="text-2xl font-semibold text-blue-900 primary-color">
                  {entry.name}
                </h4>
                <p className="font-semibold text-base">
                  {entry.jobTitle}
                </p>
                <div className="text-base">
                  {documentToReactComponents(entry.body?.json)}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
