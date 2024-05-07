// eslint-disable-next-line import/no-unresolved
import { Pagination } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  DescriptionComponent
} from '@src/components/features/decoupled-components/description-component/description-component';
import {
  ComponentRerenceClientFragment
} from '@src/components/features/decoupled-components/reference-client-component/__generated/reference-client-component.generated';
import { Props, TitleComponent } from '@src/components/features/decoupled-components/title-component/title-component';
import { TeaserComponent } from '@src/components/features/decoupled-components/teaser-component/teaser-component';
import { sectionTypes } from '@src/components/shared/global';


export const ReferenceClientComponent = (props: ComponentRerenceClientFragment) => {

  const titleProps: Props = {
    text: props.title as string,
    heading: 'h2',
    classes: 'font-semibold text-4xl text-center mt-8 primary-color w-2/5 m-auto'
  };


  const titleTeaserProp= {
    heading: 'h3',
    classes: 'text-2xl text-blue-900 font-medium'
  }

  const descriptionProps = {
    classes: 'my-3 h-auto text-base w-2/5 m-auto text-center font-semibold',
    text: props.description as string
  }

  return (
    <div className="pt-5 page-section">
      <TitleComponent {...titleProps}/>
      <DescriptionComponent {...descriptionProps} />
      <div className="grid h-auto w-4/5 grid-cols-1 justify-items-center gap-x-4 gap-y-10 px-6 pb-14 pt-9 md:px-48  m-auto">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mt-6 h-auto w-full"
        >
          {props.clientsCollection && props.clientsCollection.items?.map((item: any) => (
            <SwiperSlide className="w-full px-4 pb-10" key={item.id}>
              <TeaserComponent type={sectionTypes.clientReferenceSection}
                               title={item?.title as string}
                               subtitle={item?.subtitle as string}
                               image={item?.image}
                               buttonUrl={item?.buttonUrl as string}
                               buttonText={item?.buttonText as string}
                               titleProps={titleTeaserProp}
                               quote={item.quote}
                               descriptionProps={descriptionProps} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
};
