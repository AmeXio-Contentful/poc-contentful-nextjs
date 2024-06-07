import styles from './solutions.module.scss';
import button from '../button/button.module.scss';
import teaser from '../teaser/teaser.module.scss';

import { SolutionsProps } from '@src/components/features/decoupled-components/solutions/solutions.typings';
import { Teaser } from '@src/components/features/decoupled-components/teaser/teaser';
import { Title } from '@src/components/features/decoupled-components/title/title';
import { TitleProps } from '@src/components/features/decoupled-components/title/title.typings';

export const Solutions = (props: SolutionsProps) => {
  const { title, solutions } = props;

  const titleProps: TitleProps = {
    title: title as string,
    heading: 'h2',
    titleClasses: styles.title,
    fieldName: 'title',
    id: props.id,
  };

  return (
    <div className={styles.solution}>
      <Title {...titleProps} />
      <div className={styles.solution__collection}>
        {solutions?.map(item => (
          <div className={styles.solution__item} key={item?.title}>
            <Teaser
              id={props.id}
              icon={item?.image}
              titleProps={{
                title: item?.title,
                heading: 'h3',
                id: item.id,
                fieldName: 'title',
              }}
              descriptionProps={{
                description: item?.description,
                id: item.id,
                fieldName: 'subtitle',
              }}
              buttonProps={
                item?.button
                  ? {
                      ...item.button,
                      buttonClasses: button.context_solution,
                      id: item.id,
                      fieldName: 'buttonText',
                    }
                  : undefined
              }
              teaserClasses={teaser.context_solution}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
