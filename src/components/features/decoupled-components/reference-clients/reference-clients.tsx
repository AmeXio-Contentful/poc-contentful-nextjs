// eslint-disable-next-line import/no-unresolved
import {Pagination} from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import {Swiper, SwiperSlide} from 'swiper/react';

import styles from './reference-clients.module.scss';
import description from "../description/description.module.scss";
import teaser from "../teaser/teaser.module.scss";

import {Description} from '@src/components/features/decoupled-components/description/description';
import {Teaser} from '@src/components/features/decoupled-components/teaser/teaser';
import {Title} from '@src/components/features/decoupled-components/title/title';
import {TitleProps} from '@src/components/features/decoupled-components/title/title.typings';
import {ReferenceClientsProps} from "@src/components/features/decoupled-components/reference-clients/reference-clients.typings";


export const ReferenceClients = (props: ReferenceClientsProps) => {

  const titleProps: TitleProps = {
    title: props.title as string,
    heading: 'h2',
  };

  const titleTeaserProp = {
    heading: 'h3'
  };

  const subTitleTeaserProp = {
    heading: 'h4'
  }

  const descriptionProps = {
    description: props.description,
    descriptionClasses: description.context_accent
  }

  return (
    <div className={styles.reference_client || ''}>
      <Title {...titleProps} />
      <Description {...descriptionProps} />
      <div>
        <Swiper
          pagination={{clickable: true}}
          modules={[Pagination]}
          className={styles.swiper_pagination}
        >
          {props?.clients?.map((item: any) => (
            <SwiperSlide
              className={styles.reference_client__item}
              key={item.id}>
              <Teaser
                teaserClasses={teaser.context_reference}
                icon={item?.image}
                titleProps={{
                  'title': item?.title,
                  ...titleTeaserProp,
                }}
                subTitleProps={{
                  'title': item?.subtitle,
                  ...subTitleTeaserProp
                }}
                descriptionProps={{
                  'description': item?.description
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
