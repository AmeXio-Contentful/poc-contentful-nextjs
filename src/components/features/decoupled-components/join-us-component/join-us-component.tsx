
// eslint-disable-next-line import/no-unresolved
import { Autoplay } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  ButtonComponent,
  ButtonProps,
} from '@src/components/features/decoupled-components/button-component/button-component';
import {
  DescriptionComponent
} from '@src/components/features/decoupled-components/description-component/description-component';
import {
  ComponentJoinUsFragment
} from '@src/components/features/decoupled-components/join-us-component/__generated/join-us-component.generated';
import { TeaserComponent } from '@src/components/features/decoupled-components/teaser-component/teaser-component';
import { Props, TitleComponent } from '@src/components/features/decoupled-components/title-component/title-component';
import { sectionTypes } from '@src/components/shared/global';


export const JoinUsComponent = (props: ComponentJoinUsFragment) => {
  const { title, description, buttonUrl, buttonText, clientsCollection, teasersCollection} = props;
  const titleProps: Props = {
    text: title as string,
    heading: 'h3',
    classes: 'font-semibold text-black text-4xl max-w-xl m-auto'
  };

  const descriptionProps: Props = {
    text: description as string,
    classes: 'mt-6 mb-5 text-xl text-black max-w-xl m-auto'
  }

  const buttonProps: ButtonProps = {
    buttonText: buttonText as string,
    buttonUrl: buttonUrl as string,
    classes: 'mt-6 bg-orange-500 px-5 py-3.5 text-base text-white'
  }

  const titleTeaserProp = {

  }

  return (
    <div className="mx-auto max-w-[800px] pt-16 text-center">
      <TitleComponent {...titleProps} />
      <DescriptionComponent {...descriptionProps} />
      <div className="grid grid-cols-3 gap-x-3 mt-9">
        {teasersCollection && teasersCollection.items?.map((item: any) => (
          <div key={item.title}>
            <TeaserComponent type={sectionTypes.hrSection}
                             title={item?.title as string}
                             image={item.image}
                             subtitle={item?.subtitle as string}
                             buttonUrl=""
                             buttonText=""
                             titleProps={titleTeaserProp}
                             descriptionProps={descriptionProps} />
          </div>
        ))}
      </div>
      <ButtonComponent {...buttonProps} />
      <div className="m-auto mt-24 mb-24">
        <Swiper
          loop={true as boolean}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
          }}
          slidesPerView={5}
          slidesPerGroup={5}
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
          {clientsCollection && clientsCollection?.items.map((item: any) => (
            <SwiperSlide key={item?.title}>
              <img src={item.url} alt={item?.title} width='150px'/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
};
