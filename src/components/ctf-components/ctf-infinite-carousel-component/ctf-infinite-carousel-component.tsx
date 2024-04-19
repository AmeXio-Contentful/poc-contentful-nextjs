import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ComponentImageCarouselFieldsFragment } from '@/components/ctf-components/ctf-infinite-carousel-component/__generated/ctf-infinite-carousel-component.generated';

export const CtfInfiniteCarouselComponent = (
  props: ComponentImageCarouselFieldsFragment,
) => {
  const { autoplay, imageCollection } = props;
  return (
    <Swiper
      loop={autoplay as boolean}
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
      }}
      slidesPerView={5}
      slidesPerGroup={5}
      className="!mx-5 !my-12 !h-auto w-auto lg:!mx-[180px]"
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
          <img className="max-h-[68px]" src={entry.url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
