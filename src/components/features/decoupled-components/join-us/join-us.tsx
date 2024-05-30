import context from '../title/title.module.scss';
// eslint-disable-next-line import/no-unresolved
import { Autoplay } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Button,
} from '@src/components/features/decoupled-components/button/button';
import { ButtonProps } from '@src/components/features/decoupled-components/button/button.typings';
import {
  Description
} from '@src/components/features/decoupled-components/description/description';
import { DescriptionProps } from '@src/components/features/decoupled-components/description/description.typings';
import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import { Title } from '@src/components/features/decoupled-components/title/title';
import { TitleProps } from '@src/components/features/decoupled-components/title/title.typings';
import {
  ComponentJoinUsFragment
} from '@src/data/contentful/join-us/__generated/join-us.generated';


export const JoinUs = (props: ComponentJoinUsFragment) => {
  const { title, description, buttonUrl, buttonText, clientsCollection, teasersCollection} = props;
  const titleProps: TitleProps = {
    title: title as string,
    heading: 'h2',
  };

  const descriptionProps: DescriptionProps = {
    description: description as string,
  }

  const buttonProps: ButtonProps = {
    buttonText: buttonText as string,
    buttonUrl: buttonUrl as string,
  }

  const titleTeaserProp = {
    heading: 'h4',
    titleClasses: context.context_join
  }

  return (
    <div className="mx-auto max-w-[800px] pt-16 text-center">
      <Title {...titleProps} />
      <Description {...descriptionProps} />
      <div className="grid grid-cols-3 gap-x-3 mt-9">
        {teasersCollection?.items?.map((item: any) => (
          <div key={item.title}>
            <Teaser
                    icon={item.image}
                    titleProps={{
                      'title': item?.title as string,
                      ...titleTeaserProp
                    }}
                    descriptionProps={descriptionProps} />
          </div>
        ))}
      </div>
      <Button {...buttonProps} />
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
          {clientsCollection?.items.map((item: any) => (
            <SwiperSlide key={item?.title}>
              <img src={item.url} alt={item?.title} width='150px'/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
};
