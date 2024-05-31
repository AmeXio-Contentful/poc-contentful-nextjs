import styles from './reference-clients.module.scss';
import description from "../description/description.module.scss";
import teaser from "../teaser/teaser.module.scss";

// eslint-disable-next-line import/no-unresolved
import { Pagination } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Description,
} from '@src/components/features/decoupled-components/description/description';
import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import { Title } from '@src/components/features/decoupled-components/title/title';
import { TitleProps } from '@src/components/features/decoupled-components/title/title.typings';
import {
  ComponentRerenceClientFragment,
} from '@src/data/contentful/reference-client/__generated/reference-client.generated';


export const ReferenceClients = (props: ComponentRerenceClientFragment) => {

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
    description: props.description as string,
    descriptionClasses: description.context_accent
  }

  return (
    <div className={styles.reference_client || ''}>
      <Title {...titleProps} />
      <Description {...descriptionProps} />
      <div
        // className="grid h-auto w-4/5 grid-cols-1 justify-items-center gap-x-4 gap-y-10 px-6 pt-9 md:px-48  m-auto"
      >
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          // className="mt-6 h-auto w-full"
          className={styles.swiper_pagination}
        >
          {props?.clientsCollection?.items?.map((item: any) => (
            <SwiperSlide
              // className="w-full px-4 pb-10"
              className={styles.reference_client__item}
              key={item.id}>
              <Teaser
                teaserClasses={teaser.context_reference}
                icon={item?.image}
                titleProps={{
                  'title': item?.title as string,
                  ...titleTeaserProp,
                }}
                subTitleProps={{
                  'title': 'Subtitle should be over here', // make sure field is available + data is linked
                  ...subTitleTeaserProp
                }}
                descriptionProps={{
                  'description': 'Some dummy text to see it the styling is working as expected.'
                }} // {item?.descriptionProps} // make sure field is available + data is linked
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
