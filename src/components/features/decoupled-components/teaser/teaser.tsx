import styles from './teaser.module.scss';

import { Button } from '@src/components/features/decoupled-components/button/button';
import { Description } from '@src/components/features/decoupled-components/description/description';
import { TeaserProps } from '@src/components/features/decoupled-components/teaser/teaser.typings';
import { Title } from '@src/components/features/decoupled-components/title/title';

export const Teaser = (props: TeaserProps) => {
  return <div className={`${styles.teaser || ''} ${props.teaserClasses || ''}`}>
    { props.icon &&
        <img
          className={styles.teaser__icon}
          alt="icon"
          src={props.icon.url}
        />
    }
    <div className={styles.teaser__content}>
      <div className={styles.teaser__info}>
          <Title {...props.titleProps} />
          { props.subTitleProps &&
            <Title {...props.subTitleProps} />
          }
          <Description {...props.descriptionProps} />
      </div>
      { props.buttonProps &&
        <Button {...props.buttonProps} />
      }
    </div>
  </div>;
};
