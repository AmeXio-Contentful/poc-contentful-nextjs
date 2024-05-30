import styles from "./solution.module.scss";
import button from "../button/button.module.scss";
import teaser from "../teaser/teaser.module.scss";

import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import { Title } from '@src/components/features/decoupled-components/title/title';
import {TitleProps} from "@src/components/features/decoupled-components/title/title.typings";
import {
  ComponentSolutionSectionFragment
} from '@src/data/contentful/solution/__generated/solution.generated';


export const Solution = (props: ComponentSolutionSectionFragment) => {
  const titleProps: TitleProps = {
    title: props.title as string,
    heading: 'h2',
    titleClasses: styles.title
  };

  return (
    <div className={styles.solution}>
      <Title {...titleProps}/>
      <div className={styles.solution__collection}>
        {
          props.teasersCollection?.items.map((item) => (
            <div className={styles.solution__item} key={item?.title}>

              <Teaser
                icon={item?.image}
                titleProps={{
                  'title': item?.title as string,
                  'heading': 'h3',
                }}
                descriptionProps={{
                  description: item?.subtitle as string,
                }}
                buttonProps={{
                  'buttonUrl': item?.buttonUrl as string,
                  'buttonText': item?.buttonText as string,
                  'buttonClasses': button.context_solution
                }}
                teaserClasses={ teaser.context_solution }
              />
            </div>
          ))
        }
      </div>
    </div>
  )
};
