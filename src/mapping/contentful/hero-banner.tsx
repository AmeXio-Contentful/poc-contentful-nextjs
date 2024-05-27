import styles from '../../components/features/decoupled-components/hero-banner/hero-banner.module.scss';

import {ButtonProps} from '@src/components/features/decoupled-components/button/button.typings';
import {DescriptionProps} from "@src/components/features/decoupled-components/description/description.typings";
import {Teaser} from '@src/components/features/decoupled-components/teaser/teaser';
import {TitleProps} from '@src/components/features/decoupled-components/title/title.typings';
import {
  ComponentHeroBannerFragment
} from '@src/data/contentful/hero-banner/__generated/hero-banner.generated';
import {HeroBanner} from '@src/components/features/decoupled-components/hero-banner/hero-banner';

console.log("is this mapping actually used?");
export const HeroBannerComponent = (props: ComponentHeroBannerFragment) => {
  return <HeroBanner {...props} />
};
