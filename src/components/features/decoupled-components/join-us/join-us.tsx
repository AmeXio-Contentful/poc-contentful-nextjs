import { useContentfulInspectorMode } from '@contentful/live-preview/react';
// eslint-disable-next-line import/no-unresolved
import {Autoplay} from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import {Swiper, SwiperSlide} from 'swiper/react';

import styles from './join-us.module.scss';
import descriptionContext from '../description/description.module.scss';
import teaserContext from '../teaser/teaser.module.scss';
import titleContext from '../title/title.module.scss';

import {Button} from '@src/components/features/decoupled-components/button/button';
import {ButtonProps} from '@src/components/features/decoupled-components/button/button.typings';
import {Description} from '@src/components/features/decoupled-components/description/description';
import {DescriptionProps} from '@src/components/features/decoupled-components/description/description.typings';
import {JoinUsProps} from "@src/components/features/decoupled-components/join-us/join-us.typings";
import {Teaser} from '@src/components/features/decoupled-components/teaser/teaser';
import {Title} from '@src/components/features/decoupled-components/title/title';
import {TitleProps} from '@src/components/features/decoupled-components/title/title.typings';


export const JoinUs = (props: JoinUsProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: props.id });
  const {title, description, buttonText, buttonUrl, joinUsItems, joinUsClients} = props;
  const titleProps: TitleProps = {
    title: title,
    heading: 'h2',
    fieldName: 'title',
    id: props.id
  };

  const descriptionProps: DescriptionProps = {
    description: description,
    descriptionClasses: descriptionContext.context_center,
    fieldName: 'description',
  }

  const teaserDescriptionProps: DescriptionProps = {
    descriptionClasses: descriptionContext.context_center,
    fieldName: 'subtitle',
  }

  const titleTeaserProp = {
    heading: 'h4',
    titleClasses: titleContext.context_join,
    fieldName: 'title',
  }

  const buttonProps: ButtonProps = {
    buttonText: buttonText,
    buttonUrl: buttonUrl,
    fieldName: 'buttonText',
    id: props.id
  }

  return (
    <div className={styles.join_us}>
      <Title {...titleProps} />
      <Description {...descriptionProps} />
      <div className={styles.join_us__collection}>
        {joinUsItems?.map((item) => {
          return (
          <div key={item.title}>
            <Teaser
                id={item.id}
                teaserClasses={teaserContext.context_join_us}
                icon={item.image}
                iconUrl={item.iconUrl}
                titleProps={{
                  'title': item?.title as string,
                  'id': item?.id,
                  ...titleTeaserProp
                }}
                descriptionProps={{
                  'id': item?.id,
                  'description': item?.description as string,
                  ...teaserDescriptionProps
                }}
            />
          </div>
        )})}
      </div>
      <Button {...buttonProps} />
      <div className={styles.join_us__swiper}>
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
          {joinUsClients.map((item) => (
            <SwiperSlide key={item?.title}>
              <img src={item.url} alt={item?.title} width='150px' {...inspectorProps({ fieldId: 'image' })}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
};
