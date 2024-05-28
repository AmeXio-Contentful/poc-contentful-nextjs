import {
  ComponentSolutionSectionFragment
} from '@src/data/contentful/solution/__generated/solution.generated';
import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import { Title } from '@src/components/features/decoupled-components/title/title';
import {TitleProps} from "@src/components/features/decoupled-components/title/title.typings";


/* export interface Teaser {
  title: string;
  subtitle: string;
  image: any;
  buttonUrl: string;
  buttonText: string;
}
*/


export const Solution = (props: ComponentSolutionSectionFragment) => {
  const titleProps: TitleProps = {
    title: props.title as string,
    heading: 'h2',
    titleClasses: 'font-semibold text-4xl text-center mt-8 primary-color w-2/5 m-auto mb-24'
  };

  return (
    <div className="pt-5">
      <Title {...titleProps}/>
      <div className="grid h-auto w-4/5 grid-cols-1 justify-items-center gap-x-4 gap-y-10 px-6 pb-14 pt-9 md:px-48 lg:grid-cols-2 m-auto">
        {
          props.teasersCollection?.items.map((item) => (
            <div key={item?.title}>
              {

              }
              <Teaser
                icon={item?.image}
                titleProps={{
                  'title': item?.title as string,
                  'heading': 'h3',
                  'titleClasses': 'text-2xl text-blue-900 font-medium'
                }}
                descriptionProps={{
                  description: item?.subtitle as string,
                  'descriptionClasses': 'my-3 h-auto text-base'
                }}
                buttonProps={{
                  'buttonUrl': item?.buttonUrl as string,
                  'buttonText': item?.buttonText as string,
                  'buttonClasses': 'mt-6 bg-orange-500 px-5 py-3.5 text-sm text-white mb-16'
                }}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
};
