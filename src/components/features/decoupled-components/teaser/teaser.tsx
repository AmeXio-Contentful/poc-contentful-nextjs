import { Button } from '@src/components/features/decoupled-components/button/button';
import { Description } from '@src/components/features/decoupled-components/description/description';
import { TeaserProps } from '@src/components/features/decoupled-components/teaser/teaser.typings';
import { Title } from '@src/components/features/decoupled-components/title/title';

export const Teaser = (props: TeaserProps) => {
  return <div className="teaser">
    { props.icon &&
        <img
          alt="icon"
          src={props.icon.url}
        />
    }
    <div className="teaser__content">
      <div className="teaser__info">
          <Title {...props.titleProps} />
          <Description {...props.descriptionProps} />
      </div>
      { props.buttonProps &&
        <Button {...props.buttonProps} />
      }
    </div>
  </div>;
};
