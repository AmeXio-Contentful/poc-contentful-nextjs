// eslint-disable-next-line import/no-unresolved
import { Pagination } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './reference-clients.module.scss';
import description from '../description/description.module.scss';
import teaser from '../teaser/teaser.module.scss';

import { Description } from '@src/components/features/decoupled-components/description/description';
import { ReferenceClientsProps } from '@src/components/features/decoupled-components/reference-clients/reference-clients.typings';
import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import { Title } from '@src/components/features/decoupled-components/title/title';
import { TitleProps } from '@src/components/features/decoupled-components/title/title.typings';

export const ReferenceClients = (props: ReferenceClientsProps) => {
  const titleProps: TitleProps = {
    title: props.title as string,
    heading: 'h2',
    id: props.id,
    fieldName: 'title',
  };

  const titleTeaserProp = {
    heading: 'h3',
  };

  const subTitleTeaserProp = {
    heading: 'h4',
  };

  const descriptionProps = {
    description: props.description,
    descriptionClasses: description.context_accent,
    id: props.id,
    fieldName: 'description',
  };

  return (
    <div className={styles.reference_client || ''}>
      <Title {...titleProps} />
      <Description {...descriptionProps} />
      <div>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className={styles.swiper_pagination}
        >
          {props?.clients?.map((item: any) => (
            <SwiperSlide className={styles.reference_client__item} key={item.id}>
              <Teaser
                id={props.id}
                teaserClasses={teaser.context_reference}
                icon={item?.image}
                titleProps={{
                  title: item?.title,
                  ...titleTeaserProp,
                  id: item.id,
                  fieldName: 'title',
                }}
                subTitleProps={{
                  title: item?.subtitle,
                  ...subTitleTeaserProp,
                  id: item.id,
                  fieldName: 'subtitle',
                }}
                descriptionProps={{
                  description: item?.description,
                  id: item.id,
                  fieldName: 'description',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
