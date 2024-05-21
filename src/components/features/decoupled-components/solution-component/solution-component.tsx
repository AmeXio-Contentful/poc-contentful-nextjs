import {
  ComponentSolutionSectionFragment
} from '@src/components/features/decoupled-components/solution-component/__generated/solution-component.generated';
import { TeaserComponent } from '@src/components/features/decoupled-components/teaser-component/teaser-component';
import { Props, TitleComponent } from '@src/components/features/decoupled-components/title-component/title-component';
import { sectionTypes } from '@src/components/shared/global';


export interface Teaser {
  title: string;
  subtitle: string;
  image: any;
  buttonUrl: string;
  buttonText: string;
}

export const SolutionComponent = (props: ComponentSolutionSectionFragment) => {
  const titleProps: Props = {
    text: props.title as string,
    heading: 'h2',
    classes: 'font-semibold text-4xl text-center mt-8 primary-color w-2/5 m-auto mb-24'
  };

  const titleTeaserProp = {
    heading: 'h3',
    classes: 'text-2xl text-blue-900 font-medium'
  }

  const descriptionProps = {
    classes: 'my-3 h-auto text-base'
  }

  const buttonProps = {
    classes: 'mt-6 bg-orange-500 px-5 py-3.5 text-sm text-white mb-16'
  }
  return (
    <div className="pt-5">
      <TitleComponent {...titleProps}/>
      <div className="grid h-auto w-4/5 grid-cols-1 justify-items-center gap-x-4 gap-y-10 px-6 pb-14 pt-9 md:px-48 lg:grid-cols-2 m-auto">
        {
          props.teasersCollection && props.teasersCollection.items.map((item) => (
            <div key={item?.title}>
              {

              }
              <TeaserComponent type={sectionTypes.solutionSection}
                               title={item?.title as string}
                               subtitle={item?.subtitle as string}
                               image={item?.image}
                               buttonUrl={item?.buttonUrl as string}
                               buttonText={item?.buttonText as string}
                               titleProps={titleTeaserProp}
                               descriptionProps={descriptionProps}
                               buttonProps={buttonProps}/>
            </div>
          ))
        }
      </div>
    </div>
  )
};
