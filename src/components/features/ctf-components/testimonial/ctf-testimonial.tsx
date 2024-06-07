// eslint-disable-next-line import/no-unresolved
import { Pagination } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

interface Testimonial {
  quote: string;
  title: string;
  imageUrl: string;
  subtitle: string;
  id: string;
}

export const defaultSlide = (data: Testimonial) => {
  return (
    <SwiperSlide className="w-full px-4 pb-10" key={data.id}>
      <div className="flex flex-col justify-center gap-x-36 md:flex-row">
        <img
          className="mx-auto pb-6 md:mx-0 md:pb-0"
          src={data.imageUrl}
          width="200px"
          height="200px"
          alt="alt"
        />
        <div className="my-auto flex w-[545px] flex-col gap-4 px-14 md:px-0 ">
          <h4 className="text-2xl font-semibold text-blue-900 primary-color">{data.title}</h4>
          <p className="font-semibold text-base">{data.subtitle}</p>
          <div className="text-base">{data.quote}</div>
        </div>
      </div>
    </SwiperSlide>
  );
};

let testimonials: any[] = [];
export const CtfTestimonial = (props: any) => {
  testimonials.push({
    quote: props.quote,
    subtitle: props.subtitle,
    title: props.title,
    imageUrl: props.image?.url as string,
    id: props.title,
  });

  if (testimonials.length > props.maxItems) {
    testimonials = [];
  }

  if (testimonials.length < props.maxItems) {
    return <></>;
  }

  return (
    <div className="p-14">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mt-6 h-auto w-full"
      >
        {testimonials?.map((entry: any) => defaultSlide(entry))}
      </Swiper>
    </div>
  );
};
