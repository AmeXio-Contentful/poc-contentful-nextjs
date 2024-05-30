import styles from './reference-client.module.scss';
import description from "../description/description.module.scss";

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


export const ReferenceClient = (props: ComponentRerenceClientFragment) => {

  const titleProps: TitleProps = {
    title: props.title as string,
    heading: 'h2',
    // titleClasses: 'font-semibold text-4xl text-center mt-8 primary-color w-2/5 m-auto',
  };


  const titleTeaserProp = {
    heading: 'h3',
    // classes: 'text-2xl text-blue-900 font-medium',
  };

  const descriptionProps = {
    description: props.description as string,
    descriptionClasses: description.accent
    // descriptionClasses: 'my-3 h-auto text-base w-2/5 m-auto text-center font-semibold'
  }

  return (
    <div className={styles.reference_client}>
      <Title {...titleProps} />
      <Description {...descriptionProps} />
      <div className="grid h-auto w-4/5 grid-cols-1 justify-items-center gap-x-4 gap-y-10 px-6 pt-9 md:px-48  m-auto">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mt-6 h-auto w-full"
        >
          {props?.clientsCollection?.items?.map((item: any) => (
            <SwiperSlide className="w-full px-4 pb-10" key={item.id}>
              <Teaser
                icon={item?.image}
                titleProps={{
                  'title': item?.title as string,
                  ...titleTeaserProp,
                }}
                buttonProps={{
                  'buttonUrl': item?.buttonUrl as string,
                  'buttonText': item?.buttonText as string,
                }}
                descriptionProps={descriptionProps}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
