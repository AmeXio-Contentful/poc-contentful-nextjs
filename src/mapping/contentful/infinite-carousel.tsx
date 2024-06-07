// eslint-disable-next-line import/no-unresolved
import { Autoplay } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import { ComponentImageCarouselFieldsFragment } from '@src/data/contentful/infinite-carousel/__generated/ctf-infinite-carousel.generated';

export const InfiniteCarousel = (props: ComponentImageCarouselFieldsFragment) => {
  const { autoplay, imageCollection } = props;
  return (
    <div className="w-4/5 m-auto mt-24 mb-24">
      <Swiper
        loop={autoplay as boolean}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        slidesPerView={5}
        slidesPerGroup={5}
        className="!mx-5 !h-auto w-auto lg:!mx-[180px]"
        breakpoints={{
          0: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
          768: {
            slidesPerGroup: 4,
            slidesPerView: 4,
          },
          1024: {
            slidesPerGroup: 5,
            slidesPerView: 5,
          },
        }}
      >
        {imageCollection?.items.map((entry: any) => (
          <SwiperSlide key={entry?.sys.id}>
            <img className="max-h-[68px]" src={entry.url} alt={entry.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
